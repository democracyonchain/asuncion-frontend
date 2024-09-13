import { gql } from '@apollo/client';
import { ACTADIGITA_CRUD_FIELDS } from '@infrastructure/graphql/graphql-digt-fragment';

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
