import { gql } from '@apollo/client';
import { MENU_CRUD_FIELDS } from '@infrastructure/graphql/graphql-menu-fragment';

export const UPDATE_MENU=()=>{
    return gql`
        ${MENU_CRUD_FIELDS}
        mutation MenuUpdate($inputUpdate: MenuUpdateInput!) {
            adminMenuUpdate(dataInput: $inputUpdate) {
                ... menuCrudFields
            }
        }
    `
}

export const CREATE_MENU =()=>{
    return gql`
        ${MENU_CRUD_FIELDS}
        mutation MenuCreate($inputCreate: MenuCreateInput!) {
            adminMenuCreate(dataInput: $inputCreate) {
                ... menuCrudFields
            }
        }
    `
}

export const DELETE_MENU =()=>{
    return gql`
    ${MENU_CRUD_FIELDS}
    mutation MenuDelete($id:Int!){
        adminMenuDelete( id:$id){
            ...menuCrudFields
        }
    }
    
    `
}