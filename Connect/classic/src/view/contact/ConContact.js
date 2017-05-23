/**
 * 관리자 화면
 * 게시판 관리 프로그램
 */
Ext.define('Connect.view.contact.ConContact', {
    extend: 'Ext.container.Container',
    alias: 'widget.conContact',    
    controller: 'contact',
    requires: [                
		'Connect.view.contact.ConContactController',
        'Connect.view.contact.GridUser',        
        'Connect.view.contact.TreeDept'                
    ],
    layout: {
        type: 'border'
    },    
    config: {
    	/**
    	 * 게시판 키
    	 */
    	//fkboard: null,
    	
    	/**
    	 * 게시글 키
    	 */
    	pkarticle: null
    },       
    items: [{
    	xtype: 'toolbar',
    	region: 'north',
    	items: [{
    		xtype: 'button',
    		text: '글쓰기',    		
    	 	handler: function() {			
    	 		var con = this.up('container').up('container');    	 		
    	 		if (con.hasListener('addBoardWrite')) { 
    	 			con.fireEvent('addBoardWrite');
    	 		}
	    	}
    	},{
    		xtype: 'button',
    		text: '글수정',    		
    	 	handler: function() {			
    	 		var con = this.up('container').up('container');    	 		
    	 		if (con.hasListener('updateArticle')) { 
    	 			con.fireEvent('updateArticle');
    	 		}
	    	}
    	},{
    		xtype: 'button',
    		text: '글삭제',    		
    	 	handler: function() {			
    	 		var con = this.up('container').up('container');    	 		
    	 		if (con.hasListener('delArticle')) { 
    	 			con.fireEvent('delArticle');
    	 		}
	    	}
    	}]
    },{                   
        xtype: 'treeDept',
        reference: 'treeDept',
        region: 'west',
        width: 200,
        listeners: {
        	select: 'fnGridSelect'
        }
    },{
        xtype: 'gridUser',
        reference: 'gridUser',
        region: 'center'        
    }]

});