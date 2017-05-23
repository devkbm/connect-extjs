Ext.define('Connect.model.ArticleCheck', {
	extend: 'Ext.data.Model',
	idProperty: 'pkCheck',
	fields: [	         
			 {name: 'sysDt',		type: 'date',	dateFormat: 'c',	persist: false},
			 {name: 'sysUser',		type: 'string'},
			 {name: 'sysUserName',	type: 'string', persist: false},
			 {name: 'updDt',		type: 'date',	dateFormat: 'c',	persist: false},
			 {name: 'updUser',		type: 'string'},	         	         	                 	        
	         {name: 'fkArticle',	type: 'string'},
	         {name: 'hitCnt',		type: 'int'}	         	         	       
	]
}); 
