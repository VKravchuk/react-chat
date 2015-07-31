var AppDispatcher = require('../dispatchers/AppDispatcher.jsx');
var MicroEvent = require('../../bower_components/micro-event/microevent.js');

var MessagesListStore = {
    items : [],
    getAll() {
        return this.items;
    }
};
MicroEvent.mixin( MessagesListStore );
MessagesListStore.dispatchToken = AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case 'my-new-message':
            let data = payload.data;
            data.my_message = true;
            MessagesListStore.items.push( data );
            MessagesListStore.trigger( 'message-change' );
            break;

        case 'new-message':
            MessagesListStore.items.push( payload.data );
            MessagesListStore.trigger( 'message-change' );
            break;

    }

    return true; // Needed for Flux promise resolution

});

module.exports = MessagesListStore;