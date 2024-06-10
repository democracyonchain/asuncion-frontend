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
			dispatch(setLabelTab({...labelTab,labelNew:'Nuevo Menu',iconNew:'pi pi-clone'}));
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
