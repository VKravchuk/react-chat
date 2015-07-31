var ChatActions = require('../actions/ChatActions.jsx');

class MessageForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let user = React.findDOMNode(this.refs.user).value.trim();
        React.findDOMNode(this.refs.user).value = '';
        ChatActions.searchChat(user);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search chat by user" ref="user"/>
                <input type="submit" value="Send"/>
            </form>
        )
    }
}

export default MessageForm;