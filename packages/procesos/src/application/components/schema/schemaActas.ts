import * as Yup from 'yup'

export const schemaActas = Yup.object().shape({
    idProvincia_acta:Yup.mixed().required('Este campo Provincia es requerido'),   
    idCanton_acta:Yup.mixed().required('Este campo Canton es requerido'),
    idParroquia_acta:Yup.mixed().required('Este campo Parroquia es requerido'),
    idZona_acta:Yup.mixed().required('Este campo Zona es requerido'),
    idDignidad_acta:Yup.mixed().required('Este campo Dignidad es requerido'),
    idJunta_acta:Yup.mixed().required('Este campo Junta es requerido'),
})