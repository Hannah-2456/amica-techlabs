let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let firstNameField = document.getElementById("firstNameField")
let lastNameField = document.getElementById("lastNameField")
let confirmPasswordField = document.getElementById("confirmPasswordField")
let title = document.getElementById("title")
let intro = document.getElementById("intro")

signinBtn.onclick = function(){
    firstNameField.style.maxHeight = "0";
    lastNameField.style.maxHeight = "0";
    confirmPasswordField.style.maxHeight = "0";
    title.innerHTML = "Log In";
    intro.innerHTML = "Welcome to Amica";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    firstNameField.style.maxHeight = "60px";
    lastNameField.style.maxHeight = "60px";
    confirmPasswordField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    intro.innerHTML = "Join us and find new connections in your area. Create your free Amica account";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

const signupForm = document.getElementById("registerForm")
signupForm.addEventListener('submit', registerUser)

function registerUser(event) {
    event.preventDefault()
    const firstNameUser = document.getElementById('firstNameInput')
    const lastNameUser = document.getElementById('lastNameInput')
    const usernameUser = document.getElementById('usernameInput')
    const emailUser = document.getElementById('emailInput')
    const passwordUser = document.getElementById('passwordInput')

    const first = firstNameUser.value;
    const last = lastNameUser.value;
    const username = usernameUser.value;
    const email = emailUser.value;
    const password = passwordUser.value;

    const userData = {
        firstName: first,
        lastName: last,
        userName: username,
        email: email,
        password: password,
    }

    const userDataString = JSON.stringify(userData);

    localStorage.setItem(userData.userName, userDataString);
}
