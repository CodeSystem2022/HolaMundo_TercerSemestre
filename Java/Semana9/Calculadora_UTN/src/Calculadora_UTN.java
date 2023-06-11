import java.util.Scanner;

public class Calculadora_UTN {
    public static void main(String[] args) {

        Scanner entrada = new Scanner (System.in);

        System.out.println("****Aplicación Calculadora****");

        /*var operando1 = 10;                 //Código duro
        var operando2 = 20;
        var resultado = operando1 + operando2;
        System.out.println("resultado: "+ resultado);*/

        //Mostramos el menú
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicación
                    4. División
                    5. Salír.
                    """);
        System.out.print("Qué operación desea realizar?: ");
        var operacion = Integer.parseInt(entrada.nextLine());

        if(operacion >= 1 && operacion <= 4) {
            System.out.println("Digite el valor para el operando 1: ");
            var operando1 = Integer.parseInt(entrada.nextLine());
            System.out.println("Digite el valor para el operando 2:  ");
            var operando2 = Integer.parseInt(entrada.nextLine());

            int resultado;
            switch(operacion){
                case 1 -> { //Suma
                    resultado = operando1 + operando2;
                    System.out.println("Resultado de la suma: "+resultado);
                }
                case 2 -> { //Resta
                    resultado = operando1 - operando2;
                    System.out.println("Resultado de la resta: "+resultado);
                }
                case 3 -> { //Multiplicación
                    resultado = operando1 * operando2;
                    System.out.println("Resultado de la multiplicación: "+resultado);
                }
                case 4 -> { //División
                    resultado = operando1 / operando2;
                    System.out.println("Resultado de la división: "+resultado);
                }
                default -> System.out.println("Opción errónea: "+operacion);

            } //Fin switch

        } //Fin del if

        else if (operacion == 5) {
            System.out.println("Hasta pronto...");
        }
        else{
            System.out.println("Opción erronea: "+operacion);
    }


    } // Fin main

    } //Fin clase






