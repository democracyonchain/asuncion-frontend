import { gql } from '@apollo/client';

export const AUTH_LOGIN_FIELDS = gql`

    fragment authLoginFields on Login{
        token
        username
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
        estado
        icono
        id
        nombre
        url
        color
        menu {
            id
            titulo
            icono
            url
            permisos {
                crear
                editar
                eliminar
                id
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