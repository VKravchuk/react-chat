module.exports = React.createClass({
    handleSubmit : function (e) {
        e.preventDefault();
        var message = React.findDOMNode(this.refs.message).value.trim();
        this.props.onMessageSent({message: message});
        React.findDOMNode(this.refs.message).value = '';
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter message" ref="message"/>
                <input type="submit" value="Send"/>
            </form>
        )
    }
});