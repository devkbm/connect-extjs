Ext.define('Connect.store.DictionaryList', {
	extend: 'Ext.data.Store',
	model: 'Connect.model.Dictionary',
	proxy: {		
		type: 'ajax',
		//appendId: true,
		//headers: {'Content-Type' : 'application/json' },
		api: {
			read  : 'http://localhost:8090/common/terms', 
			create: 'http://localhost:8090/common/terms', 
			update:	'http://localhost:8090/common/terms', 
			destroy:'http://localhost:8090/common/terms'
		},
		actionMethods: {
			read: 'GET',
			create: 'POST',
			update:	'PUT',
			destroy: 'DELETE'
		},
		reader: {
			type: 'json',
			rootProperty: 'data'
		},
		writer: {
			type: 'json',
			//rootProperty: 'send',
			allowSingle:false,
			writeAllFields: true
			//encode: true
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