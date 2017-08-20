Ext.define('Connect.view.admin.dictionary.GridDict', {
    //extend: 'Ext.grid.Panel',    
    extend: 'nx.grid.GridBase', 
    alias: 'widget.gridDictionary',
    
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
    
    initComponent: function() {
        var me = this;
        
        this.store = Ext.create('Connect.store.DictionaryList');                   		 

        this.columns = [
	    {
                dataIndex: 'pkTerm',            
                width: 50,    
                text: 'PrimaryKey',        
                hidden: true
            },{
                dataIndex: 'nameKor',            
                width: 100,    
                text: '용어명',          
                align: 'left',
                editor: {
                    allowBlank: false
                }
            },{
                dataIndex: 'abbreviation',        
                width: 100,    
                text: '약어(한글)',     
                align: 'left',
                editor: {
                    allowBlank: false
                }
            },{
                dataIndex: 'nameEng',            
                width: 100,    
                text: '용어명(영문)',   
                align: 'center',
                editor: {}
            },{
                dataIndex: 'abbreviationEng',    
                width: 100,    
                text: '약어(영문)',     
                align: 'center',
                editor: {}
            },{
                dataIndex: 'detail',            
                width: 200,    
                text: '상세내역',        
                align: 'center',
                editor: {}
            },{
                dataIndex: 'comment',                
                width: 250,    
                text: '비고',              
                align: 'left',
                editor: {}
            }
          ];                           
        	    
    	this.querycols = [{		
			text: '용어명',
			value: 'nameKor',
			checked: true
		},{
			text: '약어(한글)',
			value: 'abbreviation'
		},{
			text: '용어명(영문)',
			value: 'nameEng'
		},{
			text: '약어(영문)',
			value: 'abbreviationEng'
		}];
    	
	    this.querystr = 'nameKor';         
	    
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
