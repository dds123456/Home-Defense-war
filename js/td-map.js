/**
 * 地图系统 - 米哈游风 3D 地形、路径、基地水晶
 * 全图可建造：仅道路、基地、树木、岩石占用格子不可放置
 */
import * as THREE from 'three';
import { toonMaterial, CHAPTER_PALETTES, applyTextureMap } from './td-style.js';

const MAP_TEXTURES = {
  1: { grass: 'textures/map/grass_tile.png', path: 'textures/map/road_stone_slab.png', dirt: 'textures/map/minimal_cobble.png' },
  2: { grass: 'textures/map/swamp_bubbles.png', path: 'textures/map/scene_crystal_snow_floor.png', dirt: 'textures/map/minimal_cobble.png' },
  3: { grass: 'textures/map/lava_tile.png', path: 'textures/map/lava_crack_stone.png', dirt: 'textures/map/minimal_lava.png' }
};

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

// ============ 8 关卡配置 ============
export const LEVEL_CONFIGS = [
  {
    id: '3001', name: '山口防线', chapter: 1,
    gridW: 28, gridH: 20, startGold: 200, baseHP: 20,
    dualPath: false,
    paths: [[
      { x: 0, z: 4 }, { x: 26, z: 4 }, { x: 26, z: 9 },
      { x: 0, z: 9 }, { x: 0, z: 14 }, { x: 26, z: 14 }
    ]]
  },
  {
    id: '3002', name: '森林隘口', chapter: 1,
    gridW: 28, gridH: 20, startGold: 250, baseHP: 20,
    dualPath: true, basePos: { x: 27, z: 9 },
    paths: [
      [ { x: 0, z: 3 }, { x: 26, z: 3 }, { x: 26, z: 9 }, { x: 27, z: 9 } ],
      [ { x: 0, z: 15 }, { x: 26, z: 15 }, { x: 26, z: 9 }, { x: 27, z: 9 } ]
    ]
  },
  {
    id: '3003', name: '矮人堡垒', chapter: 1,
    gridW: 28, gridH: 20, startGold: 300, baseHP: 25,
    dualPath: false,
    paths: [[
      { x: 0, z: 3 }, { x: 25, z: 3 }, { x: 25, z: 8 },
      { x: 2, z: 8 }, { x: 2, z: 15 }, { x: 26, z: 15 }
    ]]
  },
  {
    id: '3004', name: '枯骨墓地', chapter: 2,
    gridW: 28, gridH: 20, startGold: 280, baseHP: 20,
    dualPath: false,
    paths: [[
      { x: 0, z: 4 }, { x: 26, z: 4 }, { x: 26, z: 10 },
      { x: 1, z: 10 }, { x: 1, z: 15 }, { x: 26, z: 15 }
    ]]
  },
  {
    id: '3005', name: '幽灵湖泊', chapter: 2,
    gridW: 28, gridH: 20, startGold: 320, baseHP: 20,
    dualPath: true, basePos: { x: 27, z: 10 },
    paths: [
      [ { x: 0, z: 2 }, { x: 25, z: 2 }, { x: 25, z: 10 }, { x: 27, z: 10 } ],
      [ { x: 0, z: 17 }, { x: 25, z: 17 }, { x: 25, z: 10 }, { x: 27, z: 10 } ]
    ]
  },
  {
    id: '3006', name: '黑暗塔林', chapter: 2,
    gridW: 28, gridH: 20, startGold: 350, baseHP: 25,
    dualPath: false,
    paths: [[
      { x: 0, z: 3 }, { x: 25, z: 3 }, { x: 25, z: 9 },
      { x: 2, z: 9 }, { x: 2, z: 16 }, { x: 26, z: 16 }
    ]]
  },
  {
    id: '3007', name: '熔岩通道', chapter: 3,
    gridW: 28, gridH: 20, startGold: 380, baseHP: 20,
    dualPath: true, basePos: { x: 27, z: 10 },
    paths: [
      [ { x: 0, z: 3 }, { x: 25, z: 3 }, { x: 25, z: 10 }, { x: 27, z: 10 } ],
      [ { x: 0, z: 16 }, { x: 25, z: 16 }, { x: 25, z: 10 }, { x: 27, z: 10 } ]
    ]
  },
  {
    id: '3008', name: '地狱之门', chapter: 3,
    gridW: 30, gridH: 20, startGold: 400, baseHP: 30,
    dualPath: false,
    paths: [[
      { x: 0, z: 3 }, { x: 27, z: 3 }, { x: 27, z: 9 },
      { x: 2, z: 9 }, { x: 2, z: 16 }, { x: 28, z: 16 }
    ]]
  }
];

export class TdMap {
  constructor(scene) {
    this.scene = scene;
    this.mapGroup = new THREE.Group();
    this.scene.add(this.mapGroup);

    this.gridW = 0;
    this.gridH = 0;
    this.paths = [];
    this.pathCellSet = new Set();
    this.blockedCells = new Set();
    this.groundMeshes = [];
    this.groundMesh = null;
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
    while (this.mapGroup.children.length > 0) {
      this.mapGroup.remove(this.mapGroup.children[0]);
    }
    this.groundMeshes = [];
    this.materials = {};
    this.blockedCells = new Set();

    const config = LEVEL_CONFIGS[levelIndex] || LEVEL_CONFIGS[0];
    this.gridW = config.gridW;
    this.gridH = config.gridH;
    this.chapter = config.chapter;
    this.startGold = config.startGold;
    this.baseMaxHP = config.baseHP;
    const palette = CHAPTER_PALETTES[this.chapter] || CHAPTER_PALETTES[1];
    this.theme = {
      grass: palette.grass,
      path: palette.path,
      dirt: palette.dirt,
      water: '#5fb8e8'
    };

    this.paths = config.paths.map(corners => {
      const cells = expandPath(corners);
      const points = cells.map(c => new THREE.Vector3(c.x + 0.5, 0.05, c.z + 0.5));
      return { corners, cells, points, length: pathLengthOf(cells) };
    });

    this.pathCellSet = new Set();
    for (const p of this.paths) {
      for (const c of p.cells) {
        this.pathCellSet.add(c.x + ',' + c.z);
        this.blockedCells.add(c.x + ',' + c.z);
      }
    }

    this.basePos = config.basePos || this.paths[0].cells[this.paths[0].cells.length - 1];
    this.heroSpawn = config.heroSpawn || this.computeHeroSpawn();

    this.buildTerrain();
    this.buildPaths();
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

  cellKey(x, z) { return x + ',' + z; }

  getCellFromWorld(point) {
    return { x: Math.floor(point.x), z: Math.floor(point.z) };
  }

  getCellCenterWorld(x, z) {
    return new THREE.Vector3(x + 0.5, 0.25, z + 0.5);
  }

  isPlaceableCell(x, z) {
    if (x < 0 || z < 0 || x >= this.gridW || z >= this.gridH) return false;
    if (this.pathCellSet.has(this.cellKey(x, z))) return false;
    if (this.blockedCells.has(this.cellKey(x, z))) return false;
    return true;
  }

  buildTerrain() {
    const grassMat = toonMaterial(this.theme.grass, { roughness: 0.9 });
    const dirtMat = toonMaterial(this.theme.dirt, { roughness: 0.95 });
    this.materials.grass = grassMat;
    this.materials.dirt = dirtMat;
    const tex = MAP_TEXTURES[this.chapter] || MAP_TEXTURES[1];
    applyTextureMap(grassMat, tex.grass);
    applyTextureMap(dirtMat, tex.dirt);

    const baseGeo = new THREE.BoxGeometry(this.gridW + 4, 0.5, this.gridH + 4);
    const baseMat = toonMaterial('#6b5b52', { roughness: 0.95 });
    applyTextureMap(baseMat, tex.dirt);
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.set(this.gridW / 2, -0.5, this.gridH / 2);
    baseMesh.receiveShadow = true;
    this.mapGroup.add(baseMesh);

    const cellGeo = new THREE.BoxGeometry(0.96, 0.2, 0.96);
    for (let x = 0; x < this.gridW; x++) {
      for (let z = 0; z < this.gridH; z++) {
        const isPath = this.pathCellSet.has(this.cellKey(x, z));
        const mat = isPath ? dirtMat : grassMat;
        const cell = new THREE.Mesh(cellGeo, mat);
        cell.position.set(x + 0.5, 0.1, z + 0.5);
        cell.receiveShadow = true;
        cell.castShadow = true;
        this.mapGroup.add(cell);
        this.groundMeshes.push(cell);
      }
    }

    const groundGeo = new THREE.PlaneGeometry(this.gridW, this.gridH);
    groundGeo.rotateX(-Math.PI / 2);
    this.groundMesh = new THREE.Mesh(groundGeo, new THREE.MeshBasicMaterial({ visible: false }));
    this.groundMesh.position.set(this.gridW / 2, 0.2, this.gridH / 2);
    this.mapGroup.add(this.groundMesh);
  }

  buildPaths() {
    const pathMat = toonMaterial(this.theme.path, { roughness: 0.75 });
    this.materials.path = pathMat;
    const tex = MAP_TEXTURES[this.chapter] || MAP_TEXTURES[1];
    applyTextureMap(pathMat, tex.path);
    for (const p of this.paths) {
      for (const c of p.cells) {
        const geo = new THREE.BoxGeometry(0.88, 0.21, 0.88);
        const mesh = new THREE.Mesh(geo, pathMat);
        mesh.position.set(c.x + 0.5, 0.2, c.z + 0.5);
        mesh.receiveShadow = true;
        this.mapGroup.add(mesh);
      }
    }
  }

  buildBase() {
    const group = new THREE.Group();
    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 1.0, 0.5, 10),
      toonMaterial('#d7c9ff', { emissive: '#6e5bff', emissiveIntensity: 0.25 })
    );
    pedestal.position.y = 0.25;
    pedestal.castShadow = true;
    group.add(pedestal);

    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.7, 0),
      toonMaterial('#7ef0ff', { emissive: '#3ec8ff', emissiveIntensity: 0.85 })
    );
    crystal.position.y = 1.25;
    crystal.castShadow = true;
    group.add(crystal);

    const inner = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.MeshBasicMaterial({ color: '#eaffff', transparent: true, opacity: 0.9 })
    );
    inner.position.y = 1.25;
    group.add(inner);

    const light = new THREE.PointLight('#6ee7ff', 1.4, 8);
    light.position.y = 1.6;
    group.add(light);

    const baseX = this.basePos.x, baseZ = this.basePos.z;
    group.position.set(baseX + 0.5, 0, baseZ + 0.5);
    this.mapGroup.add(group);
    this.baseMesh = group;
    this.baseMesh.userData.crystal = crystal;
    this.baseMesh.userData.inner = inner;

    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        this.blockedCells.add(this.cellKey(baseX + dx, baseZ + dz));
      }
    }
  }

  buildDecorations() {
    const treePositions = [];
    for (let i = 0; i < 34; i++) {
      const x = Math.floor(Math.random() * this.gridW);
      const z = Math.floor(Math.random() * this.gridH);
      const key = this.cellKey(x, z);
      if (!this.blockedCells.has(key) && !this.pathCellSet.has(key)) {
        const tooClose = treePositions.some(t => Math.abs(t.x - x) < 2 && Math.abs(t.z - z) < 2);
        if (!tooClose) {
          treePositions.push({ x, z });
          this.blockedCells.add(key);
          this.buildTree(x + 0.5, z + 0.5);
        }
      }
    }

    for (let i = 0; i < 14; i++) {
      const x = Math.floor(Math.random() * this.gridW);
      const z = Math.floor(Math.random() * this.gridH);
      const key = this.cellKey(x, z);
      if (!this.blockedCells.has(key) && !this.pathCellSet.has(key)) {
        this.blockedCells.add(key);
        this.buildRock(x + 0.5, z + 0.5);
      }
    }
  }

  buildTree(x, z) {
    const group = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 1.1, 6), toonMaterial('#8a5a3a'));
    trunk.position.y = 0.55;
    trunk.castShadow = true;
    group.add(trunk);
    const leaves1 = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.0, 7), toonMaterial('#4fae5a'));
    leaves1.position.y = 1.2;
    leaves1.castShadow = true;
    group.add(leaves1);
    const leaves2 = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.8, 7), toonMaterial('#63d16e'));
    leaves2.position.y = 1.7;
    leaves2.castShadow = true;
    group.add(leaves2);
    group.position.set(x, 0.2, z);
    this.mapGroup.add(group);
  }

  buildRock(x, z) {
    const size = 0.22 + Math.random() * 0.28;
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 1), toonMaterial('#b8b4c8'));
    mesh.position.set(x, size * 0.5, z);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.mapGroup.add(mesh);
  }

  isPathCell(x, z) {
    return this.pathCellSet.has(this.cellKey(x, z));
  }
}
