import * as Yup from 'yup'

/**
 * Esquema de validación para el módulo utilizando Yup.
 * 
 * @constant
 * @type {Yup.ObjectSchema}
 * 
 * @property {Yup.StringSchema} nombre_modulo - Campo requerido que representa el nombre del módulo.
 * @property {Yup.StringSchema} codigo_modulo - Campo requerido que representa el código del módulo.
 * @property {Yup.BooleanSchema} estado_modulo - Campo opcional que representa el estado del módulo.
 * @property {Yup.StringSchema} url_modulo - Campo requerido que representa la URL del módulo.
 * @property {Yup.StringSchema} icono_modulo - Campo requerido que representa el icono del módulo.
 * @property {Yup.StringSchema} color_modulo - Campo requerido que representa el color del módulo.
 */
export const schemaModulo = Yup.object().shape({
    
    nombre_modulo:Yup.string().required('El campo nombre es requerido'),   
    codigo_modulo: Yup.string().required('El campo código es requerido'),
    estado_modulo:Yup.boolean(),
    url_modulo: Yup.string().required('El campo url es requerido'),
    icono_modulo: Yup.string().required('El campo icono es requerido'),
    color_modulo: Yup.string().required('El campo color es requerido'),
})