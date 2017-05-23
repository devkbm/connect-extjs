Ext.define('Connect.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        children: [
            {
                text:   '관리자',
                view:   'Connect.view.admin.ConAdmin',
                leaf:   true,
                iconCls: 'right-icon new-icon x-fa fa-html5',                
                routeId: 'admin',
                item: 'conAdmin'
            },
            {
                text:   '게시판',
                view:   'Connect.view.board.ConBoard',
                iconCls: 'right-icon hot-icon x-fa fa-send ',
                leaf:   true,
                routeId: 'board',
                item: 'conBoard'
            },
            {
                text:   '게시판 테스트',
                view:   'Connect.view.testd.PanelBoard',
                iconCls: 'right-icon hot-icon x-fa fa-send ',
                leaf:   true,
                routeId: 'board2',
                item: 'conBoard'
            },
            {
                text:   '업로드 테스트',
                view:   'Connect.view.test.Test',
                iconCls: 'right-icon hot-icon x-fa fa-send ',
                leaf:   true,
                routeId: 'board3',
                item: 'conBoard'
            }
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});
