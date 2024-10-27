import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRol } from "@application/components/schema/schemaRol";

/**
 * Crea y retorna un formulario utilizando `useForm` con una resolución de esquema `yup`.
 *
 * @returns {UseFormReturn<any>} El formulario configurado con el esquema `schemaRol`.
 */
export const formRol = () => {
    const frmRol=useForm<any>({resolver:yupResolver(schemaRol)});
    return frmRol;
}
