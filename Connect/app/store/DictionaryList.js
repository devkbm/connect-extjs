Ext.define('Connect.store.DictionaryList', {
	extend: 'Ext.data.Store',
	model: 'Connect.model.Dictionary',
	proxy: {
		type: 'ajax',
		api: {
			read  : '/hrm/employee/getEmployeeDeptList.do', 
			create: '/hrm/employee/exeEmployeeDept.do?action=c',
			update: '/hrm/employee/exeEmployeeDept.do?action=u',
			destroy:'/hrm/employee/exeEmployeeDept.do?action=d'
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