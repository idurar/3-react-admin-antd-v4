import Home from "./Home.js";
import Page1 from "./Page1.js";
import Page2 from "./Page2.js";

/**
 * 根据组件名称获取页面
 */
function getPage(name, props) {
    switch (name) {
        case 'Home':
            return <Home {...props}/>;
        case 'Page1':
            return <Page1 {...props}/>;
        case 'Page2':
            return <Page2 {...props}/>;
        default:
            return null;
    }
}

export default getPage;
