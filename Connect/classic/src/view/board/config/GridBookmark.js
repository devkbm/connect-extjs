Ext.define('Connect.view.board.config.GridBookmark', {
    extend: 'Ext.grid.Panel',    
    alias: 'widget.gridBookmark',
    
    config: {		    						    	    
    	/**
    	 * 조회 조건 
    	 * ex) [{text: '이름', value: 'name', checked: true} ,{text: '아이디',	value: 'id'}]
    	 */
    	querycols:null,
    	
    	/**
    	 * 조회할 컬럼명
    	 */
    	querystr: null,
    	
    	/**
    	 * fkboard
    	 */
    	fkBoard: null
    },	    
    
    initComponent: function() {
        var me = this;
        
        this.store = Ext.create('Connect.store.ArticleList');           
        
        this.columns = [            
        	{dataIndex: 'seq', 		width: 60,	text: '번호', 		align: 'center'},                                   
  		  	{dataIndex: 'sysUser',	width: 80,	text: '생성유저', 		hidden: true},
  		  	{dataIndex: 'updDt',	width: 60,	text: '변경일', 		renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'), editor:{xtype: 'datefield', format:'Y-m-d H:i:s'}, hidden: true},
  		  	{dataIndex: 'updUser',	width: 80,	text: '변경유저', 		hidden: true},
  		  	{dataIndex: 'pkArticle',width: 50,	text: '고유키',		hidden: true},
  		  	{dataIndex: 'fkBoard',	width: 50,	text: '게시판fk',		hidden: true},
  		  	{dataIndex: 'fileYn',	width: 50,	text: '첨부',	 		xtype:'actioncolumn', items: [{  		  																							   		  																							
  		  																							align: 'center',		  																							
																				                    getClass: function(value,metadata,record){																				                    																					                    																				                    
																				                        var closed = record.get('fileYn');
																			                            if(closed == 'Y'){
																			                                return 'x-fa fa-floppy-o';
																			                            }else{
																			                                return '';
																			                            }    
																			                            
																				                    }
  		  																							}],align: 'center'},    		  	  		    		  
  		  	{dataIndex: 'title',	width: 400,	text: '제목',	 		renderer: function(value, metaData,rec) { 
  		  																if (rec.data["checkyn"] == 'N') {
  		  																	metaData.tdStyle = 'font-weight: bold';																			
																		} 
																		return value;
																	},flex: 1},
  		  	{dataIndex: 'sysDt',	width: 150,	text: '등록일시', 		align: 'center', renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s')},
  		  	{dataIndex: 'sysUsernm',width: 100,	text: '등록자', 		align: 'center'},
  		  	{dataIndex: 'hitCnt', 	width: 80,	text: '조회수', 		align: 'center'}		      		   		    		   
          ];                           
        	    
    	this.querycols = [{		
			text: '제목',
			value: 'title',
			checked: true
		},{
			text: '내용',
			value: 'contents'
		}];
    	
	    this.querystr = 'title';         
	    
	    this.dockedItems = [this.createToolbar()];	    	    	   	  	   
	    
        me.callParent(arguments);                                                       
    },
    createToolbar: function(){
    	var items = [],
            config = {itemId: 'tool'};
    	    	
    	var cycle = Ext.create('Ext.button.Cycle', {
		    itemId: 'cycle',
        	showText: true,		    
		    prependText: '',		    
		    menu: {		        
		        items: this.querycols
		    },
		    scope:this,
		    changeHandler: function(cycleBtn, activeItem) {				    	
		    	this.querystr = activeItem.value;
		    }
		});
    	    	
    	items.push(cycle,{
    		itemId: 'searchField',	                
            xtype: 'textfield',
            hideLabel: true,
            width: 400,
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
                	if (e.keyCode == 13) { /* Enter Key Load*/	                 		
                		this.fnLoad();	                 		
                	} else if (e.keyCode == 27) { /* ESC Key Set Null */
                		t.setValue('');
                	}		                		
                }
            }	                
    	},{
    		itemId: 'refresh',
    		text: '조회',
    	 	//icon: '/images/icon/zoom.png',
    	 	iconCls: 'x-fa fa-search',
	    	scope: this,
	    	handler: function(target, event) {
				this.fnLoad();
			}
    	});	
    	
    	config.items = items;
        return Ext.create('widget.toolbar', config);
    },
    
    fnLoad: function() {
    	var me = this;
    	
    	me.store.proxy.setExtraParams({});
    	
    	me.store.proxy.setExtraParam('fkBoard', me.fkBoard);
    	
    	if (me.querystr) {    		
    		
    		var val = me.getComponent('tool').getComponent('searchField').value;    		    	    		
    		
    		if (val) {    			    	
    			me.store.proxy.setExtraParam(me.querystr, val);    			    			
    		}  		    		
    	}    	
    	    	    	
    	me.store.load();
    }
});