const super1 = { nombre: "Batman" };
const super2 = { nombre: "Mujer Maravilla" };
const super3 = { nombre: "Ironman" };
let super4 = { nombre: "Hulk" };
const super5 = { nombre: "Loki" };

function printName(obj) {
  return `El nombre del superhéroe es ${obj.nombre}.`;
}
// console.log(printName(super2));
// console.log(printName(super3));
// console.log(super1.nombre);

super5.edad = 33;
super5.ciudad = "Asgard";
// console.log(super5);


super4 = { nombre: "Shehulk" };
// console.log(super4);

function printAll(arrayOfSupers) {
    //por cada elemento del array de superheroes 
  for (let superheroe of arrayOfSupers) {
    //ejecuta todas estas sentencias
    //each es cada objeto del array de superheroes

    // const template = printName(superheroe);
    // console.log(template);
    console.log(printName(superheroe))
  }
}
 
// const array1 = [super1 , super2]
// printAll(array1)
printAll([super3,super5])
