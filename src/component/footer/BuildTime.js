import AppStore from "../../store/AppStore.js";

/**
 * 构建时间组件
 */
function BuildTime(props) {
    let appStore = AppStore();

    return (
        <div className={'BuildTime'}>
            <div>构建时间：{appStore.state.buildTime}</div>
        </div>
    );
}

export default BuildTime;
