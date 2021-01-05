// eslint-disable-next-line import/no-anonymous-default-export
export default {
    menuList: [
        {
            id: '1',
            icon: 'AppstoreOutlined',
            name: '菜单1',
            submenu: [
                {
                    id: '1-1',
                    icon: 'AppstoreOutlined',
                    name: '菜单1-1',
                    route: '/system/page1'
                },
                {
                    id: '1-2',
                    icon: 'AppstoreOutlined',
                    name: '菜单1-2',
                    route: '/system/page2',
                }
            ]
        },
        {
            id: '2',
            icon: 'AppstoreOutlined',
            name: '菜单2',
        },
        {
            id: '3',
            icon: 'AppstoreOutlined',
            name: '菜单3',
            submenu: [
                {
                    id: '3-1',
                    icon: 'AppstoreOutlined',
                    name: '菜单3-1',
                    submenu: [
                        {
                            id: '3-1-1',
                            icon: 'AppstoreOutlined',
                            name: '菜单3-1-1',
                        },
                        {
                            id: '3-1-2',
                            icon: 'AppstoreOutlined',
                            name: '菜单3-1-2',
                        },
                        {
                            id: '3-1-3',
                            icon: 'AppstoreOutlined',
                            name: '菜单3-1-3',
                        },
                        {
                            id: '3-1-4',
                            icon: 'AppstoreOutlined',
                            name: '菜单3-1-4',
                        },
                    ]
                },
                {
                    id: '3-2',
                    icon: 'AppstoreOutlined',
                    name: '菜单3-2',
                    submenu: [
                        {
                            id: '3-2-1',
                            icon: 'AppstoreOutlined',
                            name: '菜单3-2-1',
                        },
                        {
                            id: '3-2-2',
                            icon: 'AppstoreOutlined',
                            name: '菜单3-2-2',
                        }
                    ]
                }
            ]
        },
        {
            id: '4',
            icon: 'AppstoreOutlined',
            name: '示例',
            submenu: [
                {
                    id: 'card',
                    icon: 'AppstoreOutlined',
                    name: '卡片',
                    route: '/system/demo/cardDemo',
                },
                {
                    id: 'table',
                    icon: 'AppstoreOutlined',
                    name: '表格',
                    route: '/system/demo/tableDemo',
                },
            ]
        },
    ],

}
