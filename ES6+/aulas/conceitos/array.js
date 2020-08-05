const ar = [1,3,4,5,8,9];

const newArr = ar.map(function(item, index){
  return item = index;
})

console.log(newArr);

const sun = ar.reduce(function(total, next) {
  return total + next 
})

console.log(sun);

const filter = ar.filter(function(item) {
  return item % 2 == 0;
})

console.log(filter);

const find = ar.find(function(item) {
  return item == 4;
})

console.log(find);