import Store from "./Store.js";
import React from "react";
import mockData from './mock-data.js';

/**
 * 菜单数据
 */
export default Store.bind({
    state: {
        // 菜单是否折叠
        menuCollapse: false,
        // 菜单列表
        menuList: mockData.menuList,
    },
    action: {
        // 切换菜单展开/收起
        switchCollapse() {
            this.publish({menuCollapse: !this.state().menuCollapse});
        },
    }
}, React)();
