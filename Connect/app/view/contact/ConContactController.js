Ext.define('Connect.view.contact.ConContactController', {
    extend: 'Ext.app.ViewController',    
	alias: 'controller.contact',
	
	fnLoadTab: function(key) {
		var tabpanel = this.lookupReference('tabboard');
		var tab = tabpanel.getComponent('grid'+key);
				
		if (tab) {
			tabpanel.setActiveTab(tab);					
		} else {
			tab = this.fnAddTabPage('Grw.view.board.GridArticle', 'grid'+key, '게시글'+key);					
		}				
		tab.fkboard = key;
		tab.fnLoad();		
	},
	
	fnLoadGrid: function(key) {
		var gridArticle = this.lookupReference('gridUser');		
		gridArticle.fkboard = key;
		gridArticle.fnLoad();
		
	},
	
	fnGridSelect: function(t, record, index, eOpts) {	
		var gridUser = this.lookupReference('gridUser');		
		//console.log(record.data);
		gridUser.deptcd =  record.data.id;		
		gridUser.fnLoad();
	}
});