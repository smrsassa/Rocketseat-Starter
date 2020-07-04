var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('listTodos')) || [];

function renderTodos() {

  listElement.innerHTML = '';

  for ( todo of todos ) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');

    linkElement.setAttribute('href', '#');

    var linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveStorage();
}
btnElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveStorage();
}

function saveStorage() {
  localStorage.setItem('listTodos', JSON.stringify(todos));

}
