import { Menu } from 'primereact/menu';
import { useEffect,  useState } from 'react';
import { coreMenuModulo } from '@components/service/authservice';
import { useNavigate } from "react-router-dom";
/**
 * Componente Sidebar.
 * 
 * Este componente representa una barra lateral que utiliza datos almacenados en el sessionStorage
 * para generar un menú dinámico.
 * 
 * @returns {JSX.Element} - Retorna un elemento JSX que contiene el menú.
 * 
 * @remarks
 * - Utiliza el hook `useState` para manejar el estado de los elementos del menú.
 * - Utiliza el hook `useEffect` para actualizar los elementos del menú cuando cambian los datos en el sessionStorage.
 * - Utiliza la función `coreMenuModulo` para generar los elementos del menú basados en los datos del usuario.
 * 
 * @example
 * ```tsx
 * <Sidebar />
 * ```
 */
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
        <div>                  
            <Menu model={menuItems} className="w-17rem p-4 border-none"  pt={{menuitem:{'className':'text-sm text-gray-600 '},submenuHeader:{'className':''}}}/>
        </div>       
    )
}
