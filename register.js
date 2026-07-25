// =========================================
// Smart Village Complaint System
// register.js
// =========================================

// Get Elements
const villagerBtn = document.querySelectorAll(".tab")[0];
const panchayatBtn = document.querySelectorAll(".tab")[1];

const villagerForm = document.getElementById("villagerForm");
const panchayatForm = document.getElementById("panchayatForm");

// ==============================
// Show Villager Form
// ==============================

function showVillager() {

    villagerForm.style.display = "block";
    panchayatForm.style.display = "none";

    villagerBtn.classList.add("active");
    panchayatBtn.classList.remove("active");

}

// ==============================
// Show Panchayat Form
// ==============================

function showPanchayat() {

    villagerForm.style.display = "none";
    panchayatForm.style.display = "block";

    villagerBtn.classList.remove("active");
    panchayatBtn.classList.add("active");

}

// ==============================
// Villager Registration
// ==============================

villagerForm.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = villagerForm.querySelectorAll("input");

    let valid = true;

    inputs.forEach(input => {

        if(input.value.trim() === ""){
            valid = false;
        }

    });

    if(!valid){

        alert("Please fill all the fields.");

        return;
    }

    alert("Villager Registered Successfully!");

    // Save locally (Temporary)
    localStorage.setItem("villagerName", inputs[0].value);
    localStorage.setItem("villagerPhone", inputs[2].value);

    villagerForm.reset();

    setTimeout(() => {

        window.location.href = "login.html";

    },1000);

});

// ==============================
// Panchayat Registration
// ==============================

panchayatForm.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = panchayatForm.querySelectorAll("input");

    let valid = true;

    inputs.forEach(input => {

        if(input.value.trim() === ""){
            valid = false;
        }

    });

    if(!valid){

        alert("Please fill all the fields.");

        return;

    }

    alert("Panchayat Registered Successfully!");

    localStorage.setItem("panchayatName", inputs[0].value);
    localStorage.setItem("panchayatEmail", inputs[2].value);

    panchayatForm.reset();

    setTimeout(() => {

        window.location.href = "login.html";

    },1000);

});

// ==============================
// Input Effects
// ==============================

const allInputs = document.querySelectorAll("input");

allInputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.border = "2px solid #2563eb";

    });

    input.addEventListener("blur", () => {

        input.style.border = "1px solid #d1d5db";

    });

});

// ==============================
// Password Validation
// ==============================

const passwordInputs = document.querySelectorAll("input[type='password']");

passwordInputs.forEach(password => {

    password.addEventListener("keyup", () => {

        if(password.value.length < 6){

            password.style.border = "2px solid red";

        }
        else{

            password.style.border = "2px solid green";

        }

    });

});

// ==============================
// Aadhaar Validation
// ==============================

const aadhaarInput = villagerForm.querySelector("input[type='text']:nth-of-type(2)");

if(aadhaarInput){

    aadhaarInput.addEventListener("input", function(){

        this.value = this.value.replace(/[^0-9]/g,'');

        if(this.value.length > 12){

            this.value = this.value.slice(0,12);

        }

    });

}

// ==============================
// Phone Number Validation
// ==============================

const phoneInput = villagerForm.querySelector("input[type='tel']");

if(phoneInput){

    phoneInput.addEventListener("input", function(){

        this.value = this.value.replace(/[^0-9]/g,'');

        if(this.value.length > 10){

            this.value = this.value.slice(0,10);

        }

    });

}

// ==============================
// Page Load
// ==============================

window.onload = function(){

    showVillager();

    console.log("Registration Page Loaded Successfully");

};