<h1 align="center">Proyecto Integrador Hola mundo</h1>
  
## **1. Descripción**

Palta es una empresa especializada en servicios de entrega de comidas saludables, con presencia en todo el país. Para asegurar un eficiente desarrollo de las tareas administrativas, el país se divide en cinco zonas geográficas: Norte, Sur, Este, Oeste y Centro. Cada una de estas zonas cuenta con un equipo de vendedores dedicados a la gestión y coordinación de las operaciones.

Nosotros somos Hola Mundo, alumnos de la UTN Regional San Rafael y queremos presentarles nuestro programa diseñado especialmente para esta empresa con la finalidad de optimizar sus operaciones. 

En los siguientes apartados explicamos en qué consiste nuestro programa. 
   
## **2. Funcionalidades del programa**

La empresa almacena sus datos y obtiene estadísticas sobre el comportamiento de sus representantes y de las ventas. El equipo Hola mundo trabaja con Python y una base de datos relacional, en este caso PostresSQL, la cual almacena los datos recibidos de los empleados y opera con los mismos. Una vez cargada la información, a través de un menú, el programa puede mostrar:

 - Total de ventas por zonas.
 - Total de vendedores
 - Total de ventas de cada representante 
 - Mayor venta, indicando el número de representante que la realizó.
 - Datos anteriores.
 - Limpiar pantalla
 - Salir del menú.

## **2. Estructura general del programa:**

A continuación, se presenta la estructura general del programa:

### Punto de entrada principal:

- Archivo main.py: Contiene la función main() que es el punto de entrada principal del programa. Controla el flujo de ejecución, incluyendo el inicio de sesión, la conexión a la base de datos y la navegación por el menú de opciones.
  
### Base de datos:

- Archivo baseDatos.py: Contiene funciones para la conexión y cierre de la conexión a la base de datos PostgreSQL.

### Operaciones de base de datos:

- Archivo operaciones.py: Contiene varias funciones que realizan consultas a la base de datos y procesan los resultados.
- Archivo constantes.py: Define constantes que contienen consultas SQL utilizadas en las operaciones de base de datos.

### Interfaz de usuario:

- Archivo login.py: Proporciona funciones para la gestión del inicio de sesión del usuario.
- Archivo usuario.py: Define la clase Usuario que representa a un usuario y contiene métodos relacionados con la autenticación.
- Archivo funciones.py: Contiene la función menu() que muestra el menú de opciones y gestiona la interacción con el usuario.
- Archivo constantes.py: Define constantes que contienen mensajes y opciones para la interfaz de usuario.
  
## **2.1 Componentes de la base de datos:** 

La base de datos se estructura de la siguiente manera: 

Existen 3 tablas principales:

- zona: con id y 5 zonas distintas. Cada una de ellas se establecen en orden numérico del 1 al 5
(norte,sur,este,oeste,centro)

- vendedor: con su respectivo nombre e id. 

- venta: Cada una posee su  id y nombre correspondiente, id de la zona, id del vendedor que realizó la operación y fecha.

## **3 Explicación del código en detalle** 

Por favor, ingrese a la explicación del código completo en nuestra wiki 

Link del Proyecto Integrador: 

## **4. Tecnologías utilizadas:**

<div class="contenedor-imagenes">
  <img src="https://github.com/CodeSystem2022/HolaMundo_TercerSemestre/assets/92409193/78bdf7ea-edb8-4911-a57b-a07e194f0172" width="50"><figcaption>Python</figcaption> 
  <img src="https://github.com/CodeSystem2022/HolaMundo_TercerSemestre/assets/92409193/89fe2490-43fd-4fce-be7d-1547fcb5b665" width="60"> <figcaption>PosgreSQL</figcaption>
</div>

## **5. Integrantes del equipo que han participado en la elaboración del Proyecto Integrador:** 

 * Montiel, Israel Leonardo 
 * Morales, María Rosa 
 * Ortiz, Carlos Gustavo
 * Rodeles, Francisco 




    
