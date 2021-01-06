'use strict';

const fs = require('fs');

/**
 * 生成构建时间
 */

// 创建当前时间字符串 格式：yyyy-MM-dd HH:mm
let now = new Date();
let buildTime = now.getFullYear();
let part = now.getMonth() + 1;
buildTime += part < 10 ? '-0' + part : '-' + part;
part = now.getDate();
buildTime += part < 10 ? '-0' + part : '-' + part;
part = now.getHours();
buildTime += part < 10 ? ' 0' + part : ' ' + part;
part = now.getMinutes();
buildTime += part < 10 ? ':0' + part : ':' + part;

// 重写src/store/AppStore中的BUILD_TIME
let renderFile = 'src/store/AppStore.js';
let content = fs.readFileSync(renderFile, 'utf-8');
let newContent = content.replace(
    /\/\*\[BUILD_TIME\*\/.+\/\*BUILD_TIME\]\*\//,
    '/*[BUILD_TIME*/\'' + buildTime + '\'/*BUILD_TIME]*/');
fs.writeFileSync(renderFile, newContent);

console.log(`[${renderFile}] -- 写入构建时间 -- [${buildTime}]`);
