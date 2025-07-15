### Lógica

* Necesito uno o más criterios de filtro (ej. tipo, rango de precio). Se deben obtener los skins de la base de datos que cumplan con todos los criterios de filtro y mostrar los resultados.

### Algoritmo

1. Solicitar los criterios de filtro al usuario (tipo, precio mínimo, precio máximo).
2. Leer los criterios de filtro ingresados.
3. uscar en la base de datos los skins que cumplan con todos los criterios de filtro proporcionados.
4. Si se encuentran resultados:
    * Para cada skin encontrado:
        * Mostrar su nombre, precio e imagen.
5. Si no se encuentran resultados, mostrar un mensaje de "No se encontraron skins que coincidan con los filtros aplicados."

### Pseudocódigo

```
Algoritmo FiltrarSkins
    Definir filtroTipo Como Caracter
    Definir filtroPrecioMin, filtroPrecioMax Como Real
    Definir skinsFiltrados Como Logico
    Definir i Como Entero

    Definir skins[i] Como Registro
        nombre: Caracter
        precio: Real
        tipo: Caracter
        imagen: Caracter
    FinRegistro

    Escribir "Ingrese tipo para filtrar:"
    Leer filtroTipo
    Escribir "Ingrese precio minimo (0 para no filtrar):"
    Leer filtroPrecioMin
    Escribir "Ingrese precio maximo (0 para no filtrar):"
    Leer filtroPrecioMax

    skinsFiltrados <- Falso
    Escribir "Resultados del filtrado:"
    Para i <- 1 Hasta i.length Hacer
        Si (Mayusculas(skins[i].rareza) = Mayusculas(filtroTipo)) Y _
           (filtroPrecioMin = 0 O skins[i].precio >= filtroPrecioMin) Y _
           (filtroPrecioMax = 0 O skins[i].precio <= filtroPrecioMax) Entonces
            Escribir "------------------------------------"
            Escribir "Skin: ", skins[i].nombre
            Escribir "Precio: $", skins[i].precio
            Escribir "Tipo: ", skins[i].tipo
            Escribir "Imagen: ", skins[i].imagen
            Escribir "------------------------------------"
            skinsFiltrados <- Verdadero
        FinSi
    FinPara

    Si No skinsFiltrados Entonces
        Escribir "No se encontraron skins que coincidan con los filtros aplicados."
    FinSi

FinAlgoritmo
```