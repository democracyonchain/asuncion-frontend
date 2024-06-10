import { gql} from '@apollo/client';

export const MODULO_COLLECTION_FIELDS = gql`
    fragment moduloCollectionFields on ModuloCollectionType{
        data {
            codigo
            color
            estado
            icono
            id
            nombre
            url
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

export const MODULO_ID_FIELDS = gql`

    fragment moduloIdFields on ModuloAdministracion{
        codigo
        color
        estado
        icono
        id
        nombre
        url
    }

`

export const MODULO_CRUD_FIELDS =  gql`

    fragment moduloCrudFields on GlobalResultType{
        message
        status
    }
`

export const MODULO_SELECT_FIELDS = gql`
    fragment moduloSelectFields on ModuloCollectionType{
        data {           
            id
            nombre            
        }
    }
`