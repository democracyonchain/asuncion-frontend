import { gql} from '@apollo/client';
import {MODULO_COLLECTION_FIELDS,MODULO_ID_FIELDS,MODULO_SELECT_FIELDS} from '@infrastructure/graphql/graphql-modulo-fragment';


export const GET_MODULO_COLLECTION =()=>{

    return gql`
        ${MODULO_COLLECTION_FIELDS}
            query ModuloCollection(
                $inputWhere: ModuloFilterInput,
                $inputOrder:StringOrderInput,
                $inputPagination:PaginationInput
            ){
                moduloCollection(
                    where: $inputWhere
                    order: $inputOrder
                    pagination: $inputPagination
                ){
                    ...moduloCollectionFields
                }
            }
        `
}

export const GET_MODULO_ID = ()=>{
    
    return gql`
        ${MODULO_ID_FIELDS}
        query Modulo($id:Int!)
        {
            modulo(id:$id){
                ...moduloIdFields
            }
        }
    
    
    `
}


export const GET_MODULO_SELECT =()=>{

    return gql`
        ${MODULO_SELECT_FIELDS}
            query ModuloSelect(
                $inputWhere: ModuloFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                moduloCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...moduloSelectFields
                }
            }
        `
}