/*
 MORALES MARIA ROSA
 */
package Paquete2;

public class Clase4 {
    private String atributoPrivate = "atributoPrivado";
    private Clase4(){
        System.out.println("Conrtructor privado");
    }
    public Clase4(String argumento){
        this();
        System.out.println("Constructor publico");
        
    }
    
    private void metodoPrivado(){
        System.out.println("Metodo privado");
    }

    public String getAtributoPrivate() {
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
            
}
