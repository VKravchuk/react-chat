var MessageActions = require('../../actions/MessageActions.jsx');

class MessageForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let message = React.findDOMNode(this.refs.message).value.trim();
        React.findDOMNode(this.refs.message).value = '';
        MessageActions.createMessage(message);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter your message" ref="message"/>
                <input type="submit" value="Send"/>
            </form>
        )
    }
}

export default MessageForm;