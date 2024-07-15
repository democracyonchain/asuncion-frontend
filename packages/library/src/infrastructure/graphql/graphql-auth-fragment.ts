import { gql } from '@apollo/client';

export const AUTH_LOGIN_FIELDS = gql`

    fragment authLoginFields on Login{
        token
        username
        provincia
    }
`

export const AUTH_PERFIL_FIELDS = gql`

    fragment authPerfilFields on UsuarioAuth{
        apellidos
        email
        id
        nombres
        username
        rolusuario {
            id
            rol {
                descripcion
                id
                nombre
            }
        }
    }
`

export const AUTH_MODULO_PERMISO_ID_FIELDS = gql`

    fragment authModuloPermisoIdFields on ModuloAuth{
        codigo
        icono
        nombre
        url
        color
        menu {            
            titulo
            icono
            url
            permisos {
                crear
                editar
                eliminar               
                imprimir
                leer
            }
        }
    }
`

export const AUTH_CAMBIO_PASSWORD = gql`

    fragment authCambioPassword on GlobalResultType{
        message
        status
    }

`

export const AUTH_LOGOUT = gql`

    fragment authLogout on GlobalResultType{
        message
        status
    }
`

export const PROVINCIA_SELECT_FIELDS = gql`
    fragment provinciaSelectFields on ProvinciaCollectionType{
        data {           
            id
            nombre            
        }
    }
`

export const ESTABLECIMIENTO_SELECT_FIELDS = gql`
    fragment establecimientoSelectFields on EstablecimientoCollectionType{
        data {
            id
            nombre            
        }
    }
`