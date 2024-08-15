import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaActas } from "@application/components/schema/schemaActas";

export const formActa = () => {
    const frmActa=useForm<any>({resolver:yupResolver(schemaActas)});
    return frmActa;
}