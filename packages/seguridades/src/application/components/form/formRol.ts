import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRol } from "@application/components/schema/schemaRol";

export const formRol = () => {
    const frmRol=useForm<any>({resolver:yupResolver(schemaRol)});
    return frmRol;
}
