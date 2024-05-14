import { gql } from '@apollo/client';
import { AUTH_LOGIN_FIELDS,AUTH_PERFIL_FIELDS,AUTH_MODULO_PERMISO_ID_FIELDS,AUTH_CAMBIO_PASSWORD,AUTH_LOGOUT } from '@infrastructure/graphql/graphql-auth-fragment';

export const GET_AUTH_LOGIN =()=>{

    return gql`

        ${AUTH_LOGIN_FIELDS}
        query Authlogin($password: String!,$username:String!){
            
            authlogin(password: $password, username: $username) {
                ...authLoginFields
            }
        }
    `
}

export const GET_AUTH_PERFIL =()=>{

    return gql`

        ${AUTH_PERFIL_FIELDS}
        query AuthPerfil{            
            authPerfil{
                ...authPerfilFields
            }
        }
    `
}

export const GET_AUTH_MODULO_PERMISO_ID_FIELDS =()=>{

    return gql`
        ${AUTH_MODULO_PERMISO_ID_FIELDS}
            query AuthModuloPermisosId($rol_id:Int!){
                authModuloPermisosId(rol_id:$rol_id){
                    ...authModuloPermisoIdFields
                }

        }
    `
}

export const GET_AUTH_CAMBIO_PASSWORD = ()=>{

    return gql`
        ${AUTH_CAMBIO_PASSWORD}
        query AuthCambioPassword($password:String!){
            authCambioPassword(password:$password){
                ...authCambioPassword
            }
        }
    
    `
}

export const GET_AUTH_LOGOUT=()=>{

    return gql`

        ${AUTH_LOGOUT}
        query Authlogout{
            authlogout{
                ...authLogout
            }
        }
    `
}