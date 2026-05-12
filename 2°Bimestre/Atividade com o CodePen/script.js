const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const text = taskInput.value.trim();

  if (text !== '') {

    const newItem = document.createElement('li');

    newItem.innerHTML = `
      <span>${text}</span>
      <button onclick="editar(this)">Editar</button>  
      <button onclick="remover(this)">Remover</button>  
      <button onclick="concluir(this)">Concluir</button>
    `;

    taskList.appendChild(newItem);

    taskInput.value = '';
  }
}

function remover(button) {
  const itemToRemove = button.parentElement;
  taskList.removeChild(itemToRemove);
}

function concluir(button) {
  const itemToComplete = button.parentElement;
  itemToComplete.classList.toggle('completed');
}

function editar(button) {

  const item = button.parentElement;

  const span = item.querySelector('span');

  const novoTexto = prompt('Editar tarefa:', span.innerText);

  if (novoTexto !== null && novoTexto.trim() !== '') {
    span.innerText = novoTexto;
  }
}