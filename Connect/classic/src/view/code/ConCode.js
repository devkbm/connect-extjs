/**
 * 관리자 화면
 * 게시판 관리 프로그램
 */
Ext.define('Connect.view.code.ConCode', {
    extend: 'Ext.container.Container',
    alias: 'widget.conCode',
    //controller: 'board',
    viewModel: {
        type: 'code'
    },
    requires: [      
        'Connect.view.code.CodeModel',
        'Connect.view.code.article.GridCodeGroup',
        'Connect.view.code.article.GridCode'        
    ],
    layout: {
    	 type: 'vbox',
    	 align: 'stretch'
    },        
    //height: 800,
    //floating: true,
    items: [{
        xtype: 'gridCodeGroup',
        reference: 'gridCodeGroup'
        //gridDetail: {obj: lookupReference('gridCode'),fk:'codeGroup'}
    },{        
        xtype: 'gridCode',        
        reference: 'gridCode'
        //gridMaster: 
    }]

});