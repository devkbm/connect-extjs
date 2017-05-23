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
        
        this.store = Ext.create('Grw.store.DictionaryList');           
        
        this.columns = [                    	
  		  	{dataIndex: 'pkDictionary',width: 50,	text: '고유키',		hidden: true},
  		  	{dataIndex: 'wordType',	width: 100,	text: '유형', 	align: 'center'},
  		  	{dataIndex: 'word',		width: 50,	text: '단어'},
		  	{dataIndex: 'meaning',	width: 100,	text: '의미', 		align: 'center'},  		    		  
		  	{dataIndex: 'abbrKor',	width: 100,	text: '약어(한글)', 	align: 'center'},
		  	{dataIndex: 'abbrEng',	width: 100,	text: '약어(영문)', 	align: 'center'}  		  			      		   		    		   
          ];                           
        	    
    	this.querycols = [{		
			text: '의미',
			value: 'meaning',
			checked: true
		},{
			text: '단어',
			value: 'word'
		},{
			text: '유형',
			value: 'wordType'
		}];
    	
	    this.querystr = 'meaning';         
	    
	    //this.dockedItems = [this.createToolbar()];	    	    	   	  	   
	    
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
            width: 140,
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
    	
    	if (me.querystr) {    		
    		
    		var val = me.getComponent('tool').getComponent('searchField').value;    		    	    		
    		
    		if (val) {    			    	
    			me.store.proxy.setExtraParam(me.querystr, val);    			    			
    		}  		    		
    	}    	
    	    	    	
    	me.store.load();
    }
});