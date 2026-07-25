// =========================================
// Smart Village Complaint Management System
// login.js
// =========================================

// Select Elements
const villagerBtn = document.querySelectorAll(".tab")[0];
const panchayatBtn = document.querySelectorAll(".tab")[1];

const villagerForm = document.getElementById("villagerLogin");
const panchayatForm = document.getElementById("panchayatLogin");

// =========================================
// Show Villager Login
// =========================================

function showVillager() {

    villagerForm.style.display = "block";
    panchayatForm.style.display = "none";

    villagerBtn.classList.add("active");
    panchayatBtn.classList.remove("active");

}

// =========================================
// Show Panchayat Login
// =========================================

function showPanchayat() {

    villagerForm.style.display = "none";
    panchayatForm.style.display = "block";

    villagerBtn.classList.remove("active");
    panchayatBtn.classList.add("active");

}

// =========================================
// Villager Login
// =========================================

villagerForm.addEventListener("submit", function(e){

    e.preventDefault();

    const phone = document.getElementById("villagerPhone").value.trim();
    const password = document.getElementById("villagerPassword").value.trim();

    if(phone === "" || password === ""){

        alert("Please enter all fields.");
        return;

    }

    if(phone.length !== 10){

        alert("Phone number must contain 10 digits.");
        return;

    }

    // Save Login
    localStorage.setItem("userRole","Villager");
    localStorage.setItem("loggedIn","true");

    alert("Login Successful!");

    window.location.href = "villager-dashboard.html";

});

// =========================================
// Panchayat Login
// =========================================

panchayatForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("panchayatPassword").value.trim();

    if(email === "" || password === ""){

        alert("Please enter all fields.");
        return;

    }

    localStorage.setItem("userRole","Panchayat");
    localStorage.setItem("loggedIn","true");

    alert("Login Successful!");

    window.location.href = "panchayat-dashboard.html";

});

// =========================================
// Input Animation
// =========================================

const inputs = document.querySelectorAll("input");

inputs.forEach(input=>{

    input.addEventListener("focus",()=>{

        input.style.border="2px solid #2563eb";

    });

    input.addEventListener("blur",()=>{

        input.style.border="1px solid #d1d5db";

    });

});

// =========================================
// Password Strength
// =========================================

const passwords = document.querySelectorAll("input[type='password']");

passwords.forEach(password=>{

    password.addEventListener("keyup",()=>{

        if(password.value.length < 6){

            password.style.border="2px solid red";

        }
        else{

            password.style.border="2px solid green";

        }

    });

});

// =========================================
// Phone Validation
// =========================================

const phoneInput = document.getElementById("villagerPhone");

phoneInput.addEventListener("input",function(){

    this.value = this.value.replace(/[^0-9]/g,'');

    if(this.value.length > 10){

        this.value = this.value.slice(0,10);

    }

});

// =========================================
// Email Validation
// =========================================

const emailInput = document.getElementById("email");

emailInput.addEventListener("blur",()=>{

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailInput.value !== ""){

        if(pattern.test(emailInput.value)){

            emailInput.style.border="2px solid green";

        }
        else{

            emailInput.style.border="2px solid red";

        }

    }

});

// =========================================
// Check Login Status
// =========================================

window.onload=function(){

    showVillager();

    console.log("Login Page Loaded Successfully");

};

// =========================================
// Logout Function
// =========================================

function logout(){

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userRole");

    window.location.href="login.html";

}