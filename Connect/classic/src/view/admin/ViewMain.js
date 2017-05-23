Ext.define('Connect.view.admin.ViewMain', {
	extend: 'Ext.view.View',	
	alias: 'widget.viewMain',
		
	tpl: new Ext.XTemplate(
			'<tpl for=".">',
		        '<div class="admin-view-main-item">',
		          '<img src="{src}" title="{caption}" />',
		          '<br/><span>{caption}</span>',
		        '</div>',
		    '</tpl>'
			),
	cls: 'admin-view-main',
	itemSelector: '.admin-view-main-item',
	overItemCls: 'admin-view-main-hover',
	trackOver: true,
	
    initComponent: function() {
    	
    	
    	this.store = Ext.create('Ext.data.Store', {
					    id:'imagesStore',
					    fields: [
					        { name:'src', type:'string' },
					        { name:'caption', type:'string' }
					    ],
					    data: [
					        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', 	caption:'Drawing & Charts' },
					        { src:'http://www.sencha.com/img/20110215-feat-data.png', 		caption:'Advanced Data' },
					        { src:'http://www.sencha.com/img/20110215-feat-html5.png', 		caption:'Overhauled Theme' },
					        { src:'http://www.sencha.com/img/20110215-feat-perf.png', 		caption:'Performance Tuned' },
					        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', 	caption:'Drawing & Charts' },
					        { src:'http://www.sencha.com/img/20110215-feat-data.png', 		caption:'Advanced Data' },
					        { src:'http://www.sencha.com/img/20110215-feat-html5.png', 		caption:'Overhauled Theme' },
					        { src:'http://www.sencha.com/img/20110215-feat-perf.png', 		caption:'Performance Tuned' },
					        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', 	caption:'Drawing & Charts' },
					        { src:'http://www.sencha.com/img/20110215-feat-data.png', 		caption:'Advanced Data' },
					        { src:'http://www.sencha.com/img/20110215-feat-html5.png', 		caption:'Overhauled Theme' },
					        { src:'http://www.sencha.com/img/20110215-feat-perf.png', 		caption:'Performance Tuned' }					        
					    ]
					});
    	
	    this.listeners = {
	    	scope : this,			   
			itemclick: {
				fn: function(view , record, item, index, e, eOpts) {
					//alert('a');
				}
			}
	    };
	    
    	this.callParent(arguments);	
    }
});

