import { useEffect,useState,useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { setLabelTab } from '@presentation/actions';
import { FormCore,TextInput,graphql,UtilsSpinner } from "@bsc/library";
import { formModulo} from '@application/components/form'
import { processResetForm,processModuloQuery,processValueForm,processSubmitForm } from "@application/services/moduloService"
import { useDispatch,useSelector } from "react-redux";
import { RootState } from '@presentation/stores';

/**
 * Componente `FormModulo` que representa un formulario para la gestión de módulos.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.navigate - Función de navegación para redirigir a otras vistas.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el formulario.
 * 
 * @description
 * Este componente utiliza varios hooks de React y Redux para manejar el estado del formulario,
 * realizar consultas y mutaciones GraphQL, y gestionar la navegación. 
 * 
 * - `useLocation`: Hook para obtener el estado de la ubicación actual.
 * - `useSelector`: Hook para acceder al estado de Redux.
 * - `useDispatch`: Hook para despachar acciones de Redux.
 * - `useRef`: Hook para crear una referencia mutable.
 * - `useState`: Hook para manejar el estado local del componente.
 * - `useEffect`: Hook para manejar efectos secundarios en el componente.
 * 
 * @example
 * ```tsx
 * <FormModulo navigate={navigateFunction} />
 * ```
 * 
 * @hook
 * - `useLocation`: Obtiene el estado de la ubicación actual.
 * - `useSelector`: Accede al estado de Redux.
 * - `useDispatch`: Despacha acciones de Redux.
 * - `useRef`: Crea una referencia mutable.
 * - `useState`: Maneja el estado local del componente.
 * - `useEffect`: Maneja efectos secundarios en el componente.
 * 
 * @graphql
 * - `useModuloLazyQuery`: Consulta perezosa para obtener datos del módulo.
 * - `useModuloCreateMutation`: Mutación para crear un nuevo módulo.
 * - `useModuloUpdateMutation`: Mutación para actualizar un módulo existente.
 * 
 * @component
 * - `UtilsSpinner`: Componente para mostrar un spinner de carga.
 * - `FormCore`: Componente principal del formulario.
 * - `TextInput`: Componente de entrada de texto.
 * 
 * @function
 * - `onSwitch`: Función para manejar el cambio de estado del módulo.
 * - `processValueForm`: Función para procesar los valores del formulario.
 * - `processModuloQuery`: Función para procesar la consulta del módulo.
 * - `processSubmitForm`: Función para manejar el envío del formulario.
 * - `processResetForm`: Función para manejar el reinicio del formulario.
 */
export const FormModulo = ({navigate}:{navigate:any}) => {
	
	// Location Hook
	const { state } = useLocation();
	
	//Gestor estados Redux
	const { labelTab }:any= useSelector<RootState>( (state) => state.seguridades);
	const dispatch = useDispatch();

	//hook UseRef
	const toast = useRef<any>(null);

	//Form Hook
	const methods = formModulo();
	const { setValue, clearErrors,reset } = methods;

	//Hook State
	const [ estadoForm,setEstadoForm ] = useState<{status:boolean,etiqueta:string}>({status:false,etiqueta:''})
	const [ moduloQuery,setModuloQuery] = useState<any>()
	const [ statusLoading, setStatusLoading] = useState<boolean>(false)
	const [ visible,setVisible] =useState<{status:boolean,mensaje:string,accept?:any,reject?:any}>(
		{
			status:false,mensaje:'',accept:()=>{},reject:()=>{}
		}
	)  
	const [ labels, setLabels ] = useState<{ btn1?: string, btn2?: string, icon?: boolean, btnload?: boolean,opt?:string }>({ btn1: '', btn2: '', icon: true, btnload: false,opt:'N' })

	//Metodos Graphql
	const { useModuloLazyQuery,useModuloCreateMutation,useModuloUpdateMutation} = graphql
  	const [ getModuloLazyQuery ] = useModuloLazyQuery();
	const [ moduloCreateMutation ] = useModuloCreateMutation();
	const [ moduloUpdateMutation ] = useModuloUpdateMutation();

	const onSwitch=(status:any)=>{
		setEstadoForm({...estadoForm,etiqueta:(status)?'Activo':'Inactivo'});  
	}

	//Hook UseState
	useEffect(()=>{
		if(moduloQuery){
			processValueForm({setValue,moduloQuery,setEstadoForm});
		}
	},[moduloQuery])

	useEffect(()=>{		
		if(state){
			let dataId=state?.dataRecord?.dataGrid;	
			if(dataId?.id){
				dispatch(setLabelTab({...labelTab,labelNew:'Editar Modulo',iconNew:'edit_square'}));
				processModuloQuery({getModuloLazyQuery,setModuloQuery,query:{id:parseInt(dataId?.id)},setStatusLoading});
				setLabels({ ...labels,btn1: 'Cancelar', btn2: 'Editar',opt:'E'});	
			}		
			
		}else{
			setValue('estado_modulo',true)
			setEstadoForm({status:true,etiqueta:'Activo'});
			setLabels({ ...labels,btn1: 'Cancelar', btn2: 'Guardar',opt:'N'});
		}
	},[])
	

	
	return (
		<>		
			<UtilsSpinner visible={statusLoading}/>
			<FormCore 
				labels={labels} 
				onSubmit={(data:any)=>{processSubmitForm({data,setVisible,toast,labels,moduloCreateMutation,moduloUpdateMutation,navigate,dispatch})}} 
				onReset={()=>processResetForm({clearErrors,reset,dispatch,labelTab,setLabelTab,navigate})}
				methods={methods}
				visible={visible}
				setVisible={setVisible}
				toast={toast}
			>
			<div className="grid justify-content-end">
				<TextInput disabled={estadoForm.status} label={estadoForm.etiqueta} name='estado_modulo' methods={methods} optInput={'S'} onChange={onSwitch}/>
			</div>
			<div className="formgrid grid">
                <div className='field col-12 md:col-4 mb-4'>
                    <TextInput disabled={false} label='Nombre *' name='nombre_modulo' placeholder="Ingrese el Nombre" 
					methods={methods} keyfilter='alpha' maxLength={20}
					/>
                </div>
                <div className='field col-12 md:col-4'>
                    <TextInput disabled={false} label='Código *' name='codigo_modulo' placeholder="Ingrese el Código" methods={methods} 
						keyfilter='alphanum' maxLength={20}
					/>
                </div>  
				<div className='field col-12 md:col-4'>
					<TextInput disabled={false} label='Url *' name='url_modulo' placeholder="Ingrese la Url" methods={methods} maxLength={30}/>
				</div>              
            </div>
            <div className="formgrid grid mb-4">				
				<div className='field col-12 md:col-4'>
					<TextInput disabled={false} label='Icono *' name='icono_modulo' placeholder="Ingrese el icono" methods={methods} maxLength={20}/>
				</div>
				<div className='field col-12 md:col-4'>
					<TextInput disabled={false} label='Color *' name='color_modulo' placeholder="Ingrese el color" methods={methods} maxLength={20} keyfilter={/[^s]/}/>
				</div>				
			</div>
			</FormCore>
		</>
	)
}
