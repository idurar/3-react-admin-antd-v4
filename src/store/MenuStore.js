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
        // 标签页列表
        tabList: [
            {
                id: 'home',
                name: '首页',
                route: '/system/home',
                unclose: true,
            },
        ],
        // 激活页
        activeTab: 'home',
    },
    action: {
        // 切换菜单展开/收起
        switchCollapse() {
            this.publish({menuCollapse: !this.state().menuCollapse});
            this.storeTabList();
        },
        // 根据key从tab数组中查找tab
        getTab(key) {
            for (let i = 0; i < this.state().tabList.length; i++) {
                if (this.state().tabList[i].id === key) {
                    return {...this.state().tabList[i]};
                }
            }
            return null;
        },
        // 根据路由从tab数组中查找tab
        getTabByRoute(route) {
            for (let i = 0; i < this.state().tabList.length; i++) {
                if (this.state().tabList[i].route === route) {
                    return {...this.state().tabList[i]};
                }
            }
            return null;
        },
        // 设置当前激活的tab页
        setActiveTab(key) {
            this.publish({activeTab: key});
        },
        // 当前选中的菜单
        getSelectedMenu() {
            return [this.state().activeTab];
        },
        // 移除tab，返回左边一个标签页
        removeTab(key) {
            let temp = this.state().tabList;
            let preTab = null;
            for (let i = 0; i < this.state().tabList.length; i++) {
                if (this.state().tabList[i].id === key) {
                    preTab = this.state().tabList[i - 1];
                    temp.splice(i, 1);
                    this.publish({tabList: temp});
                    break;
                }
            }
            return preTab;
        },
        // 根据路由查找菜单
        getMenuByRoute(route) {
            let menu = null;
            let found = false;
            this.state().menuList.forEach(i => {
                findMenu(i, m => {
                    if (!found && m.route === route) {
                        menu = m;
                        found = true;
                    }
                });
            });
            return menu;
        },
        // 点击菜单，返回点击的菜单
        menuClick(key) {
            let menu = null;
            let found = false;
            // 查找菜单
            this.state().menuList.forEach(i => {
                findMenu(i, m => {
                    if (!found && m.id === key) {
                        menu = m;
                        found = true;
                    }
                });
            });
            if (menu && menu.route) {
                let tab = this.getTab(menu.id);
                // 标签页未打开
                if (!tab) {
                    let temp = this.state().tabList;
                    temp.push(menu);
                    this.publish({tabList: temp});
                }
                // 激活标签页
                this.setActiveTab(menu.id);
            }
            return menu;
        },
        // 从SessionStorage中恢复打开的标签页
        restoreTabList() {
            let state = {};
            let tabList = window.sessionStorage.getItem('tabList');
            if (tabList) state.tabList = JSON.parse(tabList);
            let activeTab = window.sessionStorage.getItem('activeTab');
            if (activeTab) state.activeTab = activeTab;
            let menuCollapse = window.sessionStorage.getItem('menuCollapse');
            if (menuCollapse) state.menuCollapse = menuCollapse === 'true';
            this.publish(state);
        },
        // 将当前打开的Tab页保存到SessionStorage
        storeTabList() {
            let state = this.state();
            window.sessionStorage.setItem('tabList', JSON.stringify(state.tabList));
            window.sessionStorage.setItem('activeTab', state.activeTab);
            window.sessionStorage.setItem('menuCollapse', state.menuCollapse);
        }
    }
}, React)();

// 递归遍历菜单
let findMenu = (function findMenuHelper(menu, callback) {
    if (menu.submenu && menu.submenu.length > 0) {
        menu.submenu.forEach(i => findMenuHelper(i, callback));
    } else {
        if (typeof callback === 'function') callback(menu);
    }
});
