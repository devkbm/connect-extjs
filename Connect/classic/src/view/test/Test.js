/**
 * This view is an example list of people.
 */
Ext.define('Connect.view.test.Test', {
    extend: 'Ext.form.Panel',    
    width: 600,    
    items : [{
                xtype : 'filefield',
                width : 300,
                //라벨 정의
                fieldLabel : '파일첨부',
                //파일첨부 버튼에 텍스트 정의
                //정의 안할시 Browse... 디폴트 정의됨
                buttonText  : '찾아보기',
                //<input type="file" name="fileupload"> 와 동일하게 서버에서 받기위한 name명이 fileupload
                name : 'fileupload'
            },{
                xtype : 'button',
                text : '전송',
                handler : function(btn){
                    //form 객체 찾기                   
                    var frm = btn.up("form").getForm();
                    //폼패널 검증
                    if(frm.isValid()) {
                        //폼 submit
                        frm.submit({
                            url: 'http://localhost:8090/file?pgmId=test',
                            waitMsg : '업로드 중...',
                            success : function(fp, res) {
                                var jsonResult = Ext.JSON.decode(res.response.responseText);
                                var msg = "UPLAODED FILE NAME : " + jsonResult.filename+"<br />";
                                    msg += "UPLAODED FILE SIZE : " + jsonResult.filesize;
                                Ext.MessageBox.show({
                                            title : '업로드완료',
                                            msg : msg,
                                            buttons : Ext.MessageBox.YES,
                                            icon : Ext.MessageBox.INFO
                                });
                            }
                        });
                    }
                }
            }]

});
