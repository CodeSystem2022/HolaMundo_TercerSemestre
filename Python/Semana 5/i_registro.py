import psycopg2  # Esto es para poder conectarnos a Postgresql

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)' #Placeholder
            valores = ('Carlos', 'Lara', 'carlos_l@gmail.com')
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            registros_insertados = cursor.rowcount
            print ('Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrio un error {e}')
finally:
    conexion.close()

# https://www.psycopg.org/docs/usage.html
