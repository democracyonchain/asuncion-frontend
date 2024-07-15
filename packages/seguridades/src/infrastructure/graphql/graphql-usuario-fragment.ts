import { gql} from '@apollo/client';

export const USUARIO_COLLECTION_FIELDS = gql`
    fragment usuarioCollectionFields on UsuarioCollectionType{
        data {
            apellidos
            estado
            id
            nombres
            provincia_id
            username
            email
            provincia {
                id
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

export const USUARIO_ID_FIELDS = gql`

    fragment usuarioIdFields on UsuarioAdministracion{
        apellidos
        establecimiento_id
        estado
        id
        nombres
        provincia_id
        username
        email
        rolusuario {
            id
            rol {               
                id
                nombre
            }
        }
        provincia {
            id
            nombre
        }
        establecimiento {
            id
            logo
            nombre
        }
    }

`


export const USUARIO_CRUD_FIELDS =  gql`

    fragment usuarioCrudFields on GlobalResultType{
        message
        status
    }

`