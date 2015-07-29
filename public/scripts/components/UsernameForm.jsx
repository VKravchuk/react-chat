module.exports = React.createClass({
    handleSubmit : function (e) {
        e.preventDefault();
        var username = React.findDOMNode(this.refs.username).value.trim();
        this.props.onUsernameSet({username: username});
        React.findDOMNode(this.refs.username).value = '';
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter username" ref="username"/>
                <input type="submit" value="Send"/>
            </form>
        )
    }
});