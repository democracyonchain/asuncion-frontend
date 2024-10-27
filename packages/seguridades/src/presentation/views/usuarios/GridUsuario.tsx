import { useEffect,useState,useRef } from 'react'
import { graphql,UtilsCoreDataTable,UtilsConfirm } from "@bsc/library";
import { processUsuarioCollection,columnsUsuario,processEliminarUsuario } from "@application/services/usuarioService"
import { setPageInfo,setLabelTab,setMessage,setCache } from '@presentation/actions';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { ViewUsuario } from '@presentation/views/usuarios/ViewUsuario'


interface Usuario{
	id: number | null
	apellidos:string | null
    nombres: string | null
    username: string | null
	estado:boolean
	provincia:  string | null
}
/**
 * Componente GridUsuario
 * 
 * Este componente es responsable de mostrar una tabla de usuarios con funcionalidades de selección, eliminación y notificaciones.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.navigate - Función de navegación para redirigir a otras vistas.
 * 
 * @returns {JSX.Element} - Retorna un elemento JSX que contiene la tabla de usuarios y componentes auxiliares.
 * 
 * @hook useState - Maneja el estado de la colección de usuarios, el usuario seleccionado y la visibilidad de confirmaciones.
 * @hook useRef - Referencia para el componente de notificaciones (toast).
 * @hook useEffect - Efecto para cargar la colección de usuarios al montar el componente y mostrar mensajes de notificación.
 * 
 * @method onSubmit - Método para manejar la eliminación de un usuario, mostrando una confirmación antes de proceder.
 * 
 * @redux useSelector - Obtiene el estado de la aplicación desde Redux.
 * @redux useDispatch - Despacha acciones a Redux.
 * 
 * @graphql useUsuarioCollectionLazyQuery - Consulta perezosa para obtener la colección de usuarios.
 * @graphql useUsuarioDeleteMutation - Mutación para eliminar un usuario.
 * 
 * @component UtilsConfirm - Componente para mostrar confirmaciones de acciones.
 * @component UtilsCoreDataTable - Componente para mostrar la tabla de datos de usuarios.
 */
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
			dispatch(setLabelTab({...labelTab,labelNew:'Nuevo Usuario',iconNew:'group_add'}));
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
				ContenidoView={ViewUsuario}
				navigate={navigate}
				onSubmit={onSubmit}
				toast={toast}
				setMessage={setMessage}
				setCache={setCache}
			/>
		</div>
	)
}
