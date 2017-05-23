Ext.define('Connect.model.Dept', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.identifier.Negative'],
    identifier: 'negative',
	idProperty: 'pkDepti',
	fields: [	         
			 {name: 'sysDt',		type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'sysUser',		type: 'string',	persist: false},
			 {name: 'updDt',		type: 'date', dateFormat: 'c',	persist: false},
			 {name: 'updUser',		type: 'string',	persist: false},	         	                
	         {name: 'pkDepti',		type: 'int'},	         
	         {name: 'orgnztId',		type: 'string'},
	         {name: 'deptCd',		type: 'string'},	        
	         {name: 'deptName',		type: 'string'},
	         {name: 'deptNameEng',	type: 'string'},
	         {name: 'deptAbbr',		type: 'string'},	         	         	        
	         {name: 'fromDd',		type: 'date', dateFormat: 'Ymd'},
	         {name: 'toDd',			type: 'date', dateFormat: 'Ymd'},	         
	         {name: 'prtSeq',		type: 'string'},
	         {name: 'pdeptCd',		type: 'string',  defaultValue:'root'},
	         {name: 'cmt',			type: 'string'}
	],
	proxy: {
		type: 'ajax',
		api: {
			read  : '/hrm/dept/selectDeptList.do', 
			create: '/hrm/dept/exeDept.do?action=c',
			update: '/hrm/dept/exeDept.do?action=u',
			destroy:'/hrm/dept/exeDept.do?action=d'
		},
		reader: {
			type: 'json',
			rootProperty: 'recv'
		},
		writer: {
			type: 'json',
			rootProperty: 'send',
			allowSingle:false,
			writeAllFields: true,
			encode: true
		}
	}
}); 