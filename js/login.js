let loginInProgress = false;

function login() {

    if(loginInProgress)
        return;

    let user = document.getElementById("user").value.trim();
    let pass = document.getElementById("pass").value.trim();

    if(user === ""){
        document.getElementById("errorMsg").innerHTML =
        "Username is required";
        return;
    }

    if(pass === ""){
        document.getElementById("errorMsg").innerHTML =
        "Password is required";
        return;
    }

    loginInProgress = true;

    window.location = "dashboard.html";
}
loginInProgress = false;

function login() {

if (loginInProgress)
    return;

let user =
    document.getElementById("user")
    .value
    .trim();

let pass =
    document.getElementById("pass")
    .value
    .trim();

let errorMsg =
    document.getElementById("errorMsg");

errorMsg.innerHTML = "";

if (user === "") {

    errorMsg.innerHTML =
        "Username is required";

    return;
}

if (pass === "") {

    errorMsg.innerHTML =
        "Password is required";

    return;
}

let students =
    JSON.parse(
        localStorage.getItem("students")
    ) || [];

let validUser =
    students.find(function(student) {

        return student.name === user &&
               student.password === pass;
    });

if (!validUser) {

    errorMsg.innerHTML =
        "User not registered or invalid password";

    return;
}

loginInProgress = true;

localStorage.setItem(
    "loggedInUser",
    validUser.name
);

window.location.href =
    "dashboard.html";

}