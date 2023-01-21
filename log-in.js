const logInForm = document.getElementById("logInForm")
logInForm.addEventListener('submit', logUser)

function logUser(event) {
    event.preventDefault()

    var usernameInput = document.getElementById("usernameInput-logIn").value;
    var passwordInput = document.getElementById("passwordInput-logIn").value;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");

    // If user didn't finish the registration
    if (window.localStorage.getItem("registeringUser")) {
        const registeringUser = JSON.parse(window.localStorage.getItem("registeringUser"));
        usernameError.innerHTML = "";
        passwordError.innerHTML ="";

        if (usernameInput !== registeringUser.userName) {
            usernameError.innerHTML = "User does not exist. Please try again.";
        }

        if (passwordInput !== registeringUser.password) {
            passwordError.innerHTML = "Invalid password. Please try again.";
        } else {
            window.location = "register.html"
        }
    
    // If user finished the registration
    } else if (window.localStorage.getItem("currentUser")) {
        const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
        usernameError.innerHTML = "";
        passwordError.innerHTML ="";

        if (usernameInput !== currentUser.userName) {
            usernameError.innerHTML = "User does not exist. Please try again.";
        }

        if (passwordInput !== currentUser.password) {
            passwordError.innerHTML = "Invalid password. Please try again.";
        } else {
            window.location = "home.html"
        }
    }
}