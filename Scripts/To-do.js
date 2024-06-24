// Code for the to-do list
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
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