import { UtilsCoreTabMenu } from "@bsc/library";
import { useRoutes,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { setInitial,setLabelTab,resetAction } from '@presentation/actions';
import { FormActas} from '@presentation/views/actas';
import { useEffect } from "react";

/**
 * Componente `HomeActas`.
 * 
 * Este componente es responsable de renderizar la vista principal de actas.
 * Utiliza Redux para gestionar el estado y react-router para la navegación.
 * 
 * @returns {JSX.Element} El componente `HomeActas`.
 * 
 * @remarks
 * - Al montar el componente, se despachan dos acciones de Redux: `resetAction` y `setLabelTab`.
 * - `UtilsCoreTabMenu` es un componente que recibe varias propiedades para configurar las pestañas y vistas.
 * 
 * @example
 * ```tsx
 * <HomeActas />
 * ```
 * 
 * @dependencies
 * - `useNavigate` de `react-router-dom` para la navegación.
 * - `useSelector` y `useDispatch` de `react-redux` para la gestión del estado.
 * - `resetAction` y `setLabelTab` son acciones de Redux.
 * - `UtilsCoreTabMenu` es un componente personalizado.
 * - `FormActas` es un componente que se pasa como vista de formulario.
 */
export const HomeActas = () => {
    const navigate = useNavigate();
        
    //Gestor estados Redux
    const { initial,labelTab }:any= useSelector<RootState>( (state) => state.procesos);
    const dispatch = useDispatch();

    useEffect(()=>{        
        dispatch(resetAction());
        dispatch(setLabelTab({labelNew:'Imprimir Acta',labelGrid:'Datos Acta'}));
    },[])

    return (
        <div>            
        <UtilsCoreTabMenu 
            model={{labelNew:labelTab?.labelNew,labelGrid:labelTab.labelGrid,iconNew:labelTab.iconNew,iconGrid:labelTab.iconGrid}}                
            useRoutes={useRoutes}
            navigate={navigate}
            viewForm={<FormActas navigate={navigate}/>}
            viewGrid={''}
            init={initial}
            setInitial={setInitial}
            dispatch={dispatch}
        />
    </div>
    )
}
