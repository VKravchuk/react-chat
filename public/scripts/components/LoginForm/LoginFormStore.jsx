var AppDispatcher = require('./AppDispatcher.jsx');
var MicroEvent = require('../../../bower_components/micro-event/microevent.js');
var CONST = require('./AppConstants.jsx');

var LoginFormStore = {
    errors : [],
    getLoginErrors() {
        return this.errors;
    },
    data : [],
    getAllData() {
        return this.data;
    }
};
MicroEvent.mixin( LoginFormStore );
LoginFormStore.dispatchToken = AppDispatcher.register( function( payload ) {
    switch( payload.eventName ) {
        case CONST.SERVER_EVENTS.AUTH_SUCCESS:
            LoginFormStore.data = payload.data.resp;
            LoginFormStore.trigger( CONST.SERVER_EVENTS.AUTH_SUCCESS );
            break;
        case CONST.SERVER_EVENTS.AUTH_FAIL:
            LoginFormStore.errors = payload.data.errors;
            LoginFormStore.trigger( CONST.SERVER_EVENTS.AUTH_FAIL );
            break;

    }

    return true; // Needed for Flux promise resolution

});

module.exports = LoginFormStore;