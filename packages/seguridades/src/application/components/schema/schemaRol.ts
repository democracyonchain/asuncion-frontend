import * as Yup from 'yup'

/**
 * Esquema de validación para el rol utilizando Yup.
 * 
 * @constant
 * @type {Yup.ObjectSchema}
 * 
 * @property {Yup.StringSchema} nombre_rol - Campo requerido que representa el nombre del rol.
 * @property {Yup.StringSchema} descripcion_rol - Campo requerido que representa la descripción del rol.
 * @property {Yup.BooleanSchema} estado_rol - Campo opcional que representa el estado del rol.
 */
export const schemaRol = Yup.object().shape({
    
    nombre_rol:Yup.string().required('El campo nombre es requerido'),    
    descripcion_rol: Yup.string().required('El campo descripción es requerido'),
    estado_rol:Yup.boolean(),
})
