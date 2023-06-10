package test;

import static aritmetica.Aritmetica.division;
import excepciones.OperacionExcepcion;


public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try{
             resultado = division(10, 0);
        }catch(OperacionExcepcion e){
            System.out.println("Ocurrio un error de tip operacion Excepcion");
            System.out.println(e.getMessage());
        } catch(Exception e){
            e.printStackTrace(System.out); // pila de excepciones
            System.out.println(e.getMessage());
        }
        finally{
            System.out.println("Se reviso la division entre cero");//Siemprem ejecuta
        }
        System.out.println("resultado = " + resultado);
    }
}
