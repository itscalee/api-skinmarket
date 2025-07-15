### Lógica

* Solo el administrador puede gestionar clientes. Permite ver la lista de clientes, editar sus datos y eliminarlos.

### Algoritmo

1. Verificar que el usuario actual tenga rol de administrador. Si no, ir a paso 6.
2. Mostrar un menú de opciones para la gestión de clientes:
    * Ver todos los clientes.
    * Editar datos de un cliente.
    * Eliminar un cliente.
3. Esperar la selección del administrador.
4. Según la opción seleccionada:
    * Si "Ver": Obtener y mostrar la lista de todos los clientes.
    * Si "Editar": Solicitar ID de cliente y nuevos datos, llamar a ActualizarDatosUsuario.
    * Si "Eliminar": Solicitar ID de cliente y llamar a EliminarUsuario.
5. Mostrar el resultado de la operación.
6. Mostrar un mensaje de "Acceso denegado: Solo administradores".

### Pseudocódigo

```
Algoritmo AdministrarClientes
    Definir rolUsuarioActual Como Caracter
    Definir opcionGestionCliente Como Entero
    Definir idClienteObjetivo Como Entero

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "admin" Entonces
        Escribir "Error: Permiso denegado. Solo los administradores pueden gestionar clientes."
        Retornar
    FinSi

    Repetir
        Escribir "------------------------------------"
        Escribir "Opciones de Gestion de Clientes:"
        Escribir "1. Ver todos los clientes"
        Escribir "2. Editar datos de un cliente"
        Escribir "3. Eliminar/Desactivar un cliente"
        Escribir "4. Volver al Panel de Administrador"
        Escribir "------------------------------------"
        Leer opcionGestionCliente

        Segun opcionGestionCliente Hacer
            1:
                Escribir "--- Listado de Clientes ---"
                Escribir "ID: 1 | Usuario: ClienteEjemplo | Email: cliente@example.com" // Se debería listar todos los clientes
                Escribir "---------------------------"
            2:
                Escribir "Ingrese el ID del cliente a editar:"
                Leer idClienteObjetivo
                // Llamar a ActualizarDatosUsuario, pasando el ID y asumiendo rol de admin para el permiso
            3:
                Escribir "Ingrese el ID del cliente a eliminar/desactivar:"
                Leer idClienteObjetivo
                // Llamar a EliminarUsuario, pasando el ID y asumiendo rol de admin para el permiso
            4:
                Escribir "Volviendo al Panel de Administrador."
            De Otro Modo:
                Escribir "Opcion invalida."
        FinSegun
    Mientras opcionGestionCliente <> 4

FinAlgoritmo
```