import { useEffect,useState,useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { setLabelTab } from '@presentation/actions';
import { FormCore,TextInput,graphql,UtilsSpinner,MultiSelectInput } from "@bsc/library";
import { formUsuario} from '@application/components/form'
import { processResetForm,processUsuarioQuery,processValueForm,processSubmitForm,processRolSelect } from "@application/services/usuarioService"
import { useDispatch,useSelector } from "react-redux";
import { RootState } from '@presentation/stores';

export const FormUsuario = ({navigate}:{navigate:any}) => {
    // Location Hook
	const { state } = useLocation();
	
	//Gestor estados Redux
	const { labelTab,cache }:any= useSelector<RootState>( (state) => state.seguridades);
	const dispatch = useDispatch();

	//hook UseRef
	const toast = useRef<any>(null);

	//Form Hook
	const methods = formUsuario();
	const { setValue, clearErrors,reset } = methods;

	//Hook State
	const [ estadoForm,setEstadoForm ] = useState<{status:boolean,etiqueta:string}>({status:false,etiqueta:''})
	const [ usuarioQuery,setUsuarioQuery] = useState<any>()
	const [ statusLoading, setStatusLoading] = useState<boolean>(false)
	const [ visible,setVisible] =useState<{status:boolean,mensaje:string,accept?:any,reject?:any}>(
		{
			status:false,mensaje:'',accept:()=>{},reject:()=>{}
		}
	)  
	const [ labels, setLabels ] = useState<{ btn1?: string, btn2?: string, icon?: boolean, btnload?: boolean,opt?:string }>({ btn1: '', btn2: '', icon: true, btnload: false,opt:'N' })
    const [ dataRolSelect,setDataRolSelect ] = useState<any[]>();

	//Metodos Graphql
	const { useUsuarioLazyQuery,useUsuarioCreateMutation,useUsuarioUpdateMutation,useRolSelectLazyQuery } = graphql
  	const [ getUsuarioLazyQuery ] = useUsuarioLazyQuery();
	const [ usuarioCreateMutation ] = useUsuarioCreateMutation();
	const [ usuarioUpdateMutation ] = useUsuarioUpdateMutation();
    const [ getRolSelectLazyQuery,{loading} ] = useRolSelectLazyQuery();

	const onSwitch=(status:any)=>{
		setEstadoForm({...estadoForm,etiqueta:(status)?'Activo':'Inactivo'});  
	}

	//Hook UseState
	useEffect(()=>{
		if(usuarioQuery){
			processValueForm({setValue,usuarioQuery,setEstadoForm});
		}
	},[usuarioQuery])

	useEffect(()=>{	
        processRolSelect({getRolSelectLazyQuery,setDataRolSelect,cache,dispatch})	
		if(state){
			let dataId=state?.dataRecord?.dataGrid;	
			if(dataId?.id){
				dispatch(setLabelTab({labelNew:'Editar Usuario',labelGrid:'Datos Usuario',iconNew:'pi pi-pencil',iconGrid:'pi pi-th-large'}));
				processUsuarioQuery({getUsuarioLazyQuery,setUsuarioQuery,query:{id:parseInt(dataId?.id)},setStatusLoading});
				setLabels({ ...labels,btn1: 'Cancelar', btn2: 'Editar',opt:'E'});	
			}		
			
		}else{
            setValue('opt_usuario','N'); 
			setValue('estado_usuario',true)
			setEstadoForm({status:true,etiqueta:'Activo'});
			setLabels({ ...labels,btn1: 'Cancelar', btn2: 'Guardar',opt:'N'});
		}
	},[])
		
	return (
		<>		
			<UtilsSpinner visible={statusLoading}/>
			<FormCore 
				labels={labels} 
				onSubmit={(data:any)=>{processSubmitForm({data,setVisible,toast,labels,usuarioCreateMutation,usuarioUpdateMutation,navigate,dispatch})}} 
				onReset={()=>processResetForm({clearErrors,reset,dispatch,labelTab,setLabelTab,navigate})}
				methods={methods}
				visible={visible}
				setVisible={setVisible}
				toast={toast}
			>
			<div className="grid justify-content-end">
				<TextInput disabled={estadoForm.status} label={estadoForm.etiqueta} name='estado_usuario' methods={methods} optInput={'S'} onChange={onSwitch}/>
			</div>
			<div className="formgrid grid">
                <div className='field col-12 md:col-4 mb-4'>
                    <TextInput disabled={false} label='Nombres *' name='nombres_usuario' placeholder="Ingrese el nombre" methods={methods} 
						keyfilter='alphanum' maxLength={20}
					/>
                </div>
                <div className='field col-12 md:col-4'>
                <TextInput disabled={false} label='Apellidos *' name='apellidos_usuario' placeholder="Ingrese el apellido" methods={methods} 
						keyfilter='alphanum' maxLength={20}
					/>
                </div>  
				<div className='field col-12 md:col-4'>
					<TextInput disabled={false} label='Usuario *' name='username_usuario' placeholder="Ingrese el usuario" methods={methods} maxLength={30}/>
				</div>              
            </div>
            <div className="formgrid grid mb-2">				
				<div className='field col-12 md:col-4'>
                    <TextInput disabled={false} label='Correo *' name='correo_usuario' placeholder="Ingrese el correo" methods={methods} 
                    maxLength={50} keyfilter='email' />
				</div>
				<div className='field col-12 md:col-8'>
                    <MultiSelectInput 
                            data={dataRolSelect} 
                            label={'Roles *'} 
                            name='idRol_usuario' 
                            methods={methods} 
                            isDisabled={false}     
                            placeholder='Seleccione el Rol'  
                            isObject
                            loading={loading}                                      
                    />
				</div>				
			</div>
            {(labels.opt =='N')&&
                <div className="formgrid grid mb-4">
                    <div className='field col-12 md:col-4'>
                    
                                <TextInput disabled={false} label='Contraseña *' name='contrasenia_usuario' placeholder="Ingrese la contraseña" methods={methods} 
                                optInput='P' feedback  toggleMask/>
                        
                            
                    </div>
                </div>
            }
			</FormCore>
		</>
	)
}
