/**
 * Created by kim on 2015-05-21.
 */
Ext.define('Connect.view.board.article.PanelArticleWrite', {    
    extend: 'nx.form.PanelBase',
    
    alias: 'widget.panelArticleWrite',    
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
                    Ext.Ajax.setCors(true);
                    //Ext.Ajax.setUseDefaultXhrHeader(false);

	            	//this.onUpload('COM',this.fkboard);
	            	           		            	
	                //this.fnSave({fkBoard: this.fkBoard});             

                    this.getComponent('fkBoard').setValue(this.fkBoard);
                    
                    var form = this.getForm();

                    if (form.isValid()) {
                        form.submit({
                            param: { fkBoard: this.fkBoard },
                            url: 'http://localhost:8090/grw/boards/articles2',
                            waitMsg: '업로드 중...',
                            scope: this,
                            success: function (fp, action) {
                                console.log('success');

                                var jsonResult = Ext.JSON.decode(res.response.responseText);
                                var msg = "UPLOADED FILE NAME : " + jsonResult.filename+"<br />";
                                    msg += "UPLOADED FILE SIZE : " + jsonResult.filesize;

                                    Ext.MessageBox.show({
                                        title: '업로드완료',
                                        msg: msg,
                                        buttons: Ext.MessageBox.YES,
                                        icon : Ext.MessageBox.INFO
                                    });
                                this.fireEvent('aftersaved', this, null);
                            },
                            failure: function (fp, action) {
                                console.log('failure');
                                console.log(fp);
                                console.log(action);
                                this.fireEvent('aftersaved', this, null);
                                //this.close();
                            }
                        });
                    }

	            }
	        }]
        /*},{
        	itemId: 'tbUpload',
        	xtype: 'toolbar',
        	dock: 'top',
        	items: [{
        		itemId: 'upload',
	    		xtype:'nxPanelMultiUpload',
	    		height:'300',
	    		width:'100%'	
        	}]*/        	
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
                name: 'file',
                xtype: 'filefield',
                fieldLabel: '첨부파일 :',
                labelWidth: 60,
                width: '100%',
                allowBlank: true                		
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
        //this.addListener('aftersaved', function (obj,rec,c) {       
        	
        	//this.onUpload('COM',rec.data.pkarticleq);
        	//this.fnLoadTab(rec.data.fkboard);        	
        	//obj.close();
        //}, this); 
        //this.getComponent('tool2').getComponent('upload').onLoad('COM',this.fkBoard);
    },
    getFileInfo: function (systemId, val) {
    	var upload = this.down('grid');
    	//upload.getServerFileInfo('Board',this.fkBoard);
    	upload.getServerFileInfo(systemId,val);
    }
});