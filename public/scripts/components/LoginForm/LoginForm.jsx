var UserActions = require('./UserActions.jsx');
var LoginFormStore = require('./LoginFormStore.jsx');
var CONST = require('./AppConstants.jsx');

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loginFail = this.loginFail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        LoginFormStore.bind(CONST.SERVER_EVENTS.AUTH_SUCCESS, this.loginSuccess);
        LoginFormStore.bind(CONST.SERVER_EVENTS.AUTH_FAIL, this.loginFail);
    }

    loginSuccess() {
        console.log(LoginFormStore.getAllData());
        document.location.reload();
    }

    loginFail() {
        this.setState({errors: LoginFormStore.getLoginErrors()})
    }

    handleSubmit(e) {
        e.preventDefault();
        let account = React.findDOMNode(this.refs.account).value.trim();
        let password = React.findDOMNode(this.refs.password).value.trim();
        UserActions.login(account, password);
    }

    render() {
        let errors = [];
        //console.log(this.state.errors);
        if (this.state.errors) {
            for (let attr in this.state.errors){
                if (this.state.errors.hasOwnProperty(attr)){
                    errors.push(<span>{this.state.errors[attr]}</span>);
                }
            }
        }
        return (
            <form role="form" onSubmit={this.handleSubmit}>
                {errors}
                <div className="form-group">
                    <div className="input-group input-group-lg">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Account" ref="account"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group input-group-lg">
                        <span className="input-group-addon"><i className="fa fa-key"></i></span>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                               ref="password"/>
                    </div>

                    <p className="help-block"><a href="reset-password.html">Forgot your password?</a></p>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Anmelden</button>
            </form>
        )
    }
}