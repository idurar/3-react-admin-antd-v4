import AppStore from "../../store/AppStore.js";
import MenuStore from "../../store/MenuStore.js";
import './AppTitle.css';
import logoImg from '../../assets/logo.svg';

/**
 * 标题组件
 */
function AppTitle(props) {

    let appStore = AppStore();
    let menuStore = MenuStore();

    return (
        <div className={'AppTitle'} title={appStore.state.appTitle}>
            <div className={'bg'}>
                <div className={'bg-content'}>
                    <div className={'logo-div'}>
                        <img className={'logo'} src={logoImg} alt={''}/>
                    </div>
                    {
                        menuStore.state.menuCollapse ? null :
                            <div className={'title-div'}>
                                <span className={'title'}>{appStore.state.appTitle}</span>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default AppTitle;
