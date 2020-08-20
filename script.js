// const user = {
//     name: 'Vasya',
// };
// const user2 = {
//     name: 'Vasya the Second',
// };

// const newMap = new Map();
// newMap.set(user, 0);
// newMap.set(user2, 5);

// newMap.set(user, newMap.get(user) + 1);
// console.log(newMap.get(user));

// for (const iterator of newMap) {
//     console.log(iterator);
// }

// for (const [user, visits] of newMap) {
//     console.log(user, visits);
// }

// for (const iterator of newMap) {
//     console.log(...iterator);
// }

// newMap.forEach((value, key) => {
//     console.log(value, key);
// })

// console.log(Array.from(newMap));

// const mySet = new Set();
// const arr = [1,1,2,3,4,4,5,6,3,2];
// arr.forEach((value) => {
//     mySet.add(value);
// });

// console.log(mySet);

const counter = (value = 0) => () => ++value;
const count = counter();
console.log(count());

// function sum(a) {
//     return function(b){
//         return a+b;
//     }
// }

const sum = a => b => a+b;
const another = sum(3);
console.log(sum(3)(5));
console.log(another(5));