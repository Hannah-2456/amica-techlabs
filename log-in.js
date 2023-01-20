const logInForm = document.getElementById("logInForm")
logInForm.addEventListener('submit', registerUser)

function registerUser(event) {
    event.preventDefault()

    var usernameInput = document.getElementById("usernameInput-logIn").value;
    
    var userFromLocalStorage = JSON.parse(localStorage.getItem(usernameInput));

    if(!userFromLocalStorage) {
        var usernameError = document.getElementById("usernameError");
        usernameError.innerHTML = "User does not exist. Please try again.";
    }

    var passwordInput = document.getElementById("passwordInput-logIn").value;

    if(userFromLocalStorage.password !== passwordInput) {
        var passwordError = document.getElementById("passwordError");
        passwordError.innerHTML = "Invalid password. Please try again.";

    } else {
        console.log('Logged in successfully.')
        location.href = "register.html";
    }
}