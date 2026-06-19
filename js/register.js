function registerStudent() {

let rollNo =
    document.getElementById("rollNo")
    .value
    .trim();

let name =
    document.getElementById("name")
    .value
    .trim();

let dept =
    document.getElementById("dept")
    .value
    .trim();

let email =
    document.getElementById("email")
    .value
    .trim();

let mobile =
    document.getElementById("mobile")
    .value
    .trim();

let password =
    document.getElementById("password")
    .value
    .trim();

let confirmPassword =
    document.getElementById("confirmPassword")
    .value
    .trim();

let errorMsg =
    document.getElementById("errorMsg");

errorMsg.innerHTML = "";

if (rollNo === "") {
    errorMsg.innerHTML =
        "Roll Number is required";
    return;
}

if (name === "") {
    errorMsg.innerHTML =
        "Name is required";
    return;
}

if (dept === "") {
    errorMsg.innerHTML =
        "Department is required";
    return;
}

let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    errorMsg.innerHTML =
        "Enter a valid email address";
    return;
}

let mobilePattern =
    /^[0-9]{10}$/;

if (!mobilePattern.test(mobile)) {
    errorMsg.innerHTML =
        "Enter a valid 10-digit mobile number";
    return;
}

if (password === "") {
    errorMsg.innerHTML =
        "Password is required";
    return;
}

if (confirmPassword === "") {
    errorMsg.innerHTML =
        "Confirm Password is required";
    return;
}

if (password !== confirmPassword) {
    errorMsg.innerHTML =
        "Passwords do not match";
    return;
}

let students =
    JSON.parse(
        localStorage.getItem("students")
    ) || [];

let existingStudent =
    students.find(
        student =>
            student.rollNo === rollNo
    );

if (existingStudent) {

    errorMsg.innerHTML =
        "Roll Number already exists";

    return;
}

students.push({
    rollNo: rollNo,
    name: name,
    dept: dept,
    email: email,
    mobile: mobile,
    password: password
});

localStorage.setItem(
    "students",
    JSON.stringify(students)
);

alert(
    "Student Registered Successfully"
);

window.location.href =
    "index.html";

}