import { gql} from '@apollo/client';

export const ROL_COLLECTION_FIELDS = gql`
    fragment rolCollectionFields on RolCollectionType{
        data {
            descripcion
            estado
            id
            nombre
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

export const ROL_ID_FIELDS = gql`

    fragment rolIdFields on Rol{
        descripcion
        estado
        id
        nombre
        permisos {
            crear
            editar
            eliminar
            estado
            id
            imprimir
            leer
            menu {                
                id                
                titulo
            }
        }
    }

`

export const ROL_CRUD_FIELDS =  gql`

    fragment rolCrudFields on GlobalResultType{
        message
        status
    }

`

export const ROL_SELECT_FIELDS = gql`
    fragment rolSelectFields on RolCollectionType{
        data {           
            id
            nombre            
        }
    }
`