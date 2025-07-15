### Lógica

* Solo accesible para administradores. Muestra un menú de opciones para que el administrador gestione clientes, skins, revise transacciones y vea reportes.

### Algoritmo

1. Verificar que el usuario actual tenga rol de administrador. Si no, ir a paso 5.
2. Mostrar un mensaje de "Bienvenido al Panel de Administrador".
3. Mostrar un menú de opciones para el administrador:
    * Gestión de Clientes.
    * Gestión de Skins (listar, actualizar, eliminar).
    * Ver Transacciones.
    * Ver Reportes y Estadísticas.
    * Cerrar Sesión.
4. Esperar la selección del administrador y redirigir a la funcionalidad correspondiente.
5. Mostrar un mensaje de "Acceso denegado: Solo administradores".

### Pseudocódigo

```
Algoritmo MostrarPanelAdmin
    Definir rolUsuarioActual Como Caracter
    Definir opcionAdmin Como Entero

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "admin" Entonces
        Escribir "Error: Permiso denegado. Solo los administradores pueden acceder a este panel."
        Retornar
    FinSi

    Repetir
        Escribir "------------------------------------"
        Escribir "Seleccione una opcion:"
        Escribir "1. Gestionar Clientes"
        Escribir "2. Gestionar Skins"
        Escribir "3. Ver Transacciones"
        Escribir "4. Ver Reportes y Estadisticas"
        Escribir "5. Salir del Panel"
        Escribir "------------------------------------"
        Leer opcionAdmin

        Segun opcionAdmin Hacer
            1:
                Escribir "Redirigiendo a Gestion de Clientes..."
            2:
                Escribir "Redirigiendo a Gestion de Skins..."
            3:
                Escribir "Redirigiendo a Ver Transacciones..."
            4:
                Escribir "Redirigiendo a Reportes y Estadisticas..."
            5:
                Escribir "Saliendo del Panel de Administrador. ¡Hasta luego!"
            De Otro Modo:
                Escribir "Opcion invalida. Por favor, intente de nuevo."
        FinSegun
        Esperar 1 Segundos
    Mientras opcionAdmin <> 5

FinAlgoritmo
```