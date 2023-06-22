import database.operaciones as op
import database.baseDatos as db
import static.constantes as const
from app.funciones import *
from app.login import *
from app.usuario import *

def main():
    i = 0 
    while i < 3:
        inicio_sesion = login()
        if inicio_sesion:
            bd = db.conectar()
            menu(bd)
        else:
            print(f'No se pudo iniciar sesión. Intento {i+1} de 3')
            pregunta = input('¿Desea volver a intentarlo? (s/n): ')
            if pregunta == 's':
                i += 1
            else:
                break

        
if __name__ == '__main__':
    main()
