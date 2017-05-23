Ext.define('Connect.view.admin.board.ConAdminBoardController', {
    extend: 'Ext.app.ViewController',    
	alias: 'controller.adminBoard',

	onBoardItemClick: function( view, record, item, index, e, eOpts ) {
    	this.getViewModel().set('pkBoard',record.data.id);
		var panelBoard = this.lookupReference('panelBoard');
		//panelBoard.fnLoadRecord({pkboard: record.data.id});
		//panelBoard.load(record);
			
		panelBoard.fnLoad(Grw.model.Board, record.data.id, {'pkBoard': record.data.id});

		/*panelBoard.getModel().getProxy().setExtraParam('pkboard',record.data.id);
		panelBoard.getModel().load({ // load user with ID of "1"			
		    success: function(user) {
		        panelBoard.loadRecord(user); // when user is loaded successfully, load the data into the form
		    }
		});*/
		
		
		/*Grw.model.Board.getProxy().setExtraParam('pkboard',record.data.id);
		Grw.model.Board.load(record.data.id,{ // load user with ID of "1"			
		    success: function(user) {
		        panelBoard.loadRecord(user); // when user is loaded successfully, load the data into the form
		    }
		});*/
		
    }
});