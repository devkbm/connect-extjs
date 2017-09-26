Ext.define('Connect.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
    	/**
    	 * 현재 뷰
    	 */
        currentView: null,		
        
        /**
         * 조직 아이디
         */
        orgnztId: null,
        
        /**
         * 조직명
         */
        orgnztNm: null,
        
        /**
         * 사용자 아이디
         */
        id: null,
        
        /**
         * 사용자명
         */
        name: '김병민',
        
        /**
         * 이메일
         */
        email: null	
    },
    stores: {
        navigationTree : {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                        text:   '관리자',
                        view:   'Connect.view.admin.ConAdmin',
                        leaf:   true,
                        iconCls: 'right-icon new-icon x-fa fa-html5',                
                        routeId: 'admin',
                        item: 'conAdmin'
                    },
                    {
                        text:   '게시판',
                        view:   'Connect.view.board.ConBoard',
                        iconCls: 'right-icon hot-icon x-fa fa-send ',
                        leaf:   true,
                        routeId: 'board',
                        item: 'conBoard'
                    },
                    {
                        text:   '게시판 테스트',
                        view:   'Connect.view.testd.PanelBoard',
                        iconCls: 'right-icon hot-icon x-fa fa-send ',
                        leaf:   true,
                        routeId: 'board2',
                        item: 'conBoard'
                    },
                    {
                        text:   '업로드 테스트',
                        view:   'Connect.view.test.Test',
                        iconCls: 'right-icon hot-icon x-fa fa-send ',
                        leaf:   true,
                        routeId: 'board3',
                        item: 'conBoard'
                    },
                    {
                        text:   'Todo 관리',
                        view:   'Connect.view.todo.ConTodo',
                        iconCls: 'right-icon hot-icon x-fa fa-send ',
                        leaf:   true,
                        routeId: 'todo',
                        item: 'conTodo'
                        
                    }
                ]
            },
            fields: [
                {
                    name: 'text'
                }
            ]
        }        
    }
});

