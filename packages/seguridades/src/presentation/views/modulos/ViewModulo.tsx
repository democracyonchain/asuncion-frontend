import { useEffect, useState } from 'react';
import { graphql,UtilsSpinner } from "@bsc/library";
import { processModuloQuery } from "@application/services/moduloService";
import { Divider } from 'primereact/divider';
export const ViewModulo = ({dataGrid}:{dataGrid:any}) => {

	//Metodos Graphql
	const { useModuloLazyQuery } = graphql
  	const [ getModuloLazyQuery,{loading}] = useModuloLazyQuery();

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
					<i className={moduloQuery?.icono} style={{ fontSize: '1.5rem',marginLeft:'2rem' }}></i>
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
