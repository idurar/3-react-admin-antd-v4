import 'antd/dist/antd.css';
import AppRouter from "./router/AppRouter.js";
import AppStore from "./store/AppStore.js";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import './App.css';

/**
 * 主组件
 */
function App() {
    const appStore = AppStore();

    // 设置title
    appStore.action.setPageTitle();

    return (
        <div className={'App'}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
