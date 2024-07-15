import { coreMenuUser } from '@components/service/authservice';
import { useNavigate } from "react-router-dom";
import { Card } from 'primereact/card';
import { UtilsButton } from '@components/partials/Utils';
import Icon from '@mui/material/Icon';
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
