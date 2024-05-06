import { FC,ReactNode,useEffect,useState} from 'react'
import { Header } from '@components/layout/Header';
import { Sidebar } from '@components/layout/Sidebar';
import { MainLayout } from '@components/layout/MainLayout';
import { useNavigate } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import { LoginLayout } from '@components/layout/LoginLayout';
import { UtilsSpinner } from '@components/partials/Utils';
import { useSelector } from "react-redux";
import { RootState } from '@store/store';

import "../../public/styles/general.css";

interface IlayoutProps {    
    children:ReactNode  
    path:string 
}
export const LayoutGeneral:FC<IlayoutProps> = ({children,path}) => {
    
    //Varibles Generales
    const initTokenUser=localStorage.getItem("tokenUser");
    const navigate = useNavigate();

    //Gestor estados Redux
    const { dataUser,navegacion }:any= useSelector<RootState>( (state) => state.actionShared);
    //Hook UseState
    const [ statusUser, setStatusUser ] = useState(false);


    return (
        <>
            <div className="min-h-full ">    
                {(initTokenUser)?
                    <>              
                        <Header></Header>                
                        <div className='hidden xl:flex fixed border-round-lg overflow-y-auto ' style={{height:'calc(100vh - 9rem)',top:'8rem',left:'1rem',zIndex:'999'}} >
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
                    
                    </>:<><UtilsSpinner visible={false}/> <LoginLayout></LoginLayout></>
                }
            </div> 
        </>
    )
}


export  default LayoutGeneral