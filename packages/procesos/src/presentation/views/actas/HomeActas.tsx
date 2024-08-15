import { UtilsCoreTabMenu } from "@bsc/library";
import { useRoutes,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { setInitial,setLabelTab,resetAction } from '@presentation/actions';
import { FormActas} from '@presentation/views/actas';
import { useEffect } from "react";

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
        <>            
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
    </>
    )
}
