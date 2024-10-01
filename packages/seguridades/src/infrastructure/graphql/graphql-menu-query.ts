import { gql } from '@apollo/client';
import { MENU_COLLECTION_FIELDS,MENU_ID_FIELDS,MENU_SELECT_FIELDS } from '@infrastructure/graphql/graphql-menu-fragment';


/**
 * Consulta GraphQL para obtener la colección de menús.
 * 
 * @returns La consulta GraphQL para obtener la colección de menús.
 * 
 * @example
 * ```typescript
 * const query = GET_MENU_COLLECTION();
 * ```
 * 
 * @typedef {Object} MenuFilterInput - Filtros para la consulta de menús.
 * @typedef {Object} StringOrderInput - Orden para la consulta de menús.
 * @typedef {Object} PaginationInput - Paginación para la consulta de menús.
 * 
 * @param {MenuFilterInput} inputWhere - Filtros aplicados a la consulta.
 * @param {StringOrderInput} inputOrder - Orden aplicado a la consulta.
 * @param {PaginationInput} inputPagination - Paginación aplicada a la consulta.
 * 
 * @returns {Object} adminMenuCollection - Colección de menús obtenida de la consulta.
 */
export const GET_MENU_COLLECTION =()=>{

    return gql`
        ${MENU_COLLECTION_FIELDS}
            query MenuCollection(
                $inputWhere: MenuFilterInput,
                $inputOrder:StringOrderInput,
                $inputPagination:PaginationInput
            ){
                adminMenuCollection(
                    where: $inputWhere
                    order: $inputOrder
                    pagination: $inputPagination
                ){
                    ...menuCollectionFields
                }
            }
        `
}

/**
 * Consulta GraphQL para obtener un menú por su ID.
 *
 * @returns {DocumentNode} - La consulta GraphQL para obtener un menú por su ID.
 *
 * @example
 * ```typescript
 * const query = GET_MENU_ID();
 * ```
 */
export const GET_MENU_ID = ()=>{
    
    return gql`
        ${MENU_ID_FIELDS}
        query Menu($id:Int!)
        {
            adminMenu(id:$id){
                ...menuIdFields
            }
        }    
    `
}


/**
 * Consulta GraphQL para obtener la selección de menús.
 * 
 * @returns La consulta GraphQL para obtener la selección de menús.
 * 
 * @example
 * ```typescript
 * const query = GET_MENU_SELECT();
 * ```
 * 
 * @gql
 * query MenuSelect(
 *   $inputWhere: MenuFilterInput,
 *   $inputOrder: StringOrderInput
 * ) {
 *   adminMenuCollection(
 *     where: $inputWhere,
 *     order: $inputOrder
 *   ) {
 *     ...menuSelectFields
 *   }
 * }
 */
export const GET_MENU_SELECT =()=>{

    return gql`
        ${MENU_SELECT_FIELDS}
        query MenuSelect(
            $inputWhere: MenuFilterInput,
            $inputOrder:StringOrderInput,                
        ){
            adminMenuCollection(
                where: $inputWhere
                order: $inputOrder                    
            ){
                ...menuSelectFields
            }
        }
    `
}