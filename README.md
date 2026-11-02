# 🎬 CineTrack – Movie Management System

A Full Stack Movie Management Application built using **React.js, Spring Boot, and MySQL**. CineTrack provides a user-friendly dashboard to manage movie records through RESTful APIs with complete CRUD functionality.

## 🚀 Project Overview

CineTrack is designed to simplify movie collection management. Users can add, view, search, update, and delete movie records through an interactive React frontend connected to a Spring Boot backend.

The application features a modern dashboard with movie statistics, movie listings, profile interface, and notifications.

## ✨ Features

- **Dashboard:** View movie collection statistics.
- **Add Movie:** Add new movie details.
- **View Movies:** Display all available movie records.
- **Find Movie:** Search for a movie using its ID.
- **Update Movie:** Modify existing movie information.
- **Delete Movie:** Remove movie records.
- **Search:** Filter movies from the collection.
- **Notifications:** Display CRUD operation feedback.
- **Profile Interface:** User profile dropdown.
- **Responsive UI:** Modern dashboard layout.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- RESTful APIs

### Database
- MySQL

### Development Tools
- Visual Studio Code
- Eclipse IDE
- Postman
- Git
- GitHub

## 🏗️ Project Architecture

```text
CineTrack/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── Dashboard.js
│       ├── InsertMovie.js
│       ├── GetMovies.js
│       ├── FindMovie.js
│       ├── EditMovie.js
│       ├── Nav.js
│       ├── Routing.js
│       └── App.js
│
├── backend/
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/teja/movieportal/
│           │       ├── controller/
│           │       ├── model/
│           │       ├── repository/
│           │       └── service/
│           │
│           └── resources/
│
├── README.md
└── .gitignore
```

## 🔄 CRUD Operations

| Operation | HTTP Method | Description |
|---|---|---|
| Create | POST | Add a new movie |
| Read All | GET | Retrieve all movies |
| Read By ID | GET | Retrieve a movie by ID |
| Update | PUT | Update movie details |
| Delete | DELETE | Delete a movie by ID |

## ⚙️ Installation and Setup

### Prerequisites

Install the following:
- Java JDK
- Node.js and npm
- MySQL Server
- Eclipse IDE or VS Code
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Bramhateja1234/CineTrack-Movie-Management.git
```

```bash
cd CineTrack-Movie-Management
```

### 2. Backend Setup

1. Open the `backend` folder in Eclipse as an existing Maven project.
2. Configure your MySQL database in `application.properties`.
3. Update database username and password.
4. Run `MovieportalApplication.java` as a Spring Boot application.

Backend default address:

```text
http://localhost:2222
```

### 3. Frontend Setup

Open a terminal inside the frontend folder.

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

Open in your browser:

```text
http://localhost:3000
```

## 🗄️ Database Configuration

Create a MySQL database for the application.

Example:

```sql
CREATE DATABASE moviedb;
```

Configure the database connection in:

`backend/src/main/resources/application.properties`

Use your own local database credentials. Never commit passwords or other secrets to GitHub.

## 📸 Application Screenshots

Add your project screenshots here:

### Dashboard
<!-- Add dashboard screenshot here -->

### All Movies
<!-- Add all movies screenshot here -->

### Add Movie
<!-- Add add movie screenshot here -->

### Edit Movie
<!-- Add edit movie screenshot here -->

## 👨‍💻 Author

**Teja Reddy**

GitHub: [Bramhateja1234](https://github.com/Bramhateja1234)

Project Repository: [CineTrack – Movie Management System](https://github.com/Bramhateja1234/CineTrack-Movie-Management.git)

---

⭐ If you find this project interesting, consider giving it a star!