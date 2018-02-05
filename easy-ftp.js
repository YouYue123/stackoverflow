var EasyFtp = require ("easy-ftp");
var ftp = new EasyFtp();

var config = {
    host:'homexxxxx.1and1-data.host',
    type:'SFTP',
    port:'22',
    username:'u90xxxx',
    password:"mypass"
};
ftp.connect(config);
ftp.upload("/test/test.txt", "/test.txt", function(err){
    if (err) throw err;
    ftp.close();
});