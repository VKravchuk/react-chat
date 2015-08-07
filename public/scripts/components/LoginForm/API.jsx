module.exports = {
    login(account, password){
        return $.post('http://localhost:8080/site/login-ajax', {
            "username": account,
            "password": password
        })
    }
};