import { gql } from '@apollo/client';
import { USUARIO_CRUD_FIELDS } from '@infrastructure/graphql/graphql-usuario-fragment';

export const UPDATE_USUARIO=()=>{
    return gql`
        ${USUARIO_CRUD_FIELDS}
        mutation UsuarioUpdate($inputUpdate: UsuarioUpdateInput!) {
            adminUsuarioUpdate(dataInput: $inputUpdate) {
                ... usuarioCrudFields
            }
        }
    `
}

export const CREATE_USUARIO =()=>{
    return gql`
        ${USUARIO_CRUD_FIELDS}
        mutation UsuarioCreate($inputCreate: UsuarioCreateInput!) {
            adminUsuarioCreate(dataInput: $inputCreate) {
                ... usuarioCrudFields
            }
        }
    `
}

export const DELETE_USUARIO =()=>{
    return gql`
    ${USUARIO_CRUD_FIELDS}
    mutation UsuarioDelete($id:Int!){
        adminUsuarioDelete( id:$id){
            ...usuarioCrudFields
        }
    }
    
    `
}