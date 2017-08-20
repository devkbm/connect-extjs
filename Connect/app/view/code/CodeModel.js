Ext.define('Connect.view.code.CodeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.code',

    data: {
            	
    },
    stores: {
        codeGroupStore : {
            model: 'Connect.model.CommonCodeGroup',
            proxy: {
                type: 'ajax',
                api: {
                    read  : 'http://localhost:8090/common/codegroups', 
                    create: 'http://localhost:8090/common/codegroups',
                    update: 'http://localhost:8090/common/codegroups',
                    destroy:'http://localhost:8090/common/codegroups'
                },
                actionMethods: {
                    read: 'GET',
                    create: 'POST',
                    update:	'PUT',
                    destroy: 'DELETE'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',                    
                    allowSingle:false,
                    writeAllFields: true
                }
            }
        },
        codeStore : {
            model: 'Connect.model.CommonCode',
            proxy: {
                type: 'ajax',
                api: {
                    read  : 'http://localhost:8090/common/codegroups/codes', 
                    create: 'http://localhost:8090/common/codegroups/codes',
                    update: 'http://localhost:8090/common/codegroups/codes',
                    destroy:'http://localhost:8090/common/codegroups/codes'
                },
                actionMethods: {
                    read: 'GET',
                    create: 'POST',
                    update:	'PUT',
                    destroy: 'DELETE'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',                    
                    allowSingle:false,
                    writeAllFields: true
                }
            }
        }
    }
});

