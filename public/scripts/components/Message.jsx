class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let classString = 'clear ';
        classString += this.props.my_message ? 'from-me' : 'from-them';
        return (
            <div className={classString}>
                <span>{this.props.username}</span>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Message;