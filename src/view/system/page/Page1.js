import SystemStore from "../../../store/SystemStore.js";

function Page1(props) {
    let systemStore = SystemStore();

    return (
        <div>
            <input/>
            <button onClick={() => {
                systemStore.action.openLoading('数据提交中...');
                setTimeout(() => {
                    systemStore.action.closeLoading();
                }, 3000);
            }}>load
            </button>
            <button onClick={() => {
                let dialog = systemStore.action.openDialog({
                    title: 'this is an info',
                    okText: '确定',
                    onOk(close) {
                        systemStore.action.openDialog({title: 'another dialog'});
                    }
                }, 'warning');
                setTimeout(() => {
                    if (dialog) dialog.destroy();
                }, 3000);
            }}>dialog
            </button>
            <div style={{height: '800px'}}>Page1</div>
        </div>
    );
}

export default Page1;
