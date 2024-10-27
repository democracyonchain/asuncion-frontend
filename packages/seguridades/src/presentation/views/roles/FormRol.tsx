import { useEffect,useState,useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { setLabelTab } from '@presentation/actions';
import { FormCore,TextInput,graphql,UtilsSpinner,UtilsPanel,UtilsMessages } from "@bsc/library";
import { formRol} from '@application/components/form'
import { processResetForm,processRolQuery,processValueForm,processSubmitForm,processMenuSelect,
        categories,processDataCheck, processHeaderTemplate } from "@application/services/rolService"
import { useDispatch,useSelector } from "react-redux";
import { RootState } from '@presentation/stores';
import Icon from '@mui/material/Icon';

/**
 * Componente `FormRol` para la gestión de roles en la aplicación.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.navigate - Función de navegación.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el formulario de roles.
 * 
 * @remarks
 * Este componente utiliza varios hooks de React y Redux para manejar el estado y las operaciones de GraphQL.
 * 
 * @hook
 * - `useLocation` para obtener el estado de la ubicación.
 * - `useSelector` y `useDispatch` para interactuar con el estado de Redux.
 * - `useRef` para crear una referencia mutable para el toast.
 * - `useState` para manejar múltiples estados locales.
 * - `useEffect` para ejecutar efectos secundarios en función de cambios en el estado.
 * 
 * @graphql
 * - `useRolLazyQuery`, `useRolCreateMutation`, `useRolUpdateMutation`, `useMenuSelectLazyQuery` para realizar operaciones de GraphQL.
 * 
 * @function
 * - `onSwitch` para manejar el cambio de estado del rol.
 * 
 * @returns
 * - Renderiza un formulario con varios campos de entrada y componentes personalizados como `UtilsSpinner`, `FormCore`, `TextInput`, `UtilsPanel` y `UtilsMessages`.
 * 
 * @example
 * ```tsx
 * <FormRol navigate={navigateFunction} />
 * ```
 */
export const FormRol = ({navigate}:{navigate:any}) => {
  // Location Hook
	const { state } = useLocation();
	
	//Gestor estados Redux
	const { labelTab,cache }:any= useSelector<RootState>( (state) => state.seguridades);
	const dispatch = useDispatch();

	//hook UseRef
	const toast = useRef<any>(null);

	//Form Hook
	const methods = formRol();
	const { setValue, clearErrors,reset,getValues } = methods;

	//Hook State
	const [ estadoForm,setEstadoForm ] = useState<{status:boolean,etiqueta:string}>({status:false,etiqueta:''})
	const [ rolQuery,setRolQuery] = useState<any>()
	const [ statusLoading, setStatusLoading] = useState<boolean>(false)
	const [ visible,setVisible] =useState<{status:boolean,mensaje:string,accept?:any,reject?:any}>(
		{
			status:false,mensaje:'',accept:()=>{},reject:()=>{}
		}
	)  
	const [ labels, setLabels ] = useState<{ btn1?: string, btn2?: string, icon?: boolean, btnload?: boolean,opt?:string }>({ btn1: '', btn2: '', icon: true, btnload: false,opt:'N' })
    const [ dataMenuSelect,setDataMenuSelect ] = useState<any>();
    const [ mensaje,setMensaje ] = useState();
    const [ disabled,setDisabled ] = useState<any>([]);
    
	//Metodos Graphql
	const { useRolLazyQuery,useRolCreateMutation,useRolUpdateMutation,useMenuSelectLazyQuery } = graphql
  	const [ getRolLazyQuery ] = useRolLazyQuery();
	const [ rolCreateMutation ] = useRolCreateMutation();
	const [ rolUpdateMutation ] = useRolUpdateMutation();
    const [ getMenuSelectLazyQuery ] = useMenuSelectLazyQuery();    

	const onSwitch=(status:any)=>{
		setEstadoForm({...estadoForm,etiqueta:(status)?'Activo':'Inactivo'});  
	}

	//Hook UseState
	useEffect(()=>{
		if(rolQuery){
			processValueForm({setValue,rolQuery,setEstadoForm,setDisabled,disabled,getValues});
		}
	},[rolQuery])

	useEffect(()=>{	
        processMenuSelect({getMenuSelectLazyQuery,setDataMenuSelect,dispatch,cache,setDisabled})
		if(state){
			let dataId=state?.dataRecord?.dataGrid;	
			if(dataId?.id){
				dispatch(setLabelTab({...labelTab,labelNew:'Editar Rol',iconNew:'edit_square'}));
				processRolQuery({getRolLazyQuery,setRolQuery,query:{id:parseInt(dataId?.id)},setStatusLoading});
				setLabels({ ...labels,btn1: 'Cancelar', btn2: 'Editar',opt:'E'});	
			}		
			
		}else{
			setValue('estado_rol',true)
			setEstadoForm({status:true,etiqueta:'Activo'});
			setLabels({ ...labels,btn1: 'Cancelar', btn2: 'Guardar',opt:'N'});
		}
	},[])
		
   
	return (
		<>		
			<UtilsSpinner visible={statusLoading}/>
			<FormCore 
				labels={labels} 
				onSubmit={(data:any)=>{processSubmitForm({data,setVisible,toast,labels,rolCreateMutation,rolUpdateMutation,navigate,dispatch,setMensaje})}} 
				onReset={()=>processResetForm({clearErrors,reset,dispatch,labelTab,setLabelTab,navigate})}
				methods={methods}
				visible={visible}
				setVisible={setVisible}
				toast={toast}
			>
                <div className="grid justify-content-end">
                    <TextInput disabled={estadoForm.status} label={estadoForm.etiqueta} name='estado_rol' methods={methods} optInput={'S'} onChange={onSwitch}/>
                </div>
                <div className="formgrid grid">
                    <div className='field col-12 md:col-6 mb-4'>
                        <TextInput disabled={false} label='Nombre *' name='nombre_rol' placeholder="Ingrese el Nombre" 
                        methods={methods} maxLength={40}
                        />
                    </div>
                    <div className='field col-12 md:col-6'>
                        <TextInput disabled={false} label='Descripción *' name='descripcion_rol' placeholder="Ingrese una Descripción" methods={methods} maxLength={100}/>
                    </div>              
                </div>  
                <div className="formgrid grid">                   
                    <div className='field col-12 md:col-12'>   
					                  
                        {
                            dataMenuSelect?.map((data:any,key:any)=>{
                                return(
                                    <div key={key} className='m-2 '>                                        
                                        <UtilsPanel  headerTemplate={
                                                (options:any)=>processHeaderTemplate({data,options,key,methods,setValue,getValues,setDisabled,disabled})
                                            }  >
                                            <div className="formgrid grid">	
                                                {
                                                    categories.map((category:any, keyId:any)=>{
                                                        return(
                                                            <div className='col-12 md:col-3 flex align-items-center mt-3' key={keyId}> 
                                                                <TextInput disabled={disabled[key]?.disabled}  label={category.name} name={`accesos${keyId}${data.id}`} 
                                                                    methods={methods} optInput={'S'} 
                                                                    onChange={(e:any)=>{processDataCheck({data,category,chek:e,key,opt:'C',setValue,getValues})}}/>
																	<Icon fontSize="medium" className='text-gray-500'>{category.icon}</Icon>  
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </UtilsPanel>                                        
                                    </div>                                  
                                )
                            })
                        }
                        {(mensaje)&& 
                            <div className='mb-4 w-full'>
                                <UtilsMessages data={[{sticky: true, severity: 'error', summary: 'Atención', detail: mensaje,closable:false}]}></UtilsMessages>
                            </div>
                        }
                    </div>
                    
                </div>  
			</FormCore>
		</>
	)
}
