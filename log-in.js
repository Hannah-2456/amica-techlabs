const signupForm = document.getElementById("logInForm")
signupForm.addEventListener('submit', registerUser)

function registerUser(event) {
    event.preventDefault()

    var usernameInput = document.getElementById("usernameInput-logIn").value;
    
    var userFromLocalStorage = JSON.parse(localStorage.getItem(usernameInput));

    if(!userFromLocalStorage) {
        console.log('User does not exist. Please try again.')
    }

    var passwordInput = document.getElementById("passwordInput-logIn").value;

    if(userFromLocalStorage.password !== passwordInput) {
        console.log('Invalid password. Please try again.')
    } else {
        console.log('Logged in successfully.')
        location.href = "register.html";
    }
}