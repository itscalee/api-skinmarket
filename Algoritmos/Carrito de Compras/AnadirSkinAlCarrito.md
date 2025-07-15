### Lógica

* Necesito el ID del skin y cantidad que el cliente desea añadir y el ID del cliente actual. Se debe verificar que el skin exista y tenga stock disponible. Luego, añadir el skin al carrito del cliente.

### Algoritmo

1. Verificar que el usuario actual tenga rol de cliente. Si no, ir a paso 8.
2. Obtener el ID del skin que el cliente desea añadir.
3. Obtener la cantidad de ese skin que el cliente desea añadir (por defecto 1, o solicitar si se permite más).
4. Obtener el ID del cliente actual.
5. Consultar el Módulo de Inventario para verificar si el skin existe y si la cantidad deseada está disponible en el stock del administrador. Si no está disponible o el skin no existe, ir a paso 8.
6. Añadir el skin con la cantidad especificada al carrito de compras del cliente. Si el skin ya está en el carrito, actualizar su cantidad.
7. Mostrar un mensaje de "Skin(s) añadido(s) al carrito exitosamente".
8. Mostrar un mensaje de "Error al añadir skin(s) al carrito: [motivo: stock insuficiente, skin no encontrado] / Permiso denegado".

### Pseudocódigo

```
Algoritmo AnadirSkinAlCarrito
    Definir rolUsuarioActual Como Caracter
    Definir idSkinAnadir, cantidadAnadir, idClienteActual Como Entero
    Definir skinEncontrado, stockSuficiente Como Logico
    Definir stockDisponibleBD Como Entero

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "cliente" Entonces
        Escribir "Error: Permiso denegado. Solo los clientes pueden añadir skins al carrito."
        Retornar
    FinSi

    Escribir "Ingrese su ID de cliente"
    Leer idClienteActual
    Escribir "Ingrese el ID del skin que desea añadir al carrito:"
    Leer idSkinAnadir
    Escribir "Ingrese la cantidad que desea añadir:"
    Leer cantidadAnadir

    Si idSkinAnadir Entonces
        skinEncontrado <- Verdadero
        stockDisponibleBD > 0
    SiNo
        skinEncontrado <- Falso
        stockDisponibleBD <- 0
    FinSi

    Si No skinEncontrado Entonces
        Escribir "Error: Skin con ID ", idSkinAnadir, " no encontrado en el catalogo."
        Retornar
    FinSi

    Si cantidadAnadir <= 0 Entonces
        Escribir "Error: La cantidad a añadir debe ser mayor que cero."
        Retornar
    FinSi

    Si cantidadAnadir <= stockDisponibleBD Entonces
        stockSuficiente <- Verdadero
    SiNo
        stockSuficiente <- Falso
    FinSi

    Si stockSuficiente Entonces
        Escribir "Skin con ID ", idSkinAnadir, " (Cantidad: ", cantidadAnadir, ") añadido al carrito del cliente ID ", idClienteActual, " exitosamente."
    SiNo
        Escribir "Error: Stock insuficiente para 'Skin ID ", idSkinAnadir, "'. Disponibles: ", stockDisponibleBD, "."
    FinSi

FinAlgoritmo
```