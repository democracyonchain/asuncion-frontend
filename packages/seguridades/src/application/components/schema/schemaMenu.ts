import * as Yup from 'yup'

/**
 * Esquema de validación para el menú utilizando Yup.
 * 
 * @constant
 * @type {Yup.ObjectSchema}
 * 
 * @property {Yup.StringSchema} titulo_menu - Campo requerido que representa el título del menú.
 * @property {Yup.StringSchema} url_menu - Campo requerido que representa la URL del menú.
 * @property {Yup.StringSchema} icono_menu - Campo requerido que representa el ícono del menú.
 * @property {Yup.BooleanSchema} estado_menu - Campo opcional que representa el estado del menú.
 * @property {Yup.MixedSchema} idModulo_menu - Campo requerido que representa el ID del módulo del menú.
 * @property {Yup.NumberSchema} orden_menu - Campo requerido que representa el orden del menú.
 */
export const schemaMenu = Yup.object().shape({
    
    titulo_menu:Yup.string().required('El campo nombre es requerido'),   
    url_menu: Yup.string().required('El campo url es requerido'),
    icono_menu: Yup.string().required('El campo icono es requerido'),
    estado_menu:Yup.boolean(),
    idModulo_menu:Yup.mixed().required('Este campo Módulo es requerido'),
    orden_menu: Yup.number().required('El campo código es requerido'),

})