var ChatActions = require('../actions/ChatActions.jsx');

class MessageForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e) {
        e.preventDefault();
        let user = React.findDOMNode(this.refs.user).value.trim();
        ChatActions.searchChat(user);
    }
    render() {
        return (
            <form>
                <input type="text" onKeyUp={this.handleInputChange} placeholder="Search chat by user" ref="user"/>
            </form>
        )
    }
}

export default MessageForm;