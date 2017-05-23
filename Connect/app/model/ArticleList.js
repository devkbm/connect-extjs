/**
 * Model Board
 */
Ext.define('Connect.model.ArticleList', {
	extend: 'Ext.data.Model',
	idProperty: 'pkArticle',
	requires: ['Ext.data.identifier.Negative'],
    identifier: 'negative',
	fields: [	         
			 {name: 'sysDt',		type: 'date',	dateFormat: 'c',	persist: false},
			 {name: 'sysUser',		type: 'string',	persist: false},
			 {name: 'sysuserName',	type: 'string', persist: false},
			 {name: 'updDt',		type: 'date',	dateFormat: 'c',	persist: false},
			 {name: 'updUser',		type: 'string', persist: false},	         
	         {name: 'pkArticle',	type: 'int'},
	         {name: 'ppkArticle',	type: 'int'},	         
	         {name: 'title',		type: 'string'},
	         {name: 'contents',		type: 'string'},
	         {name: 'pwd',			type: 'string', allowNull: true},	
	         {name: 'hitCnt',		type: 'int'},
	         {name: 'checkyn',		type: 'string', persist: false},	         	         	        
	         {name: 'fromDt',		type: 'date', 	dateFormat: 'Ymd'},
	         {name: 'toDt',			type: 'date', 	dateFormat: 'Ymd'},	         
	         {name: 'seq',			type: 'string'},
	         {name: 'depth',		type: 'string'},
	         {name: 'fileYn',		type: 'string'},	         
	         {name: 'fkBoard',		type: 'string', persist: false}
	],
	proxy: {
		type: 'ajax',
		api: {
			read  : '/grw/board/sArticleList.do'
		},
		reader: {
			type: 'json',
			rootProperty: 'recv'
		}
	}
}); 
