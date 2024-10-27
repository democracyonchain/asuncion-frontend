import { useEffect,useState,useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { setLabelTab } from '@presentation/actions';
import { FormCore,TextInput,graphql,UtilsSpinner,MultiSelectInput,SelectInput } from "@bsc/library";
import { formUsuario} from '@application/components/form'
import { processResetForm,processUsuarioQuery,processValueForm,processSubmitForm,processRolSelect,processProvinciaSelect,processEstablecimientoSelect } from "@application/services/usuarioService"
import { useDispatch,useSelector } from "react-redux";
import { RootState } from '@presentation/stores';

/**
 * Componente FormUsuario
 * 
 * Este componente representa un formulario para la gestión de usuarios. Utiliza varios hooks y métodos para manejar el estado del formulario, realizar consultas y mutaciones GraphQL, y gestionar la navegación.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.navigate - Función de navegación.
 * 
 * @returns {JSX.Element} - Retorna el componente de formulario de usuario.
 * 
 * @hook useLocation - Hook para obtener el estado de la ubicación actual.
 * @hook useSelector - Hook para seleccionar el estado de Redux.
 * @hook useDispatch - Hook para despachar acciones de Redux.
 * @hook useRef - Hook para crear una referencia mutable.
 * @hook useState - Hook para manejar el estado local del componente.
 * @hook useEffect - Hook para manejar efectos secundarios.
 * 
 * @method formUsuario - Hook personalizado para manejar el formulario de usuario.
 * @method setValue - Método para establecer valores en el formulario.
 * @method clearErrors - Método para limpiar errores del formulario.
 * @method reset - Método para reiniciar el formulario.
 * 
 * @method useUsuarioLazyQuery - Método para realizar una consulta perezosa de usuario.
 * @method useUsuarioCreateMutation - Método para realizar una mutación de creación de usuario.
 * @method useUsuarioUpdateMutation - Método para realizar una mutación de actualización de usuario.
 * @method useRolSelectLazyQuery - Método para realizar una consulta perezosa de roles.
 * @method useProvinciaSelectLazyQuery - Método para realizar una consulta perezosa de provincias.
 * @method useEstablecimientoSelectLazyQuery - Método para realizar una consulta perezosa de establecimientos.
 * 
 * @function onSwitch - Función para manejar el cambio de estado del formulario.
 * 
 * @effect - Efecto para procesar los valores del formulario cuando cambia `usuarioQuery`.
 * @effect - Efecto para inicializar los datos del formulario y realizar consultas cuando cambia `state`.
 * 
 * @component UtilsSpinner - Componente para mostrar un spinner de carga.
 * @component FormCore - Componente principal del formulario.
 * @component TextInput - Componente de entrada de texto.
 * @component SelectInput - Componente de selección.
 * @component MultiSelectInput - Componente de selección múltiple.
 * 
 * @param {Object} labels - Etiquetas y configuraciones del formulario.
 * @param {boolean} statusLoading - Estado de carga del formulario.
 * @param {Object} visible - Estado de visibilidad del formulario.
 * @param {Object} toast - Referencia para mostrar mensajes de toast.
 * @param {Object} estadoForm - Estado del formulario.
 * @param {any} usuarioQuery - Consulta de usuario.
 * @param {any[]} dataRolSelect - Datos de roles.
 * @param {any[]} dataProvinciaSelect - Datos de provincias.
 * @param {any[]} dataEstablecimientoSelect - Datos de establecimientos.
 */
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
	const [ dataProvinciaSelect,setDataProvinciaSelect ] = useState<any[]>();
	const [ dataEstablecimientoSelect,setDataEstablecimientoSelect ] = useState<any[]>();

	//Metodos Graphql
	const { useUsuarioLazyQuery,useUsuarioCreateMutation,useUsuarioUpdateMutation,useRolSelectLazyQuery,useProvinciaSelectLazyQuery,useEstablecimientoSelectLazyQuery } = graphql
  	const [ getUsuarioLazyQuery ] = useUsuarioLazyQuery();
	const [ usuarioCreateMutation ] = useUsuarioCreateMutation();
	const [ usuarioUpdateMutation ] = useUsuarioUpdateMutation();
    const [ getRolSelectLazyQuery,{loading} ] = useRolSelectLazyQuery();
	const [ getProvinciaSelectLazyQuery,{loading:loadingPro} ] = useProvinciaSelectLazyQuery();
	const [ getEstablecimientoSelectLazyQuery,{loading:loadingEsta} ] = useEstablecimientoSelectLazyQuery();

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
        processRolSelect({getRolSelectLazyQuery,setDataRolSelect,cache,dispatch});
		processProvinciaSelect({getProvinciaSelectLazyQuery,setDataProvinciaSelect,cache,dispatch});
		processEstablecimientoSelect({getEstablecimientoSelectLazyQuery,setDataEstablecimientoSelect,cache,dispatch});

		if(state){
			let dataId=state?.dataRecord?.dataGrid;	
			if(dataId?.id){
				dispatch(setLabelTab({...labelTab,labelNew:'Editar Usuario',iconNew:'edit_square'}));
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
						maxLength={20}
					/>
                </div>
                <div className='field col-12 md:col-4'>
                <TextInput disabled={false} label='Apellidos *' name='apellidos_usuario' placeholder="Ingrese el apellido" methods={methods} 
					maxLength={20}
					/>
                </div>  
				<div className='field col-12 md:col-4'>
					<TextInput disabled={false} label='Usuario *' name='username_usuario' placeholder="Ingrese el usuario" methods={methods} maxLength={30}/>
				</div>   
				<div className='field col-12 md:col-4'>
                    <TextInput disabled={false} label='Correo *' name='correo_usuario' placeholder="Ingrese el correo" methods={methods} 
                    maxLength={50} keyfilter='email' />
				</div>				
				<div className='field col-12 md:col-4'>
					<SelectInput 
							data={dataEstablecimientoSelect} 
							label={'Empresa *'} 
							name='idEstablecimiento_usuario' 
							methods={methods} 
							isDisabled={false}     
							placeholder='Seleccione una Empresa'  
							isObject    
							loading={loadingEsta}        
						/>
                </div>
				<div className='field col-12 md:col-4'>
					<SelectInput 
							data={dataProvinciaSelect} 
							label={'Provincia *'} 
							name='idProvincia_usuario' 
							methods={methods} 
							isDisabled={false}     
							placeholder='Seleccione una Provincia'  
							isObject    
							loading={loadingPro}        
						/>
                </div>    
				
            </div>
            
          
			<div className="formgrid grid mb-2">				
				{(labels.opt =='N')&&
                    <div className='field col-12 md:col-4'>                    
						<TextInput disabled={false} label='Contraseña *' name='contrasenia_usuario' placeholder="Ingrese la contraseña" methods={methods} 
						optInput='P' feedback  toggleMask/>
                    </div>                
            	}
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
			</FormCore>
		</>
	)
}
