module.exports = React.createClass({
    render: function () {
        var classString = 'clear ';
        classString += this.props.my_message ? 'from-me' : 'from-them';
        return (
            <div className={classString}>
                <span>{this.props.username}</span>
                <p>{this.props.message}</p>
            </div>
        )
    }
});