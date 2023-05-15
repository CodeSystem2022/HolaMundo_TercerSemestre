
package domain;


public enum TipoEscritura {    //es una enumeración. Borramos entonces la palabra reservada class
    
    CLASICO ("Escritura a mano"),
    MODERNO ("Escritura digital");
    
    
    private final String descripcion;  //atributo
    
    //constructor
    private TipoEscritura(String descripcion){
        this.descripcion = descripcion;
    }
    
    //Método get
    public String getDescripcion() {
        return this.descripcion;
    }
    
}
