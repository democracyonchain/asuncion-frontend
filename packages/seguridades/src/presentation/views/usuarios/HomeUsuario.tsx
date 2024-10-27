import React from 'react'
import { UtilsCoreTabMenu } from "@bsc/library";
import { useRoutes,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { setInitial,setLabelTab,resetAction } from '@presentation/actions';
import { GridUsuario, FormUsuario} from '@presentation/views/usuarios';
import { useEffect } from "react";

/**
 * Componente `HomeUsuario`.
 * 
 * Este componente es la vista principal para la gestión de usuarios. Utiliza Redux para manejar el estado y 
 * react-router para la navegación.
 * 
 * @returns {JSX.Element} El componente `HomeUsuario`.
 * 
 * @remarks
 * - Al montar el componente, se despachan acciones para reiniciar el estado y establecer etiquetas de pestañas.
 * - Utiliza el componente `UtilsCoreTabMenu` para renderizar un menú de pestañas con vistas de formulario y grid.
 * 
 * @example
 * ```tsx
 * <HomeUsuario />
 * ```
 * 
 * @component
 */
export const HomeUsuario = () => {
    const navigate = useNavigate();
    
    //Gestor estados Redux
    const { initial,labelTab }:any= useSelector<RootState>( (state) => state.seguridades);
    const dispatch = useDispatch();

    useEffect(()=>{        
        dispatch(resetAction());
        dispatch(setLabelTab({labelNew:'Nuevo Usuario',labelGrid:'Datos Usuarios',iconNew:'group_add'}));
    },[])
   
    return (
        <div>            
            <UtilsCoreTabMenu 
                model={{labelNew:labelTab?.labelNew,labelGrid:labelTab.labelGrid,iconNew:labelTab.iconNew,iconGrid:labelTab.iconGrid}}                
                useRoutes={useRoutes}
                navigate={navigate}
                viewForm={<FormUsuario navigate={navigate}/>}
                viewGrid={<GridUsuario navigate={navigate}/>}
                init={initial}
                setInitial={setInitial}
                dispatch={dispatch}
            />
        </div>
    )
}
