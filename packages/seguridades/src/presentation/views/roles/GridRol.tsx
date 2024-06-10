import { useEffect,useState,useRef } from 'react'
import { graphql,UtilsCoreDataTable,UtilsConfirm } from "@bsc/library";
import { processRolCollection,columnsRol,processEliminarRol } from "@application/services/rolService"
import { setPageInfo,setLabelTab,setMessage,setCache } from '@presentation/actions';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { ViewRol } from '@presentation/views/roles/ViewRol'


interface Rol{
	id: number | null
	descripcion:string | null
	estado:boolean
	nombre: string | null
}

export const GridRol = ({navigate}:{navigate:any}) => {
    //Hook useState
	const [ dataRolCollection,setDataRolCollection ] = useState<any[]>();
	const [ selectedGrid, setselectedGrid ] = useState<Rol | null>(null);
	const [ visibleAux,setVisibleAux] =useState<{status:boolean,mensaje:string,accept?:any,reject?:any}>(
		{
			status:false,mensaje:'',accept:()=>{},reject:()=>{}
		}
	)  	

	const toast = useRef<any>(null);

   	//Metodos Graphql
	const { useRolCollectionLazyQuery,useRolDeleteMutation } = graphql
  	const [ getRolCollectionLazyQuery,{loading}] = useRolCollectionLazyQuery();
	const [ rolDeleteMutation ] = useRolDeleteMutation();

	//Gestor estados Redux
	const { pageInfo,labelTab,cache,message }:any= useSelector<RootState>( (state) => state.seguridades);
	const dispatch = useDispatch();

    //Hook UseEffect
	useEffect(()=>{
		if(!message){
			processRolCollection({getRolCollectionLazyQuery,setDataRolCollection,limit:pageInfo?.limit,offset:pageInfo?.offset,cache,dispatch});
			dispatch(setLabelTab({...labelTab,labelNew:'Nuevo Rol',iconNew:'pi pi-clone'}));
		}		
	},[])

	useEffect(()=>{
		if(message){
			toast.current.show({ severity: 'info', summary: 'Atención', detail: message, life: 2000,icon:'pi pi-check'});
		}
	},[message])

	const onSubmit=(data:any,toast:any)=>{		
		setVisibleAux({status:true,mensaje:'Esta seguro que desea Borrar este Registro?',accept:()=>{
			processEliminarRol({data,rolDeleteMutation,toast,navigate,dispatch})
		},reject:()=>{}});
	}

	return (
		<div>
			<UtilsConfirm setVisible={setVisibleAux} visible={visibleAux.status} message={visibleAux.mensaje} accept={visibleAux.accept} reject={visibleAux.reject}/>
			<UtilsCoreDataTable 
				columns={columnsRol} 
				selectedGrid={selectedGrid} 
				setselectedGrid={setselectedGrid} 
				recordStatus={loading} 
				recordGrid={dataRolCollection}
				title='Listado Rol'
				setPageInfo={setPageInfo}
				pageInfo={pageInfo}
				dispatch={dispatch}
				ContenidoView={ViewRol}
				navigate={navigate}
				onSubmit={onSubmit}
				toast={toast}
				setMessage={setMessage}
				setCache={setCache}
			/>
		</div>
	)
}
