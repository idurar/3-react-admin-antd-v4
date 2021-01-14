import {useHistory} from 'react-router-dom';
import {Dropdown, Menu} from "antd";
import {UserOutlined} from "@ant-design/icons";
import './UserProfile.css';

/**
 * 用户信息
 */
function UserProfile(props) {
    let history = useHistory();

    // 弹出菜单
    let popMenu = (
        <Menu>
            <Menu.Item key={'info'}>个人信息</Menu.Item>
            <Menu.Item key={'setting'}>设置</Menu.Item>
            <Menu.Divider/>
            <Menu.Item key={'logout'} onClick={() => history.push('/login')}>登出</Menu.Item>
        </Menu>
    );

    return (
        <div className={'UserProfile'}>
            <Dropdown overlay={popMenu} trigger={['click']}>
                <div>
                    <UserOutlined/> admin
                </div>
            </Dropdown>
        </div>
    );
}

export default UserProfile;
