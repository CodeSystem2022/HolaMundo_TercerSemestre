import psycopg2  # Esto es para poder conectarnos a Postgresql

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona=%s' #Placeholder
            entrada= input ('Ingrese el numero del registro que desea eliminar: ')
            valores=(entrada,)
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            registros_eliminados = cursor.rowcount
            print ('Los registros eliminados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurrio un error {e}')
finally:
    conexion.close()

# https://www.psycopg.org/docs/usage.html
