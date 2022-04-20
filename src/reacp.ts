const myName = 'joel';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 12);

class Persona {
  /*private age;
  private name;

  constructor(age: number, name: string) {
      this.age = age;
      this.name = name;
  }*/

  //El codigo anterior de ahorra solamente declarando el constructor con y poniendo el modificador de acces en los parametros
  //con esl typescript lo detecta como privado y los asigna al mismo tiempo
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `${this.age} ${this.name}`;
  }
}


const joel = new Persona(35, 'joel');

