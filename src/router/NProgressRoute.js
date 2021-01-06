import {Route} from 'react-router-dom';
import React from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './NProgressRoute.css';

/**
 * 顶部加载条路由组件
 */
function NProgressRoute(props) {

    // 顶部加载进度条
    NProgress.configure({
        // 关闭加载圈
        showSpinner: false,
    });

    React.useState(NProgress.start());

    React.useEffect(() => {
        NProgress.done();
        return () => {
            NProgress.start();
        };
    });

    return (
        <Route {...props}/>
    );
}

export default NProgressRoute;
