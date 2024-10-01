import { gql } from '@apollo/client';
import { MODULO_CRUD_FIELDS } from '@infrastructure/graphql/graphql-modulo-fragment';

/**
 * Realiza una mutación GraphQL para actualizar un módulo.
 *
 * @returns Una cadena de plantilla GraphQL que contiene la mutación para actualizar un módulo.
 *
 * @example
 * ```typescript
 * const mutation = UPDATE_MODULO();
 * ```
 */
export const UPDATE_MODULO=()=>{
    return gql`
        ${MODULO_CRUD_FIELDS}
        mutation ModuloUpdate($inputUpdate: ModuloUpdateInput!) {
            adminModuloUpdate(dataInput: $inputUpdate) {
                ... moduloCrudFields
            }
        }
    `
}

/**
 * Crea una mutación GraphQL para la creación de un módulo.
 *
 * @returns {DocumentNode} La mutación GraphQL para crear un módulo.
 *
 * @example
 * ```typescript
 * const mutation = CREATE_MODULO();
 * ```
 */
export const CREATE_MODULO =()=>{
    return gql`
        ${MODULO_CRUD_FIELDS}
        mutation ModuloCreate($inputCreate: ModuloCreateInput!) {
            adminModuloCreate(dataInput: $inputCreate) {
                ... moduloCrudFields
            }
        }
    `
}

/**
 * Constante que define la mutación GraphQL para eliminar un módulo.
 * 
 * @returns La cadena de consulta GraphQL para la mutación de eliminación de módulo.
 * 
 * La mutación `ModuloDelete` toma un parámetro:
 * - `id` (Int): El identificador del módulo que se desea eliminar.
 * 
 * La respuesta de la mutación incluye los campos definidos en `MODULO_CRUD_FIELDS`.
 */
export const DELETE_MODULO =()=>{
    return gql`
    ${MODULO_CRUD_FIELDS}
    mutation ModuloDelete($id:Int!){
        adminModuloDelete( id:$id){
            ...moduloCrudFields
        }
    }
    
    `
}