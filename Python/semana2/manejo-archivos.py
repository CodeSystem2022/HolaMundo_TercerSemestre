# El método open puede arrojar alguna excepción
# se aconseja envolverlo en un bloque try except

#  Declaramos una variable

try:
    archivo = open('prueba.txt', 'w', encoding='utf8')  # w -> write, podemos escribir información hacia el archivo
    # método open sirve para:
    # abrir un archivo existente
    # abrir un archivo inexistente (lo crea automático)

    #  vamos a agregar información al archivo con el método write
    archivo.write('Programamos con diferentes tipos de archivos, ahora en .txt\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write('las letras son: \nr read leer, \na append anexa, \nw write escribe, \nx crea un archivo')
    archivo.write('\nt esto es para texto, \nb archivos binarios, \nw+ lee y escribe son iguales r+\n')
    archivo.write('Con esto terminamos.')

except Exception as e:
    print(e)  # nos imprime el error

finally:  #  se ejecuta siempre
    archivo.close()  # se cierra siempre el archivo aunque haya existido algú error
# archivo.write('Todo quedó perfecto'): este es un error
