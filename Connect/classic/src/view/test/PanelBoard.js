/**
 * Created by kim on 2015-05-21.
 */
Ext.define('Connect.view.testd.PanelBoard', {
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
                this.fnSave({fkBoard:1});
            }         
        },{        
        	itemId: 'loadDetail',
            text: '조회',
            scope : this,            
            iconCls: 'x-fa fa-floppy-o',
        	handler: function(target, event) {        		
        		this.fnLoad(Connect.model.Board,this.fnFindField('pkBoard').getValue(),null);
        		//this.fnLoad(Grw.model.Employee,null,{emplNum: this.fnFindField('emplNum').getValue()});
        	}        
        }];

        Ext.applyIf(this, {
            items: [{
                name: 'pkBoard',
                xtype: 'textfield'   
            }, {
                name: 'sysUser',
                xtype: 'hiddenfield',
                fieldLabel: '최초 등록 유저',
                value: 'test'
            }, {
                name: 'updUser',
                xtype: 'hiddenfield',
                fieldLabel: '최종 수정 유저',
                value: 'test'  
            }, {
                name: 'ppkBoard',
                xtype: 'hiddenfield',
                fieldLabel: '상위 폴더'
            }, {
                name: 'boardType',
                xtype: 'nxcombo',
                fieldLabel: '게시판 타입',
                cdGroup: 'G0001',                 
            	displayField : 'cdName',
      			valueField : 'cd',
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