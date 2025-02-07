// Function to toggle search bar styling
function search() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('border-b-cyan-300');
    searchBar.classList.toggle('border-b-2');
}

// Display current date
document.addEventListener('DOMContentLoaded', () => {
    const currentDateElement = document.getElementById('currentDate');
    const currentDate = new Date().toLocaleDateString();
    currentDateElement.textContent = `Today's Date: ${currentDate}`;

    loadTasks(); // Load tasks when the page loads
});

// Function to load tasks from localStorage
function loadTasks() {
    const taskList = document.getElementById('taskList');
    const taskNumber = document.getElementById('taskNumbers');
    taskList.innerHTML = ""; // Clear existing list

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    savedTasks.forEach(taskData => {
        addTaskToDOM(taskData.title, taskData.completed);
    });

    taskNumber.innerText = taskList.children.length;
}

// Function to add task to the DOM
function addTaskToDOM(taskTitle, isCompleted = false) {
    const taskList = document.getElementById('taskList');
    
    const task = document.createElement('li');
    task.classList = "flex items-center bg-[#212121]/70 rounded-md backdrop-blur text-white font-medium py-3 px-5 mb-2 hover:bg-[#212121]/50 capitalize";

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList = "mr-4";
    taskCheckbox.checked = isCompleted; // Load checkbox state

    const taskTitleElement = document.createElement('span');
    taskTitleElement.innerText = taskTitle;

    if (isCompleted) {
        taskTitleElement.classList.add('line-through'); // Add strike-through for completed tasks
    }

    task.appendChild(taskCheckbox);
    task.appendChild(taskTitleElement);
    taskList.appendChild(task);

    // Update localStorage when task is checked
    taskCheckbox.addEventListener('click', () => {
        if (taskCheckbox.checked) {
            taskTitleElement.classList.add('line-through');
            const audio = new Audio('complete_sound-98972.mp3');
            audio.play();
        } else {
            taskTitleElement.classList.remove('line-through');
        }
        saveTasks(); // Save updated tasks to localStorage
    });

    saveTasks(); // Save after adding a new task
}

// Function to save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(task => {
        const title = task.querySelector('span').innerText;
        const completed = task.querySelector('input').checked;
        tasks.push({ title, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener for adding tasks
document.getElementById('addTaskBtn').addEventListener('click', function () {
    const addTask = document.getElementById('addTask');
    const addTaskTitle = addTask.value.trim();
    const taskList = document.getElementById('taskList');
    const taskNumber = document.getElementById('taskNumbers');
    taskNumber.innerText = taskList.children.length;

    if (addTaskTitle !== "") {
        addTaskToDOM(addTaskTitle);
        addTask.value = ""; // Clear input field
    }
});
