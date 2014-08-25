var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 

var socket = io.connect('http://'+ server_ip_address  +':' + server_port);
socket.on('connected', function(data) {
   
});

socket.on('chatBroadCast', function(data) {
    $('#txtBoard').val($('#txtBoard').val() + data.name + ' : ' + data.msg + '\n');
});

var user = prompt('Hi, Please enter your name..!', '');
$(document).ready(function () {
    $('#Welcome').html('<b> Welcome ' + user + '...!</b>');
    $('#btnSend').click(function() {
        socket.emit('chatSubmit', { name: user, msg: $('#txtMsg').val() });
        $('#txtBoard').val($('#txtBoard').val() + user + ' : ' + $('#txtMsg').val() + '\n');
        $('#txtMsg').val('');
    });
});