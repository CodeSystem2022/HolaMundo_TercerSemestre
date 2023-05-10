import psycopg2  # esto sirve para poder conectarse a Postgres

conexion = psycopg2.connect(  # Se crea un objeto de tipo conexion que permite conectarse a la base de datos
     user='postgres',
     password='admin',
     host='127.0.0.1',
     port='5432',
     database='test_bd'
)

cursor = conexion.cursor()   # Se crea objeto de tipo cursor
sentencia = 'SELECT * from persona'  # se crea la querry
cursor.execute(sentencia)    # Se ejecuta la sentencia
registros = cursor.fetchall()   # Se recuperan registros que serán una lista
print(registros)

cursor.close()
conexion.close()
