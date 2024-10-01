import { UtilsCoreTabMenu } from "@bsc/library";
import { useRoutes,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { setInitial,setLabelTab,resetAction } from '@presentation/actions';
import { GridMenu, FormMenu} from '@presentation/views/menu';
import { useEffect } from "react";

/**
 * Componente `HomeMenu` que representa el menú principal de la aplicación.
 * 
 * Este componente utiliza Redux para gestionar el estado y react-router para la navegación.
 * 
 * @returns {JSX.Element} El componente `HomeMenu`.
 * 
 * @remarks
 * - Utiliza `useSelector` para obtener el estado inicial y las etiquetas del menú desde el estado de Redux.
 * - Utiliza `useDispatch` para despachar acciones que resetean el estado y establecen nuevas etiquetas para el menú.
 * - Utiliza `useEffect` para despachar acciones cuando el componente se monta.
 * 
 * @example
 * ```tsx
 * <HomeMenu />
 * ```
 */
export const HomeMenu = () => {
    const navigate = useNavigate();
    
    //Gestor estados Redux
    const { initial,labelTab }:any= useSelector<RootState>( (state) => state.seguridades);
    const dispatch = useDispatch();

    useEffect(()=>{        
        dispatch(resetAction());
        dispatch(setLabelTab({labelNew:'Nuevo Menu',labelGrid:'Datos Menu'}));
    },[])
   
    return (
        <div>            
            <UtilsCoreTabMenu 
                model={{labelNew:labelTab?.labelNew,labelGrid:labelTab.labelGrid,iconNew:labelTab.iconNew,iconGrid:labelTab.iconGrid}}                
                useRoutes={useRoutes}
                navigate={navigate}
                viewForm={<FormMenu navigate={navigate}/>}
                viewGrid={<GridMenu navigate={navigate}/>}
                init={initial}
                setInitial={setInitial}
                dispatch={dispatch}
            />
        </div>
    )
}
