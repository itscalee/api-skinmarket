### Lógica

* Solo el administrador puede ver reportes. Accede a datos agregados de la base de datos (número de clientes, skins listados, total de ventas simuladas, etc.) y los presenta al administrador.

### Algoritmo

1. Verificar que el usuario actual tenga rol de administrador. Si no, ir a paso 6.
2. Obtener el número total de clientes registrados.
3. Obtener el número total de skins actualmente listados para la venta.
4. Obtener el total de ventas simuladas (ej. suma de los totales de todas las transacciones registradas).
5. Mostrar las estadísticas recopiladas.
6. Mostrar un mensaje de "Acceso denegado: Solo administradores".

### Pseudocódigo

```
Algoritmo GenerarReportesEstadisticas
    Definir rolUsuarioActual Como Caracter
    Definir totalClientes, totalSkinsListados, totalVentasSimuladas Como Real

    Escribir "Ingrese su rol (admin/cliente) para verificar permisos:"
    Leer rolUsuarioActual

    Si rolUsuarioActual <> "admin" Entonces
        Escribir "Error: Permiso denegado. Solo los administradores pueden ver reportes."
        Retornar
    FinSi

    totalClientes <- 50          // Ejemplo: 50 clientes registrados
    totalSkinsListados <- 120    // Ejemplo: 120 skins en el catálogo
    totalVentasSimuladas <- 25000.75 // Ejemplo: $25,000.75 en ventas simuladas

    Escribir "------------------------------------"
    Escribir "Estadisticas de la Plataforma:"
    Escribir "------------------------------------"
    Escribir "Total de Clientes Registrados: ", totalClientes
    Escribir "Total de Skins Listados: ", totalSkinsListados
    Escribir "Total de Ventas Simuladas: $", totalVentasSimuladas
    Escribir "------------------------------------"
    Escribir "Reportes generados exitosamente."

FinAlgoritmo
```