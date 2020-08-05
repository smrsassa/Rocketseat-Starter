const ar = [1,2,3,6,8,9];

const newAr = ar.map((item, index) => {
  return item * index;
});

console.log(newAr);

const newAr2 = ar.map(item => item * 2);

console.log(newAr2);

const test = () => ({ nome: 'Samuel' }); // function teste() { return { nome: 'Samuel' }; };

console.log(test());