/**
 * 부서 트리 컨트롤
 * 
 */
Ext.define('Connect.view.admin.TreeMenu', {
	extend: 'Ext.tree.Panel',	
	alias: 'widget.treeMenu',
	requires: [
        'nx.TreeFilter'
    ],
		
	title: '메뉴',
	hideHeaders: true,
	rootVisible: false,
	collapsible: true, 	
	lines: false,
    useArrows: true,
	defaultListenerScope: true,
	plugins: [{
		ptype: 'treefilter',
        allowParentFolders: true
    }],
    initComponent: function() {
    	
    	this.store = Ext.create('Ext.data.TreeStore', {
					    root: {
					        text: '메뉴',
					        expanded: true,
					        children: [
					            {
					            	text: '게시판 관리',
					                title: '게시판 관리',
					                pgmId: 'Connect.view.admin.board.ConAdminBoard',
					                leaf: true					            	
					            },
					            {
					            	text: '게시판 작성',
					                title: '게시판 작성',
					                pgmId: 'Connect.view.admin.board.PanelBoard',
					                leaf: true					            	
					            },
					            {
					            	text: '표준단어사전',
					                title: '표준단어사전',
					                pgmId: 'Connect.view.admin.dictionary.PanelDictionary',
					                leaf: true	
					            },
					            {
					            	text: '표준단어사전그리드',
					                title: '표준단어사전그리드',
					                pgmId: 'Connect.view.admin.dictionary.GridDict',
					                leaf: true	
					            },
					            {
					            	text: '인사마스터',
					                title: '인사마스터',
					                //pgmId: 'Grw.view.admin.employee.PanelEmployee',
					                pgmId: 'Connect.view.admin.employee.ConEmployeeMaster',
					                leaf: true						            						            
					            },
					            {
					            	text: '부서마스터',
					                title: '부서마스터',					                
					                pgmId: 'Connect.view.admin.dept.PanelDept',
					                					                
					                leaf: true
					            },
					            {
					            	text: '부서트리',
					                title: '부서트리',					                					                
					                pgmId: 'Connect.view.admin.dept.TreeDept',					                
					                leaf: true
					            },
					            {
					            	text: '발령구분',
					                title: '발령구분',					                					                
					                pgmId: 'Connect.view.admin.appoint.ConAppointmentCodeInfo',					                
					                leaf: true
					            },
					            {
					            	text: '공통코드그룹',
					                title: '공통코드그룹',					                					                					                
					                pgmId: 'Connect.view.admin.code.ConCodeInfo',					                
					                leaf: true
					            }
					           
					        ]
					    }
					});
    	
    	var today = new Date();    	    	
			
		/* 조회 조건 툴바 */ 
	   this.dockedItems = [{
		   
		   xtype: 'textfield',
		   dock: 'top',
		   itemId: 'menutext',		   
		   emptyText: 'Search',
		   enableKeyEvents: true,
		   triggers: {
			   clear: {
				   cls: 'x-form-clear-trigger',
				   handler: 'fnClearTriggerClick',
				   hidden: true,
				   scope: 'this'
			   },
			   search: {
				   cls: 'x-form-search-trigger',
		           weight: 1,
		           handler: 'fnSearchTriggerClick',
		           scope: 'this'
			   }			   
		   },
		   fnClearTriggerClick: function() {
			   this.setValue();
			   this.up('treepanel').clearFilter();
			   this.getTrigger('clear').hide();
		   },
		   fnSearchTriggerClick: function() {
			   this.up('treepanel').filter(this.getValue());
		   },  
		   
		   listeners: {
			   scope : this,			   
			   keydown: {
				   fn: function(field, event, eOpts) {
					   var value = field.getValue();
                       
                       if (value == Ext.emptyString) {
                    	   this.clearFilter();                    	   
                    	   field.getTrigger('clear').hide();
                       } else if (value) {
                    	   field.getTrigger('clear').show();
                    	   this.filter(value);                    	   
                       }
				   }
			   }
		   }
								
		}];			   				
	   
    	this.callParent(arguments);	
    }
});

