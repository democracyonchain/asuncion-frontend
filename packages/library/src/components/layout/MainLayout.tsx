import { coreMenuUser } from '@components/service/authservice';
import { useNavigate } from "react-router-dom";
export const MainLayout = () => {
    //Varibles Generales
    const getModuloSession=JSON.parse(sessionStorage.getItem("getModuloSession") as any);
    
    //Hook Navigate
	const navigate = useNavigate();

    return (
        <div className="surface-0 text-center  bg-transparent">
            <div className="mb-4 font-semibold text-sm p-2  flex justify-content-end">
                <span className="text-bluegray-500 bg-white p-2 border-round-lg">Aplicaciones | 
                    <span className="text-primary"> BSM</span>
                </span>
                
            </div>
            <div className="grid">
              
                {getModuloSession?.map((data:any,key:any)=>(                    
                    <div className="col-12 lg:col-6 xl:col-4" key={key}>
                        <div className='bg-gray-50 '>
                            <span className="p-3  cursor-pointer  hidden lg:inline-block border-1 surface-border hover:shadow-2 surface-100 " style={{ borderRadius: '10px' }} 
                                onClick={()=>{coreMenuUser({dataMenuUser:data.menu,modulo:data.nombre,navigate})}}>
                                <i className={` text-7xl ${data.color} ${data.icono} `}></i>
                            </span>
                            <span className="p-3 cursor-pointer inline-block lg:hidden border-1 surface-border surface-100" style={{ borderRadius: '10px' }} 
                                onClick={()=>{coreMenuUser({dataMenuUser:data.menu,modulo:data.nombre,navigate})}}>
                                <i className={` text-7xl ${data.color} ${data.icono}`}></i>
                            </span>
                            <div className="text-gray-500 text-sm mb-3 font-semibold p-2">{data.nombre}</div>
                        </div>                        
                    </div>   
                ))}
            </div>
        </div>   
    )
}
