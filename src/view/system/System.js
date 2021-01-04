import React from 'react';
import {BackTop, Layout} from 'antd';
import SystemStore from "../../store/SystemStore.js";
import './System.css';
import AppFooter from "../../component/footer/AppFooter.js";
import MenuTree from "../../component/menu/MenuTree.js";
import SystemRouter from "../../router/SystemRouter.js";
import MenuStore from "../../store/MenuStore.js";
import {ArrowUpOutlined} from '@ant-design/icons';

/**
 * 系统主页
 */
function System(props) {

    let basePath = '/system';

    let systemStore = SystemStore();
    let menuStore = MenuStore();

    function toPage(route) {
        props.history.push(basePath + route);
    }

    function changeFrameHeight() {
        systemStore.action.windowHeightChange();
    }

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
                    <MenuTree toPage={toPage}/>
                </Layout.Sider>
                <Layout>
                    <Layout.Header className={'header'}>
                        <div>header</div>
                    </Layout.Header>
                    <Layout.Content className={'content'} id={'pageContent'}>
                        <button onClick={() => {
                            menuStore.action.switchCollapse();
                        }}>{'' + menuStore.state.menuCollapse}</button>
                        <div>
                            <SystemRouter base={basePath}/>
                        </div>
                        <BackTop visibilityHeight={0} target={() => document.querySelector('#pageContent')}>
                            <div className={'up-div'}>
                                <div className="up"><ArrowUpOutlined /><span>回到顶部</span></div>
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
