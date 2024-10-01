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
