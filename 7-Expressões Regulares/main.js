//REGEX
const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem?"));

const reg2 = /test/;

console.log(reg2.test("Possui test"));
console.log(reg2.test("Não Possui"));

const reg3 = /dado/;

console.log(reg3.test("Não tem dado"));
console.log(reg3.test("Não tem"));


