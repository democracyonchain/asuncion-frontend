import * as Yup from 'yup'

export const schemaModulo = Yup.object().shape({
    
    nombre_modulo:Yup.string().required('El campo nombre es requerido'),   
    codigo_modulo: Yup.string().required('El campo código es requerido'),
    estado_modulo:Yup.boolean(),
    url_modulo: Yup.string().required('El campo url es requerido'),
    icono_modulo: Yup.string().required('El campo icono es requerido'),
    color_modulo: Yup.string().required('El campo color es requerido'),
})