//Arreglos
//let autos = new Array('Ferrari', 'Renault', 'BMW'); ES LA SINTAXIS VIEJA

const autos = ['Ferrari', 'Renault', 'BMW'];
console.log(autos);

//Recorremos el arreglo
console.log(autos[0]);

for(let i = 0; i < autos.length; i++){
    console.log(i+1+ ':' +autos[i])
}

//Modificamos los elementos del arreglo

autos[1] = 'Volvo';
console.log(autos);

//Agregamos nuevos valores

autos.push('Audi');
console.log(autos);

//Otrs formas de agregar

autos[autos.length] = 'Porche';
console.log(autos);

//Cuidado con esta forma, quedo un espacio vacío 

autos[6] = 'Renault';
console.log(autos);

//Verificar si es un array
console.log(Array.isArray(autos)); //Devuelve un bool

console.log(autos instanceof Array); //Autos es una instancia de Array?

