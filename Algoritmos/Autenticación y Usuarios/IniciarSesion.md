### Lógica

* Necesito el nombre de usuario y la contraseña. Se debe buscar al usuario por el nombre de usuario. Luego, comparar la contraseña ingresada con la contraseña almacenada. Si coinciden, iniciar una sesión para el usuario y redirigirlo. Si no, mostrar un error.

### Algoritmo

1. Solicitar el nombre de usuario.
2. Leer el nombre de usuario ingresado.
3. Solicitar la contraseña.
4. Leer la contraseña ingresada.
5. Buscar el usuario en la base de datos por el nombre de usuario. Si el usuario no existe, ir a paso 9.
6. Comparar la contraseña ingresada con la contraseña almacenada en la base de datos.
7. Si las contraseñas coinciden:
    * Obtener el rol del usuario.
    * Crear una sesión para el usuario.
    * Redirigir al usuario a la página de inicio correspondiente a su rol.
8. Si las contraseñas no coinciden, o el usuario no existe, ir a paso 9.
9. Mostrar un mensaje de "Credenciales inválidas".

### Pseudocódigo

```
Algoritmo IniciarSesion
    Definir identificador, passwordIngresada Como Caracter
    Definir passwordAlmacenada, rolUsuarioBD Como Caracter
    Definir usuarioEncontrado, credencialesCorrectas Como Logico

    Escribir "Ingrese su nombre de usuario:"
    Leer identificador
    Escribir "Ingrese su contraseña:"
    Leer passwordIngresada

    Si identificador Entonces
        usuarioEncontrado <- Verdadero
    SiNo
        usuarioEncontrado <- Falso
    FinSi

    Si usuarioEncontrado Entonces
        Si passwordIngresada = passwordAlmacenada Entonces
            credencialesCorrectas <- Verdadero
        SiNo
            credencialesCorrectas <- Falso
        FinSi

        Si credencialesCorrectas Entonces
            Escribir "Inicio de sesion exitoso. ¡Bienvenido/a ", identificador, "!"
            Escribir "Su rol es: ", rolUsuarioBD
        SiNo
            Escribir "Error: Contraseña incorrecta."
        FinSi
    SiNo
        Escribir "Error: Usuario no encontrado."
    FinSi

FinAlgoritmo
```