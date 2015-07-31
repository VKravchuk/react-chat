var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var UsernameForm = require('./UsernameForm.jsx');
var UserStore = require('../stores/UserStore.jsx');

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messagesList : []};
        this.userWasSet = this.userWasSet.bind(this);
        UserStore.bind('user-change', this.userWasSet)
    }
    userWasSet(){
        this.setState({username : UserStore.getUser()})
    }
    render() {
        return (
            <div className="chatWrapper">
                <MessageList/>
                <MessageForm/>
                { this.state.username ? null : <UsernameForm/> }
            </div>
        );
    }
}

export default Chat;