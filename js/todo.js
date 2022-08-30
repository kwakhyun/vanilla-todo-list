const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

/**
 * Loads todos from localStorage.
 */
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

/**
 * Deletes a todo from the list.
 */
function deleteTodo(event) {
  const todoLi = event.target.parentElement;
  todoLi.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(todoLi.id));
  saveTodos();
}

/**
 * Paints a todo to the list.
 */
function paintTodo(newTodo) {
  const todoLi = document.createElement("li");
  todoLi.id = newTodo.id;
  const todoSpan = document.createElement("span");
  todoSpan.innerText = newTodo.text;
  const todoButton = document.createElement("button");
  todoButton.innerText = "❌";
  todoButton.addEventListener("click", deleteTodo);
  todoLi.appendChild(todoSpan);
  todoLi.appendChild(todoButton);
  todoList.appendChild(todoLi);
}

/**
 * Adds a todo to the list.
 */
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
