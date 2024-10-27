import { coreMenuUser } from '@components/service/authservice';
import { useNavigate } from "react-router-dom";
import { Card } from 'primereact/card';

import Icon from '@mui/material/Icon';
/**
 * Componente `MainLayout`.
 * 
 * Este componente representa el diseño principal de la aplicación. 
 * Recupera la sesión del módulo desde el almacenamiento de la sesión y 
 * muestra una lista de tarjetas con información del módulo.
 * 
 * @returns {JSX.Element} El diseño principal de la aplicación.
 * 
 * Variables Generales:
 * - `getModuloSession`: Recupera y analiza la sesión del módulo desde el almacenamiento de la sesión.
 * 
 * Hooks:
 * - `useNavigate`: Hook de navegación para redirigir a diferentes rutas.
 * 
 * Estructura del Componente:
 * - Contenedor principal con clases de estilo.
 * - Encabezado con el nombre de la aplicación.
 * - Lista de tarjetas generadas dinámicamente a partir de `getModuloSession`.
 * 
 * Cada tarjeta contiene:
 * - Título del módulo.
 * - Subtítulo con información adicional.
 * - Ícono representativo del módulo.
 * 
 * Eventos:
 * - `onClick`: Llama a la función `coreMenuUser` con los datos del menú del usuario, 
 *   nombre del módulo, función de navegación y URL del módulo.
 */
export const MainLayout = () => {
    //Varibles Generales
    const getModuloSession=JSON.parse(sessionStorage.getItem("getModuloSession") as any);
    
    //Hook Navigate
	const navigate = useNavigate();

    return (
        <div className="surface-0 text-center  bg-transparent ">
            <div className="mb-4 font-semibold text-sm p-2  flex justify-content-end">
                <span className="text-bluegray-500 bg-white p-2 border-round-lg">Aplicaciones | 
                    <span className="text-primary"> BSM</span>
                </span>
                
            </div>
            <div className="card justify-content-center grid ">              
                {getModuloSession?.map((data:any,key:any)=>(      
                    <Card key={key}  title={data.nombre} subTitle={<span className='text-gray-500 font-semibold'>Blockchain System  <span className="text-primary">Voting</span></span> }
                        footer={''} 
                        header={<></>} 
                        className="shadow-none col-12 md:col-4 " 
                        pt={{title:{'className':'text-base'},subTitle:{'className':'text-sm'}}}
                    >
                        <span className="p-3  cursor-pointer  inline-block border-1 surface-border hover:shadow-2 surface-100 " style={{ borderRadius: '10px' }}
                             onClick={()=>{coreMenuUser({dataMenuUser:data.menu,modulo:data.nombre,navigate,url:data.url})}}  
                        >                           
                             <Icon fontSize="medium" className={` text-7xl ${data.color} `}>{data.icono}</Icon>                           
                        </span>
                    </Card>                   
                ))}
            </div>
        </div>   
    )
}
