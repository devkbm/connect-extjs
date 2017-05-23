/**
 * 관리자 화면
 */
Ext.define('Connect.view.admin.ConAdmin', {
    extend: 'Ext.container.Container',
    alias: 'widget.conAdmin',    
    controller: 'admin',
    
    requires: [        
        'Connect.view.admin.ConAdminController',        
        'Connect.view.admin.TreeMenu',
        'Connect.view.admin.board.ConAdminBoard',        
        'Connect.view.admin.ViewMain'        
    ],
    layout: {
        type: 'border'
    },    
    height: 700,
    viewModel: {
    	data:{    		
    		systemcd: null,
    		langcd: 'Ko',
    		pcd: null
    	}
    },
    items: [{
        xtype: 'treeMenu',
        reference: 'treeMenu',
        region: 'west',
        width: 200,
        listeners: {
            itemclick: 'onPgmItemClick'
        }
    },{
        region: 'center',
        xtype: 'tabpanel',
        reference: 'tabadmin',
        items:[{
            title: 'Tab',
            xtype: 'viewMain'
        }]
    }]

});