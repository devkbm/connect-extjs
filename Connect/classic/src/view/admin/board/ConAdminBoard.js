/**
 * 관리자 화면
 * 게시판 관리 프로그램
 */
Ext.define('Connect.view.admin.board.ConAdminBoard', {
    extend: 'Ext.container.Container',
    alias: 'widget.conAdminBoard',
    controller: 'adminBoard',
    
    requires: [        
        'Connect.view.admin.board.ConAdminBoardController',
        'Connect.view.admin.board.PanelBoard',
        'Connect.view.admin.board.TreeAdminBoard'
    ],
    layout: {
        type: 'border'
    },    
    height: 700,
    viewModel: {
    	data:{
    		pkBoard: null
    	}
    },
    
    items: [{
        xtype: 'treeAdminBoard',
        reference: 'treeAdminBoard',
        region: 'west',
        width: 200,        
        listeners: {
            itemclick: 'onBoardItemClick'
        }
    },{
        xtype: 'panelBoard',    	
        reference: 'panelBoard',
        region : 'center'
    }]

});