import { gql } from '@apollo/client';
import { USUARIO_CRUD_FIELDS } from '@infrastructure/graphql/graphql-usuario-fragment';

/**
 * Actualiza la información de un usuario mediante una mutación GraphQL.
 *
 * @returns {DocumentNode} La mutación GraphQL para actualizar un usuario.
 *
 * @example
 * ```typescript
 * const mutation = UPDATE_USUARIO();
 * ```
 */
export const UPDATE_USUARIO=()=>{
    return gql`
        ${USUARIO_CRUD_FIELDS}
        mutation UsuarioUpdate($inputUpdate: UsuarioUpdateInput!) {
            adminUsuarioUpdate(dataInput: $inputUpdate) {
                ... usuarioCrudFields
            }
        }
    `
}

/**
 * Crea una mutación GraphQL para la creación de un usuario.
 *
 * @returns Una cadena de plantilla GraphQL que define la mutación `UsuarioCreate` 
 *          con el campo de entrada `UsuarioCreateInput` y utiliza los fragmentos
 *          definidos en `USUARIO_CRUD_FIELDS`.
 */
export const CREATE_USUARIO =()=>{
    return gql`
        ${USUARIO_CRUD_FIELDS}
        mutation UsuarioCreate($inputCreate: UsuarioCreateInput!) {
            adminUsuarioCreate(dataInput: $inputCreate) {
                ... usuarioCrudFields
            }
        }
    `
}

/**
 * Constante que define la mutación GraphQL para eliminar un usuario.
 * 
 * @returns La consulta GraphQL para eliminar un usuario, incluyendo los campos definidos en `USUARIO_CRUD_FIELDS`.
 * 
 * @example
 * ```typescript
 * const mutation = DELETE_USUARIO();
 * ```
 */
export const DELETE_USUARIO =()=>{
    return gql`
    ${USUARIO_CRUD_FIELDS}
    mutation UsuarioDelete($id:Int!){
        adminUsuarioDelete( id:$id){
            ...usuarioCrudFields
        }
    }
    
    `
}