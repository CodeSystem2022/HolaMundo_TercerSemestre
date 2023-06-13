class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegistro;
    }

    get idCLiente(){
        return this._idCLiente;
    }

    get fecharegistro(){
        return this._fechaRegistro;
    }

    set fecharegistro(fecharegistro){
        this._fechaRegistro = fecharegistro;
    }

    toString(){     //para el templete o plantilla esta sintaxis ', $  esto permite crear cadenas de texto de manera más fácil y legible
        return `
        ${super.toString()} 
        ${this._idCLiente} 
        ${this._fechaRegistro}`;
    }

}