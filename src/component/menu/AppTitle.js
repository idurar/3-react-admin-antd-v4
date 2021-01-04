import AppStore from "../../store/AppStore.js";
import './AppTitle.css';
import logoImg from '../../logo.svg';

/**
 * 标题组件
 */
function AppTitle(props) {

    let appStore = AppStore();

    return (
        <div className={'appTitle'} title={appStore.state.appTitle}>
            <div className={'bg'}>
                <div className={'bg-content'}>
                    <div className={'logo-div'}>
                        <img className={'logo'} src={logoImg}/>
                    </div>
                    {
                        (() => {
                            if (!props.collapse) {
                                return (
                                    <div className={'title-div'}>
                                        <span className={'title'}>{appStore.state.appTitle}</span>
                                    </div>
                                );
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    );
}

AppTitle.defaultProps = {
    collapse: false,
};

export default AppTitle;
