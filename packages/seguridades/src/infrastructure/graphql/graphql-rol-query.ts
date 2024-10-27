import { gql } from '@apollo/client';
import { ROL_COLLECTION_FIELDS,ROL_ID_FIELDS,ROL_SELECT_FIELDS } from '@infrastructure/graphql/graphql-rol-fragment';


/**
 * Consulta GraphQL para obtener una colección de roles.
 * 
 * @returns Una cadena de consulta GraphQL que incluye los campos de la colección de roles y los parámetros de entrada.
 * 
 * Parámetros de entrada:
 * - `inputWhere`: Filtro para los roles.
 * - `inputOrder`: Ordenamiento de los roles.
 * - `inputPagination`: Paginación de los roles.
 * 
 * La consulta `adminRolCollection` devuelve una colección de roles basada en los filtros, orden y paginación proporcionados.
 */
export const GET_ROL_COLLECTION =()=>{

    return gql`
        ${ROL_COLLECTION_FIELDS}
        query RolCollection(
            $inputWhere: RolFilterInput,
            $inputOrder:StringOrderInput,
            $inputPagination:PaginationInput
        ){
            adminRolCollection(
                where: $inputWhere
                order: $inputOrder
                pagination: $inputPagination
            ){
                ...rolCollectionFields
            }
        }
    `
}

/**
 * Consulta GraphQL para obtener un rol por su ID.
 *
 * @returns {DocumentNode} Consulta GraphQL que incluye los campos definidos en `ROL_ID_FIELDS`.
 *
 * @example
 * ```typescript
 * const rolQuery = GET_ROL_ID();
 * ```
 */
export const GET_ROL_ID = ()=>{
    
    return gql`
        ${ROL_ID_FIELDS}
        query Rol($id:Int!)
        {
            adminRol(id:$id){
                ...rolIdFields
            }
        }    
    `
}


/**
 * Consulta GraphQL para obtener la selección de módulos.
 *
 * @returns {DocumentNode} Consulta GraphQL que incluye los campos de selección de roles.
 *
 * @example
 * ```typescript
 * const query = GET_MODULO_SELECT();
 * ```
 *
 * @typedef {Object} RolFilterInput - Filtros aplicables a la consulta de roles.
 * @typedef {Object} StringOrderInput - Orden aplicable a la consulta de roles.
 *
 * @param {RolFilterInput} inputWhere - Filtros para aplicar a la colección de roles.
 * @param {StringOrderInput} inputOrder - Orden para aplicar a la colección de roles.
 *
 * @query
 * query RolSelect($inputWhere: RolFilterInput, $inputOrder: StringOrderInput) {
 *   adminRolCollection(where: $inputWhere, order: $inputOrder) {
 *     ...rolSelectFields
 *   }
 * }
 */
export const GET_MODULO_SELECT =()=>{

    return gql`
        ${ROL_SELECT_FIELDS}
            query RolSelect(
                $inputWhere: RolFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                adminRolCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...rolSelectFields
                }
            }
        `
}