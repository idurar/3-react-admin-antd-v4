import SystemRouter from "../../router/SystemRouter.js";
import React from 'react';

/**
 * 系统主页
 */
function System(props) {

    let basePath = '/system';

    function toPage(route) {
        props.history.push(basePath + route);
    }

    return (
        <div>
            <div>system</div>
            <button onClick={() => toPage('/home')}>home</button>
            <button onClick={() => toPage('/page1')}>page1</button>
            <button onClick={() => toPage('/page2')}>page2</button>
            <div>
                <SystemRouter base={basePath}/>
            </div>
        </div>
    );
}

export default System;
