import React,{useRef} from 'react'
import { Sidebar } from 'primereact/sidebar';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { Image } from 'primereact/image';
export const SidebarLayout = ({active,setActive}:{active:boolean,setActive:any}) => {

    const btnRef1 = useRef<any>(null);
    const btnRef2 = useRef<any>(null);
    const btnRef3 = useRef<any>(null);
    const btnRef4 = useRef<any>(null);

    const customHeader = (
        <div className="flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#4fc3f7" d="M44.945,21.453L26.547,3.055c-1.404-1.404-3.689-1.404-5.094,0L3.055,21.453	c-1.404,1.404-1.404,3.689,0,5.094l18.398,18.398c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053l18.398-18.398	C46.349,25.143,46.349,22.857,44.945,21.453z M24,29l-5-5l5-5l5,5L24,29z">
                </path>
                <path fill="#2979ff" d="M33.246,9.754L24,19l5,5l-5,5l9.246,9.246l11.699-11.699c1.404-1.404,1.404-3.689,0-5.094	L33.246,9.754z">
                </path>
                <path fill="#2962ff" d="M14.754,38.246l6.699,6.699c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053	l6.699-6.699L24,29L14.754,38.246z">    
                </path>
            </svg>
          <h4 className='text-gray-600 text-sm'>Blockchain Voting System <span className='text-primary font-semibold'> </span></h4>
        </div>
    );
    return (
    <div>
        <Sidebar  visible={active} onHide={() => setActive(false)} header={customHeader} className='w-19rem'>
            <div className="min-h-screen flex relative  surface-ground">
                <div id="app-sidebar-2" className="surface-section h-screen flex-shrink-0 absolute left-0 top-0 z-1  select-none" style={{ width: '280px' }}>
                    <div className="flex flex-column h-full">                      
                        <div className="">
                        
                            <ul className="list-none p-3 m-0">
                            <li>
                                    <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                            <span className="font-bold text-sm">SEGURIDADES</span>
                                            <i className="pi pi-chevron-down"></i>
                                            <Ripple />
                                        </div>
                                    </StyleClass>
                                    <ul className="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a onClick={()=>{setActive(false)}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-user mr-2"></i>
                                                <span className="font-medium text-sm">Usuarios</span>
                                               
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={()=>{setActive(false)}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-bookmark mr-2"></i>
                                                <span className="font-medium text-sm">Roles</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <a  ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium text-sm">Reports</span>
                                                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                    <Ripple />
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium text-sm">Revenue</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <a onClick={()=>{setActive(false)}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-table mr-2"></i>
                                                                <span className="font-medium text-sm">View</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a onClick={()=>{setActive(false)}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-search mr-2"></i>
                                                                <span className="font-medium text-sm">Search</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a onClick={()=>{setActive(false)}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium text-sm">Expenses</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a onClick={()=>{setActive(false)}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium text-sm">Team</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={()=>{setActive(false)}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-comments mr-2"></i>
                                                <span className="font-medium text-sm">Messages</span>
                                                <span className="inline-flex align-items-center justify-content-center ml-auto bg-primary text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                                    3
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={()=>{setActive(false)}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-calendar mr-2"></i>
                                                <span className="font-medium text-sm">Calendar</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={()=>{setActive(false)}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-cog mr-2"></i>
                                                <span className="font-medium text-sm">Settings</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                           
                                {/* <li>
                                    <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                            <span className="font-semibold text-sm">{modulo}</span>
                                            <i className="pi pi-chevron-down"></i>
                                            <Ripple />
                                        </div>
                                    </StyleClass>
                                    <ul className="list-none p-0 m-0 ">

                                    {data?.map((data:any)=>(
                                        <li  key={data?.idmenu}>
                                            <a onClick={()=>{dispatch(setNavegacion({open:false}));navigate('app/'+ path +'/' + encode(data.menu.url.split('/')[3]))}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className={data.menu.icono + " pi pi-circle mr-2"}></i>
                                                <span className="font-medium text-sm">{ data.menu.url.split('/')[3]}</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    ))}
                                    </ul>
                                </li> */}
                                             
                        </div>              
                    </div>
                </div>
            </div>       
        </Sidebar>
    </div>
  )
}
