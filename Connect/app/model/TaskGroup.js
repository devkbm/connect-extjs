Ext.define('Connect.model.TaskGroup', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.identifier.Negative'],
    identifier: 'negative',
	idProperty: 'pkTaskGroup',
	fields: [	         
			 {name: 'sysDt',			type: 'date', 	dateFormat: 'c',	persist: false},
			 {name: 'sysUser',			type: 'string',	persist: false},
			 {name: 'updDt',			type: 'date', 	dateFormat: 'c',	persist: false},
			 {name: 'updUser',			type: 'string',	persist: false},	         	                
	         {name: 'pkTaskGroup',		type: 'int'},	         
	         {name: 'userId',			type: 'string'},
			 {name: 'taskGroupName',	type: 'string'}
	]
}); 