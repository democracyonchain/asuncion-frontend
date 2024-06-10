import { gql } from '@apollo/client';
import { ROL_CRUD_FIELDS } from '@infrastructure/graphql/graphql-rol-fragment';

export const UPDATE_MENU=()=>{
    return gql`
        ${ROL_CRUD_FIELDS}
        mutation RolUpdate($inputUpdate: RolUpdateInput!) {
            rolUpdate(dataInput: $inputUpdate) {
                ... rolCrudFields
            }
        }
    `
}

export const CREATE_MENU =()=>{
    return gql`
        ${ROL_CRUD_FIELDS}
        mutation RolCreate($inputCreate: RolCreateInput!) {
            rolCreate(dataInput: $inputCreate) {
                ... rolCrudFields
            }
        }
    `
}

export const DELETE_MENU =()=>{
    return gql`
    ${ROL_CRUD_FIELDS}
    mutation RolDelete($id:Int!){
        rolDelete( id:$id){
            ...rolCrudFields
        }
    }
    
    `
}