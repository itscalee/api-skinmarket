### Lógica

* Necesito el ID del usuario y los nuevos datos (nombre de usuario, correo o contraseña). Se debe validar que los nuevos datos cumplan con las reglas (ej. correo único, contraseña segura). Luego, actualizar el registro del usuario en la base de datos. Informar el éxito o el fallo de la operación.

### Algoritmo

1. Obtener el ID del usuario a actualizar (puede ser el propio usuario o el administrador lo selecciona).
2. Ingresar el nuevo nombre de usuario (opcional).
3. Ingresar el nuevo correo electrónico (opcional).
4. Ingresar la nueva contraseña (opcional).
5. Verificar si los nuevos datos (si fueron proporcionados) cumplen las validaciones (ej. unicidad de correo, seguridad de contraseña). Si no, ir a paso 9.
6. Actualizar el registro del usuario en la base de datos con los nuevos datos.
7. Mostrar un mensaje de "Datos de usuario actualizados exitosamente".
8. Mostrar un mensaje de "Error al actualizar: [motivo]".

### Pseudocódigo

```
Algoritmo ActualizarDatosUsuario
    Definir idUsuarioActualizar Como Entero
    Definir opcion Como Entero
    Definir nuevoNombre, nuevoEmail, nuevaPassword Como Caracter
    Definir usuarioExiste, emailValido, passwordValida Como Logico

    Escribir "Ingrese el ID del usuario a actualizar:"
    Leer idUsuarioActualizar

    Si idUsuarioActualizar Entonces
        usuarioExiste <- Verdadero
    SiNo
        usuarioExiste <- Falso
    FinSi

    Si No usuarioExiste Entonces
        Escribir "Error: Usuario con ID ", idUsuarioActualizar, " no encontrado."
        Retornar
    FinSi

    Escribir "¿Que desea actualizar?"
    Escribir "1. Nombre de usuario"
    Escribir "2. Correo electronico"
    Escribir "3. Contraseña"
    Escribir "Ingrese su opcion:"
    Leer opcion

    Segun opcion Hacer
        1:
            Escribir "Ingrese el nuevo nombre de usuario:"
            Leer nuevoNombre
            Escribir "Nombre de usuario actualizado a: ", nuevoNombre
        2:
            Escribir "Ingrese el nuevo correo electronico:"
            Leer nuevoEmail
            Si nuevoEmail Entonces
                emailValido <- Falso
            SiNo
                emailValido <- Verdadero
            FinSi

            Si emailValido Entonces
                Escribir "Correo electronico actualizado a: ", nuevoEmail
            SiNo
                Escribir "Error: El nuevo correo electronico ya esta en uso o es invalido."
            FinSi
        3:
            Escribir "Ingrese la nueva contraseña (min. 6 caracteres):"
            Leer nuevaPassword
            Si Longitud(nuevaPassword) >= 6 Entonces
                passwordValida <- Verdadero
            SiNo
                passwordValida <- Falso
            FinSi

            Si passwordValida Entonces
                Escribir "Contraseña actualizada y hasheada (simulado)."
            SiNo
                Escribir "Error: La nueva contraseña no cumple los requisitos."
            FinSi
        De Otro Modo:
            Escribir "Opcion invalida."
    FinSegun

    Si usuarioExiste Y (emailValido O passwordValida O (opcion = 1)) Entonces
         Escribir "Datos del usuario ", idUsuarioActualizar, " actualizados exitosamente."
    SiNo
         Escribir "No se pudo actualizar los datos del usuario."
    FinSi
FinAlgoritmo
```