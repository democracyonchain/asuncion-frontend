import * as Yup from 'yup'

export const schemaRolLayout = Yup.object().shape({
    rol_layout:Yup.boolean().nullable(),   
})