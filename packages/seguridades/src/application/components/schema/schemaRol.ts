import * as Yup from 'yup'

export const schemaRol = Yup.object().shape({
    
    nombre_rol:Yup.string().required('El campo nombre es requerido'),    
    descripcion_rol: Yup.string().required('El campo descripción es requerido'),
    estado_rol:Yup.boolean(),
})
