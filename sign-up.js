const signupForm = document.getElementById("registerForm")
signupForm.addEventListener('submit', registerUser)

function registerUser(event) {
    event.preventDefault()
    const firstNameUser = document.getElementById('firstNameInput-signUp')
    const lastNameUser = document.getElementById('lastNameInput-signUp')
    const usernameUser = document.getElementById('usernameInput-signUp')
    const emailUser = document.getElementById('emailInput-signUp')
    const passwordUser = document.getElementById('passwordInput-signUp')

    const first = firstNameUser.value;
    const last = lastNameUser.value;
    const username = usernameUser.value;
    sessionStorage.setItem("currentUser", username);
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
    location.href = "register.html";
}
