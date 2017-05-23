Ext.define('Connect.store.DeptTree', {
 	extend: 'Ext.data.TreeStore',
    model: 'Connect.model.DeptTree',
    nodeParam: 'pdeptCd',
    defaultRootProperty: 'recv',
    proxy: {
        type: 'ajax',
        url: '/hrm/dept/selectDeptTree.do',
        reader: {
            type: 'json'
        },
        filterParam: 'query'        
    },        
    root: {
        text: '없음',        
        expanded: true
    }
});