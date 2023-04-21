from NumerosIgualesException import NumerosIgualesException

# necesitamos que resultado sea una variable global para incluirlo dentro y fuera del bloque
resultado = None

try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    if a==b:
        raise NumerosIgualesException ('Son números iguales')
    resultado = a / b  # Modificamos
except TypeError as e:
    print(f'Type error - ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'Type error - ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Type error - ocurrio un error: {type(e)}')
else:
    print('No se arrojó ninguna excepción')
finally:  # Siempre se va a ejecutar finally
    print('Ejecución de este bloque finally')

print(f'El resultado es: {resultado}')
print('seguimos...')

