# Home Defense War 家园保卫战

基于 Three.js 的 3D 米哈游风塔防游戏，按 PRD V1.5 实现并完成米哈游风重构。

## 运行方式

- 双击 `启动游戏.bat` 直接打开（已打包为单文件，无需服务器）
- 或双击 `本地服务器.bat`，浏览器访问 `http://127.0.0.1:5000/`

修改源码后运行 `重新打包.bat` 生成新的 `build/game.bundle.js`。

## 一键上线

双击 `一键上线.bat`，脚本会依次：

1. 检查并登录 GitHub CLI（首次需运行 `gh auth login`）
2. 创建公开仓库 `home-defense-war` 并推送 `main` 分支
3. 调用 Vercel CLI 执行 `vercel --prod`，首次会弹出浏览器授权登录

前置要求：

- GitHub CLI：`winget install --id GitHub.cli`
- Node.js 或 pnpm（Vercel CLI 运行时）

也可以不用命令行：把本目录代码上传到 GitHub 后，在 [vercel.com](https://vercel.com) 点击 “Add New Project” 导入该仓库，Framework 选 “Other”，Output Directory 保持默认即可。

## 操作

- 鼠标拖拽旋转视角，滚轮缩放；移动端单指旋转、双指缩放
- 点击空地全图建造防御塔（道路/水晶/树木除外），点击已建塔查看射程、升级/出售
- 点击地面移动英雄，点击英雄头像释放技能
- `下一波`/空格提前开波，P 暂停，1/2/3/4 选择塔型
- 底部道具栏：炸弹、急救包、金币袋、寒冰符、援军图腾

## 内容

- 3 章节 8 关卡，20~28 波，单/双路径
- 4 种防御塔 × 3 级，16 种怪物，3 个 BOSS 技能
- 2 个英雄，英雄经验与等级成长
- Web Audio 程序化音效与章节音乐
- 米哈游风 toon 建模、攻击范围圈与全局打击/受击特效
- 四角地块地图纹理、小怪奔跑/受击精灵动画、英雄四肢奔跑动画
- 英雄与怪物 8 帧 / 64 色程序化精灵表，地图混合 3 种以上纹理
