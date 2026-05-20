# Todo Application

A clean and responsive Todo Application built using **HTML**, **CSS**, and **JavaScript** with support for:

- Add Todo
- Delete Todo
- Mark Todo as Completed
- Persistent Storage using Local Storage
- Empty Todo Message
- Responsive UI Design

# Features

- Add new todos dynamically
- Delete todos instantly
- Mark todos as completed with strike-through effect
- Save todos in browser local storage
- Restore todos after page refresh
- Show message when no todos are available
- Responsive and modern UI
- Gradient background design

# Tech Stack

- HTML5
- CSS3
- JavaScript (DOM Manipulation)
- Local Storage API

# Folder Structure

todo-application/
│
├── index.html
├── style.css
├── todo.js
└── README.md

# Project Preview

## Create Todo

- User enters todo text
- Clicks "Add Todo"

## Todo Operations

- Mark as completed
- Delete todo
- Save todos

## Local Storage

Todos remain saved even after refreshing the page.

# Installation & Setup

## 1. Clone Repository

git clone YOUR_GITHUB_REPOSITORY_LINK

## 2. Open Project Folder

cd todo-application

## 3. Run Project

Open: index.html

in browser.

Or use VS Code Live Server extension.

# Core Functionalities

## Add Todo

in Javascript: todoList.push(newTodo);

Adds new todo into array and UI.

## Delete Todo

javascript: todoList.splice(deletetodoIndex, 1);

Removes todo from array and UI.

## Save Todos

javascript: localStorage.setItem("todoList", JSON.stringify(todoList));

Stores todos in local storage.

## Restore Todos

javascript: JSON.parse(localStorage.getItem("todoList"));

Loads saved todos after refresh.

# UI Features

- Premium gradient background
- Custom checkbox styling
- Responsive flex layout
- Dynamic empty message handling
- Interactive buttons

# Future Improvements

- Edit Todo Feature
- Dark / Light Theme Toggle
- Search Todos
- Filter Completed Todos
- Drag & Drop Sorting
- Due Dates & Priorities

# Author

Banavath Suresh
