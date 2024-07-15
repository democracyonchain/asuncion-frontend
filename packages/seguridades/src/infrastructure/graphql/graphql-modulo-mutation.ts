import { gql } from '@apollo/client';
import { MODULO_CRUD_FIELDS } from '@infrastructure/graphql/graphql-modulo-fragment';

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