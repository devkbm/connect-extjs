Ext.define('Connect.model.Dictionary', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.identifier.Negative'],
    identifier: 'negative',
	idProperty: 'pkTerm',
	fields: [	         
			 {name: 'sysDt',			type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'sysUser',			type: 'string',	persist: false},
			 {name: 'updDt',			type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'updUser',			type: 'string',	persist: false},	         	                
	         {name: 'pkTerm',			type: 'int'},	         
	         {name: 'nameKor',			type: 'string'},
	         {name: 'abbreviation',		type: 'string'},
			 {name: 'nameEng',			type: 'string'},
			 {name: 'abbreviationEng',	type: 'string', allowNull: true},
			 {name: 'detail',			type: 'string', allowNull: true},			 
	         {name: 'comment',			type: 'string', allowNull: true}	         
	],
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
			encode: true
		}
	}
}); 