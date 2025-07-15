### Lógica

* Solo el administrador puede crear skins. Necesito los detalles del skin (nombre, imágenes, precio, tipo). Se debe validar que los datos sean correctos y almacenar la información del skin en la base de datos, así como actualizar el inventario del administrador.

### Algoritmo

1. Verificar que el usuario actual tenga rol de administrador. Si no, ir a paso 10.
2. Solicitar el nombre del skin.
3. Solicitar la descripción del skin.
4. Solicitar la URL de la imagen del skin.
5. Solicitar el precio del skin.
6. Solicitar el tipo skin.
7. Solicitar el stock.
8. Validar que todos los datos sean válidos (ej. precio > 0). Si no, ir a paso 10.
9. Almacenar los detalles del skin en la base de datos y añadirlo al "inventario" del administrador.
10. Mostrar un mensaje de "Skin listado exitosamente" o "Error al listar skin: [motivo] / Permiso denegado".

### Pseudocódigo

```
Algoritmo AdministradorListarSkin
    Definir rolUsuarioActual Como Caracter
    Definir nombreSkin, descripcionSkin, urlImagenSkin, tipoSkin Como Caracter
    Definir precioSkin Como Real
    Definir stockSkin como Entero
    Definir datosValidos Como Logico

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "admin" Entonces
        Escribir "Error: Permiso denegado. Solo los administradores pueden listar skins."
        Retornar
    FinSi

    Escribir "Ingrese el nombre del skin:"
    Leer nombreSkin
    Escribir "Ingrese la descripcion del skin:"
    Leer descripcionSkin
    Escribir "Ingrese la URL de la imagen del skin:"
    Leer urlImagenSkin
    Escribir "Ingrese el precio del skin:"
    Leer precioSkin
    Escribir "Ingrese el tipo del skin:"
    Leer tipoSkin
    Escribir "Ingrese el stock del skin:"
    Leer stockSkin

    Si precioSkin > 0 Y Longitud(nombreSkin) > 0 Entonces
        datosValidos <- Verdadero
    SiNo
        datosValidos <- Falso
    FinSi

    Si datosValidos Entonces
        Escribir "Skin '", nombreSkin, "' (Precio: $", precioSkin, ") listado exitosamente."
        Escribir "Agregado al inventario del administrador."
    SiNo
        Escribir "Error: Datos del skin invalidos. Asegurese que el precio sea mayor que cero y el nombre no este vacio."
    FinSi

FinAlgoritmo
```