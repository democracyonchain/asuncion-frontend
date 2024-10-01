import { gql } from '@apollo/client';
import { ROL_CRUD_FIELDS } from '@infrastructure/graphql/graphql-rol-fragment';

/**
 * Actualiza el menú utilizando una mutación GraphQL.
 * 
 * @returns {DocumentNode} La consulta GraphQL para actualizar un rol.
 * 
 * @example
 * ```typescript
 * import { UPDATE_MENU } from './graphql-rol-mutation';
 * 
 * const mutation = UPDATE_MENU();
 * ```
 */
export const UPDATE_MENU=()=>{
    return gql`
        ${ROL_CRUD_FIELDS}
        mutation RolUpdate($inputUpdate: RolUpdateInput!) {
            adminRolUpdate(dataInput: $inputUpdate) {
                ... rolCrudFields
            }
        }
    `
}

/**
 * Crea una mutación GraphQL para la creación de un rol.
 *
 * @returns {DocumentNode} Una cadena de consulta GraphQL que incluye los campos de CRUD de rol
 * y la mutación `adminRolCreate` que acepta un input de tipo `RolCreateInput`.
 */
export const CREATE_MENU =()=>{
    return gql`
        ${ROL_CRUD_FIELDS}
        mutation RolCreate($inputCreate: RolCreateInput!) {
            adminRolCreate(dataInput: $inputCreate) {
                ... rolCrudFields
            }
        }
    `
}

/**
 * Elimina un rol mediante una mutación GraphQL.
 *
 * @returns La consulta GraphQL para eliminar un rol.
 *
 * @example
 * ```typescript
 * const mutation = DELETE_MENU();
 * ```
 */
export const DELETE_MENU =()=>{
    return gql`
    ${ROL_CRUD_FIELDS}
    mutation RolDelete($id:Int!){
        adminRolDelete( id:$id){
            ...rolCrudFields
        }
    }
    
    `
}