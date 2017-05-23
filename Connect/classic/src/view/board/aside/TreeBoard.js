Ext.define('Connect.view.board.aside.TreeBoard', {
	extend: 'Ext.tree.Panel',	
	alias: 'widget.treeBoard',
	requires: [
        'nx.TreeFilter',
		'nx.form.field.ComboBox'
    ],
	
    config: {
		title: '게시판',
		hideHeaders: true,
		rootVisible: false,		
		//collapsible: true, 		
		defaultListenerScope: true
    },
	plugins: [{
		ptype: 'treefilter',
        allowParentFolders: true
    }],
    
    initComponent: function() {
    	this.store = Ext.getStore('BoardTree');
    	
    	var today = new Date();    	    	
			
		/* 조회 조건 툴바 */ 
	   this.dockedItems = [{
    		itemId: 'tool',
			xtype: 'toolbar',
			dock: 'top',
			vertical: true,
			width: 150,
			items: [{
					itemId: 'boardName',
					name: 'boardName',
					xtype: 'textfield',
					width: 180,
					fieldLabel: '필터',
					labelWidth: 40,					
    				enableKeyEvents: true,    				
	                triggers: {
				        clear: {
				            cls: 'x-form-clear-trigger',
				            handler: function() {
				            	this.setValue('');				                
				            }
				        },
				        search: {
				            cls: 'x-form-search-trigger',
				            scope : this,
				            handler: function() {
				            	this.fnBtnRefresh();
				            }
				        }
				    },
	                listeners: {
	                	scope : this,
		                keydown : function(t,e) {
		                	var tree = t.up('treepanel');      
	                 		if (t.value != Ext.emptyString) {
	                 			tree.filter(t.value);             	
	                 		} else {
	                 			tree.collapseAll();			                
			                	t.focus();
	                 		}	  
	                 			                 		              	
		                }
	                }	      							
    			}
			]		
		}];			   
					
    	this.callParent(arguments);	
    	
    },
    
    /**
     * @param day : 조회 일자
     */            
    fnSetAppdd: function(day) {
    	this.getComponent('tool').getComponent('appdd').setValue(day);    	    	
    },
    
    fnBtnRefresh: function() {        	    	
    	/*var appdd = Ext.Date.format(this.getComponent('tool').getComponent('orgnzt_id').value,'Ymd');
    	var systemcd = this.getComponent('tool').getComponent('systemcd').value;      	   
    	
    	this.store.proxy.setExtraParam('fromdd', appdd);
		this.store.proxy.setExtraParam('systemcd', systemcd);*/    	
    	this.store.load();
    }
});

