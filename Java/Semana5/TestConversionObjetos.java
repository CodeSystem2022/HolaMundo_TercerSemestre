
package test;

import domain.Empleado;
import domain.Escritor;
import domain.TipoEscritura;


public class TestConversionObjetos {
    
    public static void main(String[] args) {
       Empleado empleado;
       empleado = new Escritor ("Horacio", 6000, TipoEscritura.MODERNO);
       //System.out.println("empleado= "+empleado);
       System.out.println(empleado.obtenerDetalles()); //Si queremos acceder al método Escritor
       //empleado.getTipoEscritura(); No es posible hacerlo
       
        //Downcasting
       //((Escritor)empleado).getTipoEscritura(); //Dos opciones: acá se coloca una
       Escritor escritor = (Escritor)empleado; // Segunda opción para realizarlo
       escritor.getTipoEscritura();
   
       //Upcasting
       Empleado empleado2 = escritor;
       System.out.println(empleado2.obtenerDetalles());
   
   
   }
    
}
