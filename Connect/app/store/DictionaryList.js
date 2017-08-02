Ext.define('Connect.store.DictionaryList', {
	extend: 'Ext.data.Store',
	model: 'Connect.model.Dictionary',
	proxy: {		
		type: 'rest',
		appendId: true,
		api: {
			read  : 'http://localhost:8090/common/terms', 
			create: 'http://localhost:8090/common/terms', 
			update:	'http://localhost:8090/common/terms', 
			destroy:'http://localhost:8090/common/terms'
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
		// 데이터가 읽어진후에 발생하는 이벤트    
		load: function(dataStore, rows, bool) {			
    	}
	}
}); 