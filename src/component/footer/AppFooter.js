import BuildTime from "./BuildTime.js";
import './AppFooter.css';

function AppFooter(props) {

    return (
        <div className={'appFooter'}>
            <BuildTime/>
        </div>
    );
}

export default AppFooter;
