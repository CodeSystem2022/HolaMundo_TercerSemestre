let x = 10; //variable de tipo primitiva
//console.log(x,length);  // resultado undefined porque no se encuentra lo que son atributos o métodos asociados al valor 
// tener en cuenta diferencias entre tipos primitivos y objetos



let persona = {
    nombre: "Carlos",
    apellido: "Gil",
    email: "cgil@gmail.com",
    edad: "30",
    idioma: 'ES',
    get lang (){
        return this.idioma.toUpperCase(); 
    },  
    set lang (lang){
        this.idioma = lang.toUpperCase();// convierte las minúsculas a mayúsculas
    } , 
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    },
    get nombreEdad(){
        return 'El nombre es: ' + this.nombre + ' edad: ' + this.edad;
      
    }
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona.nombreCompleto());

let persona2 = new Object();// Se crea un nuevo objeto en memoria
persona2.nombre = "José";
persona2.direccion = "Azucena 23";
persona2.telefono = "576743932020";
console.log(persona2.telefono);

console.log(persona['apellido']); // Se accede como si fuese un arreglo

//for in: Se utiliza for in de manera de acceder al objeto como si fuera un arreglo
// Se accede a la propiedad y luego a su valor
for (propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
    
}
//agregamos una nueva propiedad al objeto
console.log('Cambiamos y eliminamos un error');
persona.apellido = 'Betancud' //cambiamos dinámicamente un valor del objeto
delete persona.apellido; //eliminamos el error (propiedad y valor)
console.log(persona) //se eliminó Betancud y apellida
//Distintas formas de imprimir un objeto.
//Número 1: la más sencilla: Concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre+','+persona.apellido);

//Número 2: A través del ciclo for in
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);  
}

//Número 3: La función Object.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizaremos el método JSON.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);
console.log(persona.nombreEdad)
console.log('Comenzamos con el método get para idiomas');
console.log(persona.lang);
console.log('Comenzamos con el método get y set para idiomas')
persona.lang="en";
console.log(persona.lang);

function Persona3(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido
    }
}
let padre = new Persona3('Jorge', 'Moscarda', 'JMoscarda@mail.com');
padre.telefono = '99585844'
console.log(padre);
console.log(padre.nombreCompleto());


let madre = new Persona3('Lita','Murua','Murualita@mail.com');
console.log(madre);
console.log(madre.telefono) //La propiedad no esta definida
console.log(madre.nombreCompleto());


//Diferentes formas de crear objetos
//Caso N°1
let miObjeto = new Object(); //Esta es una opcion formal
//Caso N°2
let miObjeto2 = {}; //Esta opcion es breve y recomendada

//Caso String 1 
let miCaddena1 = new String('Hola')
//Caso String 2
let miCaddena2 = 'HOLA'; //Esta la sintaxis simplificada y recomendada

//Caso 1 con numero 
let miNumero = new Number(1); //Esta forma no recomendable
//Caso 2 con numero
let miNumero2 = 1; //Sintaxis recomendada

//Caso 1 boolean
let miBoolean1 = new Boolean(true); //Forma1
//Caso 2 boolean
let miBolean2 = false; //Sintaxis recomendada

//Caso 1 Arreglos
//let miArreglo = new Array(); //Forma1
//Caso 2 Arreglos
let miArreglo = [];

//Caso 1 function
let miFuncion1 = new function(){}; // después de new lo que continúa es considerado objeto
//Caso 2 function
let miFuncion2 = function(){}; //Notación simplificada y recomandada

//Uso de prototype
Persona3.prototype.telefono = '25499999'
console.log(padre);
console.log(madre.telefono);
madre.telefono = '233657849'
console.log(madre.telefono);

//Uso de call
let persona4 = { //-> objeto
    nombre: 'Juan',
    apellido: 'Palotes',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
       // return this.nombre+' '+this.apellido;
    }
}

let persona5  = { 
    nombre: 'Diego',
    apellido: 'Marquez'
}

console.log(persona4.nombreCompleto2('Doc.','5866994430'));

console.log(persona4.nombreCompleto2.call(persona5,'Lic.','56372282819'));

//Metodo Apply
let arreglo = ['Ing.','674839201'];
console.log(persona4.nombreCompleto2.apply(persona5,arreglo));
