/**
 * 通用Store，通过bind()将组件绑定到this
 *
 * 限制：action不能有嵌套在对象中的方法
 *
 * @param react React Hooks只能在组件中使用，需要将React传递进来
 */
function Store(react) {

    // 以便在action方法中可用通过this访问state和publish
    this.action.state = () => {
        return {...state};
    };
    this.action.publish = (newState) => {
        // 更新状态
        state = {...state, ...newState};
        // 通知订阅
        subscribe.forEach(s => s(state));
    };

    // 状态
    let state = this.state;
    // 操作
    let action = this.action;

    // 订阅
    let subscribe = [];

    return () => {
        // 创建订阅，此处newSubscribe相当于React.useState()[1]
        const [, newSubscribe] = react.useState();
        // 监听状态变化
        react.useEffect(() => {
            // 增加订阅
            subscribe.push(newSubscribe);
            // 组件卸载时执行
            return () => {
                // 移除订阅
                subscribe = subscribe.filter(s => s !== newSubscribe);
            };
        }, [state]);
        return {state, action};
    };
}

export default Store;
