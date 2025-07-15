### Lógica

* Solo el administrador puede gestionar el stock. Necesito el ID del skin y la cantidad a añadir o restar. Se debe actualizar la cantidad disponible de un skin en el inventario del administrador.

### Algoritmo

1. Verificar que el usuario actual tenga rol de administrador.
2. Obtener el ID del skin a gestionar.
3. Obtener la cantidad de cambio (positivo para añadir, negativo para restar).
4. Buscar el skin en la base de datos para obtener su stock actual. Si no existe, indicar error.
5. Calcular el nuevo stock: stockActual + cantidadCambio.
6. Si el nuevo stock es menor que cero, indicar un error (no se puede tener stock negativo) y abortar.
7. Actualizar la cantidad en stock del skin en la base de datos.
8. Mostrar un mensaje de "Stock de skin actualizado" o "Error al gestionar stock: [motivo]".

### Pseudocódigo

```
Algoritmo GestionarStockAdmin
    Definir rolUsuarioActual Como Caracter
    Definir idSkinGestionar, cantidadCambio Como Entero
    Definir skinExiste Como Logico
    Definir stockActualSkin, nuevoStockSkin Como Entero

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "admin" Entonces
        Escribir "Error: Permiso denegado. Solo los administradores pueden gestionar el stock."
        Retornar
    FinSi

    Escribir "Ingrese el ID del skin a gestionar"
    Leer idSkinGestionar

    Si idSkinGestionarEntonces
        skinExiste <- Verdadero
        stockActualSkin <- 5 // solo simulación
    SiNo
        skinExiste <- Falso
        stockActualSkin <- 0
    FinSi

    Si No skinExiste Entonces
        Escribir "Error: Skin con ID ", idSkinGestionar, " no encontrado en el inventario del administrador."
        Retornar
    FinSi

    Escribir "El stock actual del skin ID ", idSkinGestionar, " es: ", stockActualSkin, "."
    Escribir "Ingrese la cantidad a añadir (positivo) o restar (negativo):"
    Leer cantidadCambio

    nuevoStockSkin <- stockActualSkin + cantidadCambio

    Si nuevoStockSkin >= 0 Entonces
        stockActualSkin <- nuevoStockSkin
        Escribir "Stock del skin ID ", idSkinGestionar, " actualizado a: ", stockActualSkin, "."
    SiNo
        Escribir "Error: El stock no puede ser negativo (intento de reducir mas de lo disponible). Stock actual: ", stockActualSkin, "."
    FinSi

FinAlgoritmo
```