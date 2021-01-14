import Store from "./Store.js";
import React from 'react';
import {Modal} from "antd";

/**
 * 系统数据
 */
export default Store.bind({
    state: {
        // 页面高度
        frameHeight: window.innerHeight,
        // 全局加载提示
        loading: {
            // 显示加载
            on: false,
            // 加载提示
            text: '加载中...',
        },
    },
    action: {
        // 更改页面高度
        windowHeightChange() {
            this.publish({frameHeight: window.innerHeight});
        },
        // 打开加载框
        openLoading(text) {
            this.publish({
                loading: {
                    ...{
                        on: true,
                        text: text || this.state().loading.text,
                    }
                }
            });
        },
        // 关闭加载框
        closeLoading() {
            this.publish({
                loading: {
                    ...{
                        on: false,
                        text: '加载中...',
                    }
                }
            });
        },
        // 打开对话框
        openDialog(option, type) {
            return Modal[type || 'info']({
                centered: true,
                cancelText: '否',
                okText: '是',
                ...option
            });
        },
    }
}, React)();
