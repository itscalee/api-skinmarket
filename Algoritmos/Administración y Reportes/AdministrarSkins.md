### Lógica

* Solo el administrador puede gestionar skins. Permite listar nuevos skins, ver el catálogo, actualizar y eliminar skins existentes.

### Algoritmo

1. Verificar que el usuario actual tenga rol de administrador. Si no, ir a paso 6.
2. Mostrar un menú de opciones para la gestión de skins:
    * Crear nueva skin.
    * Ver catálogo de skins.
    * Actualizar skin existente.
    * Eliminar skin.
3. Esperar la selección del administrador.
4. Según la opción seleccionada:
    * Si "Crear": Llamar a AdministradorCrearSkin.
    * Si "Ver": Llamar a VerCatalogoSkins.
    * Si "Actualizar": Solicitar ID de skin y nuevos datos, llamar a AdministradorActualizarSkin.
    * Si "Eliminar": Solicitar ID de skin y llamar a AdministradorEliminarSkin.
5. Mostrar el resultado de la operación.
6. Mostrar un mensaje de "Acceso denegado: Solo administradores".

### Pseudocódigo

```
Algoritmo AdministrarSkins
    Definir rolUsuarioActual Como Caracter
    Definir opcionGestionSkin Como Entero
    Definir idSkinObjetivo Como Entero

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "admin" Entonces
        Escribir "Error: Permiso denegado. Solo los administradores pueden gestionar skins."
        Retornar
    FinSi

    Repetir
        Escribir "------------------------------------"
        Escribir "Opciones de Gestion de Skins:"
        Escribir "1. Crear un nueva skin"
        Escribir "2. Ver catalogo completo de skins"
        Escribir "3. Actualizar un skin existente"
        Escribir "4. Eliminar un skin"
        Escribir "5. Volver al Panel de Administrador"
        Escribir "------------------------------------"
        Leer opcionGestionSkin

        Segun opcionGestionSkin Hacer
            1:
                Escribir "Simulando creación de nuevo skin..."
                // Llamar a AdministradorListarSkin
            2:
                Escribir "Simulando visualizacion de catalogo..."
                // Llamar a VerCatalogoSkins
            3:
                Escribir "Ingrese el ID del skin a actualizar:"
                Leer idSkinObjetivo
                Escribir "Simulando actualizacion de skin ID ", idSkinObjetivo, "..."
                // Llamar a AdministradorActualizarSkin, pasando el ID
            4:
                Escribir "Ingrese el ID del skin a eliminar:"
                Leer idSkinObjetivo
                Escribir "Simulando eliminacion de skin ID ", idSkinObjetivo, "..."
                // Llamar a AdministradorEliminarSkin, pasando el ID
            5:
                Escribir "Volviendo al Panel de Administrador."
            De Otro Modo:
                Escribir "Opcion invalida."
        FinSegun
    Mientras opcionGestionSkin <> 5

FinAlgoritmo
```