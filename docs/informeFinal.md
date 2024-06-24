# Informe Final Testing

## Introducción

El sistema web que se va a testear es una página de publicación de viajes. El objetivo del testing funcional es identificar defectos, aumentar la confianza en el nivel de calidad, facilitar la información para la toma de decisiones y evitar la aparición de defectos.

## Test de sistema

**Enfoque de testing:** Se va a utilizar la estrategia de prueba de caja negra (funcional). Los casos de prueba se derivan de la especificación del módulo o programa; el comportamiento del módulo se determina en función de sus entradas y salidas. También se va a poner en uso el testing exploratorio, el cual es un estilo de testeo de software que enfatiza la libertad personal y la responsabilidad individual del tester, para optimizar de manera continua el valor de su trabajo, tratando al aprendizaje, diseño y ejecución de pruebas como actividades que se apoyan mutuamente y corren en paralelo a lo largo de un proyecto.

## Casos de prueba:

### Identificador: CASO 1

**Nombre:** Publicar viaje con origen y destino solo números.
**Propósito:** Verificar que el sistema no permita ingresar solo números en los campos de origen y destino.
**Precondiciones:** El usuario debe estar en la sección de publicación de viajes.
**Pasos a ejecutar:**
1. Ingresar "1234" en el campo "Origen".
2. Ingresar "5678" en el campo "Destino".
3. Ingresar un valor válido en los campos "Precio" y "Cantidad de Pasajeros".
4. Hacer clic en "Publicar".
**Resultado esperado:** El sistema debe mostrar un mensaje de error indicando que el origen y destino no pueden ser solo números.
**Estado:** Fallo.
**Resultado obtenido:** El sistema no muestra el mensaje de error.
**Tester:** Juan, Joaquin y Mauro.
**Fecha de ejecución:** 21/06/2024.

### Identificador: CASO 2
**Nombre:** Publicar viaje con datos válidos.
**Propósito:** Verificar que el sistema permita publicar un viaje con todos los datos válidos.
**Precondiciones:** El usuario debe estar en la sección de publicación de viajes.
**Pasos a ejecutar:**
Ingresar "Montevideo" en el campo "Origen".
Ingresar "Punta del Este" en el campo "Destino".
Ingresar un valor válido en los campos "Precio" y "Cantidad de Pasajeros".
Hacer clic en "Publicar".
**Resultado esperado:** El sistema debe permitir la publicación del viaje y mostrar el mensaje "Viaje publicado correctamente".
**Estado:** Pasa.
**Resultado obtenido:** El sistema permite la publicación del viaje y muestra el mensaje correcto.
**Tester:** Juan, Joaquin y Mauro.
**Fecha de ejecución:** 21/06/2024.

### Identificador: CASO 3
**Nombre:** Verificar que los botones "Buscar Viaje" y "Mi Perfil" funcionen.
**Propósito:** Verificar que los botones redirijan a la sección correspondiente.
**Precondiciones:** El usuario debe estar en la página principal.
**Pasos a ejecutar:**
Hacer clic en el botón "Buscar Viaje".
Hacer clic en el botón "Mi Perfil".
**Resultado esperado:** El sistema debe redirigir a las secciones "Buscar Viaje" y "Mi Perfil" respectivamente.
**Estado:** Fallo.
**Resultado obtenido:** Los botones no redirigen a ninguna sección.
**Tester:** Juan, Joaquin y Mauro.
**Fecha de ejecución:** 21/06/2024.

### Identificador: CASO 4
Nombre: Publicar viaje con campos vacíos.
Propósito: Verificar que el sistema no permita publicar un viaje si alguno de los campos requeridos está vacío.
Precondiciones: El usuario debe estar en la sección de publicación de viajes.
Pasos a ejecutar:
Dejar el campo "Origen" vacío y completar los demás campos.
Hacer clic en "Publicar".
Completar el campo "Origen" y dejar el campo "Destino" vacío.
Hacer clic en "Publicar".
Completar los campos "Origen" y "Destino", y dejar el campo "Precio" vacío.
Hacer clic en "Publicar".
Completar todos los campos excepto "Cantidad de Pasajeros".
Hacer clic en "Publicar".
Resultado esperado: El sistema debe mostrar un mensaje de error indicando que todos los campos son obligatorios.
Estado: Pasa.
Resultado obtenido: El sistema muestra correctamente el mensaje de error.
Tester: Juan, Joaquin y Mauro.
Fecha de ejecución: 21/06/2024.

### Identificador: CASO 5
Nombre: Publicar viaje con precio negativo.
Propósito: Verificar que el sistema no permita ingresar un precio negativo al publicar un viaje.
Precondiciones: El usuario debe estar en la sección de publicación de viajes.
Pasos a ejecutar:
Ingresar "Montevideo" en el campo "Origen".
Ingresar "Punta del Este" en el campo "Destino".
Ingresar "-100" en el campo "Precio".
Ingresar un valor válido en el campo "Cantidad de Pasajeros".
Hacer clic en "Publicar".
Resultado esperado: El sistema debe mostrar un mensaje de error indicando que el precio no puede ser negativo.
Estado: Pasa.
Resultado obtenido: El sistema muestra correctamente el mensaje de error.
Tester: Juan, Joaquin y Mauro.
Fecha de ejecución: 21/06/2024.

### Identificador: CASO 6
Nombre: Funcionalidad Publicar Viaje con cantidad de pasajeros decimal.
Propósito: Verificar que no se permita ingresar una cantidad de pasajeros decimal.
Precondiciones:  El usuario debe estar en la sección de publicación de viajes.
Pasos a ejecutar:
Ir a la página de publicación de viajes.
Completar los campos de destino, origen, hora de salida, y costo con datos válidos.
Introducir una cantidad de pasajeros con un valor decimal (por ejemplo, "2.5").
Hacer clic en el botón "Publicar viaje".
Resultado esperado: Debe mostrar un mensaje de error indicando que la cantidad de pasajeros debe ser un número entero.
Estado: Falló.
Resultado obtenido: El sistema permite ingresar una cantidad de pasajeros decimal y muestra el viaje publicado con el valor decimal.
Tester: Juan, Joaquin y Mauro.
Fecha de ejecución: 25/06/2024



### Identificador: CASO 7
Nombre: Funcionalidad Publicar Viaje con cantidad de pasajeros excesiva.
Propósito: Verificar que no se permita ingresar una cantidad de pasajeros excesiva.
Precondiciones:  El usuario debe estar en la sección de publicación de viajes.
Pasos a ejecutar:
Ir a la página de publicación de viajes.
Completar los campos de destino, origen, hora de salida, y costo con datos válidos.
Introducir una cantidad de pasajeros excesiva (por ejemplo, "10000").
Hacer clic en el botón "Publicar viaje".
Resultado esperado: Debe mostrar un mensaje de error indicando que la cantidad de pasajeros es excesiva.
Estado: Falló.
Resultado obtenido: El sistema permite ingresar una cantidad de pasajeros excesiva y muestra el viaje publicado con ese valor.
Tester: Juan, Joaquin y Mauro.
Fecha de ejecución: 21/06/2024.

## Resultados de las pruebas:

Caso 1: Ha fallado el caso en el que se ingresa un origen y destino como solo números. El sistema permite la publicación sin mostrar mensaje de error.
Caso 2: La funcionalidad de publicación de viaje con datos válidos ha funcionado correctamente en todos los casos probados.
Caso 3: Los botones "Buscar Viaje" y "Mi Perfil" no realizan ninguna acción al ser clickeados.
Caso 4: La funcionalidad de validación de campos obligatorios ha funcionado correctamente en todos los casos probados.
Caso 5: La validación para el campo de precio negativo ha funcionado correctamente, mostrando el mensaje de error correspondiente.
Caso 6: El sistema permite ingresar una cantidad de pasajeros decimal y muestra el viaje publicado con el valor decimal.
Caso 7: El sistema permite ingresar una cantidad de pasajeros excesiva y muestra el viaje publicado con ese valor.

## Sesiones de testing exploratorio:

### Test exploratorio 1:
Fecha: 21/06/2024.
Tester: Juan, Joaquin y Mauro.
Misión: Verificar la interfaz de usuario en diferentes tamaños de pantalla.
Duración: Corta (15 min).
Notas principales: La interfaz se adapta correctamente en tamaños de pantalla grandes.

### Test exploratorio 2:
Fecha: 21/06/2024.
Tester: Juan, Joaquin y Mauro.
Misión: Verificar el comportamiento de los campos de entrada.
Duración: Corta (15 min).
Notas principales: Los campos de entrada permiten caracteres especiales en los campos de origen y destino, lo cual no debería ser permitido.

## Informe de calidad del sistema:

### Porcentajes Globales:
Porcentaje de Tests Fallidos: 57%
Porcentaje de Tests Exitosos: 43%

### Ejecución de Casos de Prueba:
Casos de Prueba Ejecutados: 100%
Casos de Prueba No Ejecutados: 0%

### Observaciones Adicionales:
Se recomienda implementar validaciones más estrictas en los campos de origen y destino.
Se debe corregir la funcionalidad de los botones "Buscar Viaje" y "Mi Perfil".
Se recomienda corregir la lógica de validación para no incluir cantidades de pasajeros decimales y mostrar un mensaje de error cuando sea necesario.
Se recomienda corregir la lógica de validación para rechazar cantidades de pasajeros excesivas y mostrar un mensaje de error correspondiente.
