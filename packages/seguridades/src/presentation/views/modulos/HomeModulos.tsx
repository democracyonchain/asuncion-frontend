import { UtilsCoreTabMenu } from "@bsc/library";
import { useRoutes,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { setInitial,setLabelTab,resetAction } from '@presentation/actions';
import { GridModulo, FormModulo} from '@presentation/views/modulos';
import { useEffect } from "react";
/**
 * Componente `HomeModulos`.
 * 
 * Este componente es responsable de renderizar la vista principal de los módulos en la aplicación.
 * Utiliza Redux para gestionar el estado y react-router para la navegación.
 * 
 * @returns {JSX.Element} El componente `HomeModulos`.
 * 
 * @remarks
 * - Utiliza `useNavigate` para la navegación.
 * - Utiliza `useSelector` para obtener el estado de `seguridades` desde el store de Redux.
 * - Utiliza `useDispatch` para despachar acciones a Redux.
 * - En el `useEffect`, se despachan las acciones `resetAction` y `setLabelTab` al montar el componente.
 * 
 * @example
 * ```tsx
 * <HomeModulos />
 * ```
 */
export const HomeModulos = () => {
   
    const navigate = useNavigate();
    
    //Gestor estados Redux
    const { initial,labelTab }:any= useSelector<RootState>( (state) => state.seguridades);
    const dispatch = useDispatch();

    useEffect(()=>{        
        dispatch(resetAction());
        dispatch(setLabelTab({labelNew:'Nuevo Módulo',labelGrid:'Datos Módulo'}));
    },[])
   
    return (
        <div>            
            <UtilsCoreTabMenu 
                model={{labelNew:labelTab?.labelNew,labelGrid:labelTab.labelGrid,iconNew:labelTab.iconNew,iconGrid:labelTab.iconGrid}}                
                useRoutes={useRoutes}
                navigate={navigate}
                viewForm={<FormModulo navigate={navigate}/>}
                viewGrid={<GridModulo navigate={navigate}/>}
                init={initial}
                setInitial={setInitial}
                dispatch={dispatch}
            />
        </div>
        
    )
}
