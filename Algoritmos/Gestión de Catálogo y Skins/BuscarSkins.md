### Lógica

* Necesito un término de búsqueda (ej. parte del nombre del skin). Se deben buscar los skins que contengan el término en su nombre desde la base de datos y mostrar los resultados.

### Algoritmo

1. Solicitar el término de búsqueda.
2. Leer el término de búsqueda ingresado.
3. Buscar en la base de datos los skins cuyo nombre contengan el término de búsqueda.
4. Si se encuentran resultados:
    * Para cada skin encontrado:
        * Mostrar su nombre, tipo, precio e imagen.
5. Si no se encuentran resultados, mostrar un mensaje de "No se encontraron skins que coincidan con la búsqueda."

### Pseudocódigo

```
Algoritmo BuscarSkins
    Definir terminoBusqueda Como Caracter
    Definir skinsEncontrados Como Logico
    Definir i Como Entero
    Definir nombresSkins, tipoSkin, imagenSkin Como Caracter
    Definir preciosSkins Como Real
    Definir coincidencias Como Logico

    Escribir "Ingrese el termino de busqueda (ej. AK-47, Dragon):"
    Leer terminoBusqueda

    skinsEncontrados <- Falso
    Para i <- 1 Hasta i.length Hacer
        coincidencias[i] <- Falso
        Si Encontrar(Mayusculas(nombresSkins[i]), Mayusculas(terminoBusqueda)) > 0 Entonces
            coincidencias[i] <- Verdadero
            skinsEncontrados <- Verdadero
        FinSi
    FinPara

    Si skinsEncontrados Entonces
        Escribir "Resultados de la busqueda para '", terminoBusqueda, "':"
        Para i <- 1 Hasta i.length Hacer
            Si coincidencias[i] Entonces
                Escribir "------------------------------------"
                Escribir "Skin: ", nombresSkins[i]
                Escribir "Skin: ", tipoSkin[i]
                Escribir "Precio: $", preciosSkins[i]
                Escribir "Skin: ", imagenSkin[i]
                Escribir "------------------------------------"
            FinSi
        FinPara
    SiNo
        Escribir "No se encontraron skins que coincidan con '", terminoBusqueda, "'."
    FinSi

FinAlgoritmo
```