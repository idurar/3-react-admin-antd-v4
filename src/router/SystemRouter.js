import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from "../view/system/page/Home.js";
import Page1 from "../view/system/page/Page1.js";
import Page2 from "../view/system/page/Page2.js";

/**
 * 系统主页路由
 */
function SystemRouter(props) {
    return (
        <Switch>
            <Route path={[props.base, props.base + "/home"]} exact={true} component={Home}/>
            <Route path={props.base + "/page1"} component={Page1}/>
            <Route path={props.base + "/page2"} component={Page2}/>
        </Switch>
    );
}

SystemRouter.defaultProps = {
    base: '',
};

export default SystemRouter;
