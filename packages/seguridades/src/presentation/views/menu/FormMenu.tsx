import { useEffect,useState,useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { setLabelTab } from '@presentation/actions';
import { FormCore,TextInput,graphql,UtilsSpinner,SelectInput } from "@bsc/library";
import { formMenu} from '@application/components/form'
import { processResetForm,processMenuQuery,processValueForm,processSubmitForm,processModuloSelect } from "@application/services/menuService"
import { useDispatch,useSelector } from "react-redux";
import { RootState } from '@presentation/stores';

export const FormMenu = ({navigate}:{navigate:any}) => {
	// Location Hook
	const { state } = useLocation();
	
	//Gestor estados Redux
	const { labelTab,cache }:any= useSelector<RootState>( (state) => state.seguridades);
	const dispatch = useDispatch();

	//hook UseRef
	const toast = useRef<any>(null);

	//Form Hook
	const methods = formMenu();
	const { setValue, clearErrors,reset } = methods;

	//Hook State
	const [ estadoForm,setEstadoForm ] = useState<{status:boolean,etiqueta:string}>({status:false,etiqueta:''})
	const [ menuQuery,setMenuQuery] = useState<any>()
	const [ statusLoading, setStatusLoading] = useState<boolean>(false)
	const [ visible,setVisible] =useState<{status:boolean,mensaje:string,accept?:any,reject?:any}>(
		{
			status:false,mensaje:'',accept:()=>{},reject:()=>{}
		}
	)  
	const [ labels, setLabels ] = useState<{ btn1?: string, btn2?: string, icon?: boolean, btnload?: boolean,opt?:string }>({ btn1: '', btn2: '', icon: true, btnload: false,opt:'N' })
    const [ dataModuloSelect,setDataModuloSelect ] = useState<any[]>();

	//Metodos Graphql
	const { useMenuLazyQuery,useMenuCreateMutation,useMenuUpdateMutation,useModuloSelectLazyQuery } = graphql
  	const [ getMenuLazyQuery ] = useMenuLazyQuery();
	const [ menuCreateMutation ] = useMenuCreateMutation();
	const [ menuUpdateMutation ] = useMenuUpdateMutation();
    const [ getModuloSelectLazyQuery,{loading} ] = useModuloSelectLazyQuery();

	const onSwitch=(status:any)=>{
		setEstadoForm({...estadoForm,etiqueta:(status)?'Activo':'Inactivo'});  
	}

	//Hook UseState
	useEffect(()=>{
		if(menuQuery){
			processValueForm({setValue,menuQuery,setEstadoForm});
		}
	},[menuQuery])

	useEffect(()=>{	
        processModuloSelect({getModuloSelectLazyQuery,setDataModuloSelect,cache,dispatch})	
		if(state){
			let dataId=state?.dataRecord?.dataGrid;	
			if(dataId?.id){
				dispatch(setLabelTab({...labelTab,labelNew:'Editar Menu',iconNew:'edit_square'}));
				processMenuQuery({getMenuLazyQuery,setMenuQuery,query:{id:parseInt(dataId?.id)},setStatusLoading});
				setLabels({ ...labels,btn1: 'Cancelar', btn2: 'Editar',opt:'E'});	
			}		
			
		}else{
			setValue('estado_menu',true)
			setEstadoForm({status:true,etiqueta:'Activo'});
			setLabels({ ...labels,btn1: 'Cancelar', btn2: 'Guardar',opt:'N'});
		}
	},[])
		
	return (
		<>		
			<UtilsSpinner visible={statusLoading}/>
			<FormCore 
				labels={labels} 
				onSubmit={(data:any)=>{processSubmitForm({data,setVisible,toast,labels,menuCreateMutation,menuUpdateMutation,navigate,dispatch})}} 
				onReset={()=>processResetForm({clearErrors,reset,dispatch,labelTab,setLabelTab,navigate})}
				methods={methods}
				visible={visible}
				setVisible={setVisible}
				toast={toast}
			>
			<div className="grid justify-content-end">
				<TextInput disabled={estadoForm.status} label={estadoForm.etiqueta} name='estado_menu' methods={methods} optInput={'S'} onChange={onSwitch}/>
			</div>
			<div className="formgrid grid">
                <div className='field col-12 md:col-4 mb-4'>
                    <TextInput disabled={false} label='Nombre *' name='titulo_menu' placeholder="Ingrese el Nombre" 
					methods={methods} keyfilter='alpha' maxLength={20}
					/>
                </div>
                <div className='field col-12 md:col-4'>
                <SelectInput 
                        data={dataModuloSelect} 
                        label={'Módulo *'} 
                        name='idModulo_menu' 
                        methods={methods} 
                        isDisabled={false}     
                        placeholder='Seleccione un Módulo'  
                        isObject    
						loading={loading}        
                    />
                </div>  
				<div className='field col-12 md:col-4'>
					<TextInput disabled={false} label='Url *' name='url_menu' placeholder="Ingrese la Url" methods={methods} maxLength={30}/>
				</div>              
            </div>
            <div className="formgrid grid mb-4">				
				<div className='field col-12 md:col-4'>
					<TextInput disabled={false} label='Icono *' name='icono_menu' placeholder="Ingrese el icono" methods={methods} maxLength={50}/>
				</div>
				<div className='field col-12 md:col-4'>
					<TextInput disabled={false} label='Orden *' name='orden_menu' placeholder="Ingrese el orden" methods={methods} maxLength={20} keyfilter={'num'}/>
				</div>				
			</div>
			</FormCore>
		</>
	)
}
