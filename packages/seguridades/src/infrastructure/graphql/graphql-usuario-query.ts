import { gql } from '@apollo/client';
import { USUARIO_COLLECTION_FIELDS,USUARIO_ID_FIELDS } from '@infrastructure/graphql/graphql-usuario-fragment';


/**
 * Consulta GraphQL para obtener una colección de usuarios.
 * 
 * Esta función define una consulta que utiliza los campos de la colección de usuarios
 * y permite filtrar, ordenar y paginar los resultados.
 * 
 * @returns La consulta GraphQL para obtener la colección de usuarios.
 * 
 * @example
 * ```typescript
 * const query = GET_USUARIO_COLLECTION();
 * ```
 * 
 * @typedef {Object} UsuarioFilterInput - Filtros aplicables a la colección de usuarios.
 * @typedef {Object} StringOrderInput - Orden aplicable a la colección de usuarios.
 * @typedef {Object} PaginationInput - Paginación aplicable a la colección de usuarios.
 */
export const GET_USUARIO_COLLECTION =()=>{

    return gql`
        ${USUARIO_COLLECTION_FIELDS}
        query usuarioCollection(
            $inputWhere: UsuarioFilterInput,
            $inputOrder:StringOrderInput,
            $inputPagination:PaginationInput
        ){
            adminUsuarioCollection(
                where: $inputWhere
                order: $inputOrder
                pagination: $inputPagination
            ){
                ...usuarioCollectionFields
            }
        }
    `
}

/**
 * Consulta GraphQL para obtener un usuario por su ID.
 *
 * @returns La consulta GraphQL para obtener un usuario por su ID.
 *
 * @example
 * ```typescript
 * const query = GET_USUARIO_ID();
 * ```
 */
export const GET_USUARIO_ID = ()=>{
    
    return gql`
        ${USUARIO_ID_FIELDS}
        query Usuario($id:Int!)
        {
            adminUsuario(id:$id){
                ...usuarioIdFields
            }
        }    
    `
}