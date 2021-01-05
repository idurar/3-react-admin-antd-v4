import {useHistory} from 'react-router-dom';
import {Tabs} from "antd";
import './TabBar.css';
import MenuStore from "../../store/MenuStore.js";

/**
 * Tab栏
 */
function TabBar(props) {
    let history = useHistory();
    let menuStore = MenuStore();

    // 点击标签页
    function tabClick(key) {
        if (menuStore.state.activeTab === key) return;
        let tab = menuStore.action.getTab(key);
        if (tab) {
            history.push(tab.route);
            menuStore.action.setActiveTab(key);
        }
        menuStore.action.storeTabList();
    }

    // 编辑标签页
    function tabEdit(key, action) {
        switch (action) {
            case 'add':
                addTab(key);
                break;
            case 'remove':
                removeTab(key);
                break;
            default:
        }
    }

    // 新增标签页
    function addTab(key) {

    }

    // 删除标签页
    function removeTab(key) {
        let temp = menuStore.state.activeTab;
        let preTab = menuStore.action.removeTab(key);
        if (preTab && temp === key) {
            history.push(preTab.route);
            menuStore.action.setActiveTab(preTab.id);
        }
        menuStore.action.storeTabList();
    }

    return (
        <div className={'tabBar'}>
            <Tabs hideAdd={true} type={'editable-card'} size={'small'} activeKey={menuStore.state.activeTab}
                  onTabClick={key => tabClick(key)} onEdit={(key, action) => tabEdit(key, action)}>
                {
                    menuStore.state.tabList.map(i =>
                        <Tabs.TabPane tab={i.name} key={i.id} closable={!i.unclose}></Tabs.TabPane>
                    )
                }
            </Tabs>
        </div>
    );
}

export default TabBar;
