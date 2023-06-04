
package accesodatos;


public interface IAccesoDatos { 
    //interface no hereda de la clase object 
    //Sí puede heredar de otras interfaces
    //La interfaz no tiene constructores
    //Tener presente que los métodos van a ser abstractos y públicos
        
    int MAX_REGISTRO = 10; //Se trata de un atributo constante, estático, publico y final
    
    //Método insertar: abstracto y sin cuerpo
    // Esta implementación es para mysql. Simulamos una implementación. 
    void insertar(); 
    void listar();
    void actualizar();
    void eliminar();
    
}
