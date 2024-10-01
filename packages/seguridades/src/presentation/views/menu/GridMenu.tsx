import { useEffect,useState,useRef } from 'react'
import { graphql,UtilsCoreDataTable,UtilsConfirm } from "@bsc/library";
import { processMenuCollection,columnsMenu,processEliminarMenu } from "@application/services/menuService"
import { setPageInfo,setLabelTab,setMessage,setCache } from '@presentation/actions';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { ViewMenu } from '@presentation/views/menu/ViewMenu'


interface Menu{
	id: number | null
	titulo:string | null
	orden: number | null
	estado:boolean
	url: string | null
	icono: string | null
	modulo:  string | null
}

/**
 * Componente GridMenu
 * 
 * Este componente presenta una tabla de datos de menú y permite la eliminación de registros.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.navigate - Función de navegación.
 * 
 * @returns {JSX.Element} - Retorna un elemento JSX que contiene la tabla de datos del menú.
 * 
 * @component
 * 
 * @example
 * <GridMenu navigate={navigateFunction} />
 * 
 * @remarks
 * Utiliza hooks de estado para manejar la colección de datos del menú, el elemento seleccionado, y la visibilidad de un mensaje de confirmación.
 * 
 * @hook
 * @name useState
 * @description Maneja el estado de la colección de datos del menú, el elemento seleccionado y la visibilidad del mensaje de confirmación.
 * 
 * @hook
 * @name useRef
 * @description Referencia para mostrar mensajes de notificación.
 * 
 * @hook
 * @name useEffect
 * @description Efecto para cargar la colección de datos del menú al montar el componente y para mostrar mensajes de notificación cuando cambian.
 * 
 * @function
 * @name onSubmit
 * @description Maneja la confirmación de eliminación de un registro del menú.
 * 
 * @graphql
 * @name useMenuCollectionLazyQuery
 * @description Consulta perezosa para obtener la colección de datos del menú.
 * 
 * @graphql
 * @name useMenuDeleteMutation
 * @description Mutación para eliminar un registro del menú.
 * 
 * @redux
 * @name useSelector
 * @description Selecciona el estado de la aplicación desde el store de Redux.
 * 
 * @redux
 * @name useDispatch
 * @description Despacha acciones al store de Redux.
 */
export const GridMenu = ({navigate}:{navigate:any}) => {
  	//Hook useState
	const [ dataMenuCollection,setDataMenuCollection ] = useState<any[]>();
	const [ selectedGrid, setselectedGrid ] = useState<Menu | null>(null);
	const [ visibleAux,setVisibleAux] =useState<{status:boolean,mensaje:string,accept?:any,reject?:any}>(
		{
			status:false,mensaje:'',accept:()=>{},reject:()=>{}
		}
	)  	

	const toast = useRef<any>(null);

   	//Metodos Graphql
	const { useMenuCollectionLazyQuery,useMenuDeleteMutation } = graphql
  	const [ getMenuCollectionLazyQuery,{loading}] = useMenuCollectionLazyQuery();
	const [ menuDeleteMutation ] = useMenuDeleteMutation();

	//Gestor estados Redux
	const { pageInfo,labelTab,cache,message }:any= useSelector<RootState>( (state) => state.seguridades);
	const dispatch = useDispatch();

    //Hook UseEffect
	useEffect(()=>{
		if(!message){
			processMenuCollection({getMenuCollectionLazyQuery,setDataMenuCollection,limit:pageInfo?.limit,offset:pageInfo?.offset,cache,dispatch});
			dispatch(setLabelTab({...labelTab,labelNew:'Nuevo Menu',iconNew:'post_add'}));
		}		
	},[])

	useEffect(()=>{
		if(message){
			toast.current.show({ severity: 'info', summary: 'Atención', detail: message, life: 2000,icon:'pi pi-check'});
		}
	},[message])

	const onSubmit=(data:any,toast:any)=>{		
		setVisibleAux({status:true,mensaje:'Esta seguro que desea Borrar este Registro?',accept:()=>{
			processEliminarMenu({data,menuDeleteMutation,toast,navigate,dispatch})
		},reject:()=>{}});
	}

	return (
		<div>
			<UtilsConfirm setVisible={setVisibleAux} visible={visibleAux.status} message={visibleAux.mensaje} accept={visibleAux.accept} reject={visibleAux.reject}/>
			<UtilsCoreDataTable 
				columns={columnsMenu} 
				selectedGrid={selectedGrid} 
				setselectedGrid={setselectedGrid} 
				recordStatus={loading} 
				recordGrid={dataMenuCollection}
				title='Listado Menu'
				setPageInfo={setPageInfo}
				pageInfo={pageInfo}
				dispatch={dispatch}
				ContenidoView={ViewMenu}
				navigate={navigate}
				onSubmit={onSubmit}
				toast={toast}
				setMessage={setMessage}
				setCache={setCache}
			/>
		</div>
	)
}
