### Lógica

* Solo el administrador puede eliminar usuarios con el ID del usuario a eliminar. Se debe confirmar la acción de eliminación. Luego, se elimina el registro del usuario en la base de datos. Informar el resultado.

### Algoritmo

1. Verificar que el usuario actual tenga rol de administrador. Si no, ir a paso 6.
2. Solicitar el ID del usuario a eliminar.
3. Leer el ID del usuario ingresado.
4. Buscar el usuario en la base de datos. Si no existe, ir a paso 6.
5. Eliminar el registro del usuario de la base de datos.
6. Mostrar un mensaje de "Usuario eliminado/desactivado exitosamente" o "Error: No se pudo eliminar el usuario / Permiso denegado".

### Pseudocódigo

```
Algoritmo EliminarUsuario
    Definir idUsuarioEliminar Como Entero
    Definir rolUsuarioActual Como Caracter
    Definir usuarioExiste Como Logico

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "admin" Entonces
        Escribir "Error: Permiso denegado. Solo los administradores pueden eliminar usuarios."
        Retornar
    FinSi

    Escribir "Ingrese el ID del usuario a eliminar:"
    Leer idUsuarioEliminar

    Si idUsuarioEliminar Entonces
        usuarioExiste <- Verdadero
    SiNo
        usuarioExiste <- Falso
    FinSi

    Si usuarioExiste Entonces
        Escribir "Usuario con ID ", idUsuarioEliminar, " ha sido eliminado/desactivado exitosamente."
    SiNo
        Escribir "Error: Usuario con ID ", idUsuarioEliminar, " no encontrado."
    FinSi

FinAlgoritmo
```