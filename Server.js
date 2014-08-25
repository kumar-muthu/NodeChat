var io = require('socket.io').listen(8081);
io.sockets.on('connection', function(socket) {
    socket.emit('connected', 'Welcome to Node Chat..!');
    socket.on('chatSubmit', function(data) {
        socket.broadcast.emit('chatBroadCast', data);
    });
});