import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        //Empezamos con el menú
        var salir = false;
        while (!salir) {
            mostrarMenu(); // llamamos a un método
            try{ //ante cualquier error para atrapar cualquier error
                salir= ejecutarOperacion(entrada, personas);  //le agregamos otro método o función
            }catch (Exception e ){
                System.out.println("Ocurrió un error: "+ e.getMessage()); //hemos atrapado la excepción
            }

            System.out.println();
        }//Fin del ciclo while
    }// Fin método main

    private static void mostrarMenu(){
            //mostramos las opciones
        System.out.print("""
                ***Listado de personas***
                1. Agregar
                2. Listar
                3. Salir 
                """);
        System.out.print("Digite una de las opciones: ");


} //Fin de la clase mostrar menú
private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
var opcion = Integer.parseInt(entrada.nextLine());
var salir = false; //inicializamos en false
    // Revisamos la opción digita a través de un switch,
    switch (opcion){
        case 1 -> {   // Agregar una persona a la lista
            System.out.print("Digite el nombre: ");
            var nombre = entrada.nextLine();
            System.out.print("Digite el teléfono: ");
            var tel = entrada.nextLine();
            System.out.print("Digite el correo: ");
            var email = entrada.nextLine();
            //creamos el objeto persona
            var persona = new Persona (nombre, tel, email);
            // Agregamos la persona a la lista
            personas.add(persona);
            System.out.println("La lista tiene "+ personas.size());

        } // Fin del caso 1

        case 2 -> {   // Listar a las personas
            System.out.print("Listado de personas: ");
            // Mejoras con lambda y el método de referencia
// personas.forEach((persona) -> System.out.println(persona) );
            personas.forEach(System.out::println); //doble punto: se conoce como método de referencia - lamda
//por cada objeto de tipo persona de la lista se ejecuta el println

        }// fin caso 2
        case 3 -> {  // Salir del ciclo
            System.out.println("Hasta pronto...!");
salir=true;

        } // Fin del caso 3
        default -> System.out.println("Opción incorrecta" + opcion);

    }  // Fin del switch
    return salir;  // nos saca del ciclo while
}  // Fin del método ejecutarOperacion

        } // Fin de la clase ListadoPersonas

