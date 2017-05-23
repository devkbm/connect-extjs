/**
 * 부서 트리 컨트롤
 * 
 */
Ext.define('Connect.view.admin.board.TreeAdminBoard', {
	extend: 'Ext.tree.Panel',	
	alias: 'widget.treeAdminBoard',
	requires: [
        'nx.TreeFilter'
    ],

	width: 200,
    config: {
		title: '게시판 관리222',
		hideHeaders: true,
		rootVisible: true,
		collapsible: true, 		
		defaultListenerScope: true
    },
	plugins: [{
		ptype: 'treefilter',
        allowParentFolders: true
    }],
    
    initComponent: function() {
    	this.store = 'AdminBoardTree';
    	
    	var today = new Date();    	    	
			
		/* 조회 조건 툴바 */ 
	   this.dockedItems = [{
    		itemId: 'tool',
			xtype: 'toolbar',
			dock: 'top',
			vertical: true,
			width: 150,
			items: [{
					/*itemId: 'orgnzt_id',
					name: 'orgnzt_id',
		            xtype : 'nxcombo',
		            width: 180,
		            fieldLabel: '기관:',
		            labelWidth: 60,
		            emptyText : '기관을 선택하세요.',
					langcd: 'Ko',
					systemcd: 'GRW',
					pcd: 'INSTCD',
					all: 'N',
					queryMode: 'local',
					triggerAction: 'all',
					selectOnTab: true,
					editable : false
				},{*/
					itemId: 'boardnm',
					name: 'boardnm',
					xtype: 'textfield',
					width: 180,
					fieldLabel: '필터',
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
					width: 180,
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
    	this.getComponent('tool').getComponent('appdd').setValue(day);    	    	
    },
    
    fnBtnRefresh: function() {        	    	
    	
    	this.store.load();
    }
});

