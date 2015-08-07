var CONST = require('./AppConstants.jsx');
var AppDispatcher = require('./AppDispatcher');
var API = require('./API.jsx');

module.exports = {
    /*setUser(user) {
        AppDispatcher.dispatch({
            eventName : CONST.CLIENT_EVENTS.ADD_USER,
            data : {username : user}
        });
        socket.emit(CONST.SERVER_EVENTS.ADD_USER, user);
    }*/
    login(account, password){
        API.login(account, password)
            .done(function (resp) {
                AppDispatcher.dispatch({
                    eventName : CONST.SERVER_EVENTS.AUTH_SUCCESS,
                    data : {resp : resp}
                });
            })
            .fail(function (err) {
                AppDispatcher.dispatch({
                    eventName : CONST.SERVER_EVENTS.AUTH_FAIL,
                    data : {errors : err.responseJSON}
                });

            })
    }
};