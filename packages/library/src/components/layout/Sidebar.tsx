import { Menu } from 'primereact/menu';
import { useEffect,  useState } from 'react';
import { coreMenuModulo } from '@components/service/authservice';
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {

   //Data Storage
	const dataMenuUser=JSON.parse(sessionStorage.getItem("dataMenuUser") as any);
    let dataAuxMenu=dataMenuUser?.dataMenuUser;

    //Hook UseState
    const [menuItems,setMenuItems] = useState<any>()
    
    //Varaibles Generales
	const navigate = useNavigate();


    useEffect(()=>{        
        setMenuItems(coreMenuModulo({dataAuxMenu,dataMenuUser,navigate}))
    },[sessionStorage.getItem("dataMenuUser")])


    return (
        <>           
            <Menu model={menuItems} className="w-19rem p-4 border-none "  pt={{menuitem:{'className':'text-sm text-gray-600 '},submenuHeader:{'className':''}}}/>
        </>       
    )
}
