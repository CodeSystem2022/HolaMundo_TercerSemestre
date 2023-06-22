import os
import database.operaciones as op
import database.baseDatos as db
import static.constantes as const

def menu(bd):
    while True:
        print(const.MENU)
        opcion = input(const.OPCION)
        if opcion in OPERACIONES:
            OPERACIONES[opcion](bd)            
        else:
            print(const.ERROR)

def salir(bd):
    db.cerrar_conexion(bd)
    exit()

def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

OPERACIONES = {
    '1': op.primeraFuncion,
    '2': op.segundaFuncion,
    '3': op.terceraFuncion,
    '4': op.cuartaFuncion,
    '5': op.quintaFuncion,
    '6': op.sextaFuncion,
    '7': clear_terminal(),
    '8': salir
}




