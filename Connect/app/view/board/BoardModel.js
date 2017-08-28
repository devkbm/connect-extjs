Ext.define('Connect.view.board.BoardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.board',

    data: {
        fkBoard: null,
    	pkArticle: null        	
    },
    stores: {        
        boardStore : {
            model: 'Connect.model.Board',
            proxy: {
                type: 'ajax',
                api: {
                    read  : '/grw/board/sBoardList.do', 
                    create: '/grw/board/exeBoard.do?action=c',
                    update: '/grw/board/exeBoard.do?action=u',
                    destroy:'/grw/board/exeBoard.do?action=d'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'recv'
                },
                writer: {
                    type: 'json',
                    rootProperty: 'send',
                    allowSingle:false,                    
                    encode: true
                }
            }
        },
        articleStore : {
            model: 'Connect.model.ArticleList',
            proxy: {
                type: 'ajax',
                api: {
                    read  : 'http://localhost:8090/grw/boards/articles'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }   
        },
        articleCheckStore : {
            model: 'Connect.model.ArticleCheck',
            proxy: {
                type: 'ajax',
                api: {
                    read  : '/grw/board/sArticleCheckList.do'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'recv'
                }
            }
        },
        articleHitCntStore : {
            model: 'Connect.model.Article',
            proxy: {
                type: 'ajax',
                api: {
                    read  : 'http://localhost:8090/grw/boards/articles/hitcnt'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});

