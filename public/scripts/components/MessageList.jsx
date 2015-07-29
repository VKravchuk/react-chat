var Message = require('./Message.jsx');

class MessageList extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let messages = this.props.messagesList.map(function (message, index) {
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