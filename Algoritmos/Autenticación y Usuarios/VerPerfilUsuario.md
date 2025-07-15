### Lógica

* Necesito el ID del usuario a consultar (logueado como administrador). Se debe buscar la información del usuario en la base de datos (nombre de usuario, correo electrónico). Finalmente, mostrar esta información.

### Algoritmo

1. Obtener el ID del usuario del cual se desea ver el perfil (puede ser el propio usuario logueado o un ID proporcionado por admin).
2. Buscar en la base de datos el registro del usuario con el ID obtenido.
3. Si el usuario existe:
    * Mostrar el nombre de usuario.
    * Mostrar el correo electrónico
    * Mostrar el rol (cliente o administrador).
4. Si el usuario no existe, mostrar un mensaje de "Usuario no encontrado".

### Pseudocódigo

```
Algoritmo VerPerfilUsuario
    Definir idUsuarioConsultar Como Entero
    Definir nombreUsuarioBD, emailBD, rolBD Como Caracter
    Definir usuarioEncontrado Como Logico

    Escribir "Ingrese el ID del usuario a consultar:"
    Leer idUsuarioConsultar

    Si idUsuarioConsultar Entonces
        nombreUsuarioBD <- "ClienteEjemplo"
        emailBD <- "cliente@example.com"
        rolBD <- "Cliente"
        usuarioEncontrado <- Verdadero
    SiNo
        usuarioEncontrado <- Falso
    FinSi

    Si usuarioEncontrado Entonces
        Escribir "----------------------------"
        Escribir "ID de Usuario: ", idUsuarioConsultar
        Escribir "Nombre de Usuario: ", nombreUsuarioBD
        Escribir "Correo Electronico: ", emailBD
        Escribir "Rol: ", rolBD
        Escribir "----------------------------"
    SiNo
        Escribir "Error: Usuario con ID ", idUsuarioConsultar, " no encontrado."
    FinSi

FinAlgoritmo
```