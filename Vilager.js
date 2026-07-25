// ==========================================
// Smart Village Complaint System
// villager.js
// ==========================================

// Load user name
document.addEventListener("DOMContentLoaded", () => {

    const username = localStorage.getItem("villagerName") || "Villager";

    document.getElementById("username").textContent =
        "Welcome, " + username;

    loadComplaints();

});

// ==========================================
// Complaint Form
// ==========================================

const complaintForm = document.getElementById("complaintForm");

complaintForm.addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;

    if(title==="" || description===""){

        alert("Please fill all fields");
        return;

    }

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    const complaint = {

        id: Date.now(),

        title: title,

        description: description,

        category: category,

        status: "Pending"

    };

    complaints.push(complaint);

    localStorage.setItem(
        "complaints",
        JSON.stringify(complaints)
    );

    alert("Complaint Submitted Successfully!");

    complaintForm.reset();

    loadComplaints();

});

// ==========================================
// Load Complaints
// ==========================================

function loadComplaints(){

    const table =
        document.getElementById("historyTable");

    table.innerHTML = "";

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    let pending = 0;
    let solved = 0;

    complaints.forEach(c=>{

        if(c.status==="Pending")
            pending++;

        if(c.status==="Solved")
            solved++;

        table.innerHTML += `

        <tr>

            <td>${c.id}</td>

            <td>${c.title}</td>

            <td>${c.category}</td>

            <td>

                <span class="${c.status.toLowerCase()}">

                    ${c.status}

                </span>

            </td>

        </tr>

        `;

    });

    document.getElementById("totalComplaints").innerHTML =
        complaints.length;

    document.getElementById("pendingComplaints").innerHTML =
        pending;

    document.getElementById("solvedComplaints").innerHTML =
        solved;

}

// ==========================================
// Filter Functions
// ==========================================

function showPending(){

    filterStatus("Pending");

}

function showSolved(){

    filterStatus("Solved");

}

function showAll(){

    loadComplaints();

}

function filterStatus(status){

    const table =
        document.getElementById("historyTable");

    table.innerHTML = "";

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.forEach(c=>{

        if(c.status===status){

            table.innerHTML += `

            <tr>

                <td>${c.id}</td>

                <td>${c.title}</td>

                <td>${c.category}</td>

                <td>

                    <span class="${c.status.toLowerCase()}">

                        ${c.status}

                    </span>

                </td>

            </tr>

            `;

        }

    });

}

// ==========================================
// Search Complaint
// ==========================================

function searchComplaint(){

    let keyword =
        document.getElementById("search").value.toLowerCase();

    const table =
        document.getElementById("historyTable");

    table.innerHTML="";

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.forEach(c=>{

        if(

            c.title.toLowerCase().includes(keyword) ||

            c.category.toLowerCase().includes(keyword)

        ){

            table.innerHTML += `

            <tr>

                <td>${c.id}</td>

                <td>${c.title}</td>

                <td>${c.category}</td>

                <td>

                    <span class="${c.status.toLowerCase()}">

                        ${c.status}

                    </span>

                </td>

            </tr>

            `;

        }

    });

}

// ==========================================
// Logout
// ==========================================

function logout(){

    if(confirm("Do you want to logout?")){

        localStorage.removeItem("loggedIn");

        window.location.href="login.html";

    }

}

// ==========================================
// Demo Auto Update
// Changes one complaint to Solved every 15 sec
// ==========================================

setInterval(()=>{

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    let found = complaints.find(c=>c.status==="Pending");

    if(found){

        found.status="Solved";

        localStorage.setItem(
            "complaints",
            JSON.stringify(complaints)
        );

        loadComplaints();

    }

},15000);

console.log("Villager Dashboard Loaded Successfully");