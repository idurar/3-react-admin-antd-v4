import {Menu} from "antd";
import MenuStore from "../../store/MenuStore.js";
import React from "react";
import {Icon} from '@ant-design/compatible';
import './MenuTree.css';
import AppTitle from "./AppTitle.js";

/**
 * 菜单组件
 */
function MenuTree(props) {

    let menuStore = MenuStore();

    // 递归子菜单
    function subMenu(menu) {
        if (menu.submenu && menu.submenu.length > 0) {
            return (
                <Menu.SubMenu key={menu.id} title={menu.name} icon={<Icon type={'appstore'}/>} popupClassName={'popMenu'}>
                    {
                        menu.submenu.map(i => subMenu(i))
                    }
                </Menu.SubMenu>
            );
        } else {
            return (
                <Menu.Item key={menu.id} icon={<Icon type={'appstore'} />} onClick={() => {
                    if (menu.route) props.toPage(menu.route);
                }} title={menu.name}>
                    {menu.name}
                </Menu.Item>
            );
        }
    }

    return (
        <div className={'menuTree'}>
            <AppTitle collapse={menuStore.state.menuCollapse}/>
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
