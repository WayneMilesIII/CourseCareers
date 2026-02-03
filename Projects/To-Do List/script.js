function onClickAddTask() {
    // Get the task input value
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Append the new list item to the task list
    taskList.appendChild(listItem);
    // Clear the input field
    taskInput.value = '';

    listItem.setAttribute('onClick', 'this.remove()');
}   

// Attach event listener to the task list for removing tasks
document.getElementById('taskList').addEventListener('click', onClickRemoveTask);
document.getElementById('addTaskButton').addEventListener('click', onClickAddTask);
