import { gql } from '@apollo/client';

export const PROVINCIA_DIGT_SELECT_FIELDS = gql`
    fragment provinciaDigtSelectFields on ProvinciaDigitalizacionCollectionType{
        data {           
            id
            nombre            
        }
    }
`

export const CANTON_DIGT_SELECT_FIELDS = gql`
    fragment cantonDigtSelectFields on CantonDigitalizacionCollectionType{
        data {           
            id
            nombre            
        }
    }
`

export const PARROQUIA_DIGT_SELECT_FIELDS = gql`
    fragment parroquiaDigtSelectFields on ParroquiaDigitalizacionCollectionType{
        data {           
            id
            nombre            
        }
    }
`

export const ZONA_DIGT_SELECT_FIELDS = gql`
    fragment zonaDigtSelectFields on ZonaDigitalizacionCollectionType{
        data {                       
            nombre   
            zona_id         
        }
    }
`

export const JUNTA_DIGT_SELECT_FIELDS = gql`
    fragment juntaDigtSelectFields on JuntaDigitalizacionCollectionType{
        data {           
            electores
            id
            junta
            sexo
            zona_id
        }
    }
`

export const DIGNIDAD_DIGT_SELECT_FIELDS = gql`
    fragment dignidadDigtSelectFields on DignidadDigitalizacionCollectionType{
        data {           
            id
            nombre
        }
    }
`

export const ACTA_DIGT_LIST_FIELDS = gql`
    fragment actaDigtListFields on ActaDigitalizacionVoto{
       
        blancosdigitacion        
        dignidad_id
        estado
        id
        junta_id       
        nulosdigitacion       
        peticion
        seguridad      
        sufragantesdigitacion
        dignidad {
            ambito
            estado
            id
            nombre
            orden
        }
        junta {
            electores
            id
            junta
            sexo
            zona_id
            canton {
                id
                nombre
            }
            parroquia {
                id
                nombre
            }
            provincia {
                id
                nombre
            }
        }
        votos {
            votos
            votoscontrol
            votosdigitacion
            votosicr
            candidato {
                cedula
                id
                nombre
                orden
                dignidad {
                    ambito
                    estado
                    id
                    nombre
                    orden
                }
                partido {
                    id
                    nombre
                    lista
                    siglas
                }
            }
        }    
    }
`

export const ACTA_DIGITALIZACION_LIST_FIELDS = gql`
    fragment actaByDigititalizacionListFields on ActaDigitalizacionVotoImagen{
        blancosdigitacion
        dignidad_id
        estado
        id
        junta_id
        nulosdigitacion
        peticion
        seguridad
        sufragantesdigitacion
        dignidad {
            ambito
            estado
            id
            nombre
            orden
        }
        junta {
            electores
            id
            junta
            sexo
            zona_id
        }
        votos {
            votosdigitacion
            candidato {
                cedula
                id
                nombre
                orden
                dignidad {
                    ambito
                    estado
                    id
                    nombre
                    orden
                }
                partido {
                    lista
                    nombre
                }
            }
            imagensegmento {
                imagen
                junta_id
                nombre
            }
        }
    }

`