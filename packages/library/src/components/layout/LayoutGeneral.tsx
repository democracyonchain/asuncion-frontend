import { FC,ReactNode,useEffect,useState,useRef} from 'react'
import { Header } from '@components/layout/Header';
import { Sidebar } from '@components/layout/Sidebar';
import { MainLayout } from '@components/layout/MainLayout';
import { RolLayout} from '@components/layout/RolLayout';
import { PasswordLayout } from '@components/layout/PasswordLayout'
import { Route, Routes,useNavigate } from 'react-router-dom';
import { LoginLayout } from '@components/layout/LoginLayout';
import { UtilsSpinner } from '@components/partials/Utils';
import { useSelector } from "react-redux";
import { RootState } from '@store/store';
import { useAuthPerfilLazyQuery,useAdminConfiguracionCollectionLazyQuery} from "@infrastructure/graphql/__generated__/graphql-types";
import { processAuthPerfil,processAdminConfiguracion } from '@components/service/authservice';
import { Toast } from 'primereact/toast';

import "../../public/styles/general.css";

interface IlayoutProps {    
    children:ReactNode  
    path:string 
}
/**
 * Componente `LayoutGeneral` que gestiona la estructura general de la aplicación.
 * 
 * @param {IlayoutProps} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Elementos hijos que serán renderizados dentro del layout.
 * @param {string} props.path - Ruta actual de la aplicación.
 * 
 * @returns {JSX.Element} - Retorna el layout general de la aplicación.
 * 
 * @description
 * Este componente se encarga de:
 * - Obtener el token del usuario desde el `localStorage`.
 * - Gestionar la navegación utilizando `useNavigate`.
 * - Definir y manejar los estados de visibilidad de los modales auxiliares y de contraseña.
 * - Utilizar el estado global de Redux para cargar vistas.
 * - Ejecutar consultas GraphQL para obtener el perfil de autenticación y la configuración administrativa.
 * - Utilizar `useEffect` para procesar la autenticación del perfil y la configuración administrativa al cargar el componente.
 * - Renderizar el layout general con el encabezado, barra lateral, contenido principal y pie de página.
 * - Mostrar modales de rol de usuario y de contraseña según sea necesario.
 */
export const LayoutGeneral:FC<IlayoutProps> = ({children,path}) => {
    
    //Varibles Generales
    const initTokenUser=localStorage.getItem("tokenUser");
    const navigate = useNavigate();

    //useState
    const [ visibleModalAux, setVisibleModalAux ] = useState<
    {
        active:boolean,header:string,opt?:string,closable:boolean,maximizable:boolean
    }>({active:false,header:'',opt:'',closable:false,maximizable:true});
    
    const [ visibleModalPass, setVisibleModalPass] = useState<
    {
        active:boolean,header:string,opt?:string,closable:boolean,maximizable:boolean
    }>({active:false,header:'',opt:'',closable:false,maximizable:true});

    //Gestor estados Redux
    const { loadView }:any= useSelector<RootState>( (state) => state.actionShared);

    // Hook Graphql
    const [ setAuthPerfilLazyQuery,{loading}] = useAuthPerfilLazyQuery();
    const [ getConfiguracionLazyQuery] = useAdminConfiguracionCollectionLazyQuery()

    //Hook UseEffect
    useEffect(()=>{
        if(initTokenUser && !sessionStorage.getItem('dataRolUser')){
            processAuthPerfil({setAuthPerfilLazyQuery,navigate});
            processAdminConfiguracion({getConfiguracionLazyQuery})
            setVisibleModalAux({active:true,header:'Rol Usuario',closable:false,maximizable:true});
            setVisibleModalPass({active:false,header:'',closable:false,maximizable:true});
        }
    },[initTokenUser])

    // hook useRef
	const toast = useRef<any>(null);
    

    return (
        <>
            <UtilsSpinner visible={loadView}/>
            <Toast ref={toast} position="bottom-center" pt={{content:{className:'border-round-lg shadow-2'},message:{className:'text-sm font-semibold'}}} />
            <div className="min-h-full ">    
                {(initTokenUser)?
                    <>              
                        <Header setVisibleModalAux={setVisibleModalAux} path={path} toast={toast} setVisibleModalPass={setVisibleModalPass}></Header>                
                        <div className='hidden xl:flex fixed border-round-lg overflow-y-auto bg-white ' style={{height:'calc(100vh - 9rem)',top:'8rem',left:'1rem',zIndex:'999'}} >
                            <Sidebar></Sidebar>   
                        </div> 
                        <div className='flex flex-column min-h-screen layout-container responsive-layout' 
                            style={{paddingTop:'8rem',paddingRight:'1rem',paddingBottom:'1rem',paddingLeft:'2rem'}}>
                                
                            <div className='flex-grow-1 flex-shrink-1 p-3 border-round-lg bg-white' style={{flexBasis:'auto'}}>
                                <Routes>
                                    <Route path={`/app/${path}`} element={<MainLayout ></MainLayout>} />
                                    <Route path="/*" element={children} /> 
                                </Routes>           
                            </div>
                            <div className='flex align-items-center gap-2 h-3rem p-1 mt-2 border-round-lg justify-content-end  bg-white' style={{}}>
                                <span className='font-semibold text-gray-600 text-xs'>Blockchain Voting System</span> |  <span className='text-primary font-semibold'>BSM</span>
                            </div> 
                        </div>
                        {(visibleModalAux.active)&&
                            <RolLayout setVisible={setVisibleModalAux} visibleModal={visibleModalAux} toast={toast}/>
                        }
                        {(visibleModalPass.active)&&
                            <PasswordLayout setVisible={setVisibleModalPass} visibleModal={visibleModalPass} toast={toast}/>

                        }
                    
                    </>:<LoginLayout></LoginLayout>
                }
            </div> 
        </>
    )
}


export  default LayoutGeneral