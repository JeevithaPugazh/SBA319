# 🧠 Habit Tracker API

A RESTful API built with Express.js, Mongoose, and MongoDB to manage users, habits, and habit logs.

## 🚀 Features

* User management with full CRUD operations
* Habit tracking and logging functionality
* Modular architecture using Express routers and controllers
* MongoDB integration via Mongoose ODM
* Environment variable management with dotenv
* EJS templating for server-rendered views
* Live-reload during development with Nodemon


## 📦 Installation
```bash
git clone https://github.com/your-username/habit-tracker.git
cd habit-tracker
````

## Install dependencies:
```bash
npm install
````

## Set up environment variables:
```bash
MONGODB_URI=your_mongodb_connection_string
PORT=3000
````

# Start the development server:
```bash
npm run dev
````

# 📚 API Endpoints
## Users
* GET /users/ - Retrieve all users
* GET /users/new - Render form to create a new user
* GET /users/:id - Show user by ID
* POST /users/ - Create a new user
* DELETE /users/:id - Delete a user by ID
* GET /users/seed - Seed the database with sample users
* PUT /users/:id - Edit user data by ID
* get /user/:id/edit - Render form to edit user by ID

## Habit
* GET /habits/ - Retrieve all habits
* GET /habits/seed - Seed the database with sample habits

## HabitLog
* GET /habitsLog/ - Retrieve all habitsLog
* GET /habitsLog/seed - Seed the database with sample habitsLog