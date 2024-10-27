import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaUsuario } from "@application/components/schema/schemaUsuario";

/**
 * Crea y devuelve un formulario utilizando `useForm` con un esquema de validación `schemaUsuario`.
 *
 * @returns {FormInstance<any>} El formulario configurado con el resolver `yupResolver`.
 */
export const formUsuario = () => {
    const frmUsuario=useForm<any>({resolver:yupResolver(schemaUsuario)});
    return frmUsuario;
}