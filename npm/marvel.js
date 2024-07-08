const names = require('marvel-comics-characters');
let allNames = names.all;
let randomName = names.random();
let threeRandomNames = names.random(3);
console.log(threeRandomNames);