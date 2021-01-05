import React from 'react';
import {BackTop, Layout} from 'antd';
import SystemStore from "../../store/SystemStore.js";
import './System.css';
import AppFooter from "../../component/footer/AppFooter.js";
import MenuTree from "../../component/menu/MenuTree.js";
import SystemRouter from "../../router/SystemRouter.js";
import MenuStore from "../../store/MenuStore.js";
import {ArrowUpOutlined} from '@ant-design/icons';
import AppHeader from "../../component/header/AppHeader.js";
import TabBar from "../../component/menu/TabBar";

/**
 * 系统主页
 */
function System(props) {

    let systemStore = SystemStore();
    let menuStore = MenuStore();

    // 启动后执行 todo 迁移至路由
    window.addEventListener('load', event => {
        // 恢复tab标签页
        menuStore.action.restoreTabList();
    });

    // 更改页面高度
    function changeFrameHeight() {
        systemStore.action.windowHeightChange();
    }

    // 监听窗口大小变化
    React.useEffect(() => {
        window.addEventListener('resize', changeFrameHeight);
        return () => {
            window.removeEventListener('resize', changeFrameHeight);
        };
    });

    return (
        <div className={'system'}>
            <Layout style={{height: systemStore.state.frameHeight + 'px'}}>
                <Layout.Sider className={'side'} collapsed={menuStore.state.menuCollapse} collapsedWidth={'50px'} width={'200px'}>
                    <MenuTree/>
                </Layout.Sider>
                <Layout>
                    <Layout.Header className={'header'}>
                        <AppHeader/>
                    </Layout.Header>
                    <TabBar/>
                    <Layout.Content className={'content'} id={'pageContent'}>
                        <div>
                            <SystemRouter/>
                        </div>
                        <BackTop visibilityHeight={0} target={() => document.querySelector('#pageContent')}>
                            <div className={'up-div'}>
                                <div className="up"><ArrowUpOutlined/><span>回到顶部</span></div>
                            </div>
                        </BackTop>
                    </Layout.Content>
                    <Layout.Footer className={'footer'}>
                        <AppFooter/>
                    </Layout.Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default System;
