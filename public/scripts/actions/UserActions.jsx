var AppDispatcher = require('../dispatchers/AppDispatcher');
var socket = io();

module.exports = {
    setUser(user) {
        AppDispatcher.dispatch({
            eventName : 'add-user',
            data : {username : user}
        });
        socket.emit('add user', user);
    }

};