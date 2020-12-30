import 'antd/dist/antd.css';
import AppRouter from "./router/AppRouter.js";
import AppStore from "./store/AppStore.js";
import {BrowserRouter} from "react-router-dom";

/**
 * 主组件
 */
function App() {
    const appStore = AppStore();
    appStore.action.setPageTitle();

    return (
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
