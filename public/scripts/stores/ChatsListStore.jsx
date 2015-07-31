var AppDispatcher = require('../dispatchers/AppDispatcher.jsx');
var MicroEvent = require('../../bower_components/micro-event/microevent.js');
var CONST = require('../constants/AppConstants.jsx');

var ChatsListStore = {
    items : [
        {
            username : 'test 1',
            id : 1
        },
        {
            username : 'test 2',
            id : 2
        },
        {
            username : 'test 2',
            id : 3
        }
    ],
    filteredItems : [],
    getAll() {
        return this.items
    },
    getFiltered(){
        return this.filteredItems
    }
};

MicroEvent.mixin( ChatsListStore );
ChatsListStore.dispatchToken = AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case CONST.CLIENT_EVENTS.CHAT_SEARCH:
            if(payload.data.username){
                ChatsListStore.filteredItems = ChatsListStore.items.filter( item => item.username == payload.data.username );
            }
            else{
                ChatsListStore.filteredItems = ChatsListStore.items
            }
            ChatsListStore.trigger( CONST.CLIENT_EVENTS.CHAT_CHANGE);
            console.log(payload)
            break;

    }

    return true; // Needed for Flux promise resolution

});

module.exports = ChatsListStore;