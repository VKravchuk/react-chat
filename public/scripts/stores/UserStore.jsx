var AppDispatcher = require('../dispatchers/AppDispatcher.jsx');
var MicroEvent = require('../../bower_components/micro-event/microevent.js');
var CONST = require('../constants/AppConstants.jsx');

var UserStore = {
    user : {},
    getUser() {
        return this.user;
    }
};
MicroEvent.mixin( UserStore );
UserStore.dispatchToken = AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case CONST.CLIENT_EVENTS.ADD_USER:
            UserStore.user = payload.data ;
            UserStore.trigger( CONST.CLIENT_EVENTS.USER_CHANGE );
            break;

    }

    return true; // Needed for Flux promise resolution

});

module.exports = UserStore;