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
    }
});

