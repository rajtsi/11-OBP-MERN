/**
 * Task Management System
 * A robust, object-oriented JavaScript application.
 */

// 1. Blueprint for individual Task objects
class Task {
    constructor(id, title, priority = 'medium') {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.isCompleted = false;
        this.createdAt = new Date();
    }

    // Method to mark a task as done
    complete() {
        this.isCompleted = true;
    }
}

// 2. Main Manager Class to handle business logic
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Add a new task to the array
    addTask(title, priority) {
        const id = this.tasks.length + 1;
        const newTask = new Task(id, title, priority);
        this.tasks.push(newTask);
        console.log(`✅ Added: "${title}"`);
        return newTask;
    }

    // Find a task by ID and mark it complete
    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) {
            console.log(`❌ Error: Task with ID ${id} not found.`);
            return;
        }
        task.complete();
        console.log(`🎯 Completed: "${task.title}"`);
    }

    // Filter tasks based on status
    getTasks(filter = 'all') {
        switch (filter.toLowerCase()) {
            case 'completed':
                return this.tasks.filter(t => t.isCompleted);
            case 'pending':
                return this.tasks.filter(t => !t.isCompleted);
            default:
                return this.tasks;
        }
    }

    // Asynchronous method to simulate fetching tasks from an external server/API
    async fetchRemoteTasks() {
        console.log("\n🌐 Fetching backup tasks from cloud...");
        try {
            // Simulating network delay using a Promise
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mock data payload
            const remoteData = [
                { title: "Review pull requests", priority: "high" },
                { title: "Update documentation", priority: "low" }
            ];

            remoteData.forEach(item => this.addTask(item.title, item.priority));
            console.log("🚀 Cloud sync complete.");
        } catch (error) {
            console.error("⚠️ Failed to fetch remote tasks:", error);
        }
    }

    // Print all tasks neatly formatted in the console
    displayDashboard() {
        console.log("\n=== CURRENT TASK DASHBOARD ===");
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
            return;
        }

        this.tasks.forEach(task => {
            const statusSymbol = task.isCompleted ? "[X]" : "[ ]";
            console.log(`${statusSymbol} ID: ${task.id} | ${task.title} (${task.priority.toUpperCase()})`);
        });
        console.log("==============================\n");
    }
}

// 3. Execution Wrapper Function
async function startApplication() {
    const manager = new TaskManager();

    // Local Operations
    manager.addTask("Write unit tests for authentication", "high");
    manager.addTask("Refactor legacy CSS files", "low");
    manager.addTask("Prepare presentation slides", "medium");

    manager.completeTask(1); // Completing first task
    manager.completeTask(99); // Testing error handling for non-existent ID

    // View active pending tasks
    manager.displayDashboard();

    // Async Operation
    await manager.fetchRemoteTasks();

    // Final View
    manager.displayDashboard();
}

// Run the program
startApplication();
