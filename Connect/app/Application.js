/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Connect.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Connect',
        
    stores: [
        // TODO: add global / shared stores here        
        'NavigationTree',
        'BoardTree',
        'ArticleHitCnt'
    ],

    views: [
        'Connect.view.admin.ConAdmin',
        'Connect.view.board.ConBoard'
    ],
    
    launch: function () {
        // TODO - Launch the application

        Ext.Ajax.request({ 
            url:"http://localhost:8090/login",
            method:"GET",
            params: {
                username : 'kbm0417',
                password : '1234',
                submit : 'Login'
            },
            success:function( result, request ){
                Ext.Msg.alert( "Success", "Data return from photo.json" + result.responseText );
            },
            failure: function( result, request ){
                Ext.Msg.alert( "Failed", result.responseText );
            }
        
        });



    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
