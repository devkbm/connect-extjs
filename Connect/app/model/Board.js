Ext.define('Connect.model.Board', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.identifier.Negative'],
    identifier: 'negative',
	idProperty: 'pkBoard',
	fields: [	         
			 {name: 'sysDt',		type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'sysUser',		type: 'string',	persist: true},
			 {name: 'updDt',		type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'updUser',		type: 'string',	persist: true},	         	                
	         {name: 'pkBoard',		type: 'int'},
	         {name: 'ppkBoard',		type: 'string',  defaultValue: null},
	         {name: 'boardNm',		type: 'string'},
	         {name: 'boardType',	type: 'string'},	        
	         {name: 'boardDesc',	type: 'string'},	         	         
	         {name: 'fromDt',		type: 'date', dateFormat: 'Y-m-d'},
	         {name: 'toDt',			type: 'date', dateFormat: 'Y-m-d'},
	         {name: 'useYn',		type: 'string'},
			 {name: 'pwdYn',		type: 'string'},
			 {name: 'pwdMethod',	type: 'string'},
	         {name: 'articleCnt',	type: 'string'},			 
	         {name: 'seq',			type: 'string'}	         
	],
	proxy: {
		type: 'rest',
		headers: { 'Content-Type': 'application/json'},
		appendId: false,
		/*actionMethods : {      
			read : 'GET',      
			create : 'POST',   
			update : 'PUT',   
			destroy : 'DELETE' 
    	},*/
		api: {
			read  : 'http://localhost:8090/grw/boards', 
			create: 'http://localhost:8090/grw/boards',
			update: 'http://localhost:8090/grw/boards',
			destroy:'http://localhost:8090/grw/boards'
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
	}
}); 