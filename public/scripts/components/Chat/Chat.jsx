var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var UsernameForm = require('./UsernameForm.jsx');
var UserStore = require('../../stores/UserStore.jsx');
var CONST = require('../../constants/AppConstants.jsx');

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messagesList : []};
        this.userWasSet = this.userWasSet.bind(this);
        UserStore.bind(CONST.CLIENT_EVENTS.USER_CHANGE, this.userWasSet)
    }
    userWasSet(){
        this.setState({username : UserStore.getCurrentUser()})
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