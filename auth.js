function auth(login, pass) {
    if (login == 'login' && pass == 'pass') {
        return 'You were logged in';
    } else {
        return 'Login is incorrect';
    }
}
