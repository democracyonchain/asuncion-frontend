import { gql} from '@apollo/client';

export const MENU_COLLECTION_FIELDS = gql`
    fragment menuCollectionFields on MenuCollectionType{
        data {
            estado
            icono
            id
            modulo_id
            orden
            titulo
            url
            modulo {                
                nombre              
            }
        }
        pageInfo {
            count
            hasNextPage
            hasPreviousPage
            limit
            offset
        }
    }
`


export const MENU_ID_FIELDS = gql`

    fragment menuIdFields on MenuAdministracion{
        estado
        icono
        id
        orden
        titulo
        url
        modulo {
            id
            nombre
        }
    }

`

export const MENU_CRUD_FIELDS =  gql`

    fragment menuCrudFields on GlobalResultType{
        message
        status
    }
`

export const MENU_SELECT_FIELDS = gql`
    fragment menuSelectFields on MenuCollectionType{
        data {           
            id
            titulo            
        }
    }
`