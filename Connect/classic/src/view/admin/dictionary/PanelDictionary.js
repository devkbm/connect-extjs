/**
 * Created by kim on 2015-05-21.
 */
Ext.define('Connect.view.admin.dictionary.PanelDictionary', {    
    extend: 'nx.form.PanelBase',
    alias: 'widget.panelDictionary',
                   
    initComponent: function() {
        var me = this;
                								
        this.tbar = [{
            itemId: 'newDetail',
            text: '새로 추가',
            scope : this,            
            iconCls: 'x-fa fa-file-o',
            handler: function(target, event) {
                this.fnResetRecord(Grw.model.Dictionary);
            }
        },{
            itemId: 'saveDetail',
            text: '저장',
            scope : this,            
            iconCls: 'x-fa fa-floppy-o',
            handler: function(target, event) {
                this.fnSave();
            }
        }];

        Ext.applyIf(this, {
            items: [{
                name: 'pkDictionary',
                xtype: 'hiddenfield',
                hidden: false            
            }, {
                name: 'word',
                xtype: 'textfield',
                fieldLabel: '단어',
                allowBlank: false
            }, {
                name: 'meaning',
                xtype: 'textfield',
                fieldLabel: '의미',
                allowBlank: false
            }, {
                name: 'abbrKor',
                xtype: 'textfield',
                fieldLabel: '약어(한글)',
                allowBlank: true
            }, {
                name: 'abbrEng',
                xtype: 'textfield',
                fieldLabel: '약어(영어)',
                allowBlank: true
            }, {
                name: 'wordType',
                xtype: 'textfield',
                fieldLabel: 'ttt',
                allowBlank: true
             }, {
                name: 'cmt',
                xtype: 'textfield',
                fieldLabel: '비고',
                allowBlank: true
            }]
        });

        me.callParent(arguments);                       
    }
});