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

def segundaFuncion(bd):
    # ESTABLECEMOS LA QUERY
    query = TOTAL_VENDEDORES
    # EJECUTAMOS LA QUERY
    with bd.cursor() as cursor:
        cursor.execute(query)
        columnas = [columna[0] for columna in cursor.description]
        tabla = PrettyTable(columnas)
        registros = cursor.fetchall()
        # AGREGAMOS LOS REGISTROS A LA TABLA
        for registro in registros:
            tabla.add_row(registro)
        # IMPRIMIMOS LA TABLA
        print(tabla)

def terceraFuncion(bd):
    usuario_id = seleccionarUsuario()
    # ESTABLECEMOS LA QUERY
    query = f'''SELECT venta.nombre as nombre_venta, vendedor.nombre as nombre_vendedor
    FROM venta
    INNER JOIN vendedor ON venta.id_vendedor = vendedor.id
    WHERE venta.id_vendedor = {usuario_id}'''
    # EJECUTAMOS LA QUERY
    with bd.cursor() as cursor:
        cursor.execute(query)
        columnas = [columna[0] for columna in cursor.description]
        tabla = PrettyTable(columnas)
        registros = cursor.fetchall()
        # AGREGAMOS LOS REGISTROS A LA TABLA
        for registro in registros:
            tabla.add_row(registro)
        # IMPRIMIMOS LA TABLA
        print(tabla)

def seleccionarUsuario():
    inp = input(INPUT_ID_USER)
    return inp

def cuartaFuncion(bd):
    usuario_id = seleccionarUsuario()
    # ESTABLECEMOS LA QUERY
    query = f''' SELECT COUNT(*) AS total_ventas, vendedor.nombre as nombre_vendedor
    FROM venta
    INNER JOIN vendedor ON venta.id_vendedor = vendedor.id
    WHERE id_vendedor = {usuario_id}
    GROUP BY vendedor.nombre;
    '''
    # EJECUTAMOS LA QUERY
    with bd.cursor() as cursor:
        cursor.execute(query)
        resultado = cursor.fetchone()
        if resultado:  
            nombre_vendedor = resultado[1]
            total_ventas = resultado[0]
            print(f"El vendedor {nombre_vendedor} con ID {usuario_id} vendió {total_ventas} productos")
        else:
            print("No existe un vendedor con ese ID")

def quintaFuncion(bd):
    # ESTABLECEMOS LA QUERY
    query = ''' SELECT vendedor.nombre, COUNT(*) AS total_ventas
    FROM venta
    INNER JOIN vendedor ON venta.id_vendedor = vendedor.id
    GROUP BY vendedor.nombre
    ORDER BY total_ventas DESC
    LIMIT 1;
    '''
    # EJECUTAMOS LA QUERY
    with bd.cursor() as cursor:
        cursor.execute(query)
        resultado = cursor.fetchone()
        if resultado:
            nombre_vendedor = resultado[0]
            total_ventas = resultado[1]
            print(f"El vendedor {nombre_vendedor} vendió {total_ventas} productos")
        else:
            print("No existe un vendedor con ese ID")

