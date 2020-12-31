import React from 'react';
import {Layout} from 'antd';
import SystemStore from "../../store/SystemStore.js";
import './System.css';
import AppFooter from "../../component/footer/AppFooter.js";

/**
 * 系统主页
 */
function System(props) {

    let basePath = '/system';

    let systemStore = SystemStore();

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
            {/*<div>system</div>*/}
            {/*<button onClick={() => toPage('/home')}>home</button>*/}
            {/*<button onClick={() => toPage('/page1')}>page1</button>*/}
            {/*<button onClick={() => toPage('/page2')}>page2</button>*/}
            {/*<div>*/}
            {/*    <SystemRouter base={basePath}/>*/}
            {/*</div>*/}
            <Layout style={{height: systemStore.state.frameHeight + 'px'}}>
                <Layout.Sider className={'side'}>
                    <div>sider</div>
                </Layout.Sider>
                <Layout>
                    <Layout.Header class={'header'}>
                        <div>header</div>
                    </Layout.Header>
                    <Layout.Content className={'content'}>
                        <div>content</div>
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
