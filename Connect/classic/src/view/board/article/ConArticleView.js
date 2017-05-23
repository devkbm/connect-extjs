/**
 * 관리자 화면
 * 게시판 관리 프로그램
 */
Ext.define('Connect.view.board.article.ConArticleView', {
    extend: 'Ext.container.Container',
    alias: 'widget.conArticleView',    
    controller: 'articleView',
    requires: [                
		'Connect.view.board.article.ConArticleViewController',
        'Connect.view.board.article.GridArticle',        
        'Connect.view.board.article.PanelArticleView'
    ],
    layout: {
        type: 'border'
    },    
    config: {    	 
    	/**
    	 * fkboard
    	 */
    	fkBoard: null,
    	/**
    	 * 게시글 키
    	 */
    	pkArticle: null
    },       
    items: [{
    	xtype: 'toolbar',
    	region: 'north',
    	items: [{
    		xtype: 'button',
    		text: '글쓰기',    	
    		iconCls: 'x-fa fa-file-o',
    	 	handler: function() {			
    	 		var con = this.up('container').up('container');    	 		
    	 		if (con.hasListener('addBoardWrite')) { 
    	 			con.fireEvent('addBoardWrite');
    	 		}    	 		
	    	}
    	},{
    		xtype: 'button',
    		text: '수정',    	
    		iconCls: 'x-fa fa-file-text-o',
    	 	handler: function() {			
    	 		var con = this.up('container').up('container');    	 		
    	 		if (con.hasListener('updateArticle')) { 
    	 			con.fireEvent('updateArticle');
    	 		}
	    	}
    	},{
    		xtype: 'button',
    		text: '삭제',    	
    		iconCls: 'x-fa fa-trash-o',
    	 	handler: function() {			
    	 		var con = this.up('container').up('container');    	 		
    	 		if (con.hasListener('deleteArticle')) { 
    	 			con.fireEvent('deleteArticle');
    	 		}
	    	}
    	}]
    },{                   
        xtype: 'gridArticle',
        reference: 'gridArticle',
        region: 'center',
        listeners: {
        	itemclick: 'fnGridSelect'
        }
    },{
        xtype: 'panelArticleView',
        reference: 'panelArticleView',
        region: 'south',	  
        split: true,
    	height: 200	
    }]

});