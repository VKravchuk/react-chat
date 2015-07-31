var CONST = require('../constants/AppConstants.jsx');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var socket = io();

module.exports = {

    createMessage(message) {
        AppDispatcher.dispatch({
            eventName : CONST.CLIENT_EVENTS.MY_NEW_MESSAGE,
            data : {message: message}
        });
        socket.emit(CONST.SERVER_EVENTS.NEW_MESSAGE, message);

    },
    loadMessages() {
        socket.on(CONST.SERVER_EVENTS.NEW_MESSAGE, function(data){
            AppDispatcher.dispatch({
                eventName : CONST.CLIENT_EVENTS.SERVER_NEW_MESSAGE,
                data : data
            });
        });
    }
};