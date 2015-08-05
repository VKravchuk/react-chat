var ChatItem = require('./ChatItem.jsx');
var ChatsListStore = require('../../stores/ChatsListStore.jsx');
var CONST = require('../../constants/AppConstants.jsx');

class ChatList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chatsList : ChatsListStore.getAll()
        };
        this.chatsUpdate = this.chatsUpdate.bind(this);
        ChatsListStore.bind( CONST.CLIENT_EVENTS.CHAT_CHANGE, this.chatsUpdate);
    }
    chatsUpdate(){
        this.setState({
            chatsList : ChatsListStore.getFiltered()
        });
    }
    render(){
        let chats = this.state.chatsList.map(function (chat, index) {
            return (
                <ChatItem username={chat.username} id={chat.id} key={index}/>
            );
        });
        return (
            <div>
                {chats}
            </div>
        )
    }
}

export default ChatList;