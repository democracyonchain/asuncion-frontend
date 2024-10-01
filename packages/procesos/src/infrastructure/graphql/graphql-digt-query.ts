import { gql } from '@apollo/client';
import { PROVINCIA_DIGT_SELECT_FIELDS,CANTON_DIGT_SELECT_FIELDS,PARROQUIA_DIGT_SELECT_FIELDS,ZONA_DIGT_SELECT_FIELDS,
        JUNTA_DIGT_SELECT_FIELDS,DIGNIDAD_DIGT_SELECT_FIELDS, ACTA_DIGT_LIST_FIELDS,ACTA_DIGITALIZACION_LIST_FIELDS } from '@infrastructure/graphql/graphql-digt-fragment';
        
/**
 * Consulta GraphQL para obtener la selección de provincias digitalizadas.
 * 
 * @returns La consulta GraphQL para obtener la colección de provincias digitalizadas con los campos especificados.
 * 
 * @example
 * ```typescript
 * const query = GET_PROVINCIA_DIGT_SELECT();
 * ```
 * 
 * @typedef {Object} ProvinciaDigitalizacionFilterInput
 * @property {string} [campo] - Descripción del campo de filtro.
 * 
 * @typedef {Object} StringOrderInput
 * @property {string} [campo] - Descripción del campo de ordenamiento.
 */
export const GET_PROVINCIA_DIGT_SELECT =()=>{

    return gql`
        ${PROVINCIA_DIGT_SELECT_FIELDS}
            query ProvinciaDigtSelect(
                $inputWhere: ProvinciaDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtProvinciaCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...provinciaDigtSelectFields
                }
            }
    `
}

/**
 * Consulta GraphQL para obtener la selección de cantones digitalizados.
 * 
 * @returns La consulta GraphQL para obtener la colección de cantones digitalizados con los campos especificados.
 * 
 * @example
 * ```typescript
 * const query = GET_CANTON_DIGT_SELECT();
 * ```
 * 
 * @typedef {Object} CantonDigitalizacionFilterInput - Filtros aplicables a la consulta de cantones digitalizados.
 * @typedef {Object} StringOrderInput - Orden aplicable a la consulta de cantones digitalizados.
 * 
 * @param {CantonDigitalizacionFilterInput} inputWhere - Filtros para aplicar a la consulta.
 * @param {StringOrderInput} inputOrder - Orden para aplicar a la consulta.
 * 
 * @returns {Object} La consulta GraphQL para obtener la colección de cantones digitalizados.
 */
export const GET_CANTON_DIGT_SELECT =()=>{

    return gql`
        ${CANTON_DIGT_SELECT_FIELDS}
            query CantonDigtSelect(
                $inputWhere: CantonDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtCantonCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...cantonDigtSelectFields
                }
            }
    `
}

/**
 * Consulta GraphQL para obtener la selección de parroquias digitalizadas.
 *
 * @returns {DocumentNode} Consulta GraphQL que incluye los campos definidos en `PARROQUIA_DIGT_SELECT_FIELDS`.
 *
 * La consulta acepta los siguientes parámetros:
 * - `$inputWhere`: Filtro de entrada para la digitalización de parroquias (`ParroquiaDigitalizacionFilterInput`).
 * - `$inputOrder`: Orden de entrada para la digitalización de parroquias (`StringOrderInput`).
 *
 * La consulta devuelve una colección de parroquias digitalizadas que coinciden con los filtros y el orden especificados.
 */
export const GET_PARROQUIA_DIGT_SELECT =()=>{

    return gql`
        ${PARROQUIA_DIGT_SELECT_FIELDS}
            query ParroquiaDigtSelect(
                $inputWhere: ParroquiaDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtParroquiaCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...parroquiaDigtSelectFields
                }
            }
    `
}


/**
 * Generates a GraphQL query for selecting digital zones.
 *
 * @returns {DocumentNode} The GraphQL query document.
 *
 * The query uses the following variables:
 * - `$inputWhere`: A filter input for the digital zones.
 * - `$inputOrder`: An order input for sorting the digital zones.
 *
 * The query retrieves a collection of digital zones (`digtZonaCollection`)
 * and includes the fields defined in `ZONA_DIGT_SELECT_FIELDS`.
 */
export const GET_ZONA_DIGT_SELECT =()=>{

    return gql`
        ${ZONA_DIGT_SELECT_FIELDS}
            query ZonaDigtSelect(
                $inputWhere: ZonaDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtZonaCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...zonaDigtSelectFields
                }
            }
    `
}


/**
 * Generates a GraphQL query for selecting Junta Digitalization data.
 *
 * This query uses the `JUNTA_DIGT_SELECT_FIELDS` fragment to fetch the required fields.
 * It accepts two optional input parameters:
 * - `inputWhere`: A filter input for the query.
 * - `inputOrder`: An order input for sorting the results.
 *
 * @returns {DocumentNode} The GraphQL query document.
 */
export const GET_JUNTA_DIGT_SELECT =()=>{

    return gql`
        ${JUNTA_DIGT_SELECT_FIELDS}
            query JuntaDigtSelect(
                $inputWhere: JuntaDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtJuntaCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...juntaDigtSelectFields
                }
            }
    `
}

/**
 * Generates a GraphQL query for selecting Dignidad Digitalizacion data.
 *
 * @returns {DocumentNode} The GraphQL query document.
 *
 * The query uses the following variables:
 * - `inputWhere`: A filter input for the Dignidad Digitalizacion collection.
 * - `inputOrder`: An order input for sorting the results.
 *
 * The query fetches the `digtDignidadCollection` with the specified filters and order,
 * and includes the fields defined in `DIGNIDAD_DIGT_SELECT_FIELDS`.
 */
export const GET_DIGNIDAD_DIGT_SELECT =()=>{

    return gql`
        ${DIGNIDAD_DIGT_SELECT_FIELDS}
            query DignidadDigtSelect(
                $inputWhere: DignidadDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtDignidadCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...dignidadDigtSelectFields
                }
            }
    `
}

/**
 * Consulta GraphQL para obtener la lista de actas digitales por junta.
 * 
 * @returns La consulta GraphQL para obtener la lista de actas digitales por junta.
 * 
 * @example
 * ```typescript
 * const query = GET_ACTA_DIGT_SELECT();
 * ```
 * 
 * @typedef {Object} DigtActaByJuntaList
 * @property {number} dignidad_id - El ID de la dignidad.
 * @property {number} junta_id - El ID de la junta.
 * 
 * @typedef {Object} ActaDigtListFields
 * @property {Array} actaDigtListFields - Los campos de la lista de actas digitales.
 */
export const GET_ACTA_DIGT_SELECT =()=>{

    return gql`
        ${ACTA_DIGT_LIST_FIELDS}
            query DigtActaByJuntaList(
                $dignidad_id: Int!,
                $junta_id:Int!,               
            ){
                digtActaByJuntaList(
                    dignidad_id: $dignidad_id
                    junta_id: $junta_id                    
                ){
                    ...actaDigtListFields
                }
            }
    `
}

/**
 * Consulta GraphQL para obtener la lista de actas de digitalización por dignidad.
 * 
 * @returns {DocumentNode} Consulta GraphQL para obtener la lista de actas de digitalización.
 * 
 * @example
 * ```typescript
 * import { GET_ACTA_DIGITALIZACION } from './graphql-digt-query';
 * 
 * const query = GET_ACTA_DIGITALIZACION();
 * ```
 * 
 * @typedef {Object} DigtActaByDignidadList
 * @property {number} dignidad_id - El ID de la dignidad para la cual se obtendrán las actas de digitalización.
 * 
 * @typedef {Object} ActaByDigitalizacionListFields
 * @property {string} campo1 - Descripción del campo 1.
 * @property {string} campo2 - Descripción del campo 2.
 * // Agregar más campos según sea necesario.
 */
export const  GET_ACTA_DIGITALIZACION = ()=>{
    return  gql`
        ${ACTA_DIGITALIZACION_LIST_FIELDS}
            query DigtActaByDignidadList($dignidad_id: Int!){
                digtActaByDignidadList(dignidad_id:$dignidad_id){
                ...actaByDigititalizacionListFields                
                }
            }
    
    `
}