Ext.define('Connect.store.AdminBoardTree', {
 	extend: 'Ext.data.TreeStore',
    model: 'Connect.model.BoardTree',
    nodeParam: 'ppkboard',
    defaultRootProperty: 'recv',
    proxy: {
        type: 'ajax',
        url: '/grw/board/sBoardTree.do',
        reader: {
            type: 'json'
        },
        filterParam: 'query'        
    },        
    root: {
        text: 'root',        
        expanded: true
    }
});