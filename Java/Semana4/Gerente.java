
package domain;


public class Gerente extends Empleado {
    //declaramos los atributos como private, porque ya no extienden a mas clases hijas
    private String departamento;
    
    //Constructor: al ser público se hereda por la clase hija. Se pasan los atributos de la clase padre Empleado. 
    public Gerente(String nombre, double sueldo, String departamento){
        //se accede a los atributos de la clase padre usando super() para llamar al constructor
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    //Sobreescribimos el metodo
    @Override  
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Departamento : "+ this.departamento;
    }
    
}



