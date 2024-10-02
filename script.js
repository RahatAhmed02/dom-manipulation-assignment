// Function to add a new task to the list
function addTask() {
    const input = document.getElementById('taskInput');
    const list = document.getElementById('taskList');

    // Check if the input is empty before adding the task
    if (input.value === '') {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const newItem = document.createElement('li');

    // Create a text node for the new task
    const taskText = document.createTextNode(input.value);

    // Delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');

    // Append the task text and delete button to the new list item
    newItem.appendChild(taskText);
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    // Clear the input field
    input.value = '';

    // Event listeners for completing and deleting the task
    newItem.addEventListener('click', function() {
        completeTask(newItem);
    });
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        deleteTask(newItem);
    });
}

// Function to complete a task
function completeTask(task) {
    task.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(task) {
    task.remove();
}

// Event listener to the Add Task button
document.getElementById('addTaskButton').addEventListener('click', addTask);
