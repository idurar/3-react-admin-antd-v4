import BuildTime from "./BuildTime.js";
import './AppFooter.css';

/**
 * 页脚组件
 */
function AppFooter(props) {

    return (
        <div className={'appFooter'}>
            <BuildTime/>
        </div>
    );
}

export default AppFooter;
