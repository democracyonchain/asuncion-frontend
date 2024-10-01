import { useEffect, useState } from 'react';
import { graphql,UtilsSpinner } from "@bsc/library";
import { processModuloQuery } from "@application/services/moduloService";
import { Divider } from 'primereact/divider';
import Icon from '@mui/material/Icon';
/**
 * Componente `ViewModulo` que muestra la información de un módulo específico.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.dataGrid - Datos del módulo a mostrar.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa la vista del módulo.
 * 
 * @remarks
 * Este componente utiliza GraphQL para obtener los datos del módulo y los muestra en una interfaz de usuario.
 * 
 * @example
 * ```tsx
 * <ViewModulo dataGrid={{ id: 1 }} />
 * ```
 * 
 * @component
 * 
 * @example
 * ```tsx
 * // Uso del componente ViewModulo
 * <ViewModulo dataGrid={{ id: 1 }} />
 * ```
 * 
 * @remarks
 * El componente utiliza los siguientes hooks:
 * - `useModuloLazyQuery`: Hook para realizar consultas GraphQL de manera perezosa.
 * - `useState`: Hook para manejar el estado local del componente.
 * - `useEffect`: Hook para ejecutar efectos secundarios en el componente.
 * 
 * El componente muestra un spinner de carga mientras se obtienen los datos y luego muestra la información del módulo en una cuadrícula.
 */
export const ViewModulo = ({dataGrid}:{dataGrid:any}) => {

	//Metodos Graphql
	const { useModuloLazyQuery } = graphql
  	const [ getModuloLazyQuery] = useModuloLazyQuery();

	//Hook UseState
	const [ moduloQuery,setModuloQuery] = useState<any>()
	const [ statusLoading, setStatusLoading] = useState<boolean>(false)

	//Hook useEffect
	useEffect(()=>{
		if(dataGrid?.id){
			processModuloQuery({getModuloLazyQuery,setModuloQuery,query:{id:parseInt(dataGrid?.id)},setStatusLoading})
		}
	},[])

	return (
		<>
			<UtilsSpinner visible={statusLoading}/>
			<div className="formgrid grid">	
				<div className='field col-12 md:col-6'>
					<Divider align="left" className='m-2'>
							<div className="inline-flex align-items-center text-sm">                    
								<b>Nombre :</b>
							</div>
					</Divider>
					<span className='text-sm ml-5'>{moduloQuery?.nombre}</span>
				</div>
				<div className='field col-12 md:col-6'>
					<Divider align="left" className='m-2'>
							<div className="inline-flex align-items-center text-sm">                    
								<b>Código :</b>
							</div>
					</Divider>
					<span className='text-sm ml-5'>{moduloQuery?.codigo}</span>
				</div>
			</div>	
			<div className="formgrid grid">	
				<div className='field col-12 md:col-6'>
					<Divider align="left" className='m-2'>
							<div className="inline-flex align-items-center text-sm">                    
								<b>Url :</b>
							</div>
					</Divider>
					<span className='text-sm ml-5'>{moduloQuery?.url}</span>
				</div>
				<div className='field col-12 md:col-6'>
					<Divider align="left" className='m-2'>
							<div className="inline-flex align-items-center text-sm">                    
								<b>Icono : </b>
							</div>
							
					</Divider>
					<Icon style={{ fontSize: '1.5rem',marginLeft:'2rem' }}>{moduloQuery?.icono} </Icon>					
				</div>
			</div>	
			<div className="formgrid grid">	
				<div className='field col-12 md:col-6'>
					<Divider align="left" className='m-2'>
							<div className="inline-flex align-items-center text-sm">                    
								<b>Color :</b>
							</div>
					</Divider>
					<span className={`${moduloQuery?.color} p-2 ml-5 text-sm font-semibold`} >{moduloQuery?.color}</span>
				</div>
				<div className='field col-12 md:col-6'>
					<Divider align="left" className='m-2'>
							<div className="inline-flex align-items-center text-sm">                    
								<b>	Estado :</b>
							</div>
					</Divider>
					<span className={`${(moduloQuery?.estado)?'text-blue-500':'text-red-500' } p-2 ml-5 text-sm font-semibold`} >{(moduloQuery?.estado)?'Activo':'Inactivo'}</span>
				</div>
			</div>
   		</>
	)
}
