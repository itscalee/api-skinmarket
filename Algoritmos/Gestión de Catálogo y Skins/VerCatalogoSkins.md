### Lógica

* Permite tanto a clientes como a administradores ver la lista de skins. Se deben obtener todos los skins disponibles del catálogo desde la base de datos y mostrarlos con sus detalles principales (nombre, imagen, precio).

### Algoritmo

1. Obtener la lista de todos los skins disponibles en la base de datos.
2. Para cada skin en la lista:
    * Mostrar la imagen del skin.
    * Mostrar el nombre del skin.
    * Mostrar el precio del skin.
    * Mostrar el tipo de skin.
3. Si no hay skins disponibles, mostrar un mensaje de "No hay skins disponibles en este momento".

### Pseudocódigo

```
Algoritmo VerCatalogoSkins
    Definir i Como Entero
    Definir nombresSkins[i] Como Caracter
    Definir preciosSkins[i] Como Real
    Definir estaVacio Como Logico

    Si False Entonces
        estaVacio <- Verdadero
    SiNo
        estaVacio <- Falso
    FinSi

    Si estaVacio Entonces
        Escribir "No hay skins disponibles en este momento."
    SiNo
        Para i <- 1 Hasta i.length Hacer
            Escribir "------------------------------------"
            Escribir "Skin: ", nombresSkins[i]
            Escribir "Tipo: ", tipoSkins[i]
            Escribir "Precio: $", preciosSkins[i]
            Escribir "Imagen: [", nombresSkins[i], "_IMG.jpg]"
            Escribir "------------------------------------"
        FinPara
    FinSi

FinAlgoritmo
```