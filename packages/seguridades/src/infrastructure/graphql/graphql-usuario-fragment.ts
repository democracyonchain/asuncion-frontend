import { gql} from '@apollo/client';

/**
 * @constant
 * @name USUARIO_COLLECTION_FIELDS
 * @description
 * Fragmento GraphQL que define los campos de la colección de usuarios (UsuarioCollectionType).
 * 
 * Este fragmento incluye los siguientes campos:
 * - `data`: Información de los usuarios, incluyendo:
 *   - `apellidos`: Apellidos del usuario.
 *   - `estado`: Estado del usuario.
 *   - `id`: Identificador del usuario.
 *   - `nombres`: Nombres del usuario.
 *   - `provincia_id`: Identificador de la provincia del usuario.
 *   - `username`: Nombre de usuario.
 *   - `email`: Correo electrónico del usuario.
 *   - `provincia`: Información de la provincia del usuario, incluyendo:
 *     - `id`: Identificador de la provincia.
 *     - `nombre`: Nombre de la provincia.
 * - `pageInfo`: Información de paginación, incluyendo:
 *   - `count`: Número total de elementos.
 *   - `hasNextPage`: Indica si hay una página siguiente.
 *   - `hasPreviousPage`: Indica si hay una página anterior.
 *   - `limit`: Límite de elementos por página.
 *   - `offset`: Desplazamiento de la paginación.
 */
export const USUARIO_COLLECTION_FIELDS = gql`
    fragment usuarioCollectionFields on UsuarioCollectionType{
        data {
            apellidos
            estado
            id
            nombres
            provincia_id
            username
            email
            provincia {
                id
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
 * @constant {DocumentNode} USUARIO_ID_FIELDS
 * @description Fragmento GraphQL que define los campos de identificación de un usuario en la administración.
 * 
 * Este fragmento incluye los siguientes campos:
 * - `apellidos`: Apellidos del usuario.
 * - `establecimiento_id`: Identificador del establecimiento asociado al usuario.
 * - `estado`: Estado del usuario.
 * - `id`: Identificador único del usuario.
 * - `nombres`: Nombres del usuario.
 * - `provincia_id`: Identificador de la provincia asociada al usuario.
 * - `username`: Nombre de usuario.
 * - `email`: Correo electrónico del usuario.
 * - `rolusuario`: Información del rol del usuario, que incluye:
 *   - `id`: Identificador del rol del usuario.
 *   - `rol`: Información del rol, que incluye:
 *     - `id`: Identificador del rol.
 *     - `nombre`: Nombre del rol.
 * - `provincia`: Información de la provincia, que incluye:
 *   - `id`: Identificador de la provincia.
 *   - `nombre`: Nombre de la provincia.
 * - `establecimiento`: Información del establecimiento, que incluye:
 *   - `id`: Identificador del establecimiento.
 *   - `logo`: Logo del establecimiento.
 *   - `nombre`: Nombre del establecimiento.
 */
export const USUARIO_ID_FIELDS = gql`

    fragment usuarioIdFields on UsuarioAdministracion{
        apellidos
        establecimiento_id
        estado
        id
        nombres
        provincia_id
        username
        email
        rolusuario {
            id
            rol {               
                id
                nombre
            }
        }
        provincia {
            id
            nombre
        }
        establecimiento {
            id
            logo
            nombre
        }
    }

`



/**
 * GraphQL fragment for user CRUD fields.
 * 
 * This fragment is used to define the common fields for user CRUD operations
 * within the GlobalResultType. It includes the following fields:
 * - `message`: A message related to the CRUD operation.
 * - `status`: The status of the CRUD operation.
 * 
 * @constant
 * @type {DocumentNode}
 */
export const USUARIO_CRUD_FIELDS =  gql`

    fragment usuarioCrudFields on GlobalResultType{
        message
        status
    }

`