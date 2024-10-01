import { gql} from '@apollo/client';

/**
 * @constant {DocumentNode} MENU_COLLECTION_FIELDS
 * @description
 * Fragmento GraphQL que define los campos de la colección de menús.
 * 
 * Este fragmento se utiliza para obtener información detallada sobre los menús,
 * incluyendo su estado, icono, id, módulo asociado, orden, título y URL.
 * También incluye información sobre el módulo asociado, como su nombre.
 * 
 * Además, proporciona información de paginación, como el conteo total de elementos,
 * si hay una página siguiente o anterior, el límite de elementos por página y el desplazamiento.
 * 
 * @example
 * ```typescript
 * import { MENU_COLLECTION_FIELDS } from './graphql-menu-fragment';
 * 
 * // Utilizar el fragmento en una consulta GraphQL
 * const GET_MENUS = gql`
 *   query getMenus {
 *     menus {
 *       ...menuCollectionFields
 *     }
 *   }
 *   ${MENU_COLLECTION_FIELDS}
 * `;
 * ```
 */
export const MENU_COLLECTION_FIELDS = gql`
    fragment menuCollectionFields on MenuCollectionType{
        data {
            estado
            icono
            id
            modulo_id
            orden
            titulo
            url
            modulo {                
                nombre              
            }
        }
        pageInfo {
            count
            hasNextPage
            hasPreviousPage
            limit
            offset
        }
    }
`


/**
 * Fragmento GraphQL que define los campos del menú de administración.
 * 
 * @constant
 * @name MENU_ID_FIELDS
 * 
 * @description
 * Este fragmento se utiliza para obtener los campos específicos de un menú de administración,
 * incluyendo su estado, icono, id, orden, título, url y el módulo asociado.
 * 
 * @fragment
 * @type {gql}
 * 
 * @fields
 * - estado: El estado del menú.
 * - icono: El icono asociado al menú.
 * - id: El identificador único del menú.
 * - orden: El orden en el que se muestra el menú.
 * - titulo: El título del menú.
 * - url: La URL del menú.
 * - modulo: El módulo asociado al menú, que incluye:
 *   - id: El identificador único del módulo.
 *   - nombre: El nombre del módulo.
 */
export const MENU_ID_FIELDS = gql`

    fragment menuIdFields on MenuAdministracion{
        estado
        icono
        id
        orden
        titulo
        url
        modulo {
            id
            nombre
        }
    }

`

/**
 * @constant {DocumentNode} MENU_CRUD_FIELDS
 * @description
 * Fragmento GraphQL que define los campos CRUD (Create, Read, Update, Delete) para el menú.
 * Este fragmento se utiliza en las operaciones de GraphQL para obtener los mensajes y el estado
 * de las operaciones realizadas en el menú.
 * 
 * @example
 * ```typescript
 * import { MENU_CRUD_FIELDS } from './graphql-menu-fragment';
 * 
 * const query = gql`
 *   query {
 *     someOperation {
 *       ...menuCrudFields
 *     }
 *   }
 *   ${MENU_CRUD_FIELDS}
 * `;
 * ```
 */
export const MENU_CRUD_FIELDS =  gql`

    fragment menuCrudFields on GlobalResultType{
        message
        status
    }
`

/**
 * @constant {DocumentNode} MENU_SELECT_FIELDS
 * @description
 * Fragmento GraphQL que selecciona los campos `id` y `titulo` de `MenuCollectionType`.
 * 
 * @example
 * ```typescript
 * import { MENU_SELECT_FIELDS } from './graphql-menu-fragment';
 * 
 * // Uso en una consulta GraphQL
 * const QUERY = gql`
 *   query {
 *     menus {
 *       ...menuSelectFields
 *     }
 *   }
 *   ${MENU_SELECT_FIELDS}
 * `;
 * ```
 */
export const MENU_SELECT_FIELDS = gql`
    fragment menuSelectFields on MenuCollectionType{
        data {           
            id
            titulo            
        }
    }
`