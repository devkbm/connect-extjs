Ext.define('Connect.view.contact.GridUser', {
    extend: 'Ext.grid.Panel',    
    alias: 'widget.gridUser',
    
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
    	 * deptcd
    	 */
    	deptcd: null
    },	    
    
    initComponent: function() {
        var me = this;
        
        this.store = Ext.getStore('User');         
        
        this.columns = [            
            {dataIndex: 'esntl_id',	width: 50,	text: '고유아이디',	editor:{allowBlack:false}, hidden: true},
  		  	{dataIndex: 'emplyr_id',width: 50,	text: '사용자 ID',	 	editor:{allowBlack:false}, hidden: true},  		  	
  		  	{dataIndex: 'user_nm', 	width: 100,	text: '사용자명', 		editor:{allowBlack:false}},
		    {dataIndex: 'password', width: 60,	text: '비밀번호', 		editor:{allowBlank:false}},
		    {dataIndex: 'password_hint',width: 100,	text: '비밀번호 힌트', 		editor:{allowBlank:false}},
		    {dataIndex: 'password_cnsr',width: 300,	text: '비밀번호 정답', 		editor:{allowBlank:false}},
		    {dataIndex: 'empl_no',   	width: 100,	text: '사원번호', 		editor:{allowBlack:false}},
		    {dataIndex: 'ihidnum',   	width: 100,	text: '주민등록번호',  editor:{allowBlack:false}},
		    {dataIndex: 'sexdstn_code',	width: 100,	text: '성별코드', 		editor:{allowBlack:false}},
		    {dataIndex: 'brthdy',   	width: 100,	text: '생일', 		editor:{allowBlack:false}},
		    {dataIndex: 'area_no',   	width: 100,	text: '지역번호', 		editor:{allowBlack:false}},
		    {dataIndex: 'house_middle_telno',   	width: 100,	text: '집중간전화번호', 		editor:{allowBlack:false}},
		    {dataIndex: 'house_end_telno',   	width: 100,	text: '집끝전화번호', 		editor:{allowBlack:false}},
		    {dataIndex: 'fxnum',   		width: 100,	text: '팩스번호', 		editor:{allowBlack:false}},
		    {dataIndex: 'house_adres',  width: 100,	text: '집주소', 		editor:{allowBlack:false}},
		    {dataIndex: 'detail_adres', width: 100,	text: '상세주소', 		editor:{allowBlack:false}},
		    {dataIndex: 'zip',   		width: 100,	text: '우편번호', 		editor:{allowBlack:false}},
		    {dataIndex: 'offm_telno',   width: 100,	text: '사무실전화번호', editor:{allowBlack:false}},
		    {dataIndex: 'mbtlnum',   	width: 100,	text: '핸드폰번호', 		editor:{allowBlack:false}},
		    {dataIndex: 'email_adres',  width: 100,	text: '이메일주소', 		editor:{allowBlack:false}},
		    {dataIndex: 'ofcps_nm',   		width: 100,	text: '직위명', 		editor:{allowBlack:false}},
		    {dataIndex: 'group_id',   		width: 100,	text: '그룹ID', 		editor:{allowBlack:false}},
		    {dataIndex: 'orgnzt_id',   	width: 100,	text: '조직ID', 		editor:{allowBlack:false}},
		    {dataIndex: 'pstinst_code', width: 100,	text: '소속기관코드', 		editor:{allowBlack:false}},
		    {dataIndex: 'emplyr_sttus_code',width: 100,	text: '사용자상태', 		editor:{allowBlack:false}},
		    {dataIndex: 'sbscrb_de',   	width: 100,	text: '가입일', 	renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s')},
		    {dataIndex: 'crtfc_dn_value',  	width: 100,	text: 'dn값', 		editor:{allowBlack:false}},
		    {dataIndex: 'deptcd',  	width: 100,	text: '부서코드', 		editor:{allowBlack:false}}		      		   		    		   
          ];                           
        	    
    	this.querycols = [{		
			text: '사용자ID',
			value: 'emplyr_id',
			checked: true
		},{
			text: '사용자명',
			value: 'user_nm'
		}];
    	
	    this.querystr = 'emplyr_id';        
	    
	    this.dockedItems = [this.createToolbar()];	    	    	   	  	   
	    
        me.callParent(arguments);                                                       
    },
    createToolbar: function(){
    	var items = [],
            config = {itemId: 'tool'};
    	    	
    	var cycle = Ext.create('Ext.button.Button', {
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
		        },
		        bar: {
		            cls: 'x-form-search-trigger',
		            scope: this,
		            handler: function() {
		            	this.fnLoad();
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
    	 	icon: '/images/icon/zoom.png',
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
    	
    	me.store.proxy.setExtraParam('deptcd', me.deptcd);
    	
    	if (me.querystr) {    		
    		
    		var val = me.getComponent('tool').getComponent('searchField').value;    		    	    		
    		
    		if (val) {    			    	
    			me.store.proxy.setExtraParam(me.querystr, val);    			    			
    		}  		    		
    	}    	
    	    	    	
    	me.store.load();
    }
});