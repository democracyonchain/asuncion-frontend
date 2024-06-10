import * as Yup from 'yup'

export const schemaMenu = Yup.object().shape({
    
    titulo_menu:Yup.string().required('El campo nombre es requerido'),   
    url_menu: Yup.string().required('El campo url es requerido'),
    icono_menu: Yup.string().required('El campo icono es requerido'),
    estado_menu:Yup.boolean(),
    idModulo_menu:Yup.mixed().required('Este campo Módulo es requerido'),
    orden_menu: Yup.number().required('El campo código es requerido'),

})