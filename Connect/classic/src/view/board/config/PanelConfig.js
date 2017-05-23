/**
 * Created by kim on 2015-05-21.
 */
Ext.define('Connect.view.board.config.PanelConfig', {    
    extend: 'nx.form.PanelBase',
    requires: [   	
   		'nx.form.PanelMultiUpload'
    ],
    alias: 'widget.panelConfig',    
    layout: 'vbox',
    width: '100%',           
    config: {
    	fkBoard: null,
    	trackResetOnLoad: true
    },
    
    initComponent: function() {
        var me = this;
        		       
        this.dockedItems =[{        	
		    itemId: 'tool',	
		    xtype: 'toolbar',
		    dock: 'top',
		    items: [{
	            itemId: 'newDetail',
	            text: '새 글',
	            scope : this,
	            //icon: '/img/icon/page_edit.png',
	            iconCls: 'x-fa fa-file-o',
	            handler: function(target, event) {
	                this.fnResetRecord(Grw.model.Article);
	                this.getComponent('fkBoard').setValue(this.fkBoard);
	            }
	        },{
	            itemId: 'saveDetail',
	            text: '저 장',
	            scope : this,
	            //icon: '/img/icon/disk.png',
	            iconCls: 'x-fa fa-floppy-o',
	            handler: function(target, event) {
	            	//this.onUpload('COM',this.fkboard);
	            	           		            	
	                this.fnSave({fkBoard: this.fkBoard});                
	            }
	        }]        
        }];
     
        Ext.applyIf(this, {
            items: [{
                name: 'pkArticle',
                xtype: 'hiddenfield',
                hidden: true
            }, {
                name: 'ppkArticle',                
                xtype: 'hiddenfield',                
                hidden: true
            }, {
            	itemId: 'fkBoard',
                name: 'fkBoard',
                xtype: 'hiddenfield',
                hidden: true
            }, {
                name: 'pwd',
                xtype: 'hiddenfield',
                hidden: true
            }, {
                name: 'hitCnt',
                xtype: 'numberfield',
                hidden: true
            }, {
                name: 'fromDt',
                xtype: 'datefield',
                fieldLabel: '시작일자',
                format: 'Y-m-d',
                submitFormat: 'Ymd',
                hidden: true
            }, {
                name: 'toDt',
                xtype: 'datefield',
                fieldLabel: '종료일자',
                format: 'Y-m-d',
                submitFormat: 'Ymd',
                hidden: true
            }, {
                name: 'seq',
                xtype: 'numberfield',                
                hidden: true                
            }, {
                name: 'title',
                xtype: 'textfield',
                fieldLabel: '제목 :',
                labelWidth: 60,
                width: '100%',
                allowBlank: false
            }, {
     	        id: 'upload2',   
     	        name: 'upload2',
	    		xtype:'nxPanelMultiUpload',
	    		height:'300',
	    		width:'800',
	    		pgmId:'Board'	    		
            }, {
            	name: 'contents',
	            xtype: 'ckeditor',
	            //xtype: 'htmleditor',
	            width: '100%',
	            height: '100%',
	            flex : 1
            }]
        });
		        
        
        me.callParent(arguments);
		
		this.fnResetRecord(Connect.model.Article);
		                               
        this.getComponent('fkBoard').setValue(this.fkBoard);
        //console.log(this.fkBoard);
        this.addListener('aftersaved', function (obj,rec,c) {       
        	
        	//this.onUpload('COM',rec.data.pkarticleq);
        	//this.fnLoadTab(rec.data.fkboard);        	
        	//obj.close();
        }, this); 
        //this.getComponent('tool2').getComponent('upload').onLoad('COM',this.fkBoard);
    },
    getFileInfo: function (systemId, val) {
    	var upload = this.down('grid');
    	//upload.getServerFileInfo('Board',this.fkBoard);
    	upload.getServerFileInfo(systemId,val);
    }
});