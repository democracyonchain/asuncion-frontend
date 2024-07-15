import { useState } from 'react'
import { FormLayout } from '@components/forms/FormLayout'
import { formPass } from '@components/forms/';
import { TextInput} from "@components/forms/FormInput"
import { onSubmitPass } from '@components/service/authservice';
import { useAuthCambioPasswordMutation,useAuthlogoutLazyQuery } from "@infrastructure/graphql/__generated__/graphql-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PasswordLayout = ({setVisible,visibleModal,toast}:{setVisible:any,visibleModal:any,toast:any}) => {
     // Hook Graphql
     const [ setAuthAuthCambioPasswordLazyQuery ] = useAuthCambioPasswordMutation();
     const [ setAuthlogoutLazyQuery ] = useAuthlogoutLazyQuery();

    //Form Hook
    const methods = formPass();
     
    //UseState
    const [ labels, setLabels ] = useState<{ btn1: string, btn2: string, icon: boolean, btnload: boolean }>({ btn1: 'Cancelar', btn2: 'Guardar', icon: true, btnload: false });
 
    //Gestor estados Redux
    const dispatch = useDispatch()
 
    //Varaibles Generales
    const navigate = useNavigate();

    return (
        <>        
        <FormLayout 
            methods={methods} onSubmit={(data:any)=>{onSubmitPass({data,setVisible,toast,setAuthAuthCambioPasswordLazyQuery,dispatch,navigate,setAuthlogoutLazyQuery})}} labels={labels} 
            onReset={()=>{setVisible({active:false,header:'',closable:false,maximizable:true})}} 
            setVisibleModal={setVisible} 
            width='25rem' 
            visibleModal={visibleModal} opt=''>
            
            <div className="formgrid grid">	
                <div className='field col-12 md:col-12'>
                <TextInput label='Contraseña *' name='contrasenia_login'  methods={methods} optInput='P'  toggleMask />
                </div>
            </div>
           
        </FormLayout>
    </>
    )
}
