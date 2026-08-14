@echo off
chcp 65001 >nul
cd /d "%~dp0"
where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://127.0.0.1:5000/
  python -m http.server 5000
) else (
  echo 未检测到 python，请直接双击 启动游戏.bat。
  pause
)
