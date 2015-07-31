var AppDispatcher = require('../dispatchers/AppDispatcher.jsx');
var MicroEvent = require('../../bower_components/micro-event/microevent.js');

var UserStore = {
    user : {},
    getUser() {
        return this.user;
    }
};
MicroEvent.mixin( UserStore );
UserStore.dispatchToken = AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case 'add-user':
            UserStore.user = payload.data ;
            UserStore.trigger( 'user-change' );
            break;

    }

    return true; // Needed for Flux promise resolution

});

module.exports = UserStore;