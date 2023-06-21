import logging as log
# log = loggin -> También así

# docs.python.org/3/howto/logging.html
# tener en cuenta que esta va a ser la base para todos los demás archivos con el manejo de logging

# Se llama a una configuración básica
log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',  # con esto modificamos la hora
                handlers=[  # permite manejar una lista

                    # Se manda a este archivo .log
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()  # la información es recibida por la consola
                ]
                )  # se van a ejecutar todos los mensajes que se encuentran a continuación

if __name__ == '__main__':  # tener en cuenta que sólo se va a ejecutar dentro de este archivo
    log.debug('Mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel warning')
    log.error('Mensaje a nivel error')
    log.critical('Mensaje a nivel critical')
