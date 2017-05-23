Ext.define('Connect.store.BoardTree', {
 	extend: 'Ext.data.TreeStore',
    model: 'Connect.model.BoardTree',
    nodeParam: 'parentId',
    defaultRootProperty: 'data',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8090/grw/boardHierarchy',
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