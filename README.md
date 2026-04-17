# 🚀 Advanced Todo Card

## 📌 Overview

This project is an **interactive, stateful Todo Card component** built using **vanilla HTML, CSS, and JavaScript**.

It extends a static Stage 0 Todo Card into a fully dynamic UI with editing, status management, priority indicators, time tracking, and accessibility improvements.


---

## ✨ Features Implemented

### 📝 1. Editable Content (Edit Mode)
- Edit title, description, priority, and due date
- Switch between view and edit modes
- Save updates card state instantly
- Cancel restores previous view
- Uses controlled form inputs:
  - `test-todo-edit-form`
  - `test-todo-edit-title-input`
  - `test-todo-edit-description-input`
  - `test-todo-edit-priority-select`
  - `test-todo-edit-due-date-input`

---

### 🔄 2. Status System (Fully Synchronized)
- Status options:
  - Pending
  - In Progress
  - Done
- Status controlled via:
  - Checkbox
  - Dropdown (`test-todo-status-control`)
  - Display text

All status inputs stay fully synchronized.

---

### 🎯 3. Priority System
- Priority levels:
  - Low
  - Medium
  - High
- Visual priority indicator:
  - Colored top bar (`test-todo-priority-indicator`)
- Dynamic styling based on state

---

### 📂 4. Expand / Collapse Description
- Description collapsible when long
- Toggle button:
  - `test-todo-expand-toggle`
- Collapsible container:
  - `test-todo-collapsible-section`
- Keyboard accessible via:
  - `aria-expanded`
  - `aria-controls`

---

### ⏳ 5. Time Management System
- Live due date display (`test-todo-due-date`)
- Dynamic time updates every 30–60 seconds
- Smart time formatting:
  - “Due in X days / hours / minutes”
  - “Overdue by X hours”
- Overdue indicator:
  - `test-todo-overdue-indicator`
- If status = Done → shows “Completed” and stops countdown

---

### 🎨 6. Visual State Changes
- Done:
  - Strikethrough title
  - Muted UI state
- High Priority:
  - Strong red visual indicator
- In Progress:
  - Distinct highlighted styling
- Overdue:
  - Red border + warning indicator

---

## ♿ Accessibility Features

- All form fields use proper `<label for="">`
- Status dropdown has accessible name
- Expand toggle includes:
  - `aria-expanded`
  - `aria-controls`
- Collapsible section linked correctly
- Live time updates use:
  - `aria-live="polite"`

---

## ⌨️ Keyboard Navigation

Maintains logical tab order:

Checkbox → Status Control → Expand → Edit → Delete → Save/Cancel

Full keyboard usability supported.

---

## 📱 Responsive Design

Supports:
- 📱 Mobile (320px)
- 📟 Tablet (768px)
- 🖥 Desktop (1024px+)

Responsive behavior:
- Layout adapts without overflow
- Long titles handled safely
- Tags wrap properly
- Edit form stacks vertically on mobile

---

## 🧠 Technical Architecture

- Centralized state object (`state`)
- UI rendered through `updateUI()` function
- Event-driven updates (no page reloads)
- DOM synced with state changes
- Time updates handled via `setInterval`

---

## ⚠️ Known Limitations

- Single card only (no list support yet)
- No backend persistence (state resets on refresh)
- No drag & drop or sorting system

---

## 🚀 Future Improvements

- Multi-task todo list system
- LocalStorage persistence
- Drag & drop reordering
- React migration (component-based version)
- Animations for state transitions

---

## 📂 Project Structure

/index.html
/style.css
/script.js
/README.md

## 📌 Submission Notes

This project fulfills all Stage 1a requirements:

✔ Edit mode  
✔ Status transitions  
✔ Priority indicators  
✔ Expand/collapse behavior  
✔ Time management logic  
✔ Accessibility compliance  
✔ Responsive design  
✔ Clean state management  

---

## 🧑‍💻 Author

BELONWU CHIDUMEBI
