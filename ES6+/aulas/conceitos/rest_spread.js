const ar = [1,2,3,4,5,6];

const [a, b, ...c] = ar;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
  return params;
}

soma(3, 4, 5)

//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];

const usuario1 = {
  nome:'Samuel',
  idade: 19
}

const usuario2 = {...usuario1, nome:'João'}

