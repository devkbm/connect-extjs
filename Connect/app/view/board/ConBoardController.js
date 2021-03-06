Ext.define('Connect.view.board.ConBoardController', {
    extend: 'Ext.app.ViewController',    
	alias: 'controller.board',

	onBoardItemClick: function( view, record, item, index, e, eOpts ) {		
		var pkBoard = record.data.id;
		var viewModel = this.getViewModel();

    	viewModel.set('fkBoard',pkBoard);  
    	viewModel.set('pkArticle',null);       	    
    	
		this.fnLoadTab(pkBoard, record.data.text);    				    	
    },
  	
    fnCreateArticleView: function(title) {
    	var fkBoard = this.getViewModel().get('fkBoard');
    	
    	return Ext.create('Connect.view.board.article.ConArticleView', {
					title: title,
					itemId: 'con'+fkBoard,
					fkBoard: fkBoard,
					closable: true,
					tabConfig: {
						title: title,
            			tooltip: 'A button tooltip'
					},
					listeners: {
		                scope: this,
		                addBoardWrite: this.fnBoardWrite,
		                updateArticle: this.fnBoardUpdate,
		                deleteArticle: this.fnBoardDelete 
		            }					
				});
    },
    
    fnCreateArticleWrite: function(type, title) {
		var viewModel 	= this.getViewModel();
    	var fkBoard 	= viewModel.get('fkBoard');
    	var pkArticle 	= viewModel.get('pkArticle');
    	var rtn;
    	
    	var config = {
			title: title,
			fkBoard: fkBoard,
			closable: true,
			tabConfig: {
				title: title,
    			tooltip: title
			},
			listeners: {
                scope: this,
                aftersaved: function(obj,rec) {		
                	Ext.toast('저장이 완료되었습니다.', '저장 완료', 'tr','x-fa fa-save');	
                	
                	this.fnLoadTab(this.getViewModel().get('fkBoard'));
					obj.close();                	                			                	 		                			                									               
                }
            }
		};
    			
		if ( type == "update" ) {
			Ext.applyIf(config,{itemId : 'panel'+fkBoard+pkArticle});
			rtn = Ext.create('Connect.view.board.article.PanelArticleWrite', config);			
		} else {
			rtn = Ext.create('Connect.view.board.article.PanelArticleWrite', config);
		}
		
    	return rtn;
    },
    
    /**
     * 탭 추가 함수(게시판 조회)
     */
    fnAddTabPage: function(pgmId, title, type) {    	 
		var tabpanel= this.lookupReference('tabboard');
		var tab 	= this.getOpenedTabPage(pgmId, type);
		
		if (!tab) {
			
			if (pgmId == 'Connect.view.board.article.ConArticleView') {			
				tab = this.fnCreateArticleView(title);				
			} else if (pgmId == 'Connect.view.board.article.PanelArticleWrite') {							
				tab = this.fnCreateArticleWrite(type, title);
			}

			tabpanel.add(tab);
		}
		tabpanel.setActiveTab(tab);
		return tab;
	},
	
	getOpenedTabPage: function(pgmId, type) {
		var fkBoard 	= this.getViewModel().get('fkBoard');    	
		var tabpanel 	= this.lookupReference('tabboard');
		var tab 		= null;
				
		/**
		 * ConArticleView 클래스일 경우 itemId : con + fkBoard
		 * PanelArticleWrite 클래스일 경우 itemId : con +fkBoard + pkArticle
		 */
		if (pgmId == 'Connect.view.board.article.ConArticleView') {
			tab	= tabpanel.getComponent('con'+fkBoard);
		} else if ( pgmId == 'Connect.view.board.article.PanelArticleWrite' && type == 'update' ) {			
			var parentTab	= tabpanel.getComponent('con'+fkBoard);			
			if (parentTab) {				
				tab = tabpanel.getComponent('panel'+fkBoard+parentTab.pkArticle);
			}
		}
		
		return tab;
	},
	
	/**
	 * 탭 조회
	 */
	fnLoadTab: function(fkBoard, title) {
		var tabpanel = this.lookupReference('tabboard');
		var tab = tabpanel.getComponent('con'+fkBoard);
				
		if (tab) {
			tabpanel.setActiveTab(tab);					
		} else {
			tab = this.fnAddTabPage('Connect.view.board.article.ConArticleView', title);					
		}	
		tab.getController().fnLoadGrid(fkBoard);
	},
	
		
	/**
	 * 탭 선택 변경 이벤트
	 */
	fnTabChange: function( tabPanel, newCard, oldCard, eOpts ) {		
		var treeBoard = this.lookupReference('treeBoard');
		var record = treeBoard.getStore().getNodeById(newCard.fkBoard);
		
		if (record) {
        	treeBoard.getSelectionModel().select(record);
        	this.getViewModel().set('fkBoard',newCard.fkBoard);  
		}
	},
		
	fnBoardWrite: function() {    	
		var fkBoard = this.getViewModel().get('fkBoard');
		 		 		 		 
 		this.fnAddTabPage('Connect.view.board.article.PanelArticleWrite', '게시글 쓰기', 'insert' );
	},
	
	fnBoardUpdate: function() {    	
 		var fkBoard = this.getViewModel().get('fkBoard'); 		 		 		
 		var tabpanel = this.lookupReference('tabboard'); 		
		var contab = tabpanel.getComponent('con'+fkBoard);
 		var pkArticle = contab.pkArticle;
		 		 		
 		if ( Ext.isEmpty(pkArticle) ) {
 			return;
 		}
 		
 		var tab = this.fnAddTabPage('Connect.view.board.article.PanelArticleWrite', '게시글 수정', 'update');
 		tab.fnLoad(Connect.model.Article, pkArticle, {fkBoard:fkBoard, pkArticle: pkArticle});	
	},
	
	fnBoardDelete: function() {    	
 		var fkBoard = this.getViewModel().get('fkBoard'); 		 		
 		var tabpanel = this.lookupReference('tabboard'); 		
		var contab = tabpanel.getComponent('con'+fkBoard);
 		var pkArticle = contab.pkArticle; 		
		
		Connect.model.Article.getProxy().extraParams = {fkBoard: fkBoard};

		Connect.model.Article.load(pkArticle,{
			scope: this,		    
		    callback: function(record, operation, success) {
				record.erase({
					scope: this,				    
				    callback: function(record, operation, success) {
				        // do something whether the save succeeded or failed
				    	//this.fireEvent('afterdeleted', this, record, operation, success );						
						this.fnLoadTab(this.getViewModel().get('fkBoard'));
		                //this.close();	                	
				    }
				});	    	
		    }
		});	 	 	 		
	}
});