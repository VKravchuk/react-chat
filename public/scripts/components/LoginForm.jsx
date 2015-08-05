var UserActions = require('../actions/UserActions.jsx');
var LoginFormStore = require('../stores/LoginFormStore.jsx');
var CONST = require('../constants/AppConstants.jsx');

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loginFail = this.loginFail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        LoginFormStore.bind( CONST.SERVER_EVENTS.AUTH_SUCCESS, this.loginSuccess);
        LoginFormStore.bind( CONST.SERVER_EVENTS.AUTH_FAIL, this.loginFail);
    }
    loginSuccess(){
        console.log(LoginFormStore.getAllData());
        document.location.reload();
    }
    loginFail(){
        console.log(LoginFormStore.getLoginErrors());
        this.setState({ errors : LoginFormStore.getLoginErrors()})
    }
    handleSubmit(e) {
        e.preventDefault();
        let account = React.findDOMNode(this.refs.account).value.trim();
        let password = React.findDOMNode(this.refs.password).value.trim();
        UserActions.login(account, password);
    }
    render() {
        let errors;
        if(this.state.errors) {
            errors = this.state.errors.map(function (error) {
                return <span>{error}</span>
            });
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Anmelden</h4>
                <input type="text" placeholder="Account" ref="account"/>
                <input type="password" placeholder="Password" ref="password"/>
                {errors}
                <input type="submit" value="Anmelden"/>
            </form>
        )
    }
}

export default Chat;