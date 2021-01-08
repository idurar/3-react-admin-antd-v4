import {BackTop, Tabs} from "antd";
import './TabBar.css';
import MenuStore from "../../store/MenuStore.js";
import Component from "../../view/system/page/index.js";
import {ArrowUpOutlined} from "@ant-design/icons";

/**
 * Tab栏
 */
function TabBar(props) {
    let menuStore = MenuStore();

    // 点击标签页
    function tabClick(key) {
        if (menuStore.state.activeTab === key) return;
        let tab = menuStore.action.getTab(key);
        if (tab) {
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
        //  关闭的是当前页，则激活左边一个标签页
        if (preTab && temp === key) {
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
                        <Tabs.TabPane tab={i.name} key={i.id} closable={!i.unclose}>
                            <div className={'tabContent'} id={'tabContent-' + i.id}>
                                {
                                    Component[i.component]()
                                }
                            </div>
                            <BackTop visibilityHeight={0} target={() => document.querySelector('#tabContent-' + i.id)}>
                                <div className={'up-div'}>
                                    <div className="up"><ArrowUpOutlined/><span>回到顶部</span></div>
                                </div>
                            </BackTop>
                        </Tabs.TabPane>
                    )
                }
            </Tabs>
        </div>
    );
}

export default TabBar;
