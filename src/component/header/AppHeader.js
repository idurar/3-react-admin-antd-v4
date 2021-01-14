import CollapseButton from "./CollapseButton.js";
import './AppHeader.css';
import UserProfile from "./UserProfile.js";

/**
 * 页头组件
 */
function AppHeader(props) {
    return (
        <div className={'AppHeader'}>
            <CollapseButton/>
            <UserProfile/>
        </div>
    );
}

export default AppHeader;
