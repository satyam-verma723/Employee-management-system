// localStorage.clear();
const employees = [
    {
        id: 1,
        firstName: "Aarav",
        email: "emp1@ex.com",
        password: "123",
        taskCount: {
            active: 3,
            newTask: 2,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Prepare Monthly Report",
                description: "Compile the sales and marketing data for August.",
                date: "2025-08-20",
                category: "Reporting",
                active: true,
                newTask: false,
                completed: false
            },
            {
                title: "Client Follow-Up",
                description: "Reach out to client regarding contract renewal.",
                date: "2025-08-22",
                category: "Client Relations",
                active: true,
                newTask: true,
                completed: false
            },
            {
                title: "Update CRM",
                description: "Ensure all customer information is up to date in the CRM system.",
                date: "2025-08-19",
                category: "Data Entry",
                active: false,
                newTask: false,
                completed: true
            },
            {
                title: "Team Meeting",
                description: "Attend weekly team sync-up to discuss progress.",
                date: "2025-08-25",
                category: "Meetings",
                active: true,
                newTask: true,
                completed: false
            }
        ]
    },
    {
        id: 2,
        firstName: "Ishaan",
        email: "emp2@ex.com",
        password: "123",
        taskCount: {
            active: 2,
            newTask: 2,
            completed: 1,
            failed: 2
        },
        tasks: [
            {
                title: "Code Review",
                description: "Review pull requests from the frontend team.",
                date: "2025-08-18",
                category: "Development",
                active: false,
                newTask: false,
                completed: true
            },
            {
                title: "Bug Fixing",
                description: "Fix reported bugs in the user authentication module.",
                date: "2025-08-23",
                category: "Development",
                active: true,
                newTask: true,
                completed: false
            },
            {
                title: "Team Presentation",
                description: "Prepare slides for the upcoming project demo.",
                date: "2025-08-26",
                category: "Planning",
                active: true,
                newTask: true,
                completed: false
            }
        ]
    },
    {
        id: 3,
        firstName: "Vihaan",
        email: "emp3@ex.com",
        password: "123",
        taskCount: {
            active: 3,
            newTask: 2,
            completed: 2,
            failed: 2
        },
        tasks: [
            {
                title: "Inventory Check",
                description: "Complete the quarterly stock check.",
                date: "2025-08-15",
                category: "Operations",
                active: false,
                newTask: false,
                completed: true
            },
            {
                title: "Vendor Meeting",
                description: "Discuss delivery schedule and pricing with suppliers.",
                date: "2025-08-21",
                category: "Procurement",
                active: true,
                newTask: true,
                completed: false
            },
            {
                title: "Warehouse Audit",
                description: "Ensure safety and compliance in storage areas.",
                date: "2025-08-17",
                category: "Audit",
                active: false,
                newTask: false,
                completed: true
            },
            {
                title: "System Update",
                description: "Update stock tracking software to latest version.",
                date: "2025-08-25",
                category: "IT",
                active: true,
                newTask: true,
                completed: false
            },
            {
                title: "Training Session",
                description: "Attend workshop on new inventory protocols.",
                date: "2025-08-20",
                category: "Training",
                active: true,
                newTask: false,
                completed: false
            }
        ]
    },
    {
        id: 4,
        firstName: "Riya",
        email: "emp4@ex.com",
        password: "123",
        taskCount: {
            active: 3,
            newTask: 2,
            completed: 1,
            failed:0
        },
        tasks: [
            {
                title: "Marketing Campaign",
                description: "Launch new social media marketing campaign.",
                date: "2025-08-24",
                category: "Marketing",
                active: true,
                newTask: true,
                completed: false
            },
            {
                title: "Ad Performance Analysis",
                description: "Analyze performance of current ad sets.",
                date: "2025-08-22",
                category: "Analytics",
                active: true,
                newTask: false,
                completed: false
            },
            {
                title: "Customer Survey",
                description: "Prepare and distribute customer feedback forms.",
                date: "2025-08-19",
                category: "Customer Experience",
                active: false,
                newTask: false,
                completed: true
            },
            {
                title: "Team Brainstorming",
                description: "Collect creative ideas for next product campaign.",
                date: "2025-08-23",
                category: "Collaboration",
                active: true,
                newTask: true,
                completed: false
            }
        ]
    },
    {
        id: 5,
        firstName: "Ananya",
        email: "emp5@ex.com",
        password: "123",
        taskCount: {
            active: 4,
            newTask: 3,
            completed: 2,
            failed:3
        },
        tasks: [
            {
                title: "Server Maintenance",
                description: "Routine check of servers and system logs.",
                date: "2025-08-18",
                category: "IT Support",
                active: false,
                newTask: false,
                completed: true
            },
            {
                title: "Security Patch",
                description: "Apply latest security patch to backend systems.",
                date: "2025-08-25",
                category: "Security",
                active: true,
                newTask: true,
                completed: false
            },
            {
                title: "Monitor Uptime",
                description: "Keep track of application uptime and report issues.",
                date: "2025-08-21",
                category: "Monitoring",
                active: true,
                newTask: false,
                completed: false
            },
            {
                title: "Log Cleanup",
                description: "Archive and remove old server logs.",
                date: "2025-08-20",
                category: "Maintenance",
                active: false,
                newTask: false,
                completed: true
            },
            {
                title: "Database Backup",
                description: "Ensure backups are running daily and error-free.",
                date: "2025-08-26",
                category: "Database",
                active: true,
                newTask: true,
                completed: false
            },
            {
                title: "Incident Report",
                description: "Prepare report on the recent downtime incident.",
                date: "2025-08-23",
                category: "IT",
                active: true,
                newTask: true,
                completed: false
            }
        ]
    }
];

const admin=[
    {
        "id":1,
        "firstName": "Aarav",
        "email":"admin@ex.com",
        "password":"123"
    }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees, admin};
}
