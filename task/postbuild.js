'use strict';

const fs = require('fs');

/**
 * 恢复构建时间
 */

// 重写src/store/AppStore中的BUILD_TIME
let renderFile = 'src/store/AppStore.js';
let content = fs.readFileSync(renderFile, 'utf-8');
let newContent = content.replace(
    /\/\*\[BUILD_TIME\*\/.+\/\*BUILD_TIME\]\*\//,
    '/*[BUILD_TIME*/\'yyyy-MM-dd HH:mm\'/*BUILD_TIME]*/');
fs.writeFileSync(renderFile, newContent);

console.log(`[${renderFile}] -- 恢复构建时间 -- `);

/**
 * 构建后整理build文件夹内容
 */

// 删除asset-manifest.json
let assetManifest = 'build/asset-manifest.json';
if (fs.existsSync(assetManifest)) fs.unlinkSync(assetManifest);

console.log(`[${assetManifest}] -- 删除文件 -- `);
