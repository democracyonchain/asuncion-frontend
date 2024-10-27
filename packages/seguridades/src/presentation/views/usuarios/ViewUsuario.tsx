import { useEffect, useState } from 'react';
import { graphql,UtilsSpinner,UtilsPanel } from "@bsc/library";
import { processUsuarioQuery } from "@application/services/usuarioService";
import { Divider } from 'primereact/divider';

/**
 * Componente `ViewUsuario` que muestra la información detallada de un usuario.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.dataGrid - Datos del usuario seleccionados en el grid.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa la vista detallada del usuario.
 * 
 * @remarks
 * Este componente utiliza GraphQL para obtener los datos del usuario basado en el `id` proporcionado en `dataGrid`.
 * Utiliza hooks de React como `useState` y `useEffect` para manejar el estado y los efectos secundarios.
 * 
 * @example
 * ```tsx
 * <ViewUsuario dataGrid={dataGrid} />
 * ```
 * 
 * @component
 * 
 * @category Views
 */
export const ViewUsuario = ({dataGrid}:{dataGrid:any}) => {

     //Metodos Graphql
	const { useUsuarioLazyQuery } = graphql
    const [ getUsuarioLazyQuery ] = useUsuarioLazyQuery();

    //Hook UseState
    const [ usuarioQuery,setUsuarioQuery] = useState<any>()
    const [ statusLoading, setStatusLoading] = useState<boolean>(false)

    //Hook useEffect
    useEffect(()=>{
        if(dataGrid?.id){
            processUsuarioQuery({getUsuarioLazyQuery,setUsuarioQuery,query:{id:parseInt(dataGrid?.id)},setStatusLoading})
        }
    },[])

    return (
        <>
            <UtilsSpinner visible={statusLoading}/>
            <div className="formgrid grid">	
                <div className='field col-12 md:col-6'>
                    <Divider align="left" className='m-2'>
                            <div className="inline-flex align-items-center text-sm">                    
                                <b>Nombres :</b>
                            </div>
                    </Divider>
                    <span className='text-sm ml-5'>{usuarioQuery?.nombres}</span>
                </div>
                <div className='field col-12 md:col-6'>
                    <Divider align="left" className='m-2'>
                            <div className="inline-flex align-items-center text-sm">                    
                                <b>Apellidos :</b>
                            </div>
                    </Divider>
                    <span className='text-sm ml-5'>{usuarioQuery?.apellidos}</span>
                </div>           
            </div>	
            <div className="formgrid grid">	
                <div className='field col-12 md:col-6'>
                    <Divider align="left" className='m-2'>
                            <div className="inline-flex align-items-center text-sm">                    
                                <b>usuario :</b>
                            </div>
                    </Divider>
                    <span className='text-sm ml-5'>{usuarioQuery?.username}</span>
                </div>
                <div className='field col-12 md:col-6'>
                    <Divider align="left" className='m-2'>
                            <div className="inline-flex align-items-center text-sm">                    
                                <b>Correo :</b>
                            </div>
                    </Divider>
                    <span className='text-sm ml-5'>{usuarioQuery?.email}</span>
                </div>           
            </div>
            <div className="formgrid grid">	
            <div className='field col-12 md:col-6'>
                    <Divider align="left" className='m-2'>
                            <div className="inline-flex align-items-center text-sm">                    
                                <b>Empresa :</b>
                            </div>
                    </Divider>
                    <span className='text-sm ml-5'>{usuarioQuery?.establecimiento?.nombre}</span>
                </div>
                <div className='field col-12 md:col-6'>
                    <Divider align="left" className='m-2'>
                            <div className="inline-flex align-items-center text-sm">                    
                                <b>Provincia :</b>
                            </div>
                    </Divider>
                    <span className='text-sm ml-5'>{usuarioQuery?.provincia?.nombre}</span>
                </div>                   
            </div>
            <div className="formgrid grid">	
                <div className='field col-12 md:col-6'>
                    <Divider align="left" className='m-2'>
                            <div className="inline-flex align-items-center text-sm">                    
                                <b>	Estado :</b>
                            </div>
                    </Divider>
                    <span className={`${(usuarioQuery?.estado)?'text-blue-500':'text-red-500' } p-2 ml-5 text-sm font-semibold`} >{(usuarioQuery?.estado)?'Activo':'Inactivo'}</span>
                </div>         
            </div>

            <div className="formgrid grid">
                <div className='field col-12 md:col-12'>
                <UtilsPanel header='Roles Asignados'>                  
                    {usuarioQuery?.rolusuario?.map((data:any,key:any)=>{
                         return(
                            <div className="formgrid grid" key={key}>	
                                <div className='field col-12 md:col-12'>
                                    <Divider align="left" className='m-2'>
                                        <div className="inline-flex align-items-center text-sm">   
                                        <i className="pi pi-id-card mr-2"></i>                  
                                        {data?.rol.nombre}
                                        </div>
                                    </Divider>                                  
                                </div>
                            </div>
                         )
                    })}
                </UtilsPanel>
                </div>
            </div>
        </>
    )
}
