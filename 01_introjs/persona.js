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
    this.vida = this.vida + cantidad  <= 150 ? (this.vida + cantidad)
      : (console.log("Ya completaste tu nivel máximo de vida"), 150)  
    }
  
    
  entrenar(cantidad) {
    this.vida = this.vida - cantidad;
  }
  mudarse(ciudad) {
    this.ciudad = ciudad;
    this.vida = this.vida - 20;
    console.log("Me mudé y gasté 20 de vida");
  }

  // imprimirDatos = ()=> console.log(`Se llama ${this.nombre} y tiene ${this,edad}`)
}

const persona1 = new Persona("Pablo", 47, "Zárate");
const persona2 = new Persona("Martín", 48, "Baradero", 120);
const persona3 = new Persona("Juan", 40, "Escobar", 110);
const persona4 = new Persona("Juliana", 32, "CABA", 110);

console.log(persona1);
persona1.comer(25);
console.log(persona1);
persona1.comer(25);
console.log(persona1);
persona1.comer(15);
console.log(persona1);
persona1.mudarse("Elche");
console.log(persona1);
