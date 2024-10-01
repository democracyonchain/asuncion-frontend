import { UtilsCoreTabMenu } from "@bsc/library";
import { useRoutes,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { setInitial,setLabelTab,resetAction } from '@presentation/actions';
import { FormDigitacion} from '@presentation/views/digitacion';
import { useEffect } from "react";

/**
 * Componente `HomeDigitacion`.
 * 
 * Este componente es responsable de la vista principal de digitación en la aplicación.
 * Utiliza Redux para gestionar el estado y react-router para la navegación.
 * 
 * @returns {JSX.Element} El componente `HomeDigitacion`.
 * 
 * @remarks
 * - Al montar el componente, se despachan las acciones `resetAction` y `setLabelTab` para inicializar el estado.
 * - Utiliza el componente `UtilsCoreTabMenu` para renderizar un menú de pestañas con las vistas correspondientes.
 * 
 * @example
 * ```tsx
 * <HomeDigitacion />
 * ```
 * 
 * @dependencies
 * - `useNavigate`: Hook de react-router para la navegación.
 * - `useSelector`: Hook de Redux para seleccionar el estado.
 * - `useDispatch`: Hook de Redux para despachar acciones.
 * - `useEffect`: Hook de React para manejar efectos secundarios.
 * - `UtilsCoreTabMenu`: Componente de menú de pestañas.
 * - `FormDigitacion`: Componente de formulario de digitación.
 * 
 * @redux
 * - `initial`: Estado inicial de la digitación.
 * - `labelTab`: Etiquetas para las pestañas del menú.
 * - `resetAction`: Acción para reiniciar el estado.
 * - `setLabelTab`: Acción para establecer las etiquetas de las pestañas.
 */
export const HomeDigitacion = () => {
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
            viewForm={<FormDigitacion navigate={navigate}/>}
            viewGrid={''}
            init={initial}
            setInitial={setInitial}
            dispatch={dispatch}
        />
    </div>
    )
}
