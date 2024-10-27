import * as Yup from 'yup'

/**
 * Esquema de validación para el formulario de inicio de sesión.
 * Utiliza Yup para definir las reglas de validación.
 * 
 * @constant
 * @type {Yup.ObjectSchema}
 * 
 * @property {Yup.StringSchema} username_login - Campo de usuario, requerido.
 * @property {Yup.StringSchema} contrasenia_login - Campo de contraseña, requerido.
 */
export const schemaLogin = Yup.object().shape({
    username_login:Yup.string().required('El campo usuario es requerido'),   
    contrasenia_login: Yup.string().required('El campo contraseña es requerido'),
})


/**
 * Esquema de validación para el campo de contraseña en el formulario de inicio de sesión.
 * Utiliza Yup para definir las reglas de validación.
 * 
 * @constant
 * @type {Yup.ObjectSchema}
 * @property {Yup.StringSchema} contrasenia_login - Campo de contraseña, es requerido.
 */
export const schemaPass = Yup.object().shape({  
    contrasenia_login: Yup.string().required('El campo contraseña es requerido'),
})