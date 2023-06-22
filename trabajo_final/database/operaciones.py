from static.constantes import *
from prettytable import PrettyTable, MSWORD_FRIENDLY, DOUBLE_BORDER

def primeraFuncion(bd):
    # Establecemos la query
    query=TOTAL_VENTAS
    # Ejecutamos la query
    with bd.cursor() as cursor:
        cursor.execute(query)
        columnas = [columna[0] for columna in cursor.description]
        tabla = PrettyTable(columnas)
        registros = cursor.fetchall()
        # Agregamos los registros a la tabla
        for registro in registros:
            tabla.add_row(registro)
        # Imprimimos la tabla
        print(tabla)
    # Cerramos la conexión
    bd.close()