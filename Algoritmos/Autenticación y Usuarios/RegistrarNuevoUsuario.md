### Lógica

* Necesito el nombre de usuario, correo electrónico y contraseña. Debo validar que el correo sea único y que el nombre de usuario no esté en uso.

### Algoritmo

1. Solicitar el nombre de usuario.
2. Leer el nombre de usuario ingresado.
3. Verificar si el nombre de usuario ya existe en la base de datos. Si existe, indicar usuario en uso.
4. Solicitar el correo electrónico.
5. Leer el correo electrónico ingresado.
6. Verificar si el correo electrónico ya existe en la base de datos. Si existe, indicar correo electrónico en uso.
7. Solicitar la contraseña.
10. Leer la contraseña ingresada.
11. Verificar que la contraseña cumpla con los requisitos de seguridad
12. Almacenar el nombre de usuario, correo electrónico y contraseña hasheada en la base de datos con el rol de "cliente".
13. Mostrar un mensaje de "Registro exitoso" o "Error al registrar: [motivo]".

### Pseudocódigo

```
Algoritmo RegistrarNuevoUsuario
    Definir nombreUsuario, email, password Como Caracter
    Definir existeUsuario, existeEmail, passwordValida Como Logico

    Escribir "Ingrese su nombre de usuario:"
    Leer nombreUsuario

    Si nombreUsuario = "admin" O nombreUsuario = "clienteexistente" Entonces
        existeUsuario <- Verdadero
    SiNo
        existeUsuario <- Falso
    FinSi

    Si existeUsuario Entonces
        Escribir "Error: El nombre de usuario ya está en uso."
        Retornar
    FinSi

    Escribir "Ingrese su correo electronico:"
    Leer email

    Si email = "admin@example.com" O email = "cliente@example.com" Entonces
        existeEmail <- Verdadero
    SiNo
        existeEmail <- Falso
    FinSi

    Si existeEmail Entonces
        Escribir "Error: El correo electronico ya está registrado."
        Retornar
    FinSi

    Escribir "Ingrese su contraseña (min. 6 caracteres):"
    Leer password

    Si Longitud(password) >= 6 Entonces
        passwordValida <- Verdadero
    SiNo
        passwordValida <- Falso
    FinSi

    Si No passwordValida Entonces
        Escribir "Error: La contraseña no cumple los requisitos de seguridad."
        Retornar
    FinSi

    Escribir "Usuario '", nombreUsuario, "' con email '", email, "' registrado exitosamente como cliente."
FinAlgoritmo
```