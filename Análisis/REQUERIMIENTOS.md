Hoja de Requerimientos del Software: Plataforma de E-commerce de Skins de CS2 (Admin Vende, Cliente Compra)

---------------------------------------------------------------------------

1. Introducción
Este documento detalla los requisitos funcionales y no funcionales para el desarrollo de una plataforma de comercio electrónico dedicada a la compra de skins (apariencias cosméticas) del videojuego Counter-Strike 2 (CS2). Este proyecto se enmarca bajo la premisa de que el Administrador es el único vendedor de skins, y los Clientes son exclusivamente compradores.

---------------------------------------------------------------------------

2. Requisitos Funcionales
Estos requisitos describen las funcionalidades específicas que el sistema debe proporcionar a los usuarios, diferenciadas por rol.

2.1. Funcionalidades para CLIENTES
RF1.1 Registro de Clientes: Permitir a los usuarios crear una cuenta con un correo electrónico, contraseña y nombre de usuario.

RF1.2 Inicio de Sesión de Clientes: Los clientes deben poder iniciar sesión con sus credenciales.

RF1.3 Perfil de Cliente: Los clientes deben poder ver y editar su información de perfil (nombre de usuario, correo electrónico, contraseña).

RF1.4 Visualización de Skins: Mostrar un catálogo de skins disponibles para la venta (todos publicados por el administrador), con imágenes, nombre, tipo y precio.

RF1.5 Búsqueda y Filtrado de Skins: Permitir a los clientes buscar skins por nombre y aplicar filtros por tipo y precio.

RF1.6 Detalles del Skin: Al seleccionar un skin, se debe mostrar una página de detalles con información completa.

RF1.7 Carrito de Compras: Los clientes deben poder añadir skins a un carrito de compras.

RF1.8 Gestión del Carrito: Los clientes deben poder ver, modificar (cambiar cantidades, eliminar ítems) el contenido de su carrito.

2.2. Funcionalidades para ADMINISTRADORES
RF2.1 Inicio de Sesión de Administrador: El administrador debe poder iniciar sesión con credenciales específicas de administrador.

RF2.2 Gestión de Clientes: El administrador debe poder ver, editar (ej. cambiar nombre de usuario, eliminar cuentas de clientes).

RF2.3 Carga de Skins para Venta: El administrador debe poder listar nuevos skins para la venta, proporcionando la información necesaria (nombre, imágenes, tipo, precio).

RF2.4 Edición/Eliminación de Skins: El administrador debe poder editar o eliminar cualquier publicación de skin existente en el catálogo.

RF2.5 Visualización del Catálogo Completo: El administrador debe poder ver el catálogo completo de skins, con detalles de sus propios listings.

RF2.6 Estadísticas Generales: Mostrar estadísticas generales del sitio (número total de clientes, número de skins listados).

RF2.7 Simulación de Inventario del Administrador: El sistema debe mantener un inventario de los skins disponibles para la venta por parte del administrador, que se reduce a medida que los clientes compran.

---------------------------------------------------------------------------

3. Requisitos No Funcionales
Estos requisitos describen cómo debe funcionar el sistema en general, aplicando a ambos roles.

3.1. Requisitos de Usabilidad
RNF1.1 Interfaz Intuitiva: La interfaz de usuario debe ser fácil de usar y navegar para ambos roles.

RNF1.2 Diseño Responsivo: La plataforma debe ser accesible y funcional en diferentes dispositivos (escritorio, tablet, móvil).

RNF1.3 Mensajes de Error Claros: El sistema debe proporcionar mensajes de error claros y útiles a todos los usuarios.