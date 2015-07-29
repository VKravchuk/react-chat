var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var UsernameForm = require('./UsernameForm.jsx');
var socket = io();

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messagesList : []};
        this.newMessageHandle = this.newMessageHandle.bind(this);
        this.setUser = this.setUser.bind(this);
    }
    loadMessages() {
        let self = this;
        socket.on('new message', function(data){
            let messagesList = self.state.messagesList;
            messagesList.push(data);
            self.setState({messagesList : messagesList});
        });
    }
    newMessageHandle (message) {
        let messagesList = this.state.messagesList;
        messagesList.push({
            message : message,
            my_message : true
        });
        this.setState({messagesList : messagesList});
        socket.emit('new message', message);
    }
    setUser(user) {
        this.setState({username : user.username});
        socket.emit('add user', user);
    }
    componentDidMount() {
        this.loadMessages();
    }
    render() {
        return (
            <div className="chatWrapper">
                <MessageList messagesList={this.state.messagesList}/>
                <MessageForm onMessageSent={this.newMessageHandle}/>
                { this.state.username ? null : <UsernameForm onUsernameSet={this.setUser}/> }
            </div>
        );
    }
}

export default Chat;