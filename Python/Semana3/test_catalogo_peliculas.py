from dominio.Pelicula import Pelicula
from servicio.catalogo_peliculas import CatalogoPeliculas as cp

opcion = None

while opcion != 4:
    try:
        print('Opciones: ')
        print('1.Agregar Pelicula')
        print('2. Listas las peliculas')
        print('3.Eliminar catálogo de peliculas')
        print('4.salir')
        opcion = int(input('Digite una opción de menú'))
        if opcion== 1:
            nombre_pelicula = input('Digite el nombre de la pelicula: ')
            pelicula = Pelicula(nombre_pelicula)
            cp.agregar_peliculas(pelicula)
        elif opcion == 2:
            cp.listar_peliculas()
        elif opcion == 3:
            cp.eliminar_peliculs()
    except Exception as e:
        print(f'Ocurrio un error{e}')
        opcion= None
    else:
        print('Salimos del programa')


