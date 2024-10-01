import { useEffect, useState } from 'react';
import { graphql,UtilsSpinner } from "@bsc/library";
import { processMenuQuery } from "@application/services/menuService";
import { Divider } from 'primereact/divider';
import Icon from '@mui/material/Icon';
/**
 * Componente `ViewMenu` que muestra la información de un menú basado en los datos proporcionados.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.dataGrid - Datos del menú que se mostrarán.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa la vista del menú.
 * 
 * @remarks
 * Este componente utiliza GraphQL para obtener los datos del menú y los muestra en una estructura de cuadrícula.
 * 
 * @example
 * ```tsx
 * <ViewMenu dataGrid={data} />
 * ```
 * 
 * @component
 * 
 * @hook
 * - `useMenuLazyQuery`: Hook de GraphQL para obtener los datos del menú.
 * - `useState`: Hook de React para manejar el estado del componente.
 * - `useEffect`: Hook de React para ejecutar efectos secundarios.
 * 
 * @dependencies
 * - `graphql`: Módulo para realizar consultas GraphQL.
 * - `UtilsSpinner`: Componente para mostrar un spinner de carga.
 * - `Divider`: Componente para mostrar un divisor.
 * - `Icon`: Componente para mostrar un icono.
 */
export const ViewMenu = ({dataGrid}:{dataGrid:any}) => {

    //Metodos Graphql
	const { useMenuLazyQuery } = graphql
    const [ getMenuLazyQuery ] = useMenuLazyQuery();

    //Hook UseState
    const [ menuQuery,setMenuQuery] = useState<any>()
    const [ statusLoading, setStatusLoading] = useState<boolean>(false)

    //Hook useEffect
    useEffect(()=>{
        if(dataGrid?.id){
            processMenuQuery({getMenuLazyQuery,setMenuQuery,query:{id:parseInt(dataGrid?.id)},setStatusLoading})
        }
    },[])

    return (
        <>
        <UtilsSpinner visible={statusLoading}/>
        <div className="formgrid grid">	
            <div className='field col-12 md:col-6'>
                <Divider align="left" className='m-2'>
                        <div className="inline-flex align-items-center text-sm">                    
                            <b>Orden :</b>
                        </div>
                </Divider>
                <span className='text-sm ml-5'>{menuQuery?.orden}</span>
            </div>
            <div className='field col-12 md:col-6'>
                <Divider align="left" className='m-2'>
                        <div className="inline-flex align-items-center text-sm">                    
                            <b>Titulo :</b>
                        </div>
                </Divider>
                <span className='text-sm ml-5'>{menuQuery?.titulo}</span>
            </div>           
        </div>	
        <div className="formgrid grid">	
            <div className='field col-12 md:col-6'>
                <Divider align="left" className='m-2'>
                        <div className="inline-flex align-items-center text-sm">                    
                            <b>Url :</b>
                        </div>
                </Divider>
                <span className='text-sm ml-5'>{menuQuery?.url}</span>
            </div>
            <div className='field col-12 md:col-6'>
                <Divider align="left" className='m-2'>
                        <div className="inline-flex align-items-center text-sm">                    
                            <b>Icono : </b>
                        </div>
                        
                </Divider>
                <Icon style={{marginLeft:'2rem' }}>{menuQuery?.icono} </Icon>
            </div>
        </div>	
        <div className="formgrid grid">	
            <div className='field col-12 md:col-6'>
                <Divider align="left" className='m-2'>
                        <div className="inline-flex align-items-center text-sm">                    
                            <b>Modulo :</b>
                        </div>
                </Divider>
                <span className={`p-2 ml-5 text-sm `} >{menuQuery?.modulo.nombre}</span>
            </div>
            <div className='field col-12 md:col-6'>
                <Divider align="left" className='m-2'>
                        <div className="inline-flex align-items-center text-sm">                    
                            <b>	Estado :</b>
                        </div>
                </Divider>
                <span className={`${(menuQuery?.estado)?'text-blue-500':'text-red-500' } p-2 ml-5 text-sm font-semibold`} >{(menuQuery?.estado)?'Activo':'Inactivo'}</span>
            </div>
        </div>
       </>
    )
}
