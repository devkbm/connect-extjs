Ext.define('Connect.model.Dictionary', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.identifier.Negative'],
    identifier: 'negative',
	idProperty: 'pkDictionary',
	fields: [	         
			 {name: 'sysDt',		type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'sysUser',		type: 'string',	persist: false},
			 {name: 'updDt',		type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'updUser',		type: 'string',	persist: false},	         	                
	         {name: 'pkDictionary',	type: 'int'},	         
	         {name: 'word',			type: 'string'},	         
	         {name: 'meaning',		type: 'string'},
	         {name: 'abbrKor',		type: 'string', allowNull: true},	        
	         {name: 'abbrEng',		type: 'string', allowNull: true},	         	         	        
	         {name: 'wordType',		type: 'string', allowNull: true},	         
	         {name: 'cmt',			type: 'string', allowNull: true}	         
	],
	proxy: {
		type: 'ajax',
		api: {
			read  : '/cmn/dictionary/getDictionaryList.do', 
			create: '/cmn/dictionary/exeDictionary.do?action=c',
			update: '/cmn/dictionary/exeDictionary.do?action=u',
			destroy:'/cmn/dictionary/exeDictionary.do?action=d'
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