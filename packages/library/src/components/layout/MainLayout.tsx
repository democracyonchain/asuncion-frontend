import React from 'react'

export const MainLayout = () => {
    return (
        <div className="surface-0 text-center  bg-transparent">
            <div className="mb-4 font-semibold text-sm p-2  flex justify-content-end">
                <span className="text-bluegray-500 bg-white p-2 border-round-lg">Aplicaciones | 
                    <span className="text-primary"> BSM</span>
                </span>
                
            </div>
            <div className="grid"> 
                <div className="col-12 lg:col-6 xl:col-4">
                    <div className='bg-gray-50 '>
                        <span className="p-3  cursor-pointer  hidden lg:inline-block border-1 surface-border hover:shadow-2 " style={{ borderRadius: '10px' }} 
                            onClick={()=>{}}>
                            <i className={" text-7xl pi pi-lock text-indigo-400"}></i>
                        </span>
                        <span className="p-3 cursor-pointer inline-block lg:hidden" style={{ borderRadius: '10px' }} 
                            onClick={()=>{}}>
                            <i className={" text-7xl pi pi-lock text-indigo-300"}></i>
                        </span>
                        <div className="text-gray-500 text-sm mb-3 font-semibold p-2">Seguridades</div>
                    </div>                        
                </div>   
                <div className="col-12 lg:col-6 xl:col-4">
                    <div className='bg-gray-50'>
                        <span className="p-3 cursor-pointer  hidden lg:inline-block border-1 surface-border hover:shadow-2" style={{ borderRadius: '10px' }} 
                            onClick={()=>{}}>
                            <i className={" text-7xl pi pi-sliders-v text-bluegray-400"}></i>
                        </span>
                        <span className="p-3 cursor-pointer  inline-block lg:hidden" style={{ borderRadius: '10px' }} 
                            onClick={()=>{}}>
                            <i className={" text-7xl pi pi-sliders-v text-bluegray-400"}></i>
                        </span>
                        <div className="text-gray-500 text-sm mb-3 font-semibold p-2">Parametrización</div>      
                    </div>                  
                </div> 
                <div className="col-12 lg:col-6 xl:col-4 ">
                    <div className='bg-gray-50'>
                        <span className="p-3 cursor-pointer hidden lg:inline-block border-1 surface-border hover:shadow-2 " style={{ borderRadius: '10px' }} 
                            onClick={()=>{}}>
                            <i className={" text-7xl pi pi-share-alt text-teal-400"}></i>
                        </span>
                        <span className="p-3 cursor-pointer  inline-block lg:hidden" style={{ borderRadius: '10px' }} 
                            onClick={()=>{}}>
                            <i className={" text-7xl pi pi-share-alt text-teal-300"}></i>
                        </span>
                        <div className="text-gray-500  text-sm mb-3 font-semibold p-2">Procesos</div>    
                    </div>                    
                </div> 
                <div className="col-12 lg:col-6 xl:col-4 ">
                    <div className='bg-gray-50'>
                        <span className="p-3 cursor-pointer hidden lg:inline-block border-1 surface-border hover:shadow-2" style={{ borderRadius: '10px' }} 
                            onClick={()=>{}}>
                            <i className={" text-7xl pi pi-chart-bar text-yellow-400"}></i>
                        </span>
                        <span className="p-3 cursor-pointer inline-block lg:hidden" style={{ borderRadius: '10px' }} 
                            onClick={()=>{}}>
                            <i className={" text-7xl pi pi-chart-bar text-yellow-300"}></i>
                        </span>
                        <div className="text-gray-500 text-sm mb-3 font-semibold p-2">Reportes</div>       
                    </div>                 
                </div> 
                {/* {userModulos?.map((data:any)=>(                            
                    <div className="col-12 md:col-6 lg:col-4 "  key={data.idmodulo}>
                        <span className="p-3 shadow-2 mb-3  cursor-pointer hover:shadow-6 hidden lg:inline-block" style={{ borderRadius: '10px' }} 
                            onClick={()=>onGetModulos({nombre:data.nombre,idmodulo:data.idmodulo})}>
                            <i className={data.icono + " text-6xl text-blue-500"}></i>
                        </span>
                        <span className="p-3 shadow-2 mb-3  cursor-pointer hover:shadow-6 inline-block lg:hidden" style={{ borderRadius: '10px' }} 
                            onClick={()=>{dispatch(setNavegacion({open:true}));onGetModulos({nombre:data.nombre,idmodulo:data.idmodulo})}}>
                            <i className={data.icono + " text-6xl text-indigo-500"}></i>
                        </span>
                        <div className="text-bluegray-700  text-sm mb-3 font-normal ">Módulo de {data.nombre}</div>                        
                    </div>  
                ))}                 */}
                
            </div>
        </div>   
    )
}
