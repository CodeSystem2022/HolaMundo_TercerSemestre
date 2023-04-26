
package test;


public class TestArgumentosVariables {
    public static void main(String[] args) {
        
         imprimirNumeros(3, 4, 5); // llamamos al método desde el main
        imprimirNumeros(1, 2); // nuevo llamado, se incorporan los elementos
        // el argumento variable debe ser el último argumento del método
        variosParametros("Juan Pablo", "Coranzoni", 7, 5, 8);
        
    }
    // se define otro elemento
    private static void variosParametros(String nombre, String apellido,  int ...numeros){  // el argumento variable debe ser el ultimo argumento del metodo con otros argumentos con otra funcion y mas parametros
        System.out.println("Nombre: " + nombre + " Apellido: " + apellido);
    //    System.out.println("Apellido: " + apellido);
        imprimirNumeros(numeros);  // se invoca al método anterior con el nuevo parámetro
    } 
    
 /*Se coloca por fuera del método main
Tener presente que con los argumentos variables no es necesario saber cuántos elementos van a pasar*/  
    
    private static void imprimirNumeros(int ...numeros){
        for (int i = 0; i < numeros.length; i++) { /* i < numeros.length: el iterador menor a la longitud del arreglo que recibo */
            System.out.println("Elementos: "+numeros[i]);
            
        }
        
    }
    
    
}
