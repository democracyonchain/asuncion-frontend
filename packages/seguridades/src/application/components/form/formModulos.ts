import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaModulo } from "@application/components/";

/**
 * Crea y retorna un formulario utilizando `useForm` con un esquema de validación `yupResolver`.
 *
 * @returns {object} - El formulario creado por `useForm`.
 */
export const formModulo = () => {
    const frmModulo=useForm<any>({resolver:yupResolver(schemaModulo)});
    return frmModulo;
}
