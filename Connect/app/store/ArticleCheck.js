Ext.define('Connect.store.ArticleCheck', {
	extend: 'Ext.data.Store',
	model: 'Connect.model.ArticleCheck',
	proxy: {
		type: 'ajax',
		api: {
			read  : '/grw/board/sArticleCheckList.do'
		},
		reader: {
			type: 'json',
			rootProperty: 'recv'
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