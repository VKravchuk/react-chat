var Chat = require('./Chat.jsx');
var ChatsList = require('./ChatsList.jsx');
var ChatSearchForm = require('./ChatSearchForm.jsx');

class ChatWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = {}

    }
    render(){
        return (
            <div>
                <ChatSearchForm/>
                <ChatsList/>
                <Chat/>
            </div>
        )
    }
}

export default ChatWrapper;