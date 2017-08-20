Ext.define('Connect.model.CommonCodeGroup', {
	extend: 'Ext.data.Model',
	idProperty: 'codeGroup',
	fields: [	         
			 {name: 'sysDt',			type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'sysUser',			type: 'string',	persist: false},
			 {name: 'updDt',			type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'updUser',			type: 'string',	persist: false},	         	                
	         {name: 'codeGroup',		type: 'string'},	         
	         {name: 'codeGroupName',	type: 'string'},
	         {name: 'codeLength',		type: 'int'},
			 {name: 'cmt',				type: 'string'},
			 {name: 'enumYn',			type: 'boolean'},
			 {name: 'enumPackage',		type: 'string', allowNull: true},			 
	         {name: 'enumName',			type: 'string', allowNull: true}	         
	]
}); 