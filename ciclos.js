
//Morales, María Rosa - CICLOS

//CICLO For
for (let contando = 0; contando <= 10; contando++){  //Imprime los números del 0 al 10
    console.log(contando);
}
console.log('Fin del ciclo for') 

//Ejercicio: Imprimir en pantalla todos los números pares del 0 al 10

for (let contando = 0; contando <= 10; contando++){
    if(contando % 2 ==0){ 
        console.log(contando) 
    }
console.log('Termina el ciclo for al encontrar todos los números pares')     
}

// Palabra reservada Break
for (let contando = 0; contando <= 10; contando++){
    if(contando % 2 ==0){ // sólo imprime el número 0 que es el primer número par del rango y se detiene la corrida
        console.log(contando) 
        break;
    }
}

//Palabra reservada Continue
for (let contando = 0; contando <= 10; contando++){
    if(contando % 2 !==0){
        continue; //pasa a la siguiente iteración
    }
    console.log(contando); //imprimirá 0, 2, 4, 6, 8, 10 
}
console.log('Termina el ciclo'); 