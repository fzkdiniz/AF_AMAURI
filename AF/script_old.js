document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      taskItem.innerHTML = `
        ${taskText}
        <button class="btn btn-danger btn-sm float-right">Delete</button>
      `;
      taskList.appendChild(taskItem);
  
      const deleteButton = taskItem.querySelector('button');
      deleteButton.addEventListener('click', function() {
        taskItem.remove();
      });
    }
  });
  