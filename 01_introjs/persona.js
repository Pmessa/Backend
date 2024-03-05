//las clases se declaran con la palabra reservada class
//se declaran con PascalCase
//se declara en singular
//se declara representativo del recurso y en inglés

class Persona {
  static cantidadUsuarios = 0;
  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida || 100;
    Persona.cantidadUsuarios++;
  }
  comer(cantidad) {
    this.vida < 150
      ? (this.vida = this.vida + cantidad)
      : console.log("NO PUEDES SEGUIR COMIENDO");
  }
  entrenar(cantidad) {
    this.vida = this.vida - cantidad;
  }
  mudarse(ciudad) {
    this.ciudad = ciudad;
    this.vida = this.vida - 20;
  }

  // imprimirDatos = ()=> console.log(`Se llama ${this.nombre} y tiene ${this,edad}`)
}

const persona1 = new Persona("Pablo", 47, "Zárate");
const persona2 = new Persona("Martín", 48, "Baradero", 120);
const persona3 = new Persona("Juan", 40, "Escobar", 110);
const persona4 = new Persona("Juliana", 32, "CABA", 110);

console.log(persona1);
persona1.comer(5);
console.log(persona1);
persona1.comer(15);
console.log(persona1);
persona1.comer(15);
console.log(persona1);
persona1.comer(15);
console.log(persona1);
persona1.comer(15);
console.log(persona1);
persona1.comer(15);
console.log(persona1);
persona1.comer(15);
console.log(persona1);
persona1.comer(15);
console.log(persona1);
// console.log(persona1)
// console.log(persona2)
// console.log(persona3.nombre)
// console.log(persona4)
// console.log(`Cantidad de registros:${Persona.cantidadUsuarios} `)
