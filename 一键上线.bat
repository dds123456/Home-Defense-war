@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ==========================================
echo  [1/2] 同步代码到 GitHub
echo ==========================================
where gh >nul 2>nul
if %errorlevel%==0 (
  gh auth status >nul 2>nul
  if %errorlevel%==0 (
    git remote get-url origin >nul 2>nul
    if %errorlevel%==0 (
      git push -u origin main
    ) else (
      gh repo create home-defense-war --public --source . --remote origin --push
    )
  ) else (
    echo 尚未登录 GitHub，请先运行：gh auth login
    echo 登录完成后再次运行本脚本。
  )
) else (
  echo 未安装 GitHub CLI，请先安装：
  echo winget install --id GitHub.cli
  echo 然后运行：gh auth login
)

echo.
echo ==========================================
echo  [2/2] 部署到 Vercel
echo ==========================================
where vercel >nul 2>nul
if %errorlevel%==0 (
  vercel --prod
) else (
  where pnpm >nul 2>nul
  if %errorlevel%==0 (
    pnpm dlx vercel@latest --prod
  ) else (
    echo 未找到 vercel/pnpm，请安装 Node.js 后运行：
    echo pnpm dlx vercel@latest --prod
  )
)

echo.
echo 首次运行 Vercel 会要求登录并选择项目，按提示操作即可。
pause
