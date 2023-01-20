const detailsForm = document.getElementById("detailsForm");
detailsForm.addEventListener('submit', editUser);


function editUser(event) {
    event.preventDefault();

    var objectUser = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));

    let birthday = document.getElementById("birthday").value;
    objectUser['birthday'] = birthday;

    let gender = document.querySelector('input[name="gender"]:checked').value;
    objectUser['gender'] = gender;

    let location = document.getElementById("location").value;
    objectUser['location'] = location;

    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    var allInterests = [];
    for (var checkbox of markedCheckbox) {
        allInterests.push(checkbox.value);
        }
    objectUser['interests'] = allInterests;




    localStorage.setItem(objectUser.userName, JSON.stringify(objectUser));

    console.log("done");


}