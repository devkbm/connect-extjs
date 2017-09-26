Ext.define('Connect.view.todo.ConTodo', {
    extend: 'Ext.container.Container',
    alias: 'widget.conTodo',
    defaultListenerScope: true,
    referenceHolder: true,
    //controller: 'board',
    viewModel: {
        type: 'todo'
    },
    requires: [      
        'Connect.view.todo.TodoModel',        
        'Connect.view.todo.article.GridTask',
        'Connect.view.todo.aside.GridTaskGroup'
    ],
    layout: {
    	 type: 'hbox',
    	 align: 'stretch'
    },        
    //height: 800,
    //floating: true,
    items: [{        
        xtype: 'gridTaskGroup',
        reference: 'gridTaskGroup',
        flex:1
        //gridDetail: {obj: lookupReference('gridCode'),fk:'codeGroup'}
    },{        
        xtype: 'gridTask',        
        reference: 'gridTask',
        flex:1
        //gridMaster: 
    }],
    listeners: {
        boxready : function( view, width, height, eOpts ) {
            var gridCodeGroup = this.lookupReference('gridCodeGroup');
            var gridCode = this.lookupReference('gridCode');

            gridCodeGroup.gridDetail = [{obj: gridCode,fk:'codeGroup'}];

            gridCode.gridMatser = gridCodeGroup;
        }
    }
});