import { coreMenuUser } from '@components/service/authservice';
import { useNavigate } from "react-router-dom";
import { Card } from 'primereact/card';
import { UtilsButton } from '@components/partials/Utils'
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
            <div className="card flex justify-content-center ">              
                {getModuloSession?.map((data:any,key:any)=>(      
                    <Card key={key} title={data.nombre} subTitle="Blockchain System Voting " 
                        footer={<UtilsButton 
                                onClick={()=>{coreMenuUser({dataMenuUser:data.menu,modulo:data.nombre,navigate,url:data.url})}}
                                label='Acceder'
                                size='small'
                                severity='primary'
                                className={` ${data.color} hover:shadow-2 border-1 border-200`}
                                icon='pi pi-check'
                                outlined                               
                                ></UtilsButton>} 
                        header={<></>} 
                        className="md:w-25rem shadow-none" 
                        pt={{title:{'className':'text-base'},subTitle:{'className':'text-sm'}}}
                    >
                        <span className="p-3  cursor-pointer  inline-block border-1 surface-border hover:shadow-2 surface-100 " style={{ borderRadius: '10px' }}
                             onClick={()=>{coreMenuUser({dataMenuUser:data.menu,modulo:data.nombre,navigate,url:data.url})}}  
                        >
                            <i className={` text-7xl ${data.color} ${data.icono} `}></i>
                        </span>
                    </Card>                   
                ))}
            </div>
        </div>   
    )
}
