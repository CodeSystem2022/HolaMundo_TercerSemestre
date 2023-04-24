# Aclaración: si el archivo estâ en la misma carpeta en la cual estamos trabajando, no hace falta indicarle la ruta del archivo, de lo contrario sí.
# se especifica archivo = open('c:\\usuario\nadia\tecnicaturaUTN2023\laboratorioIII\archivos\leccion2\prueba.txt')

archivo = open('prueba.txt', 'r', encoding='utf8')  # Abrimos un archivo en modo lectura 'r'
# print(archivo.read())  # Mostramos el contenido del archivo
# print(archivo.read(16))
# print(archivo.read(10))
# print(archivo.readline())
# print(archivo.readline())
# print(archivo.readline())  # De esta manera vamos a ver la segunda línea de nuestro archivo
# vamos a iterar el archivo, cada una de las líneas
# for linea in archivo:
  # print(linea): iteramos todos los elementos del archivo
  # print(archivo.readlines()): accedemos al archivo como si fuera una lista
# print(archivo.readlines()[1]) # accedemos al archivo como si fuera una lista, muestra oración correspondiente
# Anexamos información, copiamos a otro
archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close()  # cerramos el primer archivo
archivo2.close()  # cerramos el segundo archivo

print('Se ha terminado el proceso de leer y copiar archivos')
