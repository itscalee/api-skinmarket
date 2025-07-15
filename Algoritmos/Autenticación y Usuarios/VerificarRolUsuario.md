### Lógica

* Necesito el rol del usuario actual y el rol requerido para acceder a una funcionalidad. Se debe comparar el rol del usuario con el rol requerido. Si coinciden o el rol del usuario tiene permisos superiores, permitir el acceso; de lo contrario, denegarlo.

### Algoritmo

1. Obtener el rol del usuario que intenta acceder.
2. Definir el rol requerido para la funcionalidad específica (ej. "Administrador" para gestionar skins).
3. Si el rol del usuario es igual al rol requerido:
    * Permitir el acceso.
4. Si el rol del usuario es "Administrador" y el rol requerido es "Cliente":
    * Permitir el acceso (un admin puede hacer todo lo de un cliente).
5. De lo contrario, denegar el acceso.
6. Mostrar mensaje de permiso si el acceso es permitido, o mensaje de denegación si es denegado.

### Pseudocódigo

```
Algoritmo VerificarRolUsuario
    Definir rolUsuarioActual, rolRequerido Como Caracter
    Definir accesoPermitido Como Logico

    Escribir "Ingrese el rol del usuario actual (Cliente/Administrador):"
    Leer rolUsuarioActual
    Escribir "Ingrese el rol requerido para la funcionalidad (Cliente/Administrador):"
    Leer rolRequerido

    accesoPermitido <- Falso

    Si rolUsuarioActual = rolRequerido Entonces
        accesoPermitido <- Verdadero
    SiNo Si rolUsuarioActual = "Administrador" Y rolRequerido = "Cliente" Entonces
        accesoPermitido <- Verdadero
    FinSi

    Si accesoPermitido Entonces
        Escribir "Acceso concedido para el rol '", rolUsuarioActual, "' a la funcionalidad que requiere el rol '", rolRequerido, "'."
    SiNo
        Escribir "Acceso denegado. El rol '", rolUsuarioActual, "' no tiene permisos para esta funcionalidad que requiere el rol '", rolRequerido, "'."
    FinSi

FinAlgoritmo
```