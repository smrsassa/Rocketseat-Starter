class List {
  constructor() {
    this.data = []
  }
  add(data) {
    this.data.push(data)
    console.log(this.data)
  }
}
class TodoList extends List {
  constructor() {
    super()

    this.usuario = "Samuel"
  }

  mostraUsuario() {
    console.log(this.usuario)
  }
}

const minhaLista = new TodoList();

document.getElementById("addTodo").onclick = function () {
  minhaLista.add("teste");
}

minhaLista.mostraUsuario()