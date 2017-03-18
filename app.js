function initialLoad() {
    $("#main").show();
    $("#login").hide();
    $("#signup").hide();
    $("#home").hide();
}

function login() {
    $("#main").hide();
    $("#login").show();
    $("#signup").hide();
    $("#home").hide();
}

function signup() {
    $("#main").hide();
    $("#login").hide();
    $("#signup").show();
    $("#home").hide();
}

function home() {
    $("#main").hide();
    $("#login").hide();
    $("#signup").hide();
    $("#home").show();
    $("#loggedInUser")[0].innerHTML = localStorage.getItem('name');
}

function signupSubmit() {
    var name = $("#signup-name")[0].value;
    var email = $("#signup-email")[0].value;
    var password = $("#signup-password")[0].value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    login();
}

function loginSubmit() {
    var email = $("#login-email")[0].value;
    var password = $("#login-password")[0].value;
    if (localStorage.getItem('email') === email && localStorage.getItem('password') === password) {
        home();
    } else {
        $("#errorMsg")[0].innerHTML = "user or password is incorrect."
    }
}

function logout() {
    localStorage.clear();
    initialLoad();
}