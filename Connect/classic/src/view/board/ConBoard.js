/**
 * 관리자 화면
 * 게시판 관리 프로그램
 */
Ext.define('Connect.view.board.ConBoard', {
    extend: 'Ext.container.Container',
    alias: 'widget.conBoard',
    controller: 'board',
    
    requires: [        
        'Connect.view.board.ConBoardController',        
        'Connect.view.board.aside.TreeBoard',
        'Connect.view.board.article.ConArticleView',       
        'Connect.view.board.article.PanelArticleWrite',
        'Ext.ux.TabCloseMenu'
    ],
    layout: {
    	 type: 'hbox',
    	 align: 'stretch'
    },    
    viewModel: {
    	data:{
    		fkBoard: null,
    		pkArticle: null
    	}
    },
    //height: 800,
    //floating: true,
    items: [{
        xtype: 'treeBoard',
        reference: 'treeBoard',        
        width: 200,     
        margin: '15 7 15 15',
        listeners: {
            itemclick: 'onBoardItemClick',
            addBoardWrite: 'fnBoardWrite',
            updateArticle: 'fnBoardUpdate',
            deleteArticle: 'fnBoardDelete'           
        }
    },{        
        xtype: 'tabpanel',        
        reference: 'tabboard',
        plugins: {ptype: 'tabclosemenu'},
        margin: '15 15 15 7',
        flex: 1,
        items:[{            
            xtype: 'conArticleView',
            tabConfig: {
				title: '공지 사항',
    			tooltip: 'A button tooltip'
			},
            listeners: {
            	itemclick: 'fnHitCnt'	
            }
            
        }],
        listeners: {
            tabchange: 'fnTabChange'        
        }
    }]

});