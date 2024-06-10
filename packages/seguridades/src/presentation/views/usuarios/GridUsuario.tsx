import { useEffect,useState,useRef } from 'react'
import { graphql,UtilsCoreDataTable,UtilsConfirm } from "@bsc/library";
import { processUsuarioCollection,columnsUsuario,processEliminarUsuario } from "@application/services/usuarioService"
import { setPageInfo,setLabelTab,setMessage,setCache } from '@presentation/actions';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { ViewUsaurio } from '@presentation/views/usuarios/ViewUsaurio'


interface Usuario{
	id: number | null
	apellidos:string | null
    nombres: string | null
    username: string | null
	estado:boolean
	provincia:  string | null
}
export const GridUsuario = ({navigate}:{navigate:any}) => {
   //Hook useState
	const [ dataUsuarioCollection,setDataUsuarioCollection ] = useState<any[]>();
	const [ selectedGrid, setselectedGrid ] = useState<Usuario | null>(null);
	const [ visibleAux,setVisibleAux] =useState<{status:boolean,mensaje:string,accept?:any,reject?:any}>(
		{
			status:false,mensaje:'',accept:()=>{},reject:()=>{}
		}
	)  	

	const toast = useRef<any>(null);

   	//Metodos Graphql
	const { useUsuarioCollectionLazyQuery,useUsuarioDeleteMutation } = graphql
  	const [ getUsuarioCollectionLazyQuery,{loading}] = useUsuarioCollectionLazyQuery();
	const [ usuarioDeleteMutation ] = useUsuarioDeleteMutation();

	//Gestor estados Redux
	const { pageInfo,labelTab,cache,message }:any= useSelector<RootState>( (state) => state.seguridades);
	const dispatch = useDispatch();

    //Hook UseEffect
	useEffect(()=>{
		if(!message){
			processUsuarioCollection({getUsuarioCollectionLazyQuery,setDataUsuarioCollection,limit:pageInfo?.limit,offset:pageInfo?.offset,cache,dispatch});
			dispatch(setLabelTab({...labelTab,labelNew:'Nuevo Usuario',iconNew:'pi pi-clone'}));
		}		
	},[])

	useEffect(()=>{
		if(message){
			toast.current.show({ severity: 'info', summary: 'Atención', detail: message, life: 2000,icon:'pi pi-check'});
		}
	},[message])

	const onSubmit=(data:any,toast:any)=>{		
		setVisibleAux({status:true,mensaje:'Esta seguro que desea Borrar este Registro?',accept:()=>{
			processEliminarUsuario({data,usuarioDeleteMutation,toast,navigate,dispatch})
		},reject:()=>{}});
	}

	return (
		<div>
			<UtilsConfirm setVisible={setVisibleAux} visible={visibleAux.status} message={visibleAux.mensaje} accept={visibleAux.accept} reject={visibleAux.reject}/>
			<UtilsCoreDataTable 
				columns={columnsUsuario} 
				selectedGrid={selectedGrid} 
				setselectedGrid={setselectedGrid} 
				recordStatus={loading} 
				recordGrid={dataUsuarioCollection}
				title='Listado Usuario'
				setPageInfo={setPageInfo}
				pageInfo={pageInfo}
				dispatch={dispatch}
				ContenidoView={ViewUsaurio}
				navigate={navigate}
				onSubmit={onSubmit}
				toast={toast}
				setMessage={setMessage}
				setCache={setCache}
			/>
		</div>
	)
}
