//Morales, María Rosa

// Recorrido de un array
const autos = ['Ferrari', 'Renault', 'BMW']
for (let i=0; i < autos.length; i++) {
    console.log(i + ':' + autos[i]);
}

// Modificamos el array
autos[1] = 'Volvo'
console.log(autos) // ahora imprimirá ['Ferrari', 'Volvo', 'BMW'] 

autos.push('Audi') //push agrega al final
console.log(autos) // ahora imprimirá ['Ferrari', 'Volvo', 'BMW', 'Audi'] 
