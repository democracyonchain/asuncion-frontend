import { UtilsCoreTabMenu } from "@bsc/library";
import { useRoutes,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { setInitial,setLabelTab,resetAction } from '@presentation/actions';
import { GridRol, FormRol} from '@presentation/views/roles';
import { useEffect } from "react";

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
        <>            
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
        </>
        
    )
}
