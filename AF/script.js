document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText, 'PENDENTE');
      taskInput.value = '';
    }
  });

  function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item', 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Status
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#" data-status="PENDENTE">PENDENTE</a>
          <a class="dropdown-item" href="#" data-status="CANCELADO">CANCELADO</a>
          <a class="dropdown-item" href="#" data-status="CONCLUÍDO">CONCLUÍDO</a>
          <a class="dropdown-item" href="#" data-status="EM ANDAMENTO">EM ANDAMENTO</a>
        </div>
      </div>
      <button class="btn btn-danger btn-sm delete-button">Delete</button>
    `;
  
    // Adiciona o item de tarefa à lista de tarefas
    taskList.appendChild(taskItem);
  
    // Adiciona o evento de clique no botão de delete
    const deleteButton = taskItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
      taskItem.remove();
    });
  
    // Adiciona eventos aos itens do dropdown para mudar o status
    const dropdownItems = taskItem.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
        const newStatus = this.dataset.status;
        taskItem.querySelector('.dropdown-toggle').textContent = newStatus;
      });
    });
  }
    const dropdownItems = taskItem.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        const newStatus = this.dataset.status;
        taskItem.querySelector('.dropdown-toggle').textContent = newStatus;
      });
    });
  }
);
