/**
 * Created by kim on 2015-05-21.
 */
Ext.define('Connect.view.admin.board.PanelBoard', {
    extend: 'nx.form.PanelBase',
    //extend: 'Ext.form.Panel',
    alias: 'widget.panelBoard',
             
    initComponent: function() {
        var me = this;
                								
        this.tbar = [{
            itemId: 'newDetail',
            text: '새로 추가',
            scope : this,            
            iconCls: 'x-fa fa-file-o',
            handler: function(target, event) {
                this.fnResetRecord(Connect.model.Board);                 
            }
        },{
            itemId: 'saveDetail',
            text: '저장',
            scope : this,            
            iconCls: 'x-fa fa-floppy-o',
            handler: function(target, event) {
                this.fnSave();
            }         
        },{        
        	itemId: 'loadDetail',
            text: '조회',
            scope : this,            
            iconCls: 'x-fa fa-floppy-o',
        	handler: function(target, event) {        		
        		this.fnLoad(Connec.model.Board,null,{pkBoard: this.fnFindField('pkBoard').getValue()});
        		//this.fnLoad(Grw.model.Employee,null,{emplNum: this.fnFindField('emplNum').getValue()});
        	}        
        }];

        Ext.applyIf(this, {
            items: [{
                name: 'pkBoard',
                xtype: 'textfield'     
            }, {
                name: 'ppkBoard',
                xtype: 'hiddenfield',
                fieldLabel: '상위 폴더'
            }, {
                name: 'boardType',
                xtype: 'nxcombo',
                fieldLabel: '게시판 타입',
                cdGroup: 'AA',                 
            	displayField : 'codeName',
      			valueField : 'code',
      			queryMode: 'local',
                allowBlank: false
            }, {
                name: 'boardNm',
                xtype: 'textfield',
                fieldLabel: '게시판 명',
                allowBlank: false
            }, {
                name: 'fromDt',
                xtype: 'datefield',
                fieldLabel: '시작일자',
                format: 'Y-m-d',
                submitFormat: 'Ymd',
                allowBlank: false
            }, {
                name: 'toDt',
                xtype: 'datefield',
                fieldLabel: '종료일자',
                format: 'Y-m-d',
                submitFormat: 'Ymd',
                allowBlank: false
            }, {
                name: 'useYn',
                xtype: 'checkboxfield',
                fieldLabel: '사용여부',
                inputValue: 'Y',
                uncheckedValue: 'N'
            }, {
                name: 'pwdYn',
                xtype: 'checkboxfield',
                fieldLabel: '비밀번호 사용여부',
                inputValue: 'Y',
                uncheckedValue: 'N'
            }, {
                name: 'pwdMethod',
                xtype: 'textfield',
                fieldLabel: '암호화 방법',
                allowBlank: false
            }, {
                name: 'seq',
                xtype: 'numberfield',
                fieldLabel: '순서',
                minValue: 0
            }
            ]
        });

        me.callParent(arguments);                       
    }
});