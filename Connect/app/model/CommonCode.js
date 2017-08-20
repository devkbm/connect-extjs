Ext.define('Connect.model.CommonCode', {
	extend: 'Ext.data.Model',
	idProperty: 'code',
	fields: [	         
			 {name: 'sysDt',				type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'sysUser',				type: 'string',	persist: false},
			 {name: 'updDt',				type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'updUser',				type: 'string',	persist: false},	         	                
			 {name: 'codeGroup',			type: 'string'},	         
			 {name: 'code',					type: 'string'},	         
	         {name: 'codeName',				type: 'string'},	         
	         {name: 'codeNameAbbreviation',	type: 'string'},
	         {name: 'fromDate',				type: 'date'},
			 {name: 'toDate',				type: 'date'},
			 {name: 'seq',					type: 'int'},
			 {name: 'useYn',				type: 'boolean'},
			 {name: 'cmt',					type: 'string', allowNull: true}	         
	]
}); 