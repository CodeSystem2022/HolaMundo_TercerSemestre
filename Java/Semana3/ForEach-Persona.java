
package domain;


public class Persona {
    private String nombre;
    
    //Constructor
    public Persona(String nombre) {             
        this.nombre = nombre;
    }
    
    // getters y setters 
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    //to String para clase Persona
    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + '}';
    }
}
