var Message = require('./Message.jsx');

module.exports = React.createClass({
    render : function () {
        var messages = this.props.messagesList.map(function (message, index) {
            return (
                <Message username={message.username} message={message.message} my_message={message.my_message} key={index}/>
            );
        });
        return (
            <section>
                {messages}
            </section>
        )
    }
});