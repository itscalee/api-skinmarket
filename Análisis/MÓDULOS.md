Módulos del Proyecto E-commerce de Skins de CS2

---------------------------------------------------------------------------

1. Módulo de Autenticación y Usuarios
Descripción: Este módulo central gestiona la identidad y el acceso de todos los usuarios del sistema (clientes y administradores). Registro, login y la verificación de roles.

Funcionalidades Clave (CRUD y Otros):

* Crear Usuario
* Leer Perfil de Usuario
* Actualizar Datos del Usuario
* Eliminar Usuario
* Login (Autenticación)
* Validación de Roles

2. Módulo de Gestión de Catálogo y Skins
Descripción: Este módulo se encarga de la creación, visualización, modificación y eliminación de los skins disponibles para la venta. Dado que el administrador es el único vendedor, este módulo tiene un fuerte enfoque en la gestión por parte del admin.

Funcionalidades Clave (CRUD y Otros):

* Crear Skins
* Leer Skins (Visualización)
* Actualizar Skins
* Eliminar Skins
* Búsqueda de skins
* Filtrado de skins

3. Módulo de Carrito de Compras
Descripción: Este módulo gestiona el proceso de compra de los clientes, desde la selección de artículos hasta la confirmación de la "transacción simulada". También mantiene un registro de todas las compras.

Funcionalidades Clave (CRUD y Otros):

* Añadir skins al carrito
* Actualizar cantidades en el carrito
* Eliminar skins del carrito
* Checkout simulado del carrito

4. Módulo de Inventario
Descripción: Este módulo se encarga de la gestión y seguimiento del "stock" de skins dentro de la plataforma. Es una simulación del inventario real de skins de CS2, tanto para los skins disponibles para la venta (del administrador) como para los skins "adquiridos" por los clientes.

Funcionalidades Clave (CRUD y Otros):

* Gestión de Stock del Administrador
* Validación de Stock


5. Módulo de Administración y Reportes
Descripción: Este módulo proporciona al administrador las herramientas necesarias para supervisar y gestionar el funcionamiento general de la plataforma, así como acceder a información relevante sobre su rendimiento.

Funcionalidades Clave (CRUD y Otros):

* Panel de Control de Administrador
* Gestión de Clientes (CRUD)
* Gestión de Skins (CRUD)
* Reportes y Estadísticas