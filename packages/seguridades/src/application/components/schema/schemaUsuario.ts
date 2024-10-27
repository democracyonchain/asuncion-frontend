import * as Yup from 'yup'

/**
 * Esquema de validación para el objeto `schemaUsuario` utilizando Yup.
 * 
 * @constant
 * @type {Yup.ObjectSchema}
 * 
 * @property {Yup.StringSchema} username_usuario - Campo de tipo string requerido para el nombre de usuario.
 * @property {Yup.StringSchema} nombres_usuario - Campo de tipo string requerido para los nombres del usuario.
 * @property {Yup.StringSchema} apellidos_usuario - Campo de tipo string requerido para los apellidos del usuario.
 * @property {Yup.StringSchema} correo_usuario - Campo de tipo string requerido para el correo electrónico del usuario, con validación de formato de email.
 * @property {Yup.StringSchema} contrasenia_usuario - Campo de tipo string para la contraseña del usuario. Es requerido si `opt_usuario` es 'N', de lo contrario es nullable.
 * @property {Yup.MixedSchema} idRol_usuario - Campo mixto requerido para el rol del usuario.
 * @property {Yup.BooleanSchema} estado_usuario - Campo de tipo booleano para el estado del usuario.
 * @property {Yup.BooleanSchema} roles_usuario - Campo de tipo booleano para los roles del usuario.
 * @property {Yup.StringSchema} opt_usuario - Campo de tipo string nullable para opciones del usuario.
 * @property {Yup.MixedSchema} idProvincia_usuario - Campo mixto requerido para la provincia del usuario.
 * @property {Yup.MixedSchema} idEstablecimiento_usuario - Campo mixto requerido para el establecimiento del usuario.
 */
export const schemaUsuario = Yup.object().shape({
    
    username_usuario:Yup.string().required('El campo username es requerido'),   
    nombres_usuario: Yup.string().required('El campo nombre es requerido'),
    apellidos_usuario: Yup.string().required('El campo apellido es requerido'),
    correo_usuario: Yup.string().email('Email incorrecto').required('El campo correo es requerido'),
    contrasenia_usuario:Yup.string().when('opt_usuario', (opt_usuario:any, schema:any) => {
        let valid=schema;

        if (opt_usuario[0] =='N') {
            valid = schema.required('Este campo es requerido');
        }else{
            valid = schema.nullable();
        }
        
        return valid;
    }),

    idRol_usuario:Yup.mixed().required('El campo Rol es requerido'),
    estado_usuario:Yup.boolean(),
    roles_usuario:Yup.boolean(),
    opt_usuario:Yup.string().nullable(),
    idProvincia_usuario:Yup.mixed().required('Este campo Provincia es requerido'),
    idEstablecimiento_usuario:Yup.mixed().required('Este campo Empresa es requerido')
})