var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var UsernameForm = require('./UsernameForm.jsx');

var socket = io();

module.exports = React.createClass({
    getInitialState: function() {
        return {messagesList: []};
    },
    loadMessages : function () {
        var self = this;
        socket.on('new message', function(data){
            var messagesList = self.state.messagesList;
            messagesList.push(data);
            self.setState({messagesList: messagesList});
        });
    },
    newMessageHandle : function (message) {
        var messagesList = this.state.messagesList;
        messagesList.push({
            message : message,
            my_message : true
        });
        this.setState({messagesList: messagesList});
        socket.emit('new message', message);
    },
    setUser : function (user) {
        this.setState({username : user.username});
        socket.emit('add user', user);
    },
    componentDidMount : function () {
        this.loadMessages();
    },
    render : function () {
        return (
            <div className="chatWrapper">
                <MessageList messagesList={this.state.messagesList}/>
                <MessageForm onMessageSent={this.newMessageHandle}/>
                { this.state.username ? null : <UsernameForm onUsernameSet={this.setUser}/> }
            </div>
        );
    }
});