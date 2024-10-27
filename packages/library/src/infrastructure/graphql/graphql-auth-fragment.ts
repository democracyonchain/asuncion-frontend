import { gql } from '@apollo/client';

/**
 * @constant {DocumentNode} AUTH_LOGIN_FIELDS
 * @description Fragmento GraphQL que define los campos de autenticación para el inicio de sesión.
 * 
 * Este fragmento se utiliza para obtener los campos `token`, `username` y `provincia` 
 * de la entidad `Login` en las consultas GraphQL.
 */
export const AUTH_LOGIN_FIELDS = gql`

    fragment authLoginFields on Login{
        token
        username
        provincia
    }
`

/**
 * Fragmento GraphQL que define los campos de autenticación del perfil de usuario.
 * 
 * Este fragmento se utiliza para obtener información detallada sobre el usuario autenticado,
 * incluyendo apellidos, correo electrónico, identificador, nombres, nombre de usuario y 
 * detalles del rol del usuario.
 * 
 * Campos incluidos:
 * - `apellidos`: Apellidos del usuario.
 * - `email`: Correo electrónico del usuario.
 * - `id`: Identificador único del usuario.
 * - `nombres`: Nombres del usuario.
 * - `username`: Nombre de usuario.
 * - `rolusuario`: Información del rol del usuario, que incluye:
 *   - `id`: Identificador del rol del usuario.
 *   - `rol`: Detalles del rol, que incluye:
 *     - `descripcion`: Descripción del rol.
 *     - `id`: Identificador del rol.
 *     - `nombre`: Nombre del rol.
 */
export const AUTH_PERFIL_FIELDS = gql`

    fragment authPerfilFields on UsuarioAuth{
        apellidos
        email
        id
        nombres
        username
        rolusuario {
            id
            rol {
                descripcion
                id
                nombre
            }
        }
    }
`

/**
 * @constant {DocumentNode} AUTH_MODULO_PERMISO_ID_FIELDS
 * @description
 * Fragmento GraphQL que define los campos de autorización para el módulo de permisos.
 * 
 * Este fragmento incluye los siguientes campos:
 * - `codigo`: Código del módulo.
 * - `icono`: Ícono representativo del módulo.
 * - `nombre`: Nombre del módulo.
 * - `url`: URL del módulo.
 * - `color`: Color asociado al módulo.
 * - `menu`: Información del menú asociado al módulo, que incluye:
 *   - `titulo`: Título del menú.
 *   - `icono`: Ícono del menú.
 *   - `url`: URL del menú.
 *   - `permisos`: Permisos asociados al menú, que incluyen:
 *     - `crear`: Permiso para crear.
 *     - `editar`: Permiso para editar.
 *     - `eliminar`: Permiso para eliminar.
 *     - `imprimir`: Permiso para imprimir.
 *     - `leer`: Permiso para leer.
 */
export const AUTH_MODULO_PERMISO_ID_FIELDS = gql`

    fragment authModuloPermisoIdFields on ModuloAuth{
        codigo
        icono
        nombre
        url
        color
        menu {            
            titulo
            icono
            url
            permisos {
                crear
                editar
                eliminar               
                imprimir
                leer
            }
        }
    }
`

/**
 * Fragmento GraphQL para el cambio de contraseña de autenticación.
 * 
 * Este fragmento define la estructura de la respuesta para la operación
 * de cambio de contraseña en el sistema de autenticación.
 * 
 * @fragment authCambioPassword
 * @type {GlobalResultType}
 * @property {string} message - Mensaje de la operación.
 * @property {string} status - Estado de la operación.
 */
export const AUTH_CAMBIO_PASSWORD = gql`

    fragment authCambioPassword on GlobalResultType{
        message
        status
    }

`

/**
 * Fragmento GraphQL para la operación de cierre de sesión (logout).
 * 
 * Este fragmento define los campos `message` y `status` que se esperan
 * en la respuesta del tipo `GlobalResultType` al realizar la operación
 * de cierre de sesión.
 * 
 * @constant
 * @type {DocumentNode}
 */
export const AUTH_LOGOUT = gql`

    fragment authLogout on GlobalResultType{
        message
        status
    }
`

/**
 * @constant
 * @name PROVINCIA_SELECT_FIELDS
 * @description
 * Fragmento GraphQL que selecciona los campos `id` y `nombre` de la colección `ProvinciaCollectionType`.
 * Este fragmento se puede utilizar para obtener una lista de provincias con sus respectivos identificadores y nombres.
 * 
 * @example
 * ```typescript
 * import { PROVINCIA_SELECT_FIELDS } from './graphql-auth-fragment';
 * 
 * const query = gql`
 *   query {
 *     provincias {
 *       ...provinciaSelectFields
 *     }
 *   }
 *   ${PROVINCIA_SELECT_FIELDS}
 * `;
 * ```
 */
export const PROVINCIA_SELECT_FIELDS = gql`
    fragment provinciaSelectFields on ProvinciaCollectionType{
        data {           
            id
            nombre            
        }
    }
`

/**
 * @constant {DocumentNode} ESTABLECIMIENTO_SELECT_FIELDS
 * @description Fragmento GraphQL que selecciona los campos `id` y `nombre` de la colección `EstablecimientoCollectionType`.
 * 
 * Este fragmento se utiliza para obtener los datos básicos de un establecimiento, incluyendo su identificador y nombre.
 */
export const ESTABLECIMIENTO_SELECT_FIELDS = gql`
    fragment establecimientoSelectFields on EstablecimientoCollectionType{
        data {
            id
            nombre            
        }
    }
`

/**
 * Fragmento GraphQL que define los campos de configuración del administrador.
 * 
 * Este fragmento se utiliza para obtener los datos de la colección de configuraciones
 * del administrador, incluyendo los siguientes campos:
 * 
 * - `codigoproceso`: Código del proceso.
 * - `estado`: Estado del proceso.
 * - `fechaproceso`: Fecha del proceso.
 * - `id`: Identificador único del proceso.
 * - `nombreproceso`: Nombre del proceso.
 */
export const ADMIN_CONFIGURACION_FIELDS = gql`
    fragment adminConfiguracionFields on  ConfiguracionCollectionType{
        data {
            codigoproceso
            estado
            fechaproceso
            id
            nombreproceso
        }    
    }
`