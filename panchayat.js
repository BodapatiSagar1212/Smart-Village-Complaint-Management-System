// =======================================
// Smart Village Complaint Management System
// Panchayat Dashboard
// panchayat.js
// =======================================

// Load Dashboard
document.addEventListener("DOMContentLoaded", () => {

    const adminName = localStorage.getItem("panchayatName") || "Panchayat";

    document.getElementById("adminName").textContent =
        "Welcome, " + adminName;

    loadComplaints();

});

// =======================================
// Load Complaints
// =======================================

function loadComplaints() {

    const table = document.getElementById("complaintTable");

    table.innerHTML = "";

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    let pending = 0;
    let solved = 0;

    complaints.forEach((complaint, index) => {

        if (complaint.status === "Pending")
            pending++;
        else
            solved++;

        table.innerHTML += `

        <tr>

            <td>${complaint.id}</td>

            <td>${complaint.title}</td>

            <td>${complaint.category}</td>

            <td>

                <span class="${complaint.status.toLowerCase()}">

                    ${complaint.status}

                </span>

            </td>

            <td>

                ${
                    complaint.status === "Pending"

                    ?

                    `<button class="solve-btn"
                    onclick="solveComplaint(${index})">

                    Mark Solved

                    </button>`

                    :

                    `<button class="done-btn" disabled>

                    Solved

                    </button>`
                }

                <button class="delete-btn"
                onclick="deleteComplaint(${index})">

                    Delete

                </button>

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

// =======================================
// Mark Complaint as Solved
// =======================================

function solveComplaint(index) {

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    complaints[index].status = "Solved";

    localStorage.setItem(
        "complaints",
        JSON.stringify(complaints)
    );

    alert("Complaint marked as Solved.");

    loadComplaints();

}

// =======================================
// Delete Complaint
// =======================================

function deleteComplaint(index) {

    if (confirm("Are you sure you want to delete this complaint?")) {

        let complaints =
            JSON.parse(localStorage.getItem("complaints")) || [];

        complaints.splice(index, 1);

        localStorage.setItem(
            "complaints",
            JSON.stringify(complaints)
        );

        loadComplaints();

    }

}

// =======================================
// Logout
// =======================================

function logout() {

    if (confirm("Do you want to logout?")) {

        localStorage.removeItem("loggedIn");

        window.location.href = "login.html";

    }

}

// =======================================
// Auto Refresh Every 5 Seconds
// =======================================

setInterval(() => {

    loadComplaints();

}, 5000);

console.log("Panchayat Dashboard Loaded Successfully");