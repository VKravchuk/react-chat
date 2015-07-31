var CONST = require('../constants/AppConstants.jsx');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var socket = io();

module.exports = {
    searchChat(user) {
        AppDispatcher.dispatch({
            eventName : CONST.CLIENT_EVENTS.CHAT_SEARCH,
            data : {username : user}
        });
    }
};