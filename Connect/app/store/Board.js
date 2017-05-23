Ext.define('Connect.store.Board', {
	extend: 'Ext.data.Store',
	model: 'Connect.model.Board',
	proxy: {
		type: 'ajax',
		api: {
			read  : '/grw/board/sBoardList.do', 
			create: '/grw/board/exeBoard.do?action=c',
			update: '/grw/board/exeBoard.do?action=u',
			destroy:'/grw/board/exeBoard.do?action=d'
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