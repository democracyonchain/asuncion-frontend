import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaMenu } from "@application/components/schema/schemaMenu";

/**
 * Función que crea y retorna un formulario utilizando `useForm` con un esquema de validación `yupResolver`.
 *
 * @returns {any} - El formulario creado por `useForm` con el esquema de validación `schemaMenu`.
 */
export const formMenu = () => {
    const frmMenu=useForm<any>({resolver:yupResolver(schemaMenu)});
    return frmMenu;
}