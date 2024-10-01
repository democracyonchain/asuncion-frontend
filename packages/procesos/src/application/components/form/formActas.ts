import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaActas,schemaActaDigita } from "@application/components/schema/schemaActas";

/**
 * Crea y retorna un formulario utilizando la librería `useForm` con un esquema de validación `schemaActas`.
 *
 * @returns {UseFormReturn<any>} - El formulario configurado con el esquema de validación.
 */
export const formActa = () => {
    const frmActa=useForm<any>({resolver:yupResolver(schemaActas)});
    return frmActa;
}


/**
 * Crea y devuelve un formulario utilizando `useForm` con un esquema de validación `schemaActaDigita`.
 *
 * @returns {UseFormReturn<any>} El formulario configurado con el esquema de validación.
 */
export const formActaDigita = () => {
    const frmActaDigita=useForm<any>({resolver:yupResolver(schemaActaDigita)});
    return frmActaDigita;
}
