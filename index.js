
export function getUserFirstName() {
    var currentUsername = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));
    return currentUsername.firstName;
}

export function getUserLastName() {
    var currentUsername = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));
    return currentUsername.lastName;
}

export function getUserUsername() {
    var currentUsername = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));
    return currentUsername.userName;
}

