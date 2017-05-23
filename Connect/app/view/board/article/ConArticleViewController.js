Ext.define('Connect.view.board.article.ConArticleViewController', {
    extend: 'Ext.app.ViewController',    
	alias: 'controller.articleView',
	
	fnLoadGrid: function(fkBoard) {
		this.getView().fkBoard= fkBoard;	
		var gridArticle = this.lookupReference('gridArticle');		
		gridArticle.fkBoard = fkBoard;
		gridArticle.fnLoad();		
	},
	
	fnGridSelect: function(t, record, index, eOpts) {	
		var panelArticleView = this.lookupReference('panelArticleView');
		panelArticleView.setActive(record);
		
		this.getViewModel().set('pkArticle', record.data.pkArticle);		
		this.getView().pkArticle = record.data.pkArticle;		
		
		var hitStore = Ext.getStore('ArticleHitCnt');
		
		hitStore.proxy.setExtraParam('id',record.data.pkArticle);
		hitStore.proxy.setExtraParam('userid',"test");
		hitStore.load({
		    scope: this,
		    callback: function(records, operation, success) {
		        //record.data.hitcnt = records[0].data.hitcnt;		        
				var rec = this.lookupReference('gridArticle').getStore().getById(record.data.pkArticle);
				rec.set('hitCnt',records[0].data.hitCnt);
				rec.set('checkYn','Y');
		    }
		});
	}
});