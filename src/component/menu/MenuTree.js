import {Menu} from "antd";
import MenuStore from "../../store/MenuStore.js";
import React from "react";
import './MenuTree.css';
import AppTitle from "./AppTitle.js";
import * as AntIcon from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

/**
 * 菜单组件
 */
function MenuTree(props) {

    let menuStore = MenuStore();

    let icons = Object.keys(AntIcon);

    let history = useHistory();

    // 获取图标
    function getIcon(displayName) {
        for (let i = 0; i < icons.length; i++) {
            if (AntIcon[icons[i]].render && AntIcon[icons[i]].render.displayName && AntIcon[icons[i]].render.displayName === displayName) {
                return AntIcon[icons[i]].render();
            }
        }
    }

    // 递归子菜单
    function subMenu(menu) {
        if (menu.submenu && menu.submenu.length > 0) {
            return (
                <Menu.SubMenu key={menu.id} title={menu.name} icon={getIcon(menu.icon)} popupClassName={'popMenu'}>
                    {
                        menu.submenu.map(i => subMenu(i))
                    }
                </Menu.SubMenu>
            );
        } else {
            return (
                <Menu.Item key={menu.id} icon={getIcon(menu.icon)} onClick={() => {
                    if (menu.route) history.push(menu.route);
                }} title={menu.name}>
                    {menu.name}
                </Menu.Item>
            );
        }
    }

    return (
        <div className={'menuTree'}>
            <AppTitle/>
            <div className={'menuTree-div'}>
                <Menu mode={'inline'} theme={'dark'} inlineIndent={10}>
                    {
                        menuStore.state.menuList.map(i => subMenu(i))
                    }
                </Menu>
            </div>
        </div>
    );
}

export default MenuTree;