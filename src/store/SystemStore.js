import Store from "./Store.js";
import React from 'react';

/**
 * 系统数据
 */
export default Store.bind({
    state: {
        // 页面高度
        frameHeight: window.innerHeight,
    },
    action: {
        // 更改页面高度
        windowHeightChange() {
            this.publish({frameHeight: window.innerHeight});
        },
    }
}, React)();
