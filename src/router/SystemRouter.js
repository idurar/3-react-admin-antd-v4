import {Redirect, Switch} from 'react-router-dom';
import React from 'react';
import Home from "../view/system/page/Home.js";
import Page1 from "../view/system/page/Page1.js";
import Page2 from "../view/system/page/Page2.js";
import MenuStore from "../store/MenuStore.js";
import NProgressRoute from "./NProgressRoute.js";

/**
 * 系统主页路由
 */
function SystemRouter(props) {

    let menuStore = MenuStore();

    // 路由数据
    let routes = [
        {
            path: ['', '/home'],
            component: Home,
            exact: true,
        },
        {
            path: ['/page1'],
            component: Page1,
        },
        {
            path: ['/page2'],
            component: Page2,
        },
    ];

    // 检查tab页面是否打开
    function checkTab(routeProps) {
        let tab;
        if (routeProps.location.pathname === props.base) {
            // 默认打开首页
            tab = menuStore.state.tabList[0];
        } else {
            // 已打开tab页
            tab = menuStore.action.getTabByRoute(routeProps.location.pathname);
        }
        if (!tab) {
            // 未打开，在菜单中查找
            tab = menuStore.action.getMenuByRoute(routeProps.location.pathname);
            // 打开菜单
            if (tab) menuStore.action.menuClick(tab.id);
        } else {
            // 设置为当前激活页
            if (menuStore.state.activeTab !== tab.id) {
                menuStore.action.setActiveTab(tab.id);
                menuStore.action.storeTabList();
            }
        }
    }

    return (
        <Switch>
            {
                routes.map(r => {
                    return (
                        <NProgressRoute key={r.path[0]} path={r.path.map(i => props.base + i)} exact={r.exact} render={routeProps => {
                            checkTab(routeProps);
                            return (
                                <r.component/>
                            );
                        }}/>
                    );
                })
            }
            <Redirect from={props.base + '/*'} to={'/notFound'}/>
        </Switch>
    );
}

SystemRouter.defaultProps = {
    base: '/system',
};

export default SystemRouter;
