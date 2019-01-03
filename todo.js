const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');

const TODO_LS = 'toDos';
let todoData = [];

function deleteTodo(event) {
    const btn = event.target;
    const listItem = btn.parentNode;
    listItem.remove();
    var cleanedData = todoData.filter(function (todo) {
        return todo.id !== parseInt(listItem.id);
    });
    todoData = cleanedData;
    saveTodo();
}

function saveTodo() {
    localStorage.setItem(TODO_LS, JSON.stringify(todoData));
}

function printTodo(todoVal) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const text = document.createElement('span');
    const todoId = todoData.length + 1;
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('type', 'button');
    delBtn.addEventListener('click', deleteTodo);
    text.innerText = todoVal;
    li.appendChild(delBtn);
    li.appendChild(text);
    li.id = todoId;
    todoForm.appendChild(li);
    const todoItem = {
        id: todoId,
        text: todoVal
    };
    todoData.push(todoItem);
    saveTodo();
}

function submitHandle(event) {
    event.preventDefault();
    event.stopPropagation();
    const todoText = todoInput.value;
    printTodo(todoText);
    todoInput.value = '';
}


function loadTodo() {
    const loadedTodo = localStorage.getItem(TODO_LS);
    if (loadedTodo !== null) {
        const todoArray = JSON.parse(loadedTodo);
        todoArray.forEach(function (item) {
            printTodo(item.text);
        });
    }
}

function init() {
    loadTodo();
    todoForm.addEventListener('submit', submitHandle);
}

init();