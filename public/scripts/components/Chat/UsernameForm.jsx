var UserActions = require('../LoginForm/UserActions.jsx');

class UsernameForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let username = React.findDOMNode(this.refs.username).value.trim();
        React.findDOMNode(this.refs.username).value = '';
        UserActions.setUser(username)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter username" ref="username"/>
                <input type="submit" value="Send"/>
            </form>
        )
    }
}

export default UsernameForm;