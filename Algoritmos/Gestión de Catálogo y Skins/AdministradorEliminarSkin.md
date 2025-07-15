### Lógica

* Solo el administrador puede eliminar skins. Necesito el ID del skin a eliminar. Se debe confirmar la eliminación y luego eliminar el registro del skin de la base de datos y del inventario del administrador.

### Algoritmo

1. Verificar que el usuario actual tenga rol de administrador. Si no, ir a paso 7.
2. Solicitar el ID del skin a eliminar.
3. Leer el ID del skin ingresado.
4. Buscar el skin en la base de datos. Si no existe, ir a paso 7.
5. Confirmar la eliminación con el administrador.
6. Eliminar el registro del skin de la base de datos y actualizar el inventario del administrador.
7. Mostrar un mensaje de "Skin eliminado exitosamente" o "Error al eliminar skin: [motivo] / Permiso denegado".

### Pseudocódigo

```
Algoritmo AdministradorEliminarSkin
    Definir rolUsuarioActual Como Caracter
    Definir idSkinEliminar Como Entero
    Definir skinExiste Como Logico
    Definir confirmacion Como Caracter

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "admin" Entonces
        Escribir "Error: Permiso denegado. Solo los administradores pueden eliminar skins."
        Retornar
    FinSi

    Escribir "Ingrese el ID del skin a eliminar:"
    Leer idSkinEliminar

    Si idSkinEliminar Entonces
        skinExiste <- Verdadero
    SiNo
        skinExiste <- Falso
    FinSi

    Si No skinExiste Entonces
        Escribir "Error: Skin con ID ", idSkinEliminar, " no encontrado."
        Retornar
    FinSi

    Escribir "¿Esta seguro que desea eliminar el skin ID ", idSkinEliminar, "? (S/N):"
    Leer confirmacion

    Si Mayusculas(confirmacion) = "S" Entonces
        Escribir "Skin con ID ", idSkinEliminar, " eliminado exitosamente del catalogo y del inventario."
    SiNo
        Escribir "Eliminacion cancelada."
    FinSi

FinAlgoritmo
```