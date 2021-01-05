import CollapseButton from "./CollapseButton.js";
import './AppHeader.css';
import UserProfile from "./UserProfile";

/**
 * 页头组件
 */
function AppHeader(props) {
    return (
        <div className={'appHeader'}>
            <CollapseButton/>
            <UserProfile/>
        </div>
    );
}

export default AppHeader;
