
function getUserFirstName() {
    var currentUsername = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));
    return currentUsername.firstName;
}

function getUserLaseName() {
    var currentUsername = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));
    return currentUsername.lastName;
}

function getUserUsername() {
    var currentUsername = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));
    return currentUsername.userName;
}

