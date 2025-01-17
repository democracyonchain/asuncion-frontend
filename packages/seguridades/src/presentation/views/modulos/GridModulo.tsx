import { useEffect,useState,useRef } from 'react'
import { graphql,UtilsCoreDataTable,UtilsConfirm } from "@bsc/library";
import { processModuloCollection,columnsModulo,processEliminarModulo } from "@application/services/moduloService"
import { setPageInfo,setLabelTab,setMessage,setCache } from '@presentation/actions';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { ViewModulo } from '@presentation/views/modulos/ViewModulo'
import { useLocation } from 'react-router-dom';

interface Modulo{
	id: number | null
	nombre:string | null
	codigo: string | null
	estado:boolean
	url: string | null
	icono: string | null
	color:  string | null
}
/**
 * Componente GridModulo
 * 
 * Este componente representa una vista de tabla de datos para los módulos. Utiliza varios hooks de React y Redux para gestionar el estado y las operaciones de datos.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.navigate - Función de navegación para redirigir a otras vistas.
 * 
 * @returns {JSX.Element} - Retorna un elemento JSX que contiene la tabla de datos y un componente de confirmación.
 * 
 * @hook useState - Hook para gestionar el estado local del componente.
 * @hook useLocation - Hook para obtener el estado de la ubicación actual.
 * @hook useRef - Hook para crear una referencia mutable que persiste durante todo el ciclo de vida del componente.
 * @hook useEffect - Hook para realizar efectos secundarios en el componente.
 * 
 * @function onSubmit - Función que maneja el evento de envío para eliminar un registro.
 * 
 * @component
 * 
 * @example
 * <GridModulo navigate={navigateFunction} />
 */
export const GridModulo = ({navigate}:{navigate:any}) => {
  	
	//Hook useState
	const [ dataModuloCollection,setDataModuloCollection ] = useState<any[]>();
	const [ selectedGrid, setselectedGrid ] = useState<Modulo | null>(null);
	const [ visibleAux,setVisibleAux] =useState<{status:boolean,mensaje:string,accept?:any,reject?:any}>(
		{
			status:false,mensaje:'',accept:()=>{},reject:()=>{}
		}
	)  	
	// Location Hook
	const {state} = useLocation();

	const toast = useRef<any>(null);

   	//Metodos Graphql
	const { useModuloCollectionLazyQuery,useModuloDeleteMutation } = graphql
  	const [ getModuloCollectionLazyQuery,{loading}] = useModuloCollectionLazyQuery();
	const [ moduloDeleteMutation ] = useModuloDeleteMutation();

	//Gestor estados Redux
	const { pageInfo,labelTab,cache,message }:any= useSelector<RootState>( (state) => state.seguridades);
	const dispatch = useDispatch();

    //Hook UseEffect
	useEffect(()=>{
		if(!message){
			processModuloCollection({getModuloCollectionLazyQuery,setDataModuloCollection,limit:pageInfo?.limit,offset:pageInfo?.offset,cache,dispatch});
			dispatch(setLabelTab({...labelTab,labelNew:'Nuevo Módulo',iconNew:'post_add'}));
		}		
	},[])

	useEffect(()=>{
		if(message){
			toast.current.show({ severity: 'info', summary: 'Atención', detail: message, life: 3000,icon:'pi pi-check'});
		}
	},[message])

	const onSubmit=(data:any,toast:any)=>{		
		setVisibleAux({status:true,mensaje:'Esta seguro que desea Borrar este Registro?',accept:()=>{
			processEliminarModulo({data,moduloDeleteMutation,toast,navigate,dispatch})
		},reject:()=>{}});
	}

	return (
		<div>
			<UtilsConfirm setVisible={setVisibleAux} visible={visibleAux.status} message={visibleAux.mensaje} accept={visibleAux.accept} reject={visibleAux.reject}/>
			<UtilsCoreDataTable 
				columns={columnsModulo} 
				selectedGrid={selectedGrid} 
				setselectedGrid={setselectedGrid} 
				recordStatus={loading} 
				recordGrid={dataModuloCollection}
				title='Listado Modulos'
				setPageInfo={setPageInfo}
				pageInfo={pageInfo}
				dispatch={dispatch}
				ContenidoView={ViewModulo}
				navigate={navigate}
				onSubmit={onSubmit}
				toast={toast}
				setMessage={setMessage}
				setCache={setCache}
			/>
		</div>
	)
}
