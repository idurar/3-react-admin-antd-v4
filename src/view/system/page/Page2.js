import {Drawer} from "antd";
import React from 'react';

function Page2(props) {

    let [drawer, setDrawer] = React.useState(false);

    return (
        <div>
            <input/>
            <div style={{height: '80px'}}>Page2</div>
            <button onClick={() => setDrawer(true)}>open drawer</button>
            <Drawer visible={drawer} onClose={() => setDrawer(false)}>
                <div>something</div>
            </Drawer>
        </div>
    );
}

export default Page2;
