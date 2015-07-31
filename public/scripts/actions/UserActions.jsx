var CONST = require('../constants/AppConstants.jsx');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var socket = io();

module.exports = {
    setUser(user) {
        AppDispatcher.dispatch({
            eventName : CONST.CLIENT_EVENTS.ADD_USER,
            data : {username : user}
        });
        socket.emit(CONST.SERVER_EVENTS.ADD_USER, user);
    }

};