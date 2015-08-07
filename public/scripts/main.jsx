$(function () {
    var LoginForm = require('./components/LoginForm/LoginForm.jsx');
//var Counter = require('./components/Counter/Counter.jsx');
    var container = document.getElementById('login-form');
    React.render(
        <LoginForm />,
        container
    );
});
