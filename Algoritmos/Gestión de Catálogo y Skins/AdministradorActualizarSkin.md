### Lógica

* Solo el administrador puede actualizar skins. Necesito el ID del skin a actualizar y los nuevos datos (precio, tipo, etc.). Se debe validar los nuevos datos y actualizar el registro del skin en la base de datos.

### Algoritmo

1. Verificar que el usuario actual tenga rol de administrador. Si no, ir a paso 8.
2. Solicitar el ID del skin a actualizar.
3. Buscar el skin en la base de datos por su ID. Si no existe, ir a paso 8.
4. Solicitar los nuevos datos del skin (ej. nuevo precio, nuevo nombre).
5. Validar que los nuevos datos sean correctos (ej. precio > 0). Si no, ir a paso 8.
6. Actualizar el registro del skin en la base de datos con los nuevos datos.
7. Mostrar un mensaje de "Skin actualizado exitosamente".
8. Mostrar un mensaje de "Error al actualizar skin: [motivo] / Permiso denegado".

### Pseudocódigo

```
Algoritmo AdministradorActualizarSkin
    Definir rolUsuarioActual Como Caracter
    Definir idSkinActualizar Como Entero
    Definir skinExiste Como Logico
    Definir opcionActualizar Como Entero
    Definir nuevoPrecio Como Real
    Definir nuevoNombre, nuevoTipo, nuevaImg Como Caracter

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "admin" Entonces
        Escribir "Error: Permiso denegado. Solo los administradores pueden actualizar skins."
        Retornar
    FinSi

    Escribir "Ingrese el ID del skin a actualizar:"
    Leer idSkinActualizar

    Si idSkinActualizar ntonces
        skinExiste <- Verdadero
    SiNo
        skinExiste <- Falso
    FinSi

    Si No skinExiste Entonces
        Escribir "Error: Skin con ID ", idSkinActualizar, " no encontrado."
        Retornar
    FinSi

    Escribir "¿Que desea actualizar para el skin ID ", idSkinActualizar, "?"
    Escribir "1. Precio"
    Escribir "2. Nombre"
    Escribir "3. Tipo"
    Escribir "4. Imágen"
    Escribir "Ingrese su opcion:"
    Leer opcionActualizar

    Segun opcionActualizar Hacer
        1:
            Escribir "Ingrese el nuevo precio:"
            Leer nuevoPrecio
            Si nuevoPrecio > 0 Entonces
                Escribir "Precio del skin ID ", idSkinActualizar, " actualizado a $", nuevoPrecio, "."
            SiNo
                Escribir "Error: El precio debe ser mayor a cero."
            FinSi
        2:
            Escribir "Ingrese el nuevo nombre:"
            Leer nuevoNombre
            Si Longitud(nuevoNombre) > 0 Then
                Escribir "Nombre del skin ID ", idSkinActualizar, " actualizado a: ", nuevoNombre, "."
            SiNo
                Escribir "Error: el nombre no puede estar vacío."
            FinSi
        3:
            Escribir "Ingrese el nuevo tipo:"
            Leer nuevoTipo
            Si Longitud(nuevoTipo) > 0 Then
                Escribir "Tipo del skin ID ", idSkinActualizar, " actualizado a: ", nuevoTipo, "."
            SiNo
                Escribir "Error: El tipo no puede estar vacía."
            FinSi
        4:
            Escribir "Ingrese la nueva imagen:"
            Leer nuevaImg
            Si Longitud(nuevaImg) > 0 Then
                Escribir "Imagen del skin ID ", idSkinActualizar, " actualizada a: ", nuevaImg, "."
            SiNo
                Escribir "Error: La imagen no puede estar vacía."
            FinSi
        De Otro Modo:
            Escribir "Opcion invalida."
    FinSegun

FinAlgoritmo
```