import { useState } from 'react'
import { FormLayout } from '@components/forms/FormLayout'
import { formLayoutRol } from '@components/forms/';
import { RadioButtonInput} from "@components/forms/FormInput"
import { onSubmitRol } from '@components/service/authservice';
import { useAuthModuloPermisosIdLazyQuery} from "@infrastructure/graphql/__generated__/graphql-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/**
 * Componente `RolLayout` que renderiza un formulario para la selección de roles.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.setVisible - Función para cambiar la visibilidad del modal.
 * @param {boolean} props.visibleModal - Estado de visibilidad del modal.
 * @param {any} props.toast - Componente de notificación.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el layout del rol.
 * 
 * Variables Generales:
 * - `getRolSession`: Datos de la sesión del rol obtenidos del sessionStorage.
 * - `dataRolUser`: Datos del usuario del rol obtenidos del sessionStorage.
 * 
 * Hooks:
 * - `useAuthModuloPermisosIdLazyQuery`: Hook de GraphQL para obtener permisos de módulos.
 * - `formLayoutRol`: Hook para manejar el formulario.
 * - `useState`: Hook para manejar el estado de los labels.
 * - `useDispatch`: Hook para manejar el dispatch de Redux.
 * - `useNavigate`: Hook para manejar la navegación.
 * 
 * El componente utiliza el componente `FormLayout` para renderizar el formulario y el componente `RadioButtonInput` para renderizar las opciones de roles.
 * 
 * @example
 * <RolLayout setVisible={setVisible} visibleModal={visibleModal} toast={toast} />
 */
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
        <div>        
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
        </div>
    )
}
