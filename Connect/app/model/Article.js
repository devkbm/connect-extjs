Ext.define('Connect.model.Article', {
	extend: 'Ext.data.Model',
	idProperty: 'pkArticle',
	requires: ['Ext.data.identifier.Negative'],
    identifier: 'negative',
	fields: [	         
			 {name: 'sysDt',		type: 'date',	dateFormat: 'c',	persist: false},
			 {name: 'sysUser',		type: 'string',	persist: false},
			 {name: 'sysuserName',	type: 'string', persist: false},
			 {name: 'updDt',		type: 'date',	dateFormat: 'c',	persist: false},
			 {name: 'updUser',		type: 'string', persist: false},	         
	         {name: 'pkArticle',	type: 'int'},
	         {name: 'ppkArticle',	type: 'int'},	         
	         {name: 'title',		type: 'string'},
	         {name: 'contents',		type: 'string'},
	         {name: 'pwd',			type: 'string', allowNull: true},	
	         {name: 'hitCnt',		type: 'int'},
	         {name: 'checkyn',		type: 'string', persist: false},	         	         	        
	         {name: 'fromDt',		type: 'date', 	dateFormat: 'Ymd'},
	         {name: 'toDt',			type: 'date', 	dateFormat: 'Ymd'},	         
	         {name: 'seq',			type: 'string'},
	         {name: 'depth',		type: 'string'},
	         {name: 'fileYn',		type: 'string'},	         
	         {name: 'fkBoard',		type: 'string', persist: false}
	],
	proxy: {
		type: 'rest',
		//headers: { 'Content-Type': 'application/json'},
		appendId: true,
		api: {
			read  : 'http://localhost:8090/grw/boards/articles', 
			create: 'http://localhost:8090/grw/boards/articles',
			update: 'http://localhost:8090/grw/boards/articles',
			destroy:'http://localhost:8090/grw/boards/articles'
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
