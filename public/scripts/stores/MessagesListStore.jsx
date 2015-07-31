var AppDispatcher = require('../dispatchers/AppDispatcher.jsx');
var MicroEvent = require('../../bower_components/micro-event/microevent.js');
var CONST = require('../constants/AppConstants.jsx');


var MessagesListStore = {
    items : [],
    getAll() {
        return this.items;
    }
};
MicroEvent.mixin( MessagesListStore );
MessagesListStore.dispatchToken = AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case CONST.CLIENT_EVENTS.MY_NEW_MESSAGE:
            let data = payload.data;
            data.my_message = true;
            MessagesListStore.items.push( data );
            MessagesListStore.trigger( CONST.CLIENT_EVENTS.MESSAGE_CHANGE);
            break;

        case CONST.CLIENT_EVENTS.SERVER_NEW_MESSAGE:
            MessagesListStore.items.push( payload.data );
            MessagesListStore.trigger( CONST.CLIENT_EVENTS.MESSAGE_CHANGE );
            break;

    }

    return true; // Needed for Flux promise resolution

});

module.exports = MessagesListStore;