(function () {
    'user strict';
    var socket = io();

    socket.emit('chat message', 'Hi socket');
    socket.on('chat message', function (msg) {
        document.body.getElementsByTagName('main')[0].innerHTML = msg;
    });
})();