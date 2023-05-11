
package test;

import domain.*;   // importa todas las clases que están dentro del paquete domain


public class TestSobreescritura {
    public static void main(String[] args) {
               
       // Gerente gerente1 = new Gerente("Jonás", 4000,"Sistemas");        
       // System.out.println("gerente1 = " + gerente1.obtenerDetalles() );
        //Polimorfismo
        Empleado empleado1 = new Empleado("Juan", 10000);
        imprimir(empleado1);
        //System.out.println("empleado1 = " + empleado1.obtenerDetalles());
        Gerente gerente1 = new Gerente("Diego", 6000, "Sistemas");
        imprimir(gerente1);
        //System.out.println("gerente1 = " + gerente1.obtenerDetalles());
    }
    
    //Polimorfismo
    public static void imprimir (Empleado empleado){
        String detalles = empleado.obtenerDetalles();
        System.out.println("detalles (desde metodo imprimir) = " + detalles);
    }
    // En el momemnto de la ejecucíon sucede el polimorfismo donde se va requiriendo
    // la acción de los diferentes tipos que van invocando al método obtener detalles
    //
    }

