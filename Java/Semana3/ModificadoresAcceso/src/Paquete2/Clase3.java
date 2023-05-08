/*
 MORALES MARÍA ROSA
 */
package Paquete2;

import Paquete1.Clase1;

public class Clase3 extends Clase1 {

    public Clase3(){
        super("protected");
        this.atributoProtected = "Accedemos de la clase hija";
        System.out.println("Atributo protected = " + this.atributoProtected );
        this.atributoPublic = "Es totalmente público";
    }
    
   
}
