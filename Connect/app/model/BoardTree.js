Ext.define('Connect.model.BoardTree', {
	extend: 'Ext.data.TreeModel',
	idProperty: 'id',
	fields: [	
			{name: 'id',			type: 'string'},
		    {name: 'text',			type: 'string'},		    
			{name: 'leaf',			type: 'boolean'},
			{name: 'qtitle',		type: 'string'},
			{name: 'qtip',			type: 'string'},
			{name: 'parentId',		type: 'string'}
	]
}); 
