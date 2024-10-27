import * as Yup from 'yup'


/**
 * Esquema de validación para el formulario de actas utilizando Yup.
 * 
 * Este esquema define las validaciones requeridas para los campos del formulario de actas.
 * 
 * Campos:
 * - `idProvincia_acta`: Campo requerido que representa la provincia del acta.
 * - `idCanton_acta`: Campo requerido que representa el cantón del acta.
 * - `idParroquia_acta`: Campo requerido que representa la parroquia del acta.
 * - `idZona_acta`: Campo requerido que representa la zona del acta.
 * - `idDignidad_acta`: Campo requerido que representa la dignidad del acta.
 * - `idJunta_acta`: Campo requerido que representa la junta del acta.
 * 
 * @returns {Yup.ObjectSchema} Esquema de validación de Yup para el formulario de actas.
 */
export const schemaActas = Yup.object().shape({
    idProvincia_acta:Yup.mixed().required('Este campo Provincia es requerido'),   
    idCanton_acta:Yup.mixed().required('Este campo Canton es requerido'),
    idParroquia_acta:Yup.mixed().required('Este campo Parroquia es requerido'),
    idZona_acta:Yup.mixed().required('Este campo Zona es requerido'),
    idDignidad_acta:Yup.mixed().required('Este campo Dignidad es requerido'),
    idJunta_acta:Yup.mixed().required('Este campo Junta es requerido'),
})


/**
 * Esquema de validación para el objeto Acta Digital.
 * Utiliza Yup para definir las reglas de validación.
 * 
 * @constant
 * @type {Yup.ObjectSchema}
 * 
 * @property {Yup.MixedSchema} idDignidad_acta - Campo requerido que representa la dignidad del acta.
 * 
 * @example
 * const validacion = schemaActaDigita.validate({
 *   idDignidad_acta: 'valor'
 * });
 * 
 * @throws {ValidationError} Si el campo `idDignidad_acta` está vacío o no cumple con las reglas de validación.
 */
export const schemaActaDigita = Yup.object().shape({
   
    idDignidad_acta:Yup.mixed().required('Este campo Dignidad es requerido'),
   
})