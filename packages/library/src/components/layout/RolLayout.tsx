import { useState } from 'react'
import { FormLayout } from '@components/forms/FormLayout'
import { formLayoutRol } from '@components/forms/';
import { RadioButtonInput} from "@components/forms/FormInput"
import { onSubmitRol } from '@components/service/authservice';
import { useAuthModuloPermisosIdLazyQuery} from "@infrastructure/graphql/__generated__/graphql-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const RolLayout = ({setVisible,visibleModal,toast}:{setVisible:any,visibleModal:any,toast:any}) => {

    //Variables Generales
    const getRolSession=JSON.parse(sessionStorage.getItem("getRolSession") as any);
    const dataRolUser=JSON.parse(sessionStorage.getItem("dataRolUser") as any)

    // Hook Graphql
    const [ setAuthModuloPermisosIdLazyQuery ] = useAuthModuloPermisosIdLazyQuery();

    //Form Hook
	const methods = formLayoutRol();
    
    //UseState
    const [ labels, setLabels ] = useState<{ btn1: string, btn2: string, icon: boolean, btnload: boolean }>({ btn1: (dataRolUser)?'Cancelar':'', btn2: 'Guardar', icon: true, btnload: false });

    //Gestor estados Redux
    const dispatch = useDispatch()

    //Varaibles Generales
	const navigate = useNavigate();

    return (
        <>        
            <FormLayout 
                methods={methods} onSubmit={(data:any)=>{onSubmitRol({data,getRolSession,setVisible,toast,setAuthModuloPermisosIdLazyQuery,dispatch,navigate})}} labels={labels} 
                onReset={()=>{setVisible({active:false,header:'',closable:false,maximizable:true})}} 
                setVisibleModal={setVisible} 
                width='25rem' 
                visibleModal={visibleModal} opt=''>

                <div className="flex flex-column gap-3 mb-4">
                    {getRolSession?.map((data:any, key:any)=>(                       
                        <div className="flex align-items-center " key={key}>
                            <RadioButtonInput                                
                                methods={methods} 
                                disabled={false} 
                                label={data?.rol?.nombre} 
                                name='roles' 
                                inputId={data?.rol?.id} 
                                value={key}
                                setValue={(dataRolUser)?dataRolUser?.key:0}                               
                               />           
                        </div>
                    ))} 
                   
                </div>
            </FormLayout>
        </>
    )
}
