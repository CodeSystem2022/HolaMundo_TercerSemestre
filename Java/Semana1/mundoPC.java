
package mundopc;

import ar.com.system2023.mundopc.Computadora;
import ar.com.system2023.mundopc.Monitor;
import ar.com.system2023.mundopc.Orden;
import ar.com.system2023.mundopc.Raton;
import ar.com.system2023.mundopc.Teclado;


public class mundoPC1 {
    public static void main(String[] args) {
        //Creamos el 1er objeto
        Monitor monitorHP = new Monitor ("HP", 13); //importar clase
        Teclado tecladoHP = new Teclado ("Bluethoot", "HP");
        Raton ratonHP = new Raton ("Bluethoot", "HP");
        Computadora computadoraHP = new Computadora("ComputadoraHP", monitorHP, tecladoHP, ratonHP);
        
        //Creamos un 2do objeto
        Monitor monitorGamer = new Monitor ("Gamer", 32);
        Teclado tecladoGamer = new Teclado ("Bluethoot", "Gamer");
        Raton ratonGamer = new Raton ("Bluethoot", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);

        //Creamos 3er objeto
        Monitor monitorAppleiMac = new Monitor ("Apple iMac", 24);
        Teclado tecladoAppleiMac = new Teclado ("Cable", "Apple iMac");
        Raton ratonLG = new Raton ("Cable", "Apple iMac");
        Computadora computadoraAppleiMac = new Computadora("Computadora Apple iMac", monitorAppleiMac, tecladoAppleiMac, ratonLG);

        //Creamos 4to objeto
        Monitor monitorLenovo = new Monitor ("Lenovo", 24);
        Teclado tecladoLenovo = new Teclado ("Bluethoot", "Lenovo");
        Raton ratonLenovo = new Raton ("Cable", "Acer");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);

        //Creamos 5to objeto
        Monitor monitorRazor = new Monitor ("Razor", 32);
        Teclado tecladoRazor = new Teclado ("Bluethoot", "Razor");
        Raton ratonRazor = new Raton ("Bluethoot", "Razor");
        Computadora computadoraRazor = new Computadora("Computadora Razor", monitorRazor, tecladoRazor, ratonRazor);

        Orden orden1 = new Orden(); //Inicializamos el arreglo vacio
        Orden orden2 = new Orden(); //Una nueva lista para el orden2
        
        // Agregamos computadoras
        orden1.agregarComputadora(computadoraHP); 
        orden1.agregarComputadora(computadoraGamer);
        orden1.agregarComputadora(computadoraLenovo);
        orden1.agregarComputadora(computadoraRazor);
        orden1.agregarComputadora(computadoraAppleiMac);
        orden1.mostrarOrden();

        Computadora computadorasVarias = new Computadora("Computadoras de diferentes marcas", monitorGamer, tecladoGamer, ratonHP);
        orden2.agregarComputadora(computadorasVarias);

        orden1.mostrarOrden();
        orden2.mostrarOrden();
    }   
    }

