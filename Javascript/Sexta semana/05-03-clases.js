// let persona3 = new Persona ('Carla', 'Peterson');
// no es posible hacer esto. Persona no está definido. 
// 1º se define la clase, luego se crean los objetos. 

class Persona{ //Definimos la clase. //Clase padre
    constructor(nombre, apellido){ //Método constructor.
        this._nombre = nombre; //Declaramos e inicializamos el atributo "nombre".
        this._apellido = apellido; //Declaramos e inicializamos el atributo "apellido".
    }
  
    //Método get: recordar que no se llamar de igual manera que la propiedad
    //esta es la razón por la cual se agrega un _ adelante de los atributos (propiedades)
    get nombre(){  
        return this._nombre;
    }
    //Set (Modificamos el atributo)

    set nombre(nombre){
        this._nombre = nombre;
    }
    //Tarea Asignada
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

class Empleado extends Persona{//clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)  //la palabra super la usamos en la definición del constructor de la clase hija
        this._departamento = departamento;
    }
get departamento(){
    return this._departamento;

}
set departamento (departamento){
        this._departamento = departamento;
}
}

//Creamos objetos y los mostramos en consola:

let persona1 = new Persona("Gerardo", "Perez"); //Creamos el objeto "persona1" //. 
console.log(persona1.nombre); //llamamos al método get. //No hace falta usar paréntesis en el método gey y set
persona1.nombre = 'Juan Pablo';   //modificamos el valor (método set)
console.log(persona1.nombre);
persona1.apellido = 'Romano';   //Modificamos el atributo "apellido" mediante el método set
console.log(persona1.apellido);    //Mostramos los cambios  .
//console.log(persona1); //Mostramos objeto persona1
let persona2 = new Persona("Pablo","Urquiza"); //Creamos el objeto "persona2".
console.log(persona2.nombre);
persona2.nombre = 'Pablo Urquiza';   
console.log(persona2.nombre);
//console.log(persona2); //Mostramos objeto persona2

let empleado1 = new Empleado('Diana', 'Gonzáles', 'Sistemas');
console.log(empleado1); 
console.log(empleado1.nombre);