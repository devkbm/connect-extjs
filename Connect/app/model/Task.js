Ext.define('Connect.model.Task', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.identifier.Negative'],
    identifier: 'negative',
	idProperty: 'pkTask',
	fields: [	         
			 {name: 'sysDt',			type: 'date', 	dateFormat: 'c',	persist: false},
			 {name: 'sysUser',			type: 'string',	persist: false},
			 {name: 'updDt',			type: 'date', 	dateFormat: 'c',	persist: false},
			 {name: 'updUser',			type: 'string',	persist: false},	         	                
	         {name: 'pkTask',			type: 'int'},
			 {name: 'task',				type: 'string'},
			 {name: 'isCompleted',		type: 'boolean'},
			 {name: 'dueDate',			type: 'date', 	dateFormat: 'c'},
			 {name: 'comments',			type: 'string'},
			 {name: 'fkTaskGroup',		type: 'string'}
	]
}); 