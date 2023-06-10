class Persona {
    static contadorPersonas = 0; // Atributo estático
    email = 'Valor por defecto del email'; // Atributo no estático

    static get MAX_OBJ() { // Este método simula una constante
        return 5;
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas;
        }
        else {
            console.log('Se superó el máximo permitido');
        }
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    // Sobreescribiendo el método de la clase padre (Object)
    toString() { // Regresa un string
        // Se aplica el polimorfismo 
        // El método que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }

    static saludar(persona) {
        console.log(persona.nombre + ' ' + persona.apellido);
    }

    static saludar2(persona) {
        console.log('Saludos desde el método static');
    }
}

class Empleado extends Persona {
    // Clase hija
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    // Sobreescritura:
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan';
console.log(persona1.nombre);

let persona2 = new Persona('Carlos', 'Laraz');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());
console.log(persona1.toString());

Persona.saludar(persona1);
Persona.saludar2(persona1);

Empleado.saludar(empleado1);
Empleado.saludar2(empleado1);

console.log(Persona.contadorPersonas);
console.log(Empleado.contadorPersonas);

console.log(persona1.email);
console.log(empleado1.email);

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);
let persona3 = new Persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());
let persona5 = new Persona('Liliana', 'Paz');
console.log(persona5.toString());
