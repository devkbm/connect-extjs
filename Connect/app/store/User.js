Ext.define('Connect.store.User', {
	extend: 'Ext.data.Store',
	model: 'Connect.model.User',
	batch: true,
	autoSave: false,
	proxy: {
		type: 'ajax',
		api: {
			read  : '/cmn/user/selectUserList.do'
		},
		reader: {
			type: 'json',
			rootProperty: 'recv'
		}
	},
	listeners: {
		beforeload: function (dataStore, oper) {
		},
		load: function(dataStore, rows, bool) {
			// 데이터가 읽어진후에 발생하는 이벤트
    		//alert('asdf');
    	}
	}
}); 