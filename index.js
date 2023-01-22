
//Redirect logged-in users
if (window.localStorage.getItem("currentUser")) {
    window.location = "home.html"
} else if (window.localStorage.getItem("registeringUser")) {
    window.location = "register.html"
}