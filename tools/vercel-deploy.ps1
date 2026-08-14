param(
  [Parameter(Mandatory = $true)]
  [string]$Token
)

$ErrorActionPreference = 'Stop'
$root = (Get-Location).Path
$excludeDirs = @('assets', '.workbuddy', '.git', '.vercel', 'node_modules')
$excludeNames = @('11', 'deploy.log', 'output.log')

$files = Get-ChildItem -LiteralPath $root -Recurse -File | Where-Object {
  $rel = $_.FullName.Substring($root.Length).TrimStart('\', '/').Replace('\', '/')
  $parts = $rel -split '/'
  $skip = $false
  foreach ($d in $excludeDirs) {
    if ($parts[0..([Math]::Max(0, $parts.Length - 2))] -contains $d) { $skip = $true }
  }
  if ($rel -like 'tools/shot-*.png') { $skip = $true }
  if ($excludeNames -contains $parts[-1]) { $skip = $true }
  -not $skip
}

$filesArr = foreach ($f in $files) {
  $rel = $f.FullName.Substring($root.Length).TrimStart('\', '/').Replace('\', '/')
  $ext = [IO.Path]::GetExtension($f.Name).ToLowerInvariant()
  if ($ext -in @('.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp', '.mp3', '.ogg', '.wav', '.zip', '.bin')) {
    [pscustomobject]@{
      file     = $rel
      data     = [Convert]::ToBase64String([IO.File]::ReadAllBytes($f.FullName))
      encoding = 'base64'
    }
  } else {
    [pscustomobject]@{
      file     = $rel
      data     = [IO.File]::ReadAllText($f.FullName, [Text.Encoding]::UTF8)
      encoding = 'utf-8'
    }
  }
}

$body = [pscustomobject]@{
  name            = 'home-defense-war'
  project         = 'prj_5Japx4Ajyf4wkB9lFCPUqkujsdlh'
  target          = 'production'
  files           = @($filesArr)
  projectSettings = @{ framework = $null; outputDirectory = '.' }
} | ConvertTo-Json -Depth 6 -Compress

$headers = @{ Authorization = "Bearer $Token" }
$resp = Invoke-RestMethod -Method Post -Uri 'https://api.vercel.com/v13/deployments' `
  -Headers $headers -ContentType 'application/json' -Body $body -TimeoutSec 300

"DEPLOY_ID=$($resp.id) URL=$($resp.url) STATE=$($resp.readyState)"

for ($i = 0; $i -lt 60; $i++) {
  Start-Sleep -Seconds 3
  $d = Invoke-RestMethod -Uri "https://api.vercel.com/v13/deployments/$($resp.id)" -Headers $headers -TimeoutSec 30
  if ($d.readyState -in @('READY', 'ERROR', 'BLOCKED', 'CANCELED')) {
    "FINAL_STATE=$($d.readyState) URL=$($d.url)"
    if ($d.readyState -ne 'READY') { exit 1 }
    exit 0
  }
}

Write-Error 'Deployment timed out while waiting for ready state.'
exit 1
