/**
 * 地图系统 - 3D地形、路径、塔位
 * 支持 8 关卡、单/双路径、塔位自动生成
 */
import * as THREE from 'three';

// 将角点列表展开为连续正交格子路径
function expandPath(corners) {
  const cells = [];
  let cur = { x: corners[0].x, z: corners[0].z };
  cells.push({ x: cur.x, z: cur.z });
  for (let i = 1; i < corners.length; i++) {
    const tgt = corners[i];
    while (cur.x !== tgt.x) { cur.x += Math.sign(tgt.x - cur.x); cells.push({ x: cur.x, z: cur.z }); }
    while (cur.z !== tgt.z) { cur.z += Math.sign(tgt.z - cur.z); cells.push({ x: cur.x, z: cur.z }); }
  }
  return cells;
}

function pathLengthOf(cells) {
  let len = 0;
  for (let i = 0; i < cells.length - 1; i++) {
    len += Math.abs(cells[i + 1].x - cells[i].x) + Math.abs(cells[i + 1].z - cells[i].z);
  }
  return len;
}

// ============ 8 关卡配置（PRD 3.4） ============
export const LEVEL_CONFIGS = [
  { // 3001 山口防线 - 第一章 单路径 新手关
    id: '3001', name: '山口防线', chapter: 1,
    gridW: 28, gridH: 20, startGold: 200, baseHP: 20, spotCount: 12,
    dualPath: false,
    paths: [[
      { x: 0, z: 4 }, { x: 26, z: 4 }, { x: 26, z: 9 },
      { x: 0, z: 9 }, { x: 0, z: 14 }, { x: 26, z: 14 }
    ]],
    theme: { grass: '#5a8a3c', path: '#c4a46c', dirt: '#8b7355', water: '#4a90d9' }
  },
  { // 3002 森林隘口 - 第一章 双路径
    id: '3002', name: '森林隘口', chapter: 1,
    gridW: 28, gridH: 20, startGold: 250, baseHP: 20, spotCount: 16,
    dualPath: true, basePos: { x: 27, z: 9 },
    paths: [
      [ { x: 0, z: 3 }, { x: 26, z: 3 }, { x: 26, z: 9 }, { x: 27, z: 9 } ],
      [ { x: 0, z: 15 }, { x: 26, z: 15 }, { x: 26, z: 9 }, { x: 27, z: 9 } ]
    ],
    theme: { grass: '#4f8a3a', path: '#b89a5e', dirt: '#7d6347', water: '#3f86c4' }
  },
  { // 3003 矮人堡垒 - 第一章关底 BOSS 单路径
    id: '3003', name: '矮人堡垒', chapter: 1,
    gridW: 28, gridH: 20, startGold: 300, baseHP: 25, spotCount: 15,
    dualPath: false,
    paths: [[
      { x: 0, z: 3 }, { x: 25, z: 3 }, { x: 25, z: 8 },
      { x: 2, z: 8 }, { x: 2, z: 15 }, { x: 26, z: 15 }
    ]],
    theme: { grass: '#6b7d3a', path: '#9c8a5e', dirt: '#6f5a3e', water: '#4a90d9' }
  },
  { // 3004 枯骨墓地 - 第二章 单路径 亡灵开篇
    id: '3004', name: '枯骨墓地', chapter: 2,
    gridW: 28, gridH: 20, startGold: 280, baseHP: 20, spotCount: 14,
    dualPath: false,
    paths: [[
      { x: 0, z: 4 }, { x: 26, z: 4 }, { x: 26, z: 10 },
      { x: 1, z: 10 }, { x: 1, z: 15 }, { x: 26, z: 15 }
    ]],
    theme: { grass: '#4a6b4a', path: '#8a8a7a', dirt: '#5a5a4a', water: '#3a6a6a' }
  },
  { // 3005 幽灵湖泊 - 第二章 双路径 飞行占比高
    id: '3005', name: '幽灵湖泊', chapter: 2,
    gridW: 28, gridH: 20, startGold: 320, baseHP: 20, spotCount: 18,
    dualPath: true, basePos: { x: 27, z: 10 },
    paths: [
      [ { x: 0, z: 2 }, { x: 25, z: 2 }, { x: 25, z: 10 }, { x: 27, z: 10 } ],
      [ { x: 0, z: 17 }, { x: 25, z: 17 }, { x: 25, z: 10 }, { x: 27, z: 10 } ]
    ],
    theme: { grass: '#3f5e55', path: '#7a8a85', dirt: '#4a5a55', water: '#3a7a8a' }
  },
  { // 3006 黑暗塔林 - 第二章关底 BOSS 单路径
    id: '3006', name: '黑暗塔林', chapter: 2,
    gridW: 28, gridH: 20, startGold: 350, baseHP: 25, spotCount: 16,
    dualPath: false,
    paths: [[
      { x: 0, z: 3 }, { x: 25, z: 3 }, { x: 25, z: 9 },
      { x: 2, z: 9 }, { x: 2, z: 16 }, { x: 26, z: 16 }
    ]],
    theme: { grass: '#3a4f3a', path: '#6a6a5a', dirt: '#3a3a2a', water: '#2a4a5a' }
  },
  { // 3007 熔岩通道 - 第三章 双路径 高护甲精英
    id: '3007', name: '熔岩通道', chapter: 3,
    gridW: 28, gridH: 20, startGold: 380, baseHP: 20, spotCount: 17,
    dualPath: true, basePos: { x: 27, z: 10 },
    paths: [
      [ { x: 0, z: 3 }, { x: 25, z: 3 }, { x: 25, z: 10 }, { x: 27, z: 10 } ],
      [ { x: 0, z: 16 }, { x: 25, z: 16 }, { x: 25, z: 10 }, { x: 27, z: 10 } ]
    ],
    theme: { grass: '#6b4a3a', path: '#8a5a3a', dirt: '#5a3a2a', water: '#c44a2a' }
  },
  { // 3008 地狱之门 - 第三章关底 BOSS 最终关
    id: '3008', name: '地狱之门', chapter: 3,
    gridW: 30, gridH: 20, startGold: 400, baseHP: 30, spotCount: 18,
    dualPath: false,
    paths: [[
      { x: 0, z: 3 }, { x: 27, z: 3 }, { x: 27, z: 9 },
      { x: 2, z: 9 }, { x: 2, z: 16 }, { x: 28, z: 16 }
    ]],
    theme: { grass: '#5a3a3a', path: '#7a4a2a', dirt: '#4a2a1a', water: '#e0492a' }
  }
];

export class TdMap {
  constructor(scene) {
    this.scene = scene;
    this.mapGroup = new THREE.Group();
    this.scene.add(this.mapGroup);

    this.gridW = 0;
    this.gridH = 0;
    this.paths = [];           // [{ corners, cells, points, length }]
    this.pathCellSet = new Set();
    this.towerSpots = [];
    this.groundMeshes = [];
    this.groundMesh = null;
    this.towerSpotMeshes = [];
    this.baseMesh = null;
    this.heroSpawn = { x: 0, z: 0 };
    this.basePos = { x: 0, z: 0 };
    this.theme = null;
    this.chapter = 1;
    this.levelIndex = 0;
    this.materials = {};
  }

  reset(levelIndex) {
    this.levelIndex = levelIndex || 0;
    this.buildLevel(this.levelIndex);
  }

  buildLevel(levelIndex) {
    // 清除旧地图
    while (this.mapGroup.children.length > 0) {
      this.mapGroup.remove(this.mapGroup.children[0]);
    }
    this.groundMeshes = [];
    this.towerSpotMeshes = [];
    this.materials = {};

    const config = LEVEL_CONFIGS[levelIndex] || LEVEL_CONFIGS[0];
    this.gridW = config.gridW;
    this.gridH = config.gridH;
    this.theme = config.theme;
    this.chapter = config.chapter;
    this.startGold = config.startGold;
    this.baseMaxHP = config.baseHP;

    // 展开路径
    this.paths = config.paths.map(corners => {
      const cells = expandPath(corners);
      const points = cells.map(c => new THREE.Vector3(c.x + 0.5, 0.05, c.z + 0.5));
      return { corners, cells, points, length: pathLengthOf(cells) };
    });

    this.pathCellSet = new Set();
    for (const p of this.paths) {
      for (const c of p.cells) this.pathCellSet.add(c.x + ',' + c.z);
    }

    this.basePos = config.basePos || this.paths[0].cells[this.paths[0].cells.length - 1];
    this.heroSpawn = config.heroSpawn || this.computeHeroSpawn();

    this.buildTerrain();
    this.buildPaths();
    this.buildTowerSpots();
    this.buildBase();
    this.buildDecorations();
  }

  computeHeroSpawn() {
    const b = this.basePos;
    const neighbors = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dx, dz] of neighbors) {
      const x = b.x + dx, z = b.z + dz;
      if (x >= 0 && x < this.gridW && z >= 0 && z < this.gridH && !this.pathCellSet.has(x + ',' + z)) {
        return { x, z };
      }
    }
    return { x: b.x, z: b.z };
  }

  getCenter() {
    return new THREE.Vector3(this.gridW / 2, 0, this.gridH / 2);
  }

  getHeroSpawn() {
    return new THREE.Vector3(this.heroSpawn.x + 0.5, 0.2, this.heroSpawn.z + 0.5);
  }

  getPathWorldPoints(entry = 0) {
    return (this.paths[entry] || this.paths[0]).points;
  }

  getPathLength(entry = 0) {
    return (this.paths[entry] || this.paths[0]).length;
  }

  getTowerSpotWorldPos(index) {
    const spot = this.towerSpots[index];
    return new THREE.Vector3(spot.x + 0.5, 0.3, spot.z + 0.5);
  }

  buildTerrain() {
    const grassMat = new THREE.MeshStandardMaterial({ color: this.theme.grass, roughness: 0.85 });
    const dirtMat = new THREE.MeshStandardMaterial({ color: this.theme.dirt, roughness: 0.9 });
    this.materials.grass = grassMat;
    this.materials.dirt = dirtMat;

    // 底座
    const baseGeo = new THREE.BoxGeometry(this.gridW + 4, 0.5, this.gridH + 4);
    const baseMesh = new THREE.Mesh(baseGeo, dirtMat);
    baseMesh.position.set(this.gridW / 2, -0.5, this.gridH / 2);
    baseMesh.receiveShadow = true;
    this.mapGroup.add(baseMesh);

    // 地面格子
    const cellGeo = new THREE.BoxGeometry(0.98, 0.2, 0.98);
    for (let x = 0; x < this.gridW; x++) {
      for (let z = 0; z < this.gridH; z++) {
        const isPath = this.pathCellSet.has(x + ',' + z);
        const isTowerSpot = this.towerSpots.some(s => s.x === x && s.z === z);
        const mat = (isPath || isTowerSpot) ? dirtMat : grassMat;
        const cell = new THREE.Mesh(cellGeo, mat);
        cell.position.set(x + 0.5, 0.1, z + 0.5);
        cell.receiveShadow = true;
        cell.castShadow = true;
        this.mapGroup.add(cell);
        this.groundMeshes.push(cell);
      }
    }
    // 创建合并地面网格用于射线检测
    const groundGeo = new THREE.PlaneGeometry(this.gridW, this.gridH);
    groundGeo.rotateX(-Math.PI / 2);
    this.groundMesh = new THREE.Mesh(groundGeo, new THREE.MeshBasicMaterial({ visible: false }));
    this.groundMesh.position.set(this.gridW / 2, 0.2, this.gridH / 2);
    this.mapGroup.add(this.groundMesh);
  }

  buildPaths() {
    const pathMat = new THREE.MeshStandardMaterial({ color: this.theme.path, roughness: 0.7 });
    this.materials.path = pathMat;

    for (const p of this.paths) {
      for (const c of p.cells) {
        const geo = new THREE.BoxGeometry(0.9, 0.21, 0.9);
        const mesh = new THREE.Mesh(geo, pathMat);
        mesh.position.set(c.x + 0.5, 0.2, c.z + 0.5);
        mesh.receiveShadow = true;
        this.mapGroup.add(mesh);
      }
    }
  }

  buildTowerSpots() {
    // 自动生成：路径正交相邻的草地格，按最小间距稀疏化
    const candidates = [];
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let x = 0; x < this.gridW; x++) {
      for (let z = 0; z < this.gridH; z++) {
        if (this.pathCellSet.has(x + ',' + z)) continue;
        const adj = dirs.some(([dx, dz]) => this.pathCellSet.has((x + dx) + ',' + (z + dz)));
        if (adj) candidates.push({ x, z });
      }
    }

    const spotCount = LEVEL_CONFIGS[this.levelIndex].spotCount || 16;
    const kept = [];
    for (const c of candidates) {
      const tooClose = kept.some(k => Math.abs(k.x - c.x) + Math.abs(k.z - c.z) < 2);
      if (!tooClose) {
        kept.push(c);
        if (kept.length >= spotCount) break;
      }
    }
    this.towerSpots = kept;

    const spotGeo = new THREE.CylinderGeometry(0.4, 0.45, 0.3, 6);
    const spotMat = new THREE.MeshStandardMaterial({ color: '#e8d5a3', roughness: 0.5, metalness: 0.2 });
    this.materials.towerSpot = spotMat;

    const highlightGeo = new THREE.RingGeometry(0.35, 0.45, 6);
    const highlightMat = new THREE.MeshBasicMaterial({ color: '#ffff00', side: THREE.DoubleSide, transparent: true, opacity: 0.3 });

    this.towerSpots.forEach((spot, i) => {
      const mesh = new THREE.Mesh(spotGeo, spotMat);
      mesh.position.set(spot.x + 0.5, 0.3, spot.z + 0.5);
      mesh.userData.index = i;
      mesh.castShadow = true;
      this.mapGroup.add(mesh);
      this.towerSpotMeshes.push(mesh);

      const ring = new THREE.Mesh(highlightGeo, highlightMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(spot.x + 0.5, 0.46, spot.z + 0.5);
      ring.userData.index = i;
      ring.visible = false;
      this.mapGroup.add(ring);
      mesh.userData.highlightRing = ring;
    });
  }

  buildBase() {
    const baseGroup = new THREE.Group();
    const wallMat = new THREE.MeshStandardMaterial({ color: '#d4c5a9', roughness: 0.6 });
    const roofMat = new THREE.MeshStandardMaterial({ color: '#c0392b', roughness: 0.5 });

    const bodyGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const body = new THREE.Mesh(bodyGeo, wallMat);
    body.position.y = 0.75;
    body.castShadow = true;
    baseGroup.add(body);

    const towerGeo = new THREE.CylinderGeometry(0.35, 0.4, 1.8, 8);
    const tower = new THREE.Mesh(towerGeo, wallMat);
    tower.position.y = 0.9;
    tower.castShadow = true;
    baseGroup.add(tower);

    const roofGeo = new THREE.ConeGeometry(0.55, 0.8, 8);
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 1.9;
    roof.castShadow = true;
    baseGroup.add(roof);

    const flagPoleGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 6);
    const flagPole = new THREE.Mesh(flagPoleGeo, new THREE.MeshStandardMaterial({ color: '#5d4e37' }));
    flagPole.position.y = 2.2;
    baseGroup.add(flagPole);

    const flagGeo = new THREE.PlaneGeometry(0.4, 0.25);
    const flag = new THREE.Mesh(flagGeo, new THREE.MeshStandardMaterial({ color: '#e74c3c', side: THREE.DoubleSide }));
    flag.position.set(0.2, 2.7, 0);
    baseGroup.add(flag);

    baseGroup.position.set(this.basePos.x + 0.5, 0, this.basePos.z + 0.5);
    this.mapGroup.add(baseGroup);
    this.baseMesh = baseGroup;
  }

  buildDecorations() {
    const treePositions = [];
    for (let i = 0; i < 30; i++) {
      const x = Math.floor(Math.random() * this.gridW);
      const z = Math.floor(Math.random() * this.gridH);
      if (!this.pathCellSet.has(x + ',' + z) && !this.towerSpots.some(s => s.x === x && s.z === z)) {
        const tooClose = treePositions.some(t => Math.abs(t.x - x) < 2 && Math.abs(t.z - z) < 2);
        if (!tooClose) {
          treePositions.push({ x, z });
          this.buildTree(x + 0.5, z + 0.5);
        }
      }
    }

    for (let i = 0; i < 12; i++) {
      const x = Math.floor(Math.random() * this.gridW);
      const z = Math.floor(Math.random() * this.gridH);
      if (!this.pathCellSet.has(x + ',' + z) && !this.towerSpots.some(s => s.x === x && s.z === z)) {
        this.buildRock(x + 0.5, z + 0.5);
      }
    }
  }

  buildTree(x, z) {
    const group = new THREE.Group();
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#6b4226', roughness: 0.8 });
    const leavesMat = new THREE.MeshStandardMaterial({ color: '#3d7a28', roughness: 0.7 });

    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 1.2, 6), trunkMat);
    trunk.position.y = 0.6;
    trunk.castShadow = true;
    group.add(trunk);

    const leaves1 = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.9, 6), leavesMat);
    leaves1.position.y = 1.15;
    leaves1.castShadow = true;
    group.add(leaves1);

    const leaves2 = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.7, 6), leavesMat);
    leaves2.position.y = 1.6;
    leaves2.castShadow = true;
    group.add(leaves2);

    group.position.set(x, 0.2, z);
    this.mapGroup.add(group);
  }

  buildRock(x, z) {
    const rockMat = new THREE.MeshStandardMaterial({ color: '#888888', roughness: 0.8 });
    const size = 0.2 + Math.random() * 0.3;
    const geo = new THREE.IcosahedronGeometry(size, 1);
    const mesh = new THREE.Mesh(geo, rockMat);
    mesh.position.set(x, size * 0.5, z);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.mapGroup.add(mesh);
  }

  isPathCell(x, z) {
    return this.pathCellSet.has(x + ',' + z);
  }
}
