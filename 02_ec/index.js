const n1 = 10;
const n2 = 5;
const n3 = -50;

const c1 = "   hola";
const c2 = "chau     ";
const c3 = "       hola pibe";

const obj = {
  name: "Pablo",
  age: 47,
  color: "blue",
  city: "Zárate",
  pet: "dog",
};
const exponencial = n2 ** n1;
console.log(exponencial);
const exponencial1 = n1 ** n2;
console.log(exponencial1);
console.log(Object.values(obj));
console.log(Object.keys(obj));
const {name, age, ...rest} = obj
console.log(rest)