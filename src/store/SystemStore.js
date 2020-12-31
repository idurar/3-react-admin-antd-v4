import Store from "./Store.js";
import React from 'react';

export default Store.bind({
    state: {
        frameHeight: window.innerHeight,
    },
    action: {
        windowHeightChange() {
            this.publish({frameHeight: window.innerHeight});
        },
    }
}, React)();
