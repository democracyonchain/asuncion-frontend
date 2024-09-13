import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaActas,schemaActaDigita } from "@application/components/schema/schemaActas";

export const formActa = () => {
    const frmActa=useForm<any>({resolver:yupResolver(schemaActas)});
    return frmActa;
}


export const formActaDigita = () => {
    const frmActaDigita=useForm<any>({resolver:yupResolver(schemaActaDigita)});
    return frmActaDigita;
}
