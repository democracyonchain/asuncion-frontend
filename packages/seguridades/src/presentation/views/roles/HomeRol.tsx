import { UtilsCoreTabMenu } from "@bsc/library";
import { useRoutes,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { setInitial,setLabelTab,resetAction } from '@presentation/actions';
import { GridRol, FormRol} from '@presentation/views/roles';
import { useEffect } from "react";

/**
 * Componente `HomeRol` que representa la vista principal para la gestión de roles.
 * 
 * @returns {JSX.Element} Un componente que contiene el menú de pestañas y las vistas de formulario y grid para roles.
 * 
 * @remarks
 * - Utiliza `useNavigate` para la navegación.
 * - Utiliza `useSelector` para obtener el estado de Redux relacionado con seguridades.
 * - Utiliza `useDispatch` para despachar acciones de Redux.
 * - En el `useEffect`, se reinicia el estado y se establecen las etiquetas de las pestañas.
 * 
 * @component
 * 
 * @example
 * ```tsx
 * <HomeRol />
 * ```
 */
export const HomeRol = () => {
    const navigate = useNavigate();
    
    //Gestor estados Redux
    const { initial,labelTab }:any= useSelector<RootState>( (state) => state.seguridades);
    const dispatch = useDispatch();

    useEffect(()=>{        
        dispatch(resetAction());
        dispatch(setLabelTab({labelNew:'Nuevo Rol',labelGrid:'Datos Rol'}));
    },[])
   
    return (
        <div>            
            <UtilsCoreTabMenu 
                model={{labelNew:labelTab?.labelNew,labelGrid:labelTab.labelGrid,iconNew:labelTab.iconNew,iconGrid:labelTab.iconGrid}}                
                useRoutes={useRoutes}
                navigate={navigate}
                viewForm={<FormRol navigate={navigate}/>}
                viewGrid={<GridRol navigate={navigate}/>}
                init={initial}
                setInitial={setInitial}
                dispatch={dispatch}
            />
        </div>
        
    )
}
