import { gql } from '@apollo/client';
import { MENU_CRUD_FIELDS } from '@infrastructure/graphql/graphql-menu-fragment';

/**
 * Realiza una mutación GraphQL para actualizar un menú.
 * 
 * @returns La consulta GraphQL para la mutación de actualización del menú.
 * 
 * @example
 * ```typescript
 * const mutation = UPDATE_MENU();
 * ```
 */
export const UPDATE_MENU=()=>{
    return gql`
        ${MENU_CRUD_FIELDS}
        mutation MenuUpdate($inputUpdate: MenuUpdateInput!) {
            adminMenuUpdate(dataInput: $inputUpdate) {
                ... menuCrudFields
            }
        }
    `
}

/**
 * Crea una mutación GraphQL para la creación de un menú.
 * 
 * @returns Una cadena de plantilla GraphQL que incluye los campos CRUD del menú y la mutación `MenuCreate`.
 * 
 * @example
 * ```typescript
 * const mutation = CREATE_MENU();
 * ```
 */
export const CREATE_MENU =()=>{
    return gql`
        ${MENU_CRUD_FIELDS}
        mutation MenuCreate($inputCreate: MenuCreateInput!) {
            adminMenuCreate(dataInput: $inputCreate) {
                ... menuCrudFields
            }
        }
    `
}

/**
 * Constante que define la mutación GraphQL para eliminar un menú.
 *
 * @returns La cadena de consulta GraphQL para la mutación de eliminación de menú.
 */
export const DELETE_MENU =()=>{
    return gql`
    ${MENU_CRUD_FIELDS}
    mutation MenuDelete($id:Int!){
        adminMenuDelete( id:$id){
            ...menuCrudFields
        }
    }
    
    `
}