import { gql } from '@apollo/client';
import { AUTH_LOGIN_FIELDS,AUTH_PERFIL_FIELDS,AUTH_MODULO_PERMISO_ID_FIELDS,AUTH_CAMBIO_PASSWORD,AUTH_LOGOUT,
        PROVINCIA_SELECT_FIELDS,ESTABLECIMIENTO_SELECT_FIELDS,ADMIN_CONFIGURACION_FIELDS } from '@infrastructure/graphql/graphql-auth-fragment';

/**
 * Consulta GraphQL para la autenticación de inicio de sesión.
 * 
 * Esta función define una consulta GraphQL que utiliza los campos de autenticación
 * definidos en `AUTH_LOGIN_FIELDS` para autenticar a un usuario con su nombre de usuario
 * y contraseña.
 * 
 * @returns La consulta GraphQL para la autenticación de inicio de sesión.
 */
export const GET_AUTH_LOGIN =()=>{

    return gql`

        ${AUTH_LOGIN_FIELDS}
        query Authlogin($password: String!,$username:String!){
            
            authLogin(password: $password, username: $username) {
                ...authLoginFields
            }
        }
    `
}

/**
 * Consulta GraphQL para obtener el perfil de autenticación.
 * 
 * Esta función devuelve una consulta GraphQL que incluye los campos definidos en `AUTH_PERFIL_FIELDS`.
 * La consulta `AuthPerfil` recupera la información del perfil de autenticación y utiliza los fragmentos de campos
 * definidos en `authPerfilFields`.
 * 
 * @returns {DocumentNode} Consulta GraphQL para obtener el perfil de autenticación.
 */
export const GET_AUTH_PERFIL =()=>{

    return gql`

        ${AUTH_PERFIL_FIELDS}
        query AuthPerfil{            
            authPerfil{
                ...authPerfilFields
            }
        }
    `
}

/**
 * Consulta GraphQL para obtener los permisos de módulo de autenticación por ID de rol.
 *
 * @returns {DocumentNode} Consulta GraphQL que incluye los campos de permisos de módulo de autenticación.
 *
 * @example
 * ```typescript
 * const query = GET_AUTH_MODULO_PERMISO_ID_FIELDS();
 * ```
 */
export const GET_AUTH_MODULO_PERMISO_ID_FIELDS =()=>{

    return gql`
        ${AUTH_MODULO_PERMISO_ID_FIELDS}
            query AuthModuloPermisosId($rol_id:Int!){
                authModuloPermisosId(rol_id:$rol_id){
                    ...authModuloPermisoIdFields
                }

        }
    `
}

/**
 * @fileoverview Definición de la consulta GraphQL para el cambio de contraseña de autenticación.
 * 
 * @module graphql-auth-query
 */

/**
 * Consulta GraphQL para el cambio de contraseña de autenticación.
 * 
 * Esta función define una consulta GraphQL que permite cambiar la contraseña de un usuario autenticado.
 * 
 * @returns {DocumentNode} La consulta GraphQL para el cambio de contraseña.
 */
export const GET_AUTH_CAMBIO_PASSWORD = ()=>{

    return gql`
        ${AUTH_CAMBIO_PASSWORD}
        mutation AuthCambioPassword($password:String!){
            authCambioPassword(password:$password){
                ...authCambioPassword
            }
        }
    
    `
}

/**
 * Función que genera una consulta GraphQL para cerrar sesión.
 *
 * @returns Una cadena de consulta GraphQL que incluye la mutación de cierre de sesión.
 */
export const GET_AUTH_LOGOUT=()=>{

    return gql`

        ${AUTH_LOGOUT}
        query Authlogout{
            authLogout{
                ...authLogout
            }
        }
    `
}

/**
 * Consulta GraphQL para obtener una selección de provincias.
 *
 * @returns {DocumentNode} Consulta GraphQL que incluye los campos de selección de provincia.
 *
 * @example
 * ```typescript
 * const query = GET_PROVINCIA_SELECT();
 * ```
 *
 * @typedef {ProvinciaFilterInput} inputWhere - Filtro de entrada para la consulta de provincias.
 * @typedef {StringOrderInput} inputOrder - Orden de entrada para la consulta de provincias.
 *
 * La consulta devuelve una colección de provincias administradas que coinciden con los filtros y el orden especificado.
 */
export const GET_PROVINCIA_SELECT =()=>{

    return gql`
        ${PROVINCIA_SELECT_FIELDS}
            query ProvinciaSelect(
                $inputWhere: ProvinciaFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                adminProvinciaCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...provinciaSelectFields
                }
            }
        `
}

/**
 * Consulta GraphQL para obtener una selección de establecimientos.
 *
 * @returns {DocumentNode} Consulta GraphQL para obtener los campos de selección de establecimientos.
 *
 * @example
 * ```typescript
 * const { data } = useQuery(GET_ESTABLECIMIENTO_SELECT, {
 *   variables: {
 *     inputWhere: { nombre: "Ejemplo" },
 *     inputOrder: { field: "nombre", direction: "ASC" }
 *   }
 * });
 * ```
 */
export const GET_ESTABLECIMIENTO_SELECT =()=>{

    return gql`
        ${ESTABLECIMIENTO_SELECT_FIELDS}
            query EstablecimientoSelect(
                $inputWhere: EstablecimientoFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                adminEstablecimientoCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...establecimientoSelectFields
                }
            }
        `
}

/**
 * Constante que define una consulta GraphQL para obtener una colección de configuraciones de administrador.
 * 
 * @returns Una cadena de plantilla GraphQL que incluye los campos de configuración de administrador y 
 *          una consulta que acepta filtros y órdenes como parámetros.
 * 
 * @example
 * ```typescript
 * const query = GET_CONFIGURACION_FIELDS();
 * ```
 * 
 * @typedef {Object} ConfiguracionFilterInput - Filtros para la consulta de configuraciones.
 * @typedef {Object} StringOrderInput - Orden para la consulta de configuraciones.
 */
export const GET_CONFIGURACION_FIELDS = ()=>{

    return gql`
        ${ADMIN_CONFIGURACION_FIELDS}
            query AdminConfiguracionCollection(
                $inputWhere:ConfiguracionFilterInput, 
                $inputOrder:StringOrderInput
            ){
                adminConfiguracionCollection( 
                    where: $inputWhere
                    order: $inputOrder  
                )
                {
                    ...adminConfiguracionFields             
                }
            
            }
        `
}