/**
 * 登录页面
 */
function LoginPage(props) {
    return (
        <div className={'loginPage'}>
            <div>登录页面</div>
            <button onClick={() => {
                props.history.push('/system');
            }}>Login
            </button>
        </div>
    );
}

export default LoginPage;
