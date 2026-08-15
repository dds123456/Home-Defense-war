# 程序化精灵动效图

由 `js/td-spritegen.js` 导出的 8 帧 / 64 色程序化动效图。

## 文件说明

- `*.png`：4×2 精灵表（8 帧），供游戏运行时或切片工具使用。
- `gifs/*.gif`：8 帧循环动效图，每帧 96×96。
- 命名：`角色ID_动作.png` / `角色ID_动作.gif`，动作包括 `run`、`hit`。

## 已包含角色

- 英雄：`H2001_KingdomRanger`、`H2002_CourtMage`
- 怪物：`M_goblin`、`M_orc`、`M_wolfRider`、`M_shadow`、`M_gargoyle`、`M_troll`、`M_orcCaptain`、`M_fastGoblin`、`M_skeleton`、`M_zombie`、`M_lich`、`M_stoneGolem`、`M_ghost`、`M_skeletonKing`、`M_demonImp`、`M_hellHound`、`M_heavyDemon`、`M_wyvern`、`M_hellGolem`

## 再生成

```bash
python -m http.server 5010
node tools/export-sprites.mjs
```
