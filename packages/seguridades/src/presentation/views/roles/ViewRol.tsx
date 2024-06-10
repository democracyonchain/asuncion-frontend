import { useEffect, useState } from 'react';
import { graphql,UtilsSpinner,UtilsPanel } from "@bsc/library";
import { processRolQuery } from "@application/services/rolService";
import { Divider } from 'primereact/divider';
import { Message } from 'primereact/message';
export const ViewRol = ({dataGrid}:{dataGrid:any}) => {
        //Metodos Graphql
	const { useRolLazyQuery } = graphql
    const [ getRolLazyQuery ] = useRolLazyQuery();

    //Hook UseState
    const [ rolQuery,setRolQuery] = useState<any>()
    const [ statusLoading, setStatusLoading] = useState<boolean>(false)

    //Hook useEffect
    useEffect(()=>{
        if(dataGrid?.id){
            processRolQuery({getRolLazyQuery,setRolQuery,query:{id:parseInt(dataGrid?.id)},setStatusLoading})
        }
    },[dataGrid])

    return (
        <>
        <UtilsSpinner visible={statusLoading}/>
        <div className="formgrid grid">	
            <div className='field col-12 md:col-12 flex flex-row-reverse flex-wrap'>
                <Divider align="right" className='m-2'>
                        <div className="inline-flex align-items-center text-sm">                    
                            <b>Estado |	{(rolQuery?.estado)?'Activo':'Inactivo'}</b>
                        </div>
                </Divider>
            </div>
        </div>
        <div className="formgrid grid">	
            <div className='field col-12 md:col-6'>
                <Divider align="left" className='m-2'>
                        <div className="inline-flex align-items-center text-sm">                    
                            <b>Nombre :</b>
                        </div>
                </Divider>
                <span className='text-sm ml-5'>{rolQuery?.nombre}</span>
            </div>
            <div className='field col-12 md:col-6'>
                <Divider align="left" className='m-2'>
                        <div className="inline-flex align-items-center text-sm">                    
                            <b>Descripción :</b>
                        </div>
                </Divider>
                <span className='text-sm ml-5'>{rolQuery?.descripcion}</span>
            </div>           
        </div>	
      
        <div className="formgrid grid">
            <div className='field col-12 md:col-12'>
                {rolQuery?.permisos.map((data:any,key:any)=>{
                    return(
                        <div key={key} className='m-2'>
                            <UtilsPanel header={data.menu.titulo} toggleable>
                                <div className="formgrid grid">	
                                    <div className='field col-12 md:col-4'>
                                        <Divider align="left" className='m-2'>
                                                <div className="inline-flex align-items-center text-sm">                    
                                                <i className="pi pi-plus mr-2"></i>  
                                                <b>Crear :</b>
                                                </div>
                                        </Divider>
                                        <span className={`text-sm ml-6 font-semibold ${(data?.crear)?'text-blue-400':'text-red-500'}`}>{
                                            (data?.crear)?<i className='pi pi-check'></i>:<i className='pi pi-times'></i>}
                                        </span>
                                    </div>
                                    <div className='field col-6 md:col-4'>
                                        <Divider align="left" className='m-2'>
                                                <div className="inline-flex align-items-center text-sm">                    
                                                <i className="pi pi-pencil mr-2"></i>
                                                <b>Editar :</b>
                                                </div>
                                        </Divider>
                                        <span className={`text-sm ml-6 font-semibold ${(data?.editar)?'text-blue-400':'text-red-500'}`}>{
                                            (data?.editar)?<i className='pi pi-check'></i>:<i className='pi pi-times'></i>}
                                        </span>
                                    </div>
                                    <div className='field col-12 md:col-4'>
                                        <Divider align="left" className='m-2'>
                                                <div className="inline-flex align-items-center text-sm">                    
                                                <i className="pi pi-trash mr-2"></i>
                                                <b>Eliminar :</b>
                                                </div>
                                        </Divider>
                                        <span className={`text-sm ml-6 font-semibold ${(data?.eliminar)?'text-blue-400':'text-red-500'}`}>{
                                            (data?.eliminar)?<i className='pi pi-check'></i>:<i className='pi pi-times'></i>}
                                        </span>
                                    </div>
                                </div>
                                <div className="formgrid grid">	
                                    <div className='field col-12 md:col-4'>
                                        <Divider align="left" className='m-2'>
                                                <div className="inline-flex align-items-center text-sm">                    
                                                <i className="pi pi-file mr-2"></i>
                                                <b>Leer :</b>
                                                </div>
                                        </Divider>
                                        <span className={`text-sm ml-6 font-semibold ${(data?.leer)?'text-blue-400':'text-red-500'}`}>{
                                            (data?.leer)?<i className='pi pi-check'></i>:<i className='pi pi-times'></i>}
                                        </span>
                                    </div>
                                    <div className='field col-6 md:col-4'>
                                        <Divider align="left" className='m-2'>
                                                <div className="inline-flex align-items-center text-sm">                    
                                                <i className="pi pi-print mr-2"></i>
                                                <b>Imprimir :</b>
                                                </div>
                                        </Divider>
                                        <span className={`text-sm ml-6 font-semibold ${(data?.imprimir)?'text-blue-400':'text-red-500'}`}>{
                                            (data?.imprimir)?<i className='pi pi-check'></i>:<i className='pi pi-times'></i>}
                                        </span>
                                    </div>
                                </div>
                            </UtilsPanel>
                        </div>
                    )
                })}
            </div>
        </div>
       </>
    )
}
