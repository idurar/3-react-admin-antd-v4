import {Route, Switch} from 'react-router-dom';
import LoginPage from "../view/LoginPage.js";
import System from "../view/system/System.js";

/**
 * App路由
 */
function AppRouter(props) {
    return (
        <Switch>
            <Route path={[props.base, props.base + '/login']} exact={true} component={LoginPage}/>
            <Route path={props.base + '/system'} component={System}/>
        </Switch>
    );
}

AppRouter.defaultProps = {
    base: '',
};

export default AppRouter;
