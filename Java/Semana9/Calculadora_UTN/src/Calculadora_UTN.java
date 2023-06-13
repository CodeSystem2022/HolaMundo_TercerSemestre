import java.util.Scanner;

public class Calculadora_UTN {
    public static void main(String[] args) {

        Scanner entrada = new Scanner (System.in);
        while(true){//ciclo infinito

        

            System.out.println("****Aplicación Calculadora****");

            /*var operando1 = 10;                 //Código duro
            var operando2 = 20;
            var resultado = operando1 + operando2;
            System.out.println("resultado: "+ resultado);*/

            mostrarMenu();
            try{
                var operacion = Integer.parseInt(entrada.nextLine());
                if(operacion >= 1 && operacion <= 4) {
                    ejecutarOPeracion(operacion, entrada);

                } //Fin del if

                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break;
                }
                else{
                    System.out.println("Opción erronea: "+operacion);
                }
            } catch(Exception e){//fin try
                System.out.println("Error: " +e.getMessage());
            }
    }//fin while

    } // Fin main

    private static void mostrarMenu(){
        //Mostramos el menú

        System.out.println("1. Suma");
        System.out.println("2. Resta");
        System.out.println("3. Multiplicación");
        System.out.println("4. División");
        System.out.println("5. Salir.");
            
        System.out.print("Qué operación desea realizar?: ");

    } // fin mostrar menu

    private static void ejecutarOPeracion(int operacion, Scanner entrada){
        System.out.println("Digite el valor para el operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.println("Digite el valor para el operando 2:  ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch (operacion) {
            
            case 1: // Suma
            resultado = operando1 + operando2;
            System.out.println("Resultado de la suma: " + resultado);
            break;
            case 2: // Resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
                break;
            case 3: // Multiplicación
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación: " + resultado);
                break;
            case 4: // División
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división: " + resultado);
                break;
            default:
                System.out.println("Opción errónea: " + operacion);
        }// fin switch
}
        
} //Fin clase






