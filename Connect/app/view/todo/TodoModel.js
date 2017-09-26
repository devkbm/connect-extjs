Ext.define('Connect.view.todo.TodoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.todo',

    data: {
            	
    },
    stores: {
        taskGroupStore : {
            model: 'Connect.model.TaskGroup',
            proxy: {
                type: 'ajax',
                api: {
                    read  : 'http://localhost:8090/todo/taskgroups', 
                    create: 'http://localhost:8090/todo/taskgroups',
                    update: 'http://localhost:8090/todo/taskgroups',
                    destroy:'http://localhost:8090/todo/taskgroups'
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
        taskStore : {
            model: 'Connect.model.Task',
            proxy: {
                type: 'ajax',
                api: {
                    read  : 'http://localhost:8090/todo/tasks', 
                    create: 'http://localhost:8090/todo/tasks',
                    update: 'http://localhost:8090/todo/tasks',
                    destroy:'http://localhost:8090/todo/tasks'
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

