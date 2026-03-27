import { gql } from '@apollo/client';
import { ACTADIGITA_CRUD_FIELDS } from '@infrastructure/graphql/graphql-digt-fragment';

/**
 * Actualiza el menú mediante una mutación GraphQL.
 *
 * @returns Una cadena de plantilla GraphQL que contiene la mutación para actualizar los votos de digitación.
 *
 * @example
 * ```typescript
 * const mutation = UPDATE_MENU();
 * ```
 */
export const UPDATE_MENU=()=>{
    return gql`
        ${ACTADIGITA_CRUD_FIELDS}
        mutation DigtVotosUpdate($inputUpdate: VotosDigitacionUpdateInput!) {
            digtVotosUpdate(dataInput: $inputUpdate) {
                ... actaDigitaCrudFields
            }
        }
    `
}

/**
 * Actualiza el menú mediante una mutación GraphQL.
 *
 * @returns Una cadena de plantilla GraphQL que contiene la mutación para actualizar los votos de digitación.
 *
 * @example
 * ```typescript
 * const mutation = UPDATE_MENU();
 * ```
 */
export const UPDATE_VOTOS_CONTROL=()=>{
    return gql`
        ${ACTADIGITA_CRUD_FIELDS}
        mutation DigtVotosControlUpdate($inputUpdate: VotosControlUpdateInput!) {
            digtVotosControlUpdate(dataInput: $inputUpdate) {
                ... actaDigitaCrudFields
            }
        }
    `
}


/**
 * Actualiza el estado del acta mediante una mutación GraphQL.
 *
 * @returns Una cadena de plantilla GraphQL que contiene la mutación para actualizar los votos de digitación.
 *
 * @example
 * ```typescript
 * const mutation = ACTUALiZAR ESTADO DEL ACTAS ();
 * ```
 */
export const ACTUALIZAR_ESTADO_DEL_ACTAS=()=>{
    return gql`
        ${ACTADIGITA_CRUD_FIELDS}
        mutation DigtActaEstadoUpdate($actaId:Int!,$fase:Int!,$txHash:String!){
            digtActaEstadoUpdate(acta_id:$actaId,fase:$fase,tx_hash:$txHash){
                ... actaDigitaCrudFields
            }
        }
    `
}