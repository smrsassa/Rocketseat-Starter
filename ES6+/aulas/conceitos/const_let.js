const x = 5; // Essa variável não pode ter seu valor alterado
// x = 2; ERRO!

function soma_5(x) {
  let y = 5; // Variável de escopo, pode ser alterada normalmente
  return x + y
}

soma_5(10)