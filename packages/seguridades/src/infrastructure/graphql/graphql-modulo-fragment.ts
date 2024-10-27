import { gql} from '@apollo/client';

/**
 * @constant {DocumentNode} MODULO_COLLECTION_FIELDS
 * @description
 * Fragmento de GraphQL que define los campos de la colección de módulos.
 * 
 * Este fragmento incluye los siguientes campos para la colección de módulos:
 * - `data`: Información del módulo que incluye:
 *   - `codigo`: Código del módulo.
 *   - `color`: Color del módulo.
 *   - `estado`: Estado del módulo.
 *   - `icono`: Icono del módulo.
 *   - `id`: Identificador del módulo.
 *   - `nombre`: Nombre del módulo.
 *   - `url`: URL del módulo.
 * - `pageInfo`: Información de paginación que incluye:
 *   - `count`: Número total de elementos.
 *   - `hasNextPage`: Indica si hay una página siguiente.
 *   - `hasPreviousPage`: Indica si hay una página anterior.
 *   - `limit`: Límite de elementos por página.
 *   - `offset`: Desplazamiento de la paginación.
 */
export const MODULO_COLLECTION_FIELDS = gql`
    fragment moduloCollectionFields on ModuloCollectionType{
        data {
            codigo
            color
            estado
            icono
            id
            nombre
            url
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
 * @constant {DocumentNode} MODULO_ID_FIELDS
 * @description
 * Fragmento GraphQL que define los campos de identificación de un módulo de administración.
 * 
 * @fragment moduloIdFields
 * @on ModuloAdministracion
 * 
 * @fields
 * - codigo: Código del módulo.
 * - color: Color asociado al módulo.
 * - estado: Estado actual del módulo.
 * - icono: Icono representativo del módulo.
 * - id: Identificador único del módulo.
 * - nombre: Nombre del módulo.
 * - url: URL asociada al módulo.
 */
export const MODULO_ID_FIELDS = gql`

    fragment moduloIdFields on ModuloAdministracion{
        codigo
        color
        estado
        icono
        id
        nombre
        url
    }

`

/**
 * @constant {DocumentNode} MODULO_CRUD_FIELDS
 * @description
 * Fragmento de GraphQL que define los campos comunes para las operaciones CRUD del módulo.
 * 
 * @fragment moduloCrudFields
 * @on GlobalResultType
 * @fields
 * - message: Mensaje resultante de la operación.
 * - status: Estado de la operación.
 */
export const MODULO_CRUD_FIELDS =  gql`

    fragment moduloCrudFields on GlobalResultType{
        message
        status
    }
`

/**
 * @constant {DocumentNode} MODULO_SELECT_FIELDS
 * @description
 * Fragmento de GraphQL que selecciona los campos `id` y `nombre` del tipo `ModuloCollectionType`.
 * 
 * @example
 * ```typescript
 * import { MODULO_SELECT_FIELDS } from './graphql-modulo-fragment';
 * 
 * // Uso en una consulta GraphQL
 * const QUERY = gql`
 *   query {
 *     modulos {
 *       ...moduloSelectFields
 *     }
 *   }
 *   ${MODULO_SELECT_FIELDS}
 * `;
 * ```
 */
export const MODULO_SELECT_FIELDS = gql`
    fragment moduloSelectFields on ModuloCollectionType{
        data {           
            id
            nombre            
        }
    }
`