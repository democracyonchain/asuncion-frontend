import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from "@components/forms";


export const formLogin = () => {
    const frmLogin=useForm<any>({resolver:yupResolver(schemaLogin)});
    return frmLogin;
}