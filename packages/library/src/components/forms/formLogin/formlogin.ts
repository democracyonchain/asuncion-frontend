import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin,schemaPass } from "@components/forms";


/**
 * Función que crea y retorna un formulario de inicio de sesión utilizando `useForm` y un esquema de validación `yupResolver`.
 *
 * @returns {object} - El formulario de inicio de sesión configurado.
 */
export const formLogin = () => {
    const frmLogin=useForm<any>({resolver:yupResolver(schemaLogin)});
    return frmLogin;
}

/**
 * Crea y retorna un formulario utilizando `useForm` con un esquema de validación `schemaPass`.
 *
 * @returns {object} frmPass - El formulario creado con `useForm` y validado con `yupResolver`.
 */
export const formPass= () => {
    const frmPass=useForm<any>({resolver:yupResolver(schemaPass)});
    return frmPass;
}