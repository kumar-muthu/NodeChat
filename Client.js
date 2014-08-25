var socket = io.connect('http://192.168.1.102:8081');
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