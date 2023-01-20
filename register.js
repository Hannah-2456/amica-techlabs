const detailsForm = document.getElementById("detailsForm");
detailsForm.addEventListener('submit', editUser);


function editUser(event) {
    event.preventDefault();

    var objectUser = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));

    let birthday = document.getElementById("birthday").value;
    objectUser['birthday'] = birthday.toString();



    localStorage.setItem(objectUser.userName, JSON.stringify(objectUser));

    console.log("done");


}