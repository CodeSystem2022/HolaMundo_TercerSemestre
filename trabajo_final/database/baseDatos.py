import psycopg2 as bd  # Esto es para poder conectarnos a Postgres

def conectar():
    conexion = bd.connect(
        user='postgres',
        password='1234',
        host='127.0.0.1',
        port='5432',
        database='postgres'
    )
    return conexion

def cerrar_conexion(conexion):
    conexion.close()
