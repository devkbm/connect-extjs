Ext.define('Connect.view.code.article.GridCode', {    
    extend: 'nx.grid.GridBase', 
    alias: 'widget.gridCode',
    
    config: {		    						    	    
    	/**
    	 * 조회 조건 
    	 * ex) [{text: '이름', value: 'name', checked: true} ,{text: '아이디',	value: 'id'}]
    	 */
    	querycols:null,
    	
    	/**
    	 * 조회할 컬럼명
    	 */
    	querystr: null
    },	    
    bind: {
        store : '{codeStore}'
    },    
    initComponent: function() {
        var me = this;                
        
        this.columns = [
	        {
                dataIndex: 'codeGroup',            
                width: 80,    
                text: '코드그룹',        
                align: 'left',
                editor: {
                    allowBlank: false
                }
            },{
                dataIndex: 'code',            
                width: 130,    
                text: '코드',          
                align: 'left',
                editor: {
                    allowBlank: false
                }            
            },{
                dataIndex: 'codeName',            
                width: 130,    
                text: '코드그룹명',          
                align: 'left',
                editor: {
                    allowBlank: false
                }
            },{
                dataIndex: 'codeNameAbbreviation',        
                width: 100,    
                text: '코드길이',     
                align: 'left',
                editor: {
                    allowBlank: false
                }
            },{
                dataIndex: 'cmt',            
                width: 230,    
                text: '비고',   
                align: 'left',
                editor: {}
            }
          ];                           
        	    
    	this.querycols = [{		
			text: '코드',
			value: 'code',
			checked: true
		},{
			text: '코드명',
			value: 'codeName'
		}];
    	
	    this.querystr = 'code';         
	    
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
            width: 200,
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
    	 	iconCls: 'x-fa fa-search',
	    	scope: this,
	    	handler: function(target, event) {				
                var val = this.getComponent('tool').getComponent('searchField').value;    		    	    		                
                this.fnClearExtraParam();
                if (val) {    		                            
                    this.fnSetExtraParam(this.querystr,val);
                }  		    		                
                this.fnLoad();
			}
	},{
            xtype: 'button',
            text: '행추가',        
            iconCls: 'x-fa fa-file-o',
            scope: this,
             handler: function() {        
                var rec = Ext.create(this.getStore().getModel(),{});                

                 this.fnAddRecord(this, rec,null, 0, null, null);
            }
        },{
            xtype: 'button',
            text: '행삭제',        
            iconCls: 'x-fa fa-trash-o',
            scope: this,
             handler: function() {            
                 this.fnDelRecord(this, null, null);
            }
        },{
            itemId: 'saveDetail',
            text: '저 장',
            scope : this,            
            iconCls: 'x-fa fa-floppy-o',
            handler: function(target, event) {
                Ext.Ajax.setCors(true);
                this.fnSave();
            }
        });    		  	
    	
    	config.items = items;
        return Ext.create('widget.toolbar', config);
    }
});
