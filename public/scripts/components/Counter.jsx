class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let errors;
        if(this.state.errors) {
            errors = this.state.errors.map(function (error) {
                return <span>{error}</span>
            });
        }
        return (
            <h4>Counter</h4>
        )
    }
}

export default Chat;