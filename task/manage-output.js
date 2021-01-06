'use strict';

const fs = require('fs');

/**
 * 构建后整理build文件夹内容
 */

// 删除asset-manifest.json
let assetManifest = 'build/asset-manifest.json';
if (fs.existsSync(assetManifest)) fs.unlinkSync(assetManifest);

console.log(`删除文件 -- [${assetManifest}]`);
