import React,{useRef} from 'react'
import { Sidebar } from 'primereact/sidebar';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Icon from '@mui/material/Icon';
export const SidebarLayout = ({active,setActive,path}:{active:boolean,setActive:any,path:any}) => {
    //Data Storage
	const dataMenuUser=JSON.parse(sessionStorage.getItem("dataMenuUser") as any);
    let dataAuxMenu=dataMenuUser?.dataMenuUser;

    //Gestor estados Redux
	const dispatch = useDispatch()

	//Varaibles Generales
	const navigate = useNavigate();

    const btnRef1 = useRef<any>(null);
    

    const customHeader = (
        <div className="flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#4fc3f7" d="M44.945,21.453L26.547,3.055c-1.404-1.404-3.689-1.404-5.094,0L3.055,21.453	c-1.404,1.404-1.404,3.689,0,5.094l18.398,18.398c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053l18.398-18.398	C46.349,25.143,46.349,22.857,44.945,21.453z M24,29l-5-5l5-5l5,5L24,29z">
                </path>
                <path fill="#2979ff" d="M33.246,9.754L24,19l5,5l-5,5l9.246,9.246l11.699-11.699c1.404-1.404,1.404-3.689,0-5.094	L33.246,9.754z">
                </path>
                <path fill="#2962ff" d="M14.754,38.246l6.699,6.699c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053	l6.699-6.699L24,29L14.754,38.246z">    
                </path>
            </svg>
            <h4 className='text-gray-600 text-sm p-1'>Blockchain System <span className='text-primary font-semibold'>Voting</span></h4>
        </div>
    );
    return (
    <div>
        <Sidebar  visible={active} onHide={() => dispatch(setActive({open:false}))}  header={customHeader} className='w-18rem' showCloseIcon={false} closeOnEscape={true} >           
            <div className="min-h-screen flex relative  surface-ground">
                <div id="app-sidebar-2" className="surface-section h-screen flex-shrink-0 absolute left-0 top-0 z-1  select-none" style={{ width: '250px' }}>
                    <div className="flex flex-column h-full">                      
                        <div className="">
                        {(dataAuxMenu)&&
                            <ul className="list-none p-1 m-0">
                                <li>
                                    <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                            <span className="font-bold text-sm">Modulo | {dataMenuUser?.modulo}</span>
                                            <i className="pi pi-chevron-down"></i>
                                            <Ripple />
                                        </div>
                                    </StyleClass>
                                    <ul className="list-none p-0 m-0 ">

                                    {dataAuxMenu?.map((data:any,key:any)=>(
                                        
                                        <li  key={key}>
                                            <a onClick={()=>{navigate(
                                                `${data?.url}${(data?.permisos[0]?.crear && !data?.permisos[0]?.leer)?'new':(data?.permisos[0]?.crear && data?.permisos[0]?.leer)?'new':(data?.permisos[0]?.leer && !data?.permisos[0]?.crear)&&'record'}`,{ state: { permisos:data?.permisos[0] } });
                                                 dispatch(setActive({open:false}))}} className=" hover:text-primary p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <Icon fontSize="medium" className='mr-2'>{data.icono}</Icon>
                                                <span className="font-medium text-sm">{ data.titulo}</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    ))}
                                    </ul>
                                </li>
                            </ul>
                        }                                              
                        </div>              
                    </div>
                </div>
            </div>       
        </Sidebar>
    </div>
  )
}
