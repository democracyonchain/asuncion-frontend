import { gql} from '@apollo/client';
import {MODULO_COLLECTION_FIELDS,MODULO_ID_FIELDS,MODULO_SELECT_FIELDS} from '@infrastructure/graphql/graphql-modulo-fragment';


/**
 * Constante que define la consulta GraphQL para obtener la colección de módulos.
 * 
 * @returns {DocumentNode} - La consulta GraphQL para obtener la colección de módulos.
 * 
 * @example
 * ```typescript
 * const query = GET_MODULO_COLLECTION();
 * ```
 * 
 * La consulta acepta los siguientes parámetros:
 * 
 * @param {ModuloFilterInput} inputWhere - Filtro para la colección de módulos.
 * @param {StringOrderInput} inputOrder - Orden para la colección de módulos.
 * @param {PaginationInput} inputPagination - Paginación para la colección de módulos.
 * 
 * La consulta devuelve los siguientes campos:
 * 
 * @returns {ModuloCollection} - La colección de módulos con los campos definidos en `moduloCollectionFields`.
 */
export const GET_MODULO_COLLECTION =()=>{

    return gql`
        ${MODULO_COLLECTION_FIELDS}
            query ModuloCollection(
                $inputWhere: ModuloFilterInput,
                $inputOrder:StringOrderInput,
                $inputPagination:PaginationInput
            ){
                adminModuloCollection(
                    where: $inputWhere
                    order: $inputOrder
                    pagination: $inputPagination
                ){
                    ...moduloCollectionFields
                }
            }
        `
}

/**
 * Constante que define una consulta GraphQL para obtener un módulo por su ID.
 *
 * @constant
 * @name GET_MODULO_ID
 * @returns {DocumentNode} - Consulta GraphQL para obtener un módulo con el campo `id` proporcionado.
 * 
 * @example
 * ```typescript
 * const query = GET_MODULO_ID();
 * ```
 */
export const GET_MODULO_ID = ()=>{
    
    return gql`
        ${MODULO_ID_FIELDS}
        query Modulo($id:Int!)
        {
            adminModulo(id:$id){
                ...moduloIdFields
            }
        }
    
    
    `
}


/**
 * Consulta GraphQL para obtener una selección de módulos.
 * 
 * @returns {DocumentNode} Consulta GraphQL que incluye los campos de selección de módulos.
 * 
 * @example
 * ```typescript
 * const query = GET_MODULO_SELECT();
 * ```
 * 
 * @typedef {Object} ModuloFilterInput - Filtros aplicables a la consulta de módulos.
 * @typedef {Object} StringOrderInput - Orden aplicable a la consulta de módulos.
 * 
 * @param {ModuloFilterInput} inputWhere - Filtros para aplicar a la colección de módulos.
 * @param {StringOrderInput} inputOrder - Orden para aplicar a la colección de módulos.
 * 
 * @returns {Object} adminModuloCollection - Colección de módulos que cumplen con los filtros y el orden especificado.
 */
export const GET_MODULO_SELECT =()=>{

    return gql`
        ${MODULO_SELECT_FIELDS}
            query ModuloSelect(
                $inputWhere: ModuloFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                adminModuloCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...moduloSelectFields
                }
            }
        `
}