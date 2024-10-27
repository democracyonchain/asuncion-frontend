import { gql } from '@apollo/client';

/**
 * Fragmento GraphQL para seleccionar campos de la colección ProvinciaDigitalizacion.
 * 
 * Este fragmento define los campos que se seleccionarán de la colección 
 * `ProvinciaDigitalizacionCollectionType`, específicamente los campos `id` y `nombre`.
 * 
 * @constant
 * @type {DocumentNode}
 */
export const PROVINCIA_DIGT_SELECT_FIELDS = gql`
    fragment provinciaDigtSelectFields on ProvinciaDigitalizacionCollectionType{
        data {           
            id
            nombre            
        }
    }
`

/**
 * @constant {DocumentNode} CANTON_DIGT_SELECT_FIELDS
 * @description
 * Fragmento de GraphQL que selecciona los campos `id` y `nombre` de la colección `CantonDigitalizacionCollectionType`.
 * 
 * @example
 * ```typescript
 * import { CANTON_DIGT_SELECT_FIELDS } from './graphql-digt-fragment';
 * 
 * // Uso en una consulta GraphQL
 * const query = gql`
 *   query {
 *     ...cantonDigtSelectFields
 *   }
 *   ${CANTON_DIGT_SELECT_FIELDS}
 * `;
 * ```
 */
export const CANTON_DIGT_SELECT_FIELDS = gql`
    fragment cantonDigtSelectFields on CantonDigitalizacionCollectionType{
        data {           
            id
            nombre            
        }
    }
`

/**
 * @constant
 * @name PARROQUIA_DIGT_SELECT_FIELDS
 * @description
 * Fragmento GraphQL que selecciona los campos `id` y `nombre` de la colección `ParroquiaDigitalizacionCollectionType`.
 * Este fragmento se utiliza para obtener datos específicos de la colección de digitalización de parroquias.
 */
export const PARROQUIA_DIGT_SELECT_FIELDS = gql`
    fragment parroquiaDigtSelectFields on ParroquiaDigitalizacionCollectionType{
        data {           
            id
            nombre            
        }
    }
`

/**
 * @constant {DocumentNode} ZONA_DIGT_SELECT_FIELDS
 * @description
 * Fragmento de GraphQL que selecciona los campos `nombre` y `zona_id` 
 * de la colección `ZonaDigitalizacionCollectionType`.
 * 
 * @example
 * ```typescript
 * import { ZONA_DIGT_SELECT_FIELDS } from './graphql-digt-fragment';
 * 
 * const query = gql`
 *   query {
 *     zonaDigitalizacion {
 *       ...zonaDigtSelectFields
 *     }
 *   }
 *   ${ZONA_DIGT_SELECT_FIELDS}
 * `;
 * ```
 */
export const ZONA_DIGT_SELECT_FIELDS = gql`
    fragment zonaDigtSelectFields on ZonaDigitalizacionCollectionType{
        data {                       
            nombre   
            zona_id         
        }
    }
`

/**
 * @constant {DocumentNode} JUNTA_DIGT_SELECT_FIELDS
 * @description
 * Fragmento GraphQL que selecciona campos específicos de la colección 
 * JuntaDigitalizacionCollectionType. Este fragmento se utiliza para 
 * obtener los siguientes campos de la colección:
 * 
 * - `electores`: Información sobre los electores.
 * - `id`: Identificador único de la junta.
 * - `junta`: Información de la junta.
 * - `sexo`: Información sobre el sexo.
 * - `zona_id`: Identificador de la zona.
 * 
 * @example
 * ```typescript
 * import { JUNTA_DIGT_SELECT_FIELDS } from './graphql-digt-fragment';
 * 
 * // Uso del fragmento en una consulta GraphQL
 * const GET_JUNTA_DIGT = gql`
 *   query {
 *     juntaDigitalizacion {
 *       ...juntaDigtSelectFields
 *     }
 *   }
 *   ${JUNTA_DIGT_SELECT_FIELDS}
 * `;
 * ```
 */
export const JUNTA_DIGT_SELECT_FIELDS = gql`
    fragment juntaDigtSelectFields on JuntaDigitalizacionCollectionType{
        data {           
            electores
            id
            junta
            sexo
            zona_id
        }
    }
`

/**
 * @constant {DocumentNode} DIGNIDAD_DIGT_SELECT_FIELDS
 * @description Fragmento GraphQL que selecciona los campos `id` y `nombre` 
 * del tipo `DignidadDigitalizacionCollectionType`.
 * 
 * @example
 * ```typescript
 * import { DIGNIDAD_DIGT_SELECT_FIELDS } from './graphql-digt-fragment';
 * 
 * const query = gql`
 *   query {
 *     dignidadDigitalizacionCollection {
 *       ...dignidadDigtSelectFields
 *     }
 *   }
 *   ${DIGNIDAD_DIGT_SELECT_FIELDS}
 * `;
 * ```
 */
export const DIGNIDAD_DIGT_SELECT_FIELDS = gql`
    fragment dignidadDigtSelectFields on DignidadDigitalizacionCollectionType{
        data {           
            id
            nombre
        }
    }
`

/**
 * GraphQL fragment for fetching fields related to ActaDigitalizacionVoto.
 * 
 * This fragment includes the following fields:
 * - `blancosdigitacion`: Number of blank votes.
 * - `dignidad_id`: ID of the dignity.
 * - `estado`: State of the act.
 * - `id`: Unique identifier of the act.
 * - `junta_id`: ID of the board.
 * - `nulosdigitacion`: Number of null votes.
 * - `peticion`: Request information.
 * - `seguridad`: Security information.
 * - `sufragantesdigitacion`: Number of voters.
 * 
 * Nested objects:
 * - `dignidad`: Information about the dignity, including:
 *   - `ambito`: Scope of the dignity.
 *   - `estado`: State of the dignity.
 *   - `id`: ID of the dignity.
 *   - `nombre`: Name of the dignity.
 *   - `orden`: Order of the dignity.
 * 
 * - `junta`: Information about the board, including:
 *   - `electores`: Number of electors.
 *   - `id`: ID of the board.
 *   - `junta`: Board name.
 *   - `sexo`: Gender information.
 *   - `zona_id`: Zone ID.
 *   - `canton`: Information about the canton, including:
 *     - `id`: ID of the canton.
 *     - `nombre`: Name of the canton.
 *   - `parroquia`: Information about the parish, including:
 *     - `id`: ID of the parish.
 *     - `nombre`: Name of the parish.
 *   - `provincia`: Information about the province, including:
 *     - `id`: ID of the province.
 *     - `nombre`: Name of the province.
 * 
 * - `votos`: Information about the votes, including:
 *   - `votos`: Number of votes.
 *   - `votoscontrol`: Control votes.
 *   - `votosdigitacion`: Digitized votes.
 *   - `votosicr`: ICR votes.
 *   - `candidato`: Information about the candidate, including:
 *     - `cedula`: Candidate's ID card number.
 *     - `id`: Candidate's ID.
 *     - `nombre`: Candidate's name.
 *     - `orden`: Candidate's order.
 *     - `dignidad`: Information about the candidate's dignity, including:
 *       - `ambito`: Scope of the dignity.
 *       - `estado`: State of the dignity.
 *       - `id`: ID of the dignity.
 *       - `nombre`: Name of the dignity.
 *       - `orden`: Order of the dignity.
 *     - `partido`: Information about the candidate's party, including:
 *       - `id`: Party ID.
 *       - `nombre`: Party name.
 *       - `lista`: Party list.
 *       - `siglas`: Party initials.
 */
export const ACTA_DIGT_LIST_FIELDS = gql`
    fragment actaDigtListFields on ActaDigitalizacionVoto{
       
        blancosdigitacion        
        dignidad_id
        estado
        id
        junta_id       
        nulosdigitacion       
        peticion
        seguridad      
        sufragantesdigitacion
        dignidad {
            ambito
            estado
            id
            nombre
            orden
        }
        junta {
            electores
            id
            junta
            sexo
            zona_id
            canton {
                id
                nombre
            }
            parroquia {
                id
                nombre
            }
            provincia {
                id
                nombre
            }
        }
        votos {
            votos
            votoscontrol
            votosdigitacion
            votosicr
            candidato {
                cedula
                id
                nombre
                orden
                dignidad {
                    ambito
                    estado
                    id
                    nombre
                    orden
                }
                partido {
                    id
                    nombre
                    lista
                    siglas
                }
            }
        }    
    }
`

/**
 * @constant {DocumentNode} ACTA_DIGITALIZACION_LIST_FIELDS
 * @description
 * Fragmento GraphQL que define los campos de la lista de actas de digitalización.
 * 
 * Este fragmento se utiliza para obtener los datos de una imagen de votación digitalizada,
 * incluyendo el identificador de la acta, los votos digitalizados y los segmentos de imagen
 * asociados a cada candidato.
 * 
 * @fragment
 * actaByDigititalizacionListFields on ActaDigitalizacionVotoImagen
 * 
 * @fields
 * - `id`: Identificador de la acta de digitalización.
 * - `votos`: Lista de votos digitalizados.
 *   - `votosdigitacion`: Información de los votos digitalizados.
 *   - `imagensegmento`: Segmentos de imagen asociados a los votos.
 *     - `imagen`: Imagen del segmento.
 *     - `candidato_id`: Identificador del candidato asociado al segmento de imagen.
 */
export const ACTA_DIGITALIZACION_LIST_FIELDS = gql`
    fragment actaByDigititalizacionListFields on ActaDigitalizacionVotoImagen{
        id
        votos {
            votosdigitacion
            imagensegmento {
                imagen
                candidato_id               
            }
        }
    }
`
/**
 * @constant {DocumentNode} ACTADIGITA_CRUD_FIELDS
 * @description
 * Fragmento de GraphQL que define los campos CRUD (Create, Read, Update, Delete) 
 * para el tipo de resultado global (GlobalResultType). Este fragmento incluye 
 * los siguientes campos:
 * - `message`: Mensaje asociado al resultado de la operación.
 * - `status`: Estado de la operación.
 * 
 * @example
 * ```typescript
 * import { ACTADIGITA_CRUD_FIELDS } from './graphql-digt-fragment';
 * 
 * // Uso del fragmento en una consulta GraphQL
 * const QUERY = gql`
 *   query {
 *     someOperation {
 *       ...actaDigitaCrudFields
 *     }
 *   }
 *   ${ACTADIGITA_CRUD_FIELDS}
 * `;
 * ```
 */
export const ACTADIGITA_CRUD_FIELDS =  gql`

    fragment actaDigitaCrudFields on GlobalResultType{
        message
        status
    }
`