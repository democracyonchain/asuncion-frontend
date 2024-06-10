import { UtilsCoreTabMenu } from "@bsc/library";
import { useRoutes,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '@presentation/stores';
import { setInitial,setLabelTab,resetAction } from '@presentation/actions';
import { GridMenu, FormMenu} from '@presentation/views/menu';
import { useEffect } from "react";

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
        <>            
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
        </>
    )
}
