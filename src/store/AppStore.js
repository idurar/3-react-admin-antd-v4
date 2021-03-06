import React from 'react';
import Store from "./Store.js";

/**
 * App组件数据
 */
export default Store.bind({
    state: {
        // 应用软件名称
        appTitle: '应用软件名称',
        // 构建时间
        buildTime: /*[BUILD_TIME*/'yyyy-MM-dd HH:mm'/*BUILD_TIME]*/,
    },
    action: {
        // 设置title，默认使用appTitle
        setPageTitle(title) {
            document.querySelector('title').innerHTML = title ? title : this.state().appTitle;
        },
    }
}, React)();
