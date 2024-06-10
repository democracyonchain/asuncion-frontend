import { gql } from '@apollo/client';
import { ROL_COLLECTION_FIELDS,ROL_ID_FIELDS,ROL_SELECT_FIELDS } from '@infrastructure/graphql/graphql-rol-fragment';


export const GET_ROL_COLLECTION =()=>{

    return gql`
        ${ROL_COLLECTION_FIELDS}
        query RolCollection(
            $inputWhere: RolFilterInput,
            $inputOrder:StringOrderInput,
            $inputPagination:PaginationInput
        ){
            rolCollection(
                where: $inputWhere
                order: $inputOrder
                pagination: $inputPagination
            ){
                ...rolCollectionFields
            }
        }
    `
}

export const GET_ROL_ID = ()=>{
    
    return gql`
        ${ROL_ID_FIELDS}
        query Rol($id:Int!)
        {
            rol(id:$id){
                ...rolIdFields
            }
        }    
    `
}


export const GET_MODULO_SELECT =()=>{

    return gql`
        ${ROL_SELECT_FIELDS}
            query RolSelect(
                $inputWhere: RolFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                rolCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...rolSelectFields
                }
            }
        `
}