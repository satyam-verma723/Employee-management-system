# Employee Task Management System (ETMS)

A modern web application for managing employee tasks, built with React, Vite, and Tailwind CSS. This system allows administrators to create and assign tasks to employees, while employees can view, accept, complete, or mark tasks as failed.

### Live Site
Visit the live application at: [https://etms-oduw.onrender.com](https://etms-oduw.onrender.com)

### Admin Login
- Email: `admin@me.com`
- Password: `123`

## Features

### Admin Dashboard
- Create new tasks with title, description, due date, category, and assignment
- View all tasks across the organization
- Assign tasks to specific employees
- Monitor task progress and status

### Employee Dashboard
- View assigned tasks with status indicators
- Accept new tasks
- Mark tasks as completed or failed
- Track task statistics (new, active, completed, failed)

### Authentication
- Role-based access (Admin and Employee)
- Secure login with email and password
- Persistent login state using localStorage

### Task Management
- Task categories for organization
- Due date tracking
- Status management (New, Active, Completed, Failed)
- Real-time updates via localStorage

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Data Storage:** LocalStorage (for demo purposes)
- **Linting:** ESLint with React plugins

## Usage

### Employee Login
Check for employee credentials in `src/utils/localStorage.jsx` for seeded employee data.

### Creating Tasks
1. Log in as admin
2. Navigate to the Create Task section
3. Fill in task details (title, description, date, assignee, category)
4. Click "Create Task"

### Managing Tasks (Employee)
1. Log in as employee
2. View tasks in different categories (New, Active, Completed, Failed)
3. Accept new tasks or update task status

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── Admin.jsx
│   │   │   └── Employee.jsx
│   │   ├── TaskList/
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   ├── FailedTask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   └── TaskList.jsx
│   │   └── other/
│   │       ├── AllTask.jsx
│   │       ├── CreateTask.jsx
│   │       ├── Header.jsx
│   │       └── TaskListNumbers.jsx
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── utils/
│   │   └── LocalStorage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── README.md
```
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
