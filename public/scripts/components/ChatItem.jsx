var ChatItem = require('./ChatItem.jsx');


class ChatList extends React.Component {
    constructor(props){
        super(props);
        this.state = {}

    }
    render(){
        return (
            <div>
                <span>{this.props.id}</span>
                <p>{this.props.username}</p>
            </div>
        )
    }
}

export default ChatList;