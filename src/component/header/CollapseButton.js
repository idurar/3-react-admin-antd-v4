import {Button} from "antd";
import MenuStore from "../../store/MenuStore.js";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

/**
 * 菜单展开、收起按钮
 */
function CollapseButton(props) {

    let menuStore = MenuStore();

    return (
        <div className={'CollapseButton'}>
            <Button onClick={() => menuStore.action.switchCollapse()}>
                {
                    menuStore.state.menuCollapse ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
                }
            </Button>
        </div>
    );
}

export default CollapseButton;
