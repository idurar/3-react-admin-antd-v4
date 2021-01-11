import {Switch, Redirect} from 'react-router-dom';
import LoginPage from "../view/LoginPage.js";
import System from "../view/system/System.js";
import NotFound from "../view/NotFound.js";
import React from "react";
import NProgressRoute from "./NProgressRoute.js";

/**
 * App路由
 */
function AppRouter(props) {

    // 路由数据
    let routes = [
        {
            path: ['/login'],
            component: LoginPage,
            exact: true,
        },
        {
            path: ['/system'],
            component: System,
        },
    ];

    return (
        <Switch>
            <Redirect exact={true} path={['']} to={'/login'}/>
            {
                routes.map(r => <NProgressRoute key={r.path[0]} path={r.path} exact={r.exact} component={r.component}/>)
            }
            <NProgressRoute path={['/notFound', '*']} component={NotFound}/>
        </Switch>
    );
}


export default AppRouter;
