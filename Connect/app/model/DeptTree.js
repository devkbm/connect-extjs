Ext.define('Connect.model.DeptTree', {
	extend: 'Ext.data.TreeModel',
	idProperty: 'id',
	fields: [	
			{name: 'id',			type: 'string'},
		    {name: 'text',			type: 'string'},
			{name: 'orgnztId',		type: 'string'},
			{name: 'deptcd',		type: 'string'},
			{name: 'deptnm',		type: 'string'},
		    {name: 'fromdd',		type: 'string'},
		    {name: 'todd',			type: 'string'},
		    {name: 'prtseq',		type: 'string'}
	]
}); 