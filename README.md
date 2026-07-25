# 🏘️ Smart Village Complaint Management System

## 📌 Project Overview

The **Smart Village Complaint Management System** is a web-based application designed to provide an efficient and transparent platform for villagers to submit complaints and for Panchayat authorities to manage and resolve them.

The system helps improve communication between villagers and the Panchayat by allowing complaints to be submitted digitally, tracked, and managed in a structured way.

---

## 🎯 Problem Statement

In many villages, complaints related to roads, water supply, sanitation, electricity, and other public services are handled through manual processes. This can lead to delays, lack of transparency, and difficulty in tracking complaint status.

The **Smart Village Complaint Management System** provides a digital solution that simplifies the complaint registration and management process.

---

## 🚀 Features

### 👤 Villager Module

* User registration
* Secure login
* Submit complaints
* View submitted complaints
* Track complaint status
* Access villager dashboard

### 🏛️ Panchayat Module

* Panchayat login
* View registered complaints
* Manage complaints
* Update complaint status
* Monitor complaints submitted by villagers
* Access Panchayat dashboard

### 🌐 General Features

* User-friendly interface
* Responsive web design
* Separate dashboards for Villagers and Panchayat authorities
* Complaint management workflow
* Backend server integration
* Database-ready Node.js application

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Package Management

* npm
* `package.json`
* `package-lock.json`

### Development Tools

* Visual Studio Code
* Git
* GitHub

---

## 📂 Project Structure

```text
Smart-Village-Complaint-Management-System/
│
├── css/
│   ├── dashboard.css
│   ├── login.css
│   ├── register.css
│   └── style.css
│
├── index.html
├── login.html
├── panchayat-dashboard.html
├── register.html
├── villager-dashboard.html
│
├── login.js
├── main.js
├── panchayat.js
├── register.js
├── Vilager.js
│
├── package.json
├── package-lock.json
└── server.js
```

---

## 📄 File Description

| File / Folder              | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| `css/`                     | Contains all CSS files used to style the application.  |
| `dashboard.css`            | Styling for dashboard pages.                           |
| `login.css`                | Styling for the login page.                            |
| `register.css`             | Styling for the registration page.                     |
| `style.css`                | General application styling.                           |
| `index.html`               | Main landing/home page.                                |
| `login.html`               | User login page.                                       |
| `register.html`            | New user registration page.                            |
| `villager-dashboard.html`  | Dashboard for villagers.                               |
| `panchayat-dashboard.html` | Dashboard for Panchayat authorities.                   |
| `login.js`                 | Handles login-related functionality.                   |
| `main.js`                  | Handles main application functionality.                |
| `panchayat.js`             | Handles Panchayat-related functionality.               |
| `register.js`              | Handles user registration functionality.               |
| `Vilager.js`               | Handles villager-related functionality.                |
| `server.js`                | Node.js backend server.                                |
| `package.json`             | Contains project dependencies and scripts.             |
| `package-lock.json`        | Locks dependency versions for consistent installation. |

---

## 🔄 System Workflow

```text
                 ┌──────────────────┐
                 │     Villager     │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │    Register /    │
                 │      Login       │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Villager         │
                 │ Dashboard        │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Submit Complaint │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Panchayat        │
                 │ Dashboard        │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Manage / Update  │
                 │ Complaint Status │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Villager Tracks  │
                 │ Complaint Status │
                 └──────────────────┘
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/BodapatiSagar1212/Smart-Village-Complaint-Management-System.git
```

### 2. Navigate to the Project Directory

```bash
cd Smart-Village-Complaint-Management-System
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
node server.js
```

If your `package.json` contains a start script, you can also use:

```bash
npm start
```

### 5. Open the Application

Open your browser and access the local server address configured in `server.js`.

For example:

```text
http://localhost:3000
```

> The port may be different depending on your `server.js` configuration.

---

## 💡 Use Cases

The system can be used to manage complaints related to:

* 🚰 Water supply
* 🛣️ Roads and infrastructure
* 💡 Electricity
* 🗑️ Waste management
* 🧹 Sanitation
* 🏥 Health services
* 🏫 Education facilities
* 🏘️ Other village-related issues

---

## 🔮 Future Enhancements

The application can be further enhanced by adding:

* 🔐 JWT-based authentication
* 👥 Role-based access control
* 🗄️ MongoDB or MySQL database integration
* 📸 Image upload for complaints
* 📍 Location-based complaint tracking
* 🔔 Email and SMS notifications
* 📊 Complaint analytics dashboard
* 🔎 Search and filter functionality
* 📱 Mobile application
* ☁️ Cloud deployment
* 🗺️ Google Maps integration
* 📈 Complaint resolution reports

---

## 🎓 Learning Outcomes

This project demonstrates practical knowledge of:

* Frontend web development
* HTML, CSS, and JavaScript
* Node.js backend development
* Express.js server implementation
* REST API concepts
* Client-server communication
* Git and GitHub
* Project structure and organisation
* Complaint management workflows

---

## 👨‍💻 Author

**Bodapati Sagar**

GitHub: **BodapatiSagar1212**

---

## ⭐ Support

If you find this project useful, please consider giving the repository a ⭐ on GitHub.
