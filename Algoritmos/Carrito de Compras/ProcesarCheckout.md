### Lógica

* Necesito el ID del cliente y los ítems en su carrito. Por cada ítem en el carrito, se debe realizar una validación final de stock para asegurar que todos los skins aún estén disponibles en la cantidad deseada. Si todo el stock es suficiente, se simula la transacción: se reduce el stock de los skins del administrador, se añaden los ítems al inventario simulado del cliente, y se registra la compra. Si hay algún problema de stock, se aborta la compra y se informa al cliente.

### Algoritmo

1. Verificar que el usuario actual tenga rol de cliente. Si no, ir a paso 11.
2. Obtener el ID del cliente actual.
3. Obtener la lista de ítems en el carrito del cliente (ID de skin, cantidad).
4. Si el carrito está vacío, mostrar mensaje "Su carrito está vacío" y terminar.
5. Para cada skin en el carrito:
    * Consultar el Módulo de Inventario para verificar la disponibilidad de stock del skin del administrador para la cantidad solicitada.
    * Si algún skin no tiene stock suficiente:
        * Mostrar un error indicando qué skin y cantidad es el problema.
        * Abortar el proceso de compra, vaciar el carrito (o marcar los ítems problemáticos) y terminar. Ir a paso 11.
    * Si el stock es suficiente, añadir el (cantidad * precio) al totalCompra.
6. Mostrar el totalCompra al cliente para confirmación.
7. Para cada skin en el carrito:
    * Solicitar al Módulo de Inventario que reduzca la cantidad comprada del stock del skin en el inventario del administrador.
    * Registrar el skin y la cantidad en el inventario simulado del cliente.
8. Registrar la transacción de compra (fecha, cliente, lista de ítems, total).
9. Vaciar el carrito del cliente.
10. Mostrar un mensaje de "Compra simulada exitosa. ¡Gracias por su compra!"
11. Mostrar un mensaje de "Error al procesar compra: [motivo] / Permiso denegado".

### Pseudocódigo

```
Algoritmo ProcesarCheckout
    Definir cantidadSolicitada Como Entero
    Definir stockActual Como Entero
    Definir precioUnitario Como Real
    Definir nombreProducto Como Caracter
    Definir totalCompra Como Real

    Si cantidadSolicitada > stockActual Entonces
        Escribir "Error: No hay suficiente stock para ", nombreProducto, "."
    SiNo
        totalCompra <- cantidadSolicitada * precioUnitario
        stockActual <- stockActual - cantidadSolicitada
        Escribir "Compra exitosa de ", cantidadSolicitada, " unidades de ", nombreProducto, "."
        Escribir "Total a pagar: $", totalCompra
        Escribir "Nuevo stock de ", nombreProducto, ": ", stockActual
    FinSi

FinAlgoritmo
```