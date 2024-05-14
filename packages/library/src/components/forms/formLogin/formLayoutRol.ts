import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRolLayout } from "@components/forms";


export const formLayoutRol = () => {
    const frmLayoutRol=useForm<any>({resolver:yupResolver(schemaRolLayout)});
    return frmLayoutRol;
}