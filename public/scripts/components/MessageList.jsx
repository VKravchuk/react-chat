var Message = require('./Message.jsx');
var MessagesListStore = require('../stores/MessagesListStore.jsx');
var MessageActions = require('../actions/MessageActions.jsx');

class MessageList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            messagesList : []
        };

        MessageActions.loadMessages();

        this.messagesUpdate = this.messagesUpdate.bind(this);
        MessagesListStore.bind( 'message-change', this.messagesUpdate);
    }
    messagesUpdate(){
        this.setState({
            messagesList : MessagesListStore.getAll()
        });
    }
    render() {
        let messages = this.state.messagesList.map(function (message, index) {
            return (
                <Message username={message.username} message={message.message} my_message={message.my_message} key={index}/>
            );
        });
        return (
            <section>
                {messages}
            </section>
        )
    }
}

export default MessageList;