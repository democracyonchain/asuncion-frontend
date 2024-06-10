import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaMenu } from "@application/components/schema/schemaMenu";

export const formMenu = () => {
    const frmMenu=useForm<any>({resolver:yupResolver(schemaMenu)});
    return frmMenu;
}