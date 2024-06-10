import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaUsuario } from "@application/components/schema/schemaUsuario";

export const formUsuario = () => {
    const frmUsuario=useForm<any>({resolver:yupResolver(schemaUsuario)});
    return frmUsuario;
}