
// Llamamos a la función antes de definirla (hosting: mueve la declaración de la función al inicio del programa para poder utilizarla en cualquier parte)
miFuncion(8, 2); // A esto se lo denomina hosting


// Creamos la función
function miFuncion(a, b){
//    console.log("Sumamos: "+(a + b));
    return a + b;  // la función regresa un valor. Se puede asignar a una variable
} // aunque no estemos retornando automáticamente el compilador utiliza return


// Llamando la función
miFuncion(5, 4);

// Creamos la variable
let resultado = miFuncion(6, 7);
console.log(resultado); 

// Se puede asignar la función a una variable, es decir se trata de funciones anónimas de tipo expresión

// Declaramos una función de tipo expresión o anónima
let x = function(a, b){ return a + b}; // se realiza en una sola línea y necesita ser cerrada con punto y coma
resultado = x(8, 3); // ingresamos los argumentos
console.log(resultado);  // reutilizamos la variable resultado y pasamos los argumentos para la funcion anónima

// Funciones tipo self e invoking
// no se puede reutilizar, se manda a llamar a sí misma una sola vez
(function(a, b){
    console.log('Ejecutando la funcion: ' + (a + b));
})(9 , 5); // definimos la funcion sin asignarle una variable de hia anonima, se puede llamar a si misma con parametros y con argumentos.

// las funciones pueden ser descriptas como objetos y los objetos pueden tener propiedades y metodfos asociados a cada uno de los objetos.
// propiedad arguments: para saber cuantos argumentos se han definido en la función
console.log(typeof miFuncion);

function miFuncionDos(a, b){
    console.log(arguments);
    console.log(arguments.length); 
} // a través de esto recibimos el conteo de argumento asociado con un arreglo.

miFuncionDos(5, 7);  // imprimimos estos argumentos, utilizando la propiedad arguments ya que una función es un objeto con propiedades y metodos
miFuncionDos(6, 3, 8, 4, 9);


// toString 
//convierte la función a texto
var miFuncionTexto = miFuncionDos.toString();  // asignamos a una variable la función como si fuese  texto
console.log(miFuncionTexto);

// funciones flecha
const sumarFuncionFlecha = (a,b) => a+b;
resultado = sumarFuncionFlecha(3,7); // Asignamos el valor a una variable
console.log(resultado); 

// función tipo expresión

let sumar = function(a= 4, b = 8){
    console.log(arguments[0]);  // muestra el parámetro de a
    console.log(arguments[1]); // muestra el parámetro de b
    a + b + arguments[2];
return a+b;
}
resultado = sumar (3,2,9);
console.log(resultado);

// hoisting : usar una función antes de haberla declarado
// sumar todos los argumentos
let respuesta = sumarTodo(5,4,13,10,9)
console.log(respuesta);
function sumarTodo(){
   let suma=0;
   for(let i=0; i<arguments.length;i++){
    suma+=arguments[i]; //arguments es para arreglos
   }
   return suma;

}
//tipos primitivos   Paso por Valor
let k = 10; 
function cambiarValor(a){
    a=20;
}
cambiarValor(k);
console.log(k);

// paso por referencia. Se crea un objeto (tiene propiedades). Una buena práctica es definirla como tipo constante
const persona =  {
    nombre: 'Juan',           //atributo :
    apellido: 'López'
 }
 console.log(persona);
 function cambiarValorPorObjeto(p1){
    p1.nombre='Ignacio',
    p1.apellido='Pérez'
 }
 cambiarValorPorObjeto(persona);
 console.log(persona);
 




