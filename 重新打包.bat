@echo off
chcp 65001 >nul
cd /d "%~dp0"
where pnpm >nul 2>nul
if %errorlevel%==0 (
  pnpm dlx esbuild@0.19.12 js/td-main.js --bundle --format=iife --minify --outfile=build/game.bundle.js --alias:three=./vendor/three.module.js
) else (
  echo 未检测到 pnpm，请手动执行：
  echo pnpm dlx esbuild@0.19.12 js/td-main.js --bundle --format=iife --minify --outfile=build/game.bundle.js --alias:three=./vendor/three.module.js
)
pause
