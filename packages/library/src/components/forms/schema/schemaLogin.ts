import * as Yup from 'yup'

export const schemaLogin = Yup.object().shape({
    username_login:Yup.string().required('El campo usuario es requerido'),   
    contrasenia_login: Yup.string().required('El campo contraseña es requerido'),
})