import { gql } from '@apollo/client';
import { PROVINCIA_DIGT_SELECT_FIELDS,CANTON_DIGT_SELECT_FIELDS,PARROQUIA_DIGT_SELECT_FIELDS,ZONA_DIGT_SELECT_FIELDS,
        JUNTA_DIGT_SELECT_FIELDS,DIGNIDAD_DIGT_SELECT_FIELDS, ACTA_DIGT_LIST_FIELDS } from '@infrastructure/graphql/graphql-digt-fragment';
        
export const GET_PROVINCIA_DIGT_SELECT =()=>{

    return gql`
        ${PROVINCIA_DIGT_SELECT_FIELDS}
            query ProvinciaDigtSelect(
                $inputWhere: ProvinciaDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtProvinciaCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...provinciaDigtSelectFields
                }
            }
    `
}

export const GET_CANTON_DIGT_SELECT =()=>{

    return gql`
        ${CANTON_DIGT_SELECT_FIELDS}
            query CantonDigtSelect(
                $inputWhere: CantonDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtCantonCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...cantonDigtSelectFields
                }
            }
    `
}

export const GET_PARROQUIA_DIGT_SELECT =()=>{

    return gql`
        ${PARROQUIA_DIGT_SELECT_FIELDS}
            query ParroquiaDigtSelect(
                $inputWhere: ParroquiaDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtParroquiaCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...parroquiaDigtSelectFields
                }
            }
    `
}


export const GET_ZONA_DIGT_SELECT =()=>{

    return gql`
        ${ZONA_DIGT_SELECT_FIELDS}
            query ZonaDigtSelect(
                $inputWhere: ZonaDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtZonaCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...zonaDigtSelectFields
                }
            }
    `
}


export const GET_JUNTA_DIGT_SELECT =()=>{

    return gql`
        ${JUNTA_DIGT_SELECT_FIELDS}
            query JuntaDigtSelect(
                $inputWhere: JuntaDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtJuntaCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...juntaDigtSelectFields
                }
            }
    `
}

export const GET_DIGNIDAD_DIGT_SELECT =()=>{

    return gql`
        ${DIGNIDAD_DIGT_SELECT_FIELDS}
            query DignidadDigtSelect(
                $inputWhere: DignidadDigitalizacionFilterInput,
                $inputOrder:StringOrderInput,               
            ){
                digtDignidadCollection(
                    where: $inputWhere
                    order: $inputOrder                    
                ){
                    ...dignidadDigtSelectFields
                }
            }
    `
}

export const GET_ACTA_DIGT_SELECT =()=>{

    return gql`
        ${ACTA_DIGT_LIST_FIELDS}
            query DigtActaByJuntaList(
                $dignidad_id: Int!,
                $junta_id:Int!,               
            ){
                digtActaByJuntaList(
                    dignidad_id: $dignidad_id
                    junta_id: $junta_id                    
                ){
                    ...actaDigtListFields
                }
            }
    `
}