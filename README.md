# 📝 React Todo App (Upgraded)

A modern Todo application built with React featuring task management, filtering, persistence, and inline editing. This version is optimized using `useReducer` and `localStorage` for a smooth user experience.

---

## 🚀 Features

### ✅ Core Features

* Add new tasks
* Delete tasks
* Mark tasks as completed (strike-through)
* Inline edit tasks
* Filter tasks (All / Active / Completed)

### 💾 Persistence

* Uses **localStorage** to save tasks
* Data stays even after page refresh

### ⚙️ State Management

* Uses `useReducer` instead of multiple `useState`
* Centralized logic for:

  * ADD_TASK
  * DELETE_TASK
  * TOGGLE_TASK
  * EDIT_TASK
  * SET_FILTER

### 🎨 UI Enhancements

* Clean card-based design
* Dark header with modern layout
* Purple accent theme
* Empty state message when no tasks are available

---

## 📸 Screenshots

> Replace these placeholders with actual screenshots from your app.

### 🏠 Home Screen (All Tasks)

![Home Screen](./screenshots/home.png)

### ✅ Active Tasks Filter

![Active Tasks](./screenshots/active.png)

### ✔️ Completed Tasks

![Completed Tasks](./screenshots/completed.png)

### ✏️ Inline Edit Mode

![Edit Task](./screenshots/edit.png)

---

## 📁 Project Structure

```
src/
│
├── App.jsx
├── App.module.css
│
├── components/
│   ├── Cards.jsx
│   ├── Cards.module.css
│   ├── Task.jsx
│   ├── Task.module.css
│   ├── FilterTabs.jsx
│   ├── FilterTabs.module.css
```

---

## 🧠 Key Concepts Used

### 1. useReducer

Replaces multiple `useState` hooks with a single reducer for better scalability.

### 2. localStorage Sync

```js
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```

### 3. Filtering Logic

* **All** → shows everything
* **Active** → only incomplete tasks
* **Completed** → only completed tasks

---

## ✏️ How Inline Edit Works

* Click edit icon ✏️
* Task turns into input field
* Press Enter or blur to save changes

---

## 🔄 Task Flow

1. User adds task
2. Reducer updates state
3. UI re-renders
4. Data saved to localStorage

---

## 🛠️ How to Run

```bash
npm install
npm run dev
```

---

## 📌 Tech Stack

* React
* CSS Modules
* useReducer
* localStorage API

---

## 💡 Future Improvements

* Drag & drop reorder
* Due dates
* Notifications/reminders
* Backend sync (Firebase / Node API)

---

## 🧑‍💻 Author

Built as a learning project to master React state management and UI structuring.

---

⭐ If you like this project, give it a star!
