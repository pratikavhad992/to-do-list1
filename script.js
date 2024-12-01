document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Add Task
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newTask = document.createElement("li");

            // Create task text element
            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;
            newTask.appendChild(taskSpan);

            // Create delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", () => {
                taskList.removeChild(newTask);
            });
            newTask.appendChild(deleteBtn);

            // Mark task as completed
            taskSpan.addEventListener("click", () => {
                newTask.classList.toggle("completed");
            });

            // Append the task to the list
            taskList.appendChild(newTask);

            // Clear input field
            taskInput.value = "";
        }
    });

    // Optional: Allow Enter key to add task
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });
});
