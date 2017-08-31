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
        'Connect.view.code.CodeModel',
        'Connect.view.code.article.GridCodeGroup',
        'Connect.view.code.article.GridCode'        
    ],
    layout: {
    	 type: 'hbox',
    	 align: 'stretch'
    },        
    //height: 800,
    //floating: true,
    items: [{        
        xtype: 'gridCodeGroup',
        reference: 'gridCodeGroup',
        flex:1
        //gridDetail: {obj: lookupReference('gridCode'),fk:'codeGroup'}
    },{        
        xtype: 'gridCode',        
        reference: 'gridCode',
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