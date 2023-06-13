class Persona{

    static contadorPersonas = 0; //atributo estático

    // los otros atributos se agregan dentro del constructor
    constructor(nombre, apellido, edad){ //propiedades de instancia.
        this._idPErsona = ++Persona.contadorPersonas; //esto asegura que al incrementar que exista un identificador único 
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    //Métodos Getters and setters

    // getter para el atributo idPersona
    get idPersona(){
        return this._idPErsona;
    }

    //getter y setter para el atributo nombre
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    //getter y setter para el atributo apellido
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    //getter y setter para el atributo edad
    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    // toString()
    toString(){ 
        return ` 
        ${this._idPErsona} 
        ${this._nombre} 
        ${this._apellido} 
        ${this._edad}`;
    }

}