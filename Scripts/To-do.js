const settingsBtn = document.getElementById('settings-btn');
const settingsContainer = document.getElementById('settings-container');
const todoListEnabledCheckbox = document.getElementById('todo-list-enabled');
const todoContainer = document.getElementById('to-do');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');

// Set default settings
todoContainer.style.opacity = '0';
todoContainer.style.pointerEvents = 'none';
addTodoBtn.disabled = true;
todoInput.disabled = true;
todoList.style.display = 'none';
todoListEnabledCheckbox.checked = false; // Set checkbox to unchecked by default

settingsBtn.addEventListener('click', () => {
  settingsContainer.style.display = settingsContainer.style.display === 'none'? 'block' : 'none';
});

todoListEnabledCheckbox.addEventListener('change', () => {
  if (todoListEnabledCheckbox.checked) {
    // Enable to-do list
    todoContainer.style.opacity = '1';
    todoContainer.style.pointerEvents = 'auto';
    addTodoBtn.disabled = false;
    todoInput.disabled = false;
    todoList.style.display = 'block';
  } else {
    // Disable to-do list
    todoContainer.style.opacity = '0';
    todoContainer.style.pointerEvents = 'none';
    addTodoBtn.disabled = true;
    todoInput.disabled = true;
    todoList.style.display = 'none';
    todoList.innerHTML = ''; // Clear the todo list
  }
});

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  if (todoListEnabledCheckbox.checked) {
    const todoText = todoInput.value.trim();

    if (todoText) {
      const todoItem = document.createElement('li');
      todoItem.textContent = todoText;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
          todoItem.style.textDecoration = 'line-through';
        } else {
          todoItem.style.textDecoration = 'none';
        }
      });

      todoItem.appendChild(checkbox);
      todoList.appendChild(todoItem);
      todoInput.value = '';
    }
  }
}
