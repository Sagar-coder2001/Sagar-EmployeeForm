
window.onload = function () {
    constructor();
};
var editId;
var editData;
var editClicked = localStorage.getItem('editClicked');
function constructor() {
    if (editClicked === "true") {
        editId = localStorage.getItem('editId');
        editData = JSON.parse(localStorage.getItem('employeedata'));
        setEditData(editId, editData);
    } else if (!editClicked) {
        document.getElementById("editBtn").classList.add("show")
        clearInputs();
    }
}
function setEditData(editId, editData) {
    document.getElementById("editBtn").classList.remove("hidden")
    if (editId && editData && editData.length >= editId) {
        let fnameInput = document.getElementById("fname");
        fnameInput.value = editData[editId - 1].fname;
        fnameInput.disabled = true;
        let lnameInput = document.getElementById("lname");
        lnameInput.value = editData[editId - 1].lname;
        lnameInput.disabled = true;
        let emailInput = document.getElementById("email");
        emailInput.value = editData[editId - 1].email;
        emailInput.disabled = true;
        let mobInput = document.getElementById("mob");
        mobInput.value = editData[editId - 1].mob;
        mobInput.disabled = true;
        let dobInput = document.getElementById("dob");
        dobInput.value = editData[editId - 1].dob;
        dobInput.disabled = true;
        let genderInputs = document.querySelectorAll('input[name="gender"]');
        genderInputs.forEach(input => {
            input.disabled = true;
        });
        let selectInput = document.getElementById("select");
        selectInput.value = editData[editId - 1].select;
        selectInput.disabled = true;
        let selectexInput = document.getElementById("selectex");
        selectexInput.value = editData[editId - 1].selectex;
        selectexInput.disabled = true;
        let textareaInput = document.getElementById("textarea");
        textareaInput.value = editData[editId - 1].textarea;
        textareaInput.disabled = true;
    } else {
        alert("Invalid editId or editData");
    }
}
function enabledInput() {
    editClicked = "false";
    localStorage.setItem('editClicked', "false");
    let fnameInput = document.getElementById("fname");
    fnameInput.disabled = false;
    let lnameInput = document.getElementById("lname");
    lnameInput.disabled = false;
    let emailInput = document.getElementById("email");
    emailInput.disabled = false;
    let mobInput = document.getElementById("mob");
    mobInput.disabled = false;
    let dobInput = document.getElementById("dob");
    dobInput.disabled = false;
    let genderInput = document.querySelector('input[name="gender"]:checked');
    genderInput.disabled = false;
    let selectInput = document.getElementById("select");
    selectInput.disabled = false;
    let selectexInput = document.getElementById("selectex");
    selectexInput.disabled = false;
    let textareaInput = document.getElementById("textarea");
    textareaInput.disabled = false;
}
function saveData() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let mob = document.getElementById("mob").value;
    let dob = document.getElementById("dob").value;
    let select = document.getElementById("select").value;
    var selectedGender = document.querySelector('input[name="gender"]:checked');
    let selectex = document.getElementById("selectex").value;
    let textarea = document.getElementById("textarea").value;

    let existingData = localStorage.getItem('employeedata');
    let dataArray = existingData ? JSON.parse(existingData) : [];
    if(dataArray.length == 0){
        maxIndex  = 1;
    }
    else{
        maxIndex = dataArray.length 
        maxIndex = ++maxIndex
    }
    let obj = {
        "id": maxIndex,
        "fname": fname,
        "lname": lname,
        "email": email,
        "mob": mob,
        "dob": dob,
        "gender": selectedGender.value,
        "select": select,
        "selectex": selectex,
        "textarea": textarea
    }
    let arr = [];
    try {
        arr = JSON.parse(existingData || '[]');
        arr.push(obj);
        localStorage.setItem('employeedata', JSON.stringify(arr));
        alert("Employee data saved successfully");

    } catch (error) {
        console.error("Error:", error);
    }
    clearInputs();
}
function clearInputs() {
    editClicked = "false";
    localStorage.setItem('editClicked', "false");
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let mob = document.getElementById("mob");
    let dob = document.getElementById("dob");
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    let select = document.getElementById("select");
    let selectex = document.getElementById("selectex");
    let textarea = document.getElementById("textarea");

    fname.value = "";
    lname.value = "";
    email.value = "";
    mob.value = "";
    dob.value = "";
    if (selectedGender) {
        selectedGender.checked = false;
    }
    select.value = "";
    selectex.value = "";
    textarea.value = "";
}
