import { gql } from '@apollo/client';
import { MENU_COLLECTION_FIELDS,MENU_ID_FIELDS,MENU_SELECT_FIELDS } from '@infrastructure/graphql/graphql-menu-fragment';


export const GET_MENU_COLLECTION =()=>{

    return gql`
        ${MENU_COLLECTION_FIELDS}
            query MenuCollection(
                $inputWhere: MenuFilterInput,
                $inputOrder:StringOrderInput,
                $inputPagination:PaginationInput
            ){
                adminMenuCollection(
                    where: $inputWhere
                    order: $inputOrder
                    pagination: $inputPagination
                ){
                    ...menuCollectionFields
                }
            }
        `
}

export const GET_MENU_ID = ()=>{
    
    return gql`
        ${MENU_ID_FIELDS}
        query Menu($id:Int!)
        {
            adminMenu(id:$id){
                ...menuIdFields
            }
        }    
    `
}


export const GET_MENU_SELECT =()=>{

    return gql`
        ${MENU_SELECT_FIELDS}
        query MenuSelect(
            $inputWhere: MenuFilterInput,
            $inputOrder:StringOrderInput,                
        ){
            adminMenuCollection(
                where: $inputWhere
                order: $inputOrder                    
            ){
                ...menuSelectFields
            }
        }
    `
}