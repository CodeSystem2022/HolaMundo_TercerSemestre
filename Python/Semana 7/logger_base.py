import logging as log

# log = loggin -> Asimismo se puede hacer de esta manera

# docs.python.org/3/howto/logging.html
# tener en cuenta que esta va a ser la base para todos los demás archivos con el manejo de loggin

# Llamamos a una configuración básica
log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',  # modificamos la hora
                handlers=[  # manejamos una lista

                    # Se manda a este archivo .log
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()  # la consola recibe la información
                ]
                )  # se van a ejecutar todos los mensajes que siguen

if __name__ == '__main__':  # sólo se va a ejecutar dentro de este archivo
    log.debug('Mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel warning')
    log.error('Mensaje a nivel error')
    log.critical('Mensaje a nivel critical')
