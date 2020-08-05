const user = {
  nome: 'Samuel',
  idade: '19',
  endereco: {
    cidade: 'Vinhedo',
    estado: 'SP'
  }
}

const {nome, idade, endereco: {cidade}} = user;

console.log(nome);
console.log(idade);
console.log(endereco);

function mostra({nome, idade}){
  console.log(nome, idade);
}

mostra(user);