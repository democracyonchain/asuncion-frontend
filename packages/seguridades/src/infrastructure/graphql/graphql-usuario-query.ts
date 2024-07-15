import { gql } from '@apollo/client';
import { USUARIO_COLLECTION_FIELDS,USUARIO_ID_FIELDS } from '@infrastructure/graphql/graphql-usuario-fragment';


export const GET_USUARIO_COLLECTION =()=>{

    return gql`
        ${USUARIO_COLLECTION_FIELDS}
        query usuarioCollection(
            $inputWhere: UsuarioFilterInput,
            $inputOrder:StringOrderInput,
            $inputPagination:PaginationInput
        ){
            adminUsuarioCollection(
                where: $inputWhere
                order: $inputOrder
                pagination: $inputPagination
            ){
                ...usuarioCollectionFields
            }
        }
    `
}

export const GET_USUARIO_ID = ()=>{
    
    return gql`
        ${USUARIO_ID_FIELDS}
        query Usuario($id:Int!)
        {
            adminUsuario(id:$id){
                ...usuarioIdFields
            }
        }    
    `
}