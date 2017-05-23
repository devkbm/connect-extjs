Ext.define('Connect.store.Article', {
	extend: 'Ext.data.Store',
	model: 'Connect.model.Article',
	proxy: {
		type: 'rest',
		api: {
			read  : '/grw/board/sArticleList.do', 
			create: '/grw/board/exeArticle.do?action=c',
			update: '/grw/board/exeArticle.do?action=u',
			destroy:'/grw/board/exeArticle.do?action=d'
		},
		reader: {
			type: 'json',
			rootProperty: 'recv'
		},
		writer: {
			type: 'json',
			rootProperty: 'send',
			allowSingle:false,
			//writeAllFields: true,
			encode: true
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