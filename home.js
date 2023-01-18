
if (window.localStorage.getItem("registeringUser")) {
    window.location = "register.html"
} else if (!window.localStorage.getItem("currentUser")) {
    window.location = "index.html"
}

const homeTitle = document.getElementById("homeTitle")
const currentUser = JSON.parse(window.localStorage.getItem("currentUser"))

homeTitle.innerText = homeTitle.innerText.replace("USER", currentUser.firstName + " " + currentUser.lastName)
