Ext.define('Connect.view.admin.ConAdminController', {
    extend: 'Ext.app.ViewController',    
	alias: 'controller.admin',

	onPgmItemClick: function(view, record, item, index, e, eOpts ) {
		var tabpanel = this.lookupReference('tabadmin');
		var tab = tabpanel.down('[tabuniqid=' + record.data.pgmId + ']');

		if (!tab) {
			tab = Ext.create(record.data.pgmId, {
				title: record.data.title,
				tabuniqid:record.data.pgmId,
				closable: true
			});

			tabpanel.add(tab);
		}
		tabpanel.setActiveTab(tab);
	}
});