
if (window.localStorage.getItem("registeringUser")) {
    window.location = "register.html"
} else if (!window.localStorage.getItem("currentUser")) {
    window.location = "index.html"
}

const currentUser = JSON.parse(window.localStorage.getItem("currentUser"))

console.log(currentUser)
