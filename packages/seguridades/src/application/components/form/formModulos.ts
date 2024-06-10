import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaModulo } from "@application/components/";

export const formModulo = () => {
    const frmModulo=useForm<any>({resolver:yupResolver(schemaModulo)});
    return frmModulo;
}
