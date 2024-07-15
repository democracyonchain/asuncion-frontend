import { useEffect, useState } from 'react';
import { graphql,UtilsSpinner } from "@bsc/library";
import { processMenuQuery } from "@application/services/menuService";
import { Divider } from 'primereact/divider';
import Icon from '@mui/material/Icon';
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
