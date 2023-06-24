# Bienvenida

BIENVENIDA = "Bienvenido al sistema de ventas"

# QUERYS
TOTAL_VENTAS = '''SELECT venta.nombre as nombre_venta, zona.nombre as nombre_zona
FROM venta
INNER JOIN zona ON venta.id_zona = zona.id;'''

TOTAL_VENDEDORES = '''SELECT vendedor.nombre as Vendedores
FROM vendedor;'''

MENU = '''
Menú de opciones
1) Total de ventas por zona
2) Total de vendedores
3) Ventas de algun vendedor
4) Total de ventas por vendedor
5) Que vendedor vendió más
6) Datos anteriores
7) Limpiar pantalla
8) Salir
'''

# INPUTS
INPUT_ID_USER = "Ingrese el id de usuario: "
OPCION = "Ingrese una opción: "

# CREDENCIALES
username = "admin"
password = "1234"

# ERRORES
ERROR = "Opción incorrecta, intente nuevamente"

VENTAS_VENDEDOR = f'''SELECT venta.nombre as nombre_venta, vendedor.nombre as nombre_vendedor
    FROM venta
    INNER JOIN vendedor ON venta.id_vendedor = vendedor.id
    WHERE venta.id_vendedor = '''


MAYOR_VENTA = f'''
'''


