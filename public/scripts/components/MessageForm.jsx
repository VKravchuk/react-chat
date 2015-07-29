class MessageForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        let message = React.findDOMNode(this.refs.message).value.trim();
        this.props.onMessageSent({message: message});
        React.findDOMNode(this.refs.message).value = '';
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter message" ref="message"/>
                <input type="submit" value="Send"/>
            </form>
        )
    }
}

export default MessageForm;