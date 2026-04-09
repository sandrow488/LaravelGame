# Proyecto CRM de Juegos y API Laravel + Three.js

Este proyecto es una práctica completa de Desarrollo de Aplicaciones Web (DAW) que integra un Backend robusto en Laravel con un Frontend desacoplado en React para la gestión (CRM) y un juego externo en Three.js que consume su API.

## 🚀 Tecnologías Utilizadas

*   **Laravel 11/12:** Framework PHP principal usado para la arquitectura, enrutamiento, ORM (Eloquent), migraciones y protección de rutas.
*   **PostgreSQL:** Sistema de gestión de base de datos relacional para almacenar usuarios, roles, y los metadatos de los juegos.
*   **Laravel Breeze (React con Inertia.js):** Pila elegida para solucionar la autenticación de fábrica y renderizar la interfaz de usuario en el frontend, usando Inertia para evitar la creación de una API completa solo para el CRM.
*   **Tailwind CSS:** Framework CSS de utilidad para estilizar rápidamente las vistas del CRM.
*   **Three.js / Vanilla JS (Juego3D):** Juego interactivo cliente integrado como archivos estáticos que se comunica exclusivamente con la API de Laravel para guardar puntuaciones y validaciones de sesión.

## 🏗️ Arquitectura y Separación de Responsabilidades

El proyecto está diseñado siguiendo el patrón MVC y separando estrictamente la administración del consumo de la API:

1.  **Capa de Autenticación y Permisos:**
    *   Implementada con los modelos `User` y `Role` (relación Many-to-Many).
    *   Un **Middleware personalizado (`CheckRole.php`)** protege las rutas del sistema basándose en el rol del usuario (administrador, gestor o jugador).
2.  **Rutas Separadas:**
    *   `routes/web.php`: Controla la navegación del CRM, el inicio de sesión y la visualización de juegos (para jugadores). Las rutas están protegidas por sesión y cookies.
    *   `routes/api.php`: Contiene endpoints puramente JSON (ej. `/api/games/start` y `/api/games/result`) pensados exclusivamente para ser consumidos por el `Juego3D` (cliente externo).
3.  **CRM de Gestión de Juegos (React):**
    *   Las vistas (ubicadas en `resources/js/Pages/Games/`) y el controlador `GameController` permiten realizar un CRUD completo sobre la entidad `Game`.
    *   Los juegos no se tocan a nivel de código; el CRM solo gestiona sus rutas y estados de publicación.
4.  **Experiencia del Jugador:**
    *   Los usuarios con el rol `jugador` o sin privilegios de gestión ven un Dashboard filtrado solo con los juegos publicados (`is_published = true`).
    *   Al jugar, se incrusta el entorno estático del juego (`Juego3D/dist` servido desde `public/juegos/base`) dentro del layout de la plataforma sin salir de la misma (usando `iframe`), listo para la comunicación asíncrona mediante la API.

## 📦 Base de Datos

*   Se utilizó `php artisan migrate:fresh --seed` para la configuración inicial.
*   El `DatabaseSeeder` inyecta automáticamente los tres roles (`administrador`, `gestor`, `jugador`), crea un usuario de prueba para cada rol e inserta 5 simulaciones de juegos publicadas y no publicadas que referencian al `Juego3D`.

---
*Práctica de desarrollo web orientada a la simplicidad, seguridad y separación API/Web.*
