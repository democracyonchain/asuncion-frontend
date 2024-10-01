import { gql} from '@apollo/client';

/**
 * @constant {DocumentNode} ROL_COLLECTION_FIELDS
 * @description
 * Fragmento GraphQL que define los campos de la colección de roles (RolCollectionType).
 * 
 * Este fragmento incluye los siguientes campos:
 * - `data`: Información de los roles, que incluye:
 *   - `descripcion`: Descripción del rol.
 *   - `estado`: Estado del rol.
 *   - `id`: Identificador del rol.
 *   - `nombre`: Nombre del rol.
 * - `pageInfo`: Información de paginación, que incluye:
 *   - `count`: Número total de elementos.
 *   - `hasNextPage`: Indica si hay una página siguiente.
 *   - `hasPreviousPage`: Indica si hay una página anterior.
 *   - `limit`: Límite de elementos por página.
 *   - `offset`: Desplazamiento de la paginación.
 */
export const ROL_COLLECTION_FIELDS = gql`
    fragment rolCollectionFields on RolCollectionType{
        data {
            descripcion
            estado
            id
            nombre
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
 * @constant {DocumentNode} ROL_ID_FIELDS
 * @description
 * Fragmento GraphQL que define los campos de un rol, incluyendo su descripción, estado, id, nombre y permisos asociados.
 * Los permisos incluyen acciones como crear, editar, eliminar, imprimir y leer, así como el estado y el id del permiso.
 * Además, cada permiso puede estar asociado a un menú con su propio id y título.
 *
 * @example
 * ```typescript
 * import { ROL_ID_FIELDS } from './graphql-rol-fragment';
 * ```
 */
export const ROL_ID_FIELDS = gql`

    fragment rolIdFields on Rol{
        descripcion
        estado
        id
        nombre
        permisos {
            crear
            editar
            eliminar
            estado
            id
            imprimir
            leer
            menu {                
                id                
                titulo
            }
        }
    }

`

/**
 * @constant {DocumentNode} ROL_CRUD_FIELDS
 * @description Fragmento GraphQL que define los campos CRUD (Create, Read, Update, Delete) para el rol.
 * Este fragmento se utiliza para obtener los campos `message` y `status` del tipo `GlobalResultType`.
 * 
 * @example
 * ```typescript
 * import { ROL_CRUD_FIELDS } from './graphql-rol-fragment';
 * 
 * const query = gql`
 *   query {
 *     someQuery {
 *       ...rolCrudFields
 *     }
 *   }
 *   ${ROL_CRUD_FIELDS}
 * `;
 * ```
 */
export const ROL_CRUD_FIELDS =  gql`

    fragment rolCrudFields on GlobalResultType{
        message
        status
    }

`

/**
 * @constant {DocumentNode} ROL_SELECT_FIELDS
 * @description
 * Fragmento GraphQL que selecciona los campos `id` y `nombre` de la colección `RolCollectionType`.
 * 
 * @example
 * ```typescript
 * import { ROL_SELECT_FIELDS } from './graphql-rol-fragment';
 * 
 * // Uso en una consulta GraphQL
 * const query = gql`
 *   query {
 *     roles {
 *       ...rolSelectFields
 *     }
 *   }
 *   ${ROL_SELECT_FIELDS}
 * `;
 * ```
 */
export const ROL_SELECT_FIELDS = gql`
    fragment rolSelectFields on RolCollectionType{
        data {           
            id
            nombre            
        }
    }
`