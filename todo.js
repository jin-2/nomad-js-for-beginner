const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');

const TODO_LS = 'toDos';
let todoData = [];

function saveTodo(data) {
    localStorage.setItem(TODO_LS, JSON.stringify(data));
}

function submitHandle(event) {
    event.preventDefault();
    const todoText = todoInput.value;
    printTodo(todoText);
    saveTodo(todoData);
    todoInput.value = '';
}

function deleteTodo(event) {
    const btn = event.target;
    const listItem = btn.parentNode;
    listItem.remove();
    var cleanedData = todoData.filter(function (todo) {
        console.log(todo.id !== listItem.id);
        return todo.id !== parseInt(listItem.id);
    });
    console.log(cleanedData);
    todoData = cleanedData;
    saveTodo(cleanedData);
}

function printTodo(todoVal) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const text = document.createElement('span');
    const todoId = todoData.length + 1;
    delBtn.innerText = 'Delete';
    text.innerText = todoVal;
    li.appendChild(delBtn);
    li.appendChild(text);
    li.id = todoId;
    todoForm.appendChild(li);
    delBtn.addEventListener('click', deleteTodo);
    const todoItem = {
        id: todoId,
        text: todoVal
    };
    todoData.push(todoItem);
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