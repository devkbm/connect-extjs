/**
 * 부서 트리 컨트롤
 * 
 */
Ext.define('Connect.view.contact.TreeDept', {
	extend: 'Ext.tree.Panel',	
	alias: 'widget.treeDept2',
	requires: [
        'nx.TreeFilter'
    ],	
	title: '부서',	
	hideHeaders: true,
	rootVisible: false,
	collapsible: true, 	
	defaultListenerScope: true,
	plugins: [{
		ptype: 'treefilter',
        allowParentFolders: true
    }],
    initComponent: function() {
    	this.store = Ext.getStore('DeptTree');
    	
    	var today = new Date();    	    	
			
		/* 조회 조건 툴바 */ 
	   this.dockedItems = [{
    		itemId: 'tool1',
			xtype: 'toolbar',
			vertical: true,
			dock: 'top',
			width: 200,
			items: [{
		    		itemId: 'appdd',
			    	name: 'appdd',
			    	format: 'Y-m-d',
			    	fieldLabel: '적용일자',
			    	width: 180,
			    	labelWidth: 60,		
			    	xtype: 'datefield',			    	
			    	submitFormat: 'Ymd',
			    	value: today,
			    	/*bind: {
			    		value: '{appdd}'
			    	},*/
				   	listeners: {
	                	scope : this,
	                	change: function(t, newValue, oldValue, eOpts) {
	                		this.fnBtnRefresh();	   
	                	}
				    }
				},{
					itemId: 'deptcd',
					name: 'deptcd',
					xtype: 'textfield',
					fieldLabel: '필터',
					width: 180,
					labelWidth: 60,
    				enableKeyEvents: true,    				
	                triggers: {
				        clear: {
				            cls: 'x-form-clear-trigger',
				            handler: function() {
				            	this.setValue('');				                
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
    			},{
					itemId: 'refreshFolder',
					icon: '/img/icon/refresh.png',
			    	scope : this,
			    	text: '조회',
		    	 	handler: function() {
		    	 		this.fnBtnRefresh();
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
    	this.getComponent('tool1').getComponent('appdd').setValue(day);    	    	
    },
    
    fnBtnRefresh: function() {        	    	
    	var appdd = Ext.Date.format(this.getComponent('tool1').getComponent('appdd').value,'Ymd');
    	     	
    	this.store.proxy.extraParams = {fromdd : appdd};     
    	this.store.load();
    }
});

