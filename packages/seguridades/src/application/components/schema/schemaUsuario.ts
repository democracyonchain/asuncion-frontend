import * as Yup from 'yup'

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
    idProvincia_usuario:Yup.mixed().required('Este campo Módulo es requerido'),

})