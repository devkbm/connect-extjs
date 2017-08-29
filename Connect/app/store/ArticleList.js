Ext.define('Connect.store.ArticleList', {
    extend: 'Ext.data.Store',
    model: 'Connect.model.ArticleList',
    proxy: {
        type: 'ajax',
        api: {
            read  : 'http://localhost:8090/grw/boards/articles'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        beforeload: function (dataStore, oper) {
            //comboStore.load();
        },
        load: function(dataStore, rows, bool) {
            // 데이터가 읽어진후에 발생하는 이벤트
            //alert('asdf');                
            //grid.getView().refresh();
        }
    }
}); 
