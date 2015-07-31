var AppDispatcher = require('../dispatchers/AppDispatcher');
var socket = io();

module.exports = {

    createMessage(message) {
        AppDispatcher.dispatch({
            eventName : 'my-new-message',
            data : {message: message}
        });
        socket.emit('new message', message);

    },
    loadMessages() {
        socket.on('new message', function(data){
            AppDispatcher.dispatch({
                eventName : 'new-message',
                data : data
            });
        });
    }

};