import AppStore from "../../store/AppStore.js";

function BuildTime(props) {
    let appStore = AppStore();

    return (
        <div className={'buildTime'}>
            <div>构建时间：{appStore.state.buildTime}</div>
        </div>
    );
}

export default BuildTime;
