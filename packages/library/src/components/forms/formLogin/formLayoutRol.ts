import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRolLayout } from "@components/forms";


/**
 * Función que crea y retorna un formulario utilizando `useForm` con un esquema de validación `yupResolver`.
 *
 * @returns {any} - El formulario creado con `useForm` y el esquema de validación `schemaRolLayout`.
 */
export const formLayoutRol = () => {
    const frmLayoutRol=useForm<any>({resolver:yupResolver(schemaRolLayout)});
    return frmLayoutRol;
}