# Student Management Platform

A responsive React SPA to manage student data and provide a simple chat interface.

Project Overview

Student Data Table: View, sort, and search student records by ID, name, course, grade, or enrollment date.

Add Student Form: Add new students with real-time validation and instant feedback—students appear in the table immediately.

Chat Interface: Simulate conversations between students and advisors with persistent threads.

## Setup

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
2. Run the development server:
   ```bash
   npm start
   ```
3. Visit `http://localhost:3000` in your browser.


Explanation of Our Approach

Component-Driven Design: We broke the UI into focused components (NavBar, StudentTable, AddStudentForm, ThreadList, Conversation) so each piece remains easy to understand and maintain.

State Persistence: We created a useLocalStorage hook to sync React state with localStorage, ensuring data (students, chat threads, theme) survives page reloads.

Routing: Using React Router, the URL (students or chat) always reflects the current view. Refreshing the page won’t lose your place.

Form Validation: We used react-hook-form with Yup resolvers for declarative schema-based validation. Errors show inline, and successful adds trigger a friendly alert.

Styling & Responsiveness: Tailwind CSS enabled rapid styling—flex, grid, and responsive utilities make the layout adapt seamlessly from mobile to desktop.

Empty-State Placeholders: Friendly messages when there are no students or chat threads yet.

Accessible Alerts: Form validations and theme toggles include clear ARIA-friendly feedback.