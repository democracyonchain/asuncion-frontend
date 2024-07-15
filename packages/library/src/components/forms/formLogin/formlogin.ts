import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin,schemaPass } from "@components/forms";


export const formLogin = () => {
    const frmLogin=useForm<any>({resolver:yupResolver(schemaLogin)});
    return frmLogin;
}

export const formPass= () => {
    const frmPass=useForm<any>({resolver:yupResolver(schemaPass)});
    return frmPass;
}