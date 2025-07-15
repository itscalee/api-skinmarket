### Lógica

* Necesito el ID del skin en el carrito, la nueva cantidad deseada y el ID del cliente. Se debe verificar que el skin esté en el carrito y que la nueva cantidad sea válida (mayor a cero) y no exceda el stock disponible del skin del administrador. Si todo es válido, se actualiza la cantidad en el carrito.

### Algoritmo

1. Verificar que el usuario actual tenga rol de cliente. Si no, ir a paso 9.
2. Obtener el ID del cliente actual.
3. Obtener el ID del skin en el carrito cuya cantidad se desea actualizar.
4. Obtener la nueva cantidad deseada para ese skin.
5. Verificar si el skin está en el carrito del cliente. Si no, ir a paso 9.
6. Consultar el Módulo de Inventario para obtener el stock disponible del skin del administrador.
7. Verificar que la nueva cantidad sea válida (mayor a cero) y no exceda el stock disponible obtenido. Si no es válida, ir a paso 9.
8. Actualizar la cantidad del skin en el carrito del cliente.
9. Mostrar un mensaje de "Cantidad actualizada exitosamente" o "Error al actualizar cantidad: [motivo: stock insuficiente, cantidad inválida] / Permiso denegado".

### Pseudocódigo

```
Algoritmo ActualizarCantidadCarrito
    Definir rolUsuarioActual Como Caracter
    Definir idClienteActual, idSkinCarrito, nuevaCantidad Como Entero
    Definir skinEnCarrito, stockSuficiente Como Logico
    Definir stockDisponibleBD Como Entero

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "cliente" Entonces
        Escribir "Error: Permiso denegado. Solo los clientes pueden actualizar su carrito."
        Retornar
    FinSi

    Escribir "Ingrese su ID de cliente"
    Leer idClienteActual
    Escribir "Ingrese el ID del skin en su carrito que desea actualizar"
    Leer idSkinCarrito
    Escribir "Ingrese la nueva cantidad deseada (0 para eliminar):"
    Leer nuevaCantidad

    Si idSkinCarrito Entonces
        skinEnCarrito <- Verdadero
    SiNo
        skinEnCarrito <- Falso
    FinSi

    Si No skinEnCarrito Entonces
        Escribir "Error: Skin con ID ", idSkinCarrito, " no encontrado en su carrito."
        Retornar
    FinSi

    Si nuevaCantidad < 0 Entonces
        Escribir "Error: La cantidad no puede ser negativa."
        Retornar
    FinSi

    Si nuevaCantidad = 0 Entonces
        Escribir "Skin con ID ", idSkinCarrito, " eliminado del carrito."
        Retornar
    FinSi


    Si idSkinCarrito Entonces
        stockDisponibleBD <- 10 (como simulación de stock)
    FinSi

    Si nuevaCantidad <= stockDisponibleBD Entonces
        stockSuficiente <- Verdadero
    SiNo
        stockSuficiente <- Falso
    FinSi

    Si stockSuficiente Entonces
        Escribir "Cantidad del skin ID ", idSkinCarrito, " en su carrito actualizada a ", nuevaCantidad, "."
    SiNo
        Escribir "Error: La nueva cantidad (", nuevaCantidad, ") excede el stock disponible (", stockDisponibleBD, "). Intente con una cantidad menor."
    FinSi

FinAlgoritmo
```