// ===============================
// Smart Village Complaint System
// main.js
// ===============================

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Navbar Shadow on Scroll
    // ===============================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.25)";
        } else {
            navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
        }

    });

    // ===============================
    // Hero Buttons Animation
    // ===============================

    const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-5px) scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0) scale(1)";
        });

    });

    // ===============================
    // Feature Cards Animation
    // ===============================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

    // ===============================
    // Smooth Scrolling
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ===============================
    // Welcome Message
    // ===============================

    console.log("Smart Village Complaint Management System Loaded Successfully.");

});

// ==================================
// Future Functions
// ==================================

function openRegister() {

    window.location.href = "register.html";

}

function openLogin() {

    window.location.href = "login.html";

}