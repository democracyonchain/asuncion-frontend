import { setEtiqueta,setLoadView } from '@store/slices/';
import { Badge } from 'primereact/badge';
export const onClikSaveAuth =(
    metodos:{dataForm:any,dispatch:any,setAuthloginLazyQuery:any,trigger?:any,navigate:any}
)=>{
    
    metodos.dispatch(setLoadView(true));
    metodos.dispatch(setEtiqueta({mensaje:'',atributo:false}))
    metodos.setAuthloginLazyQuery(
        {
            variables:{
                password:metodos.dataForm?.contrasenia_login,
                username:metodos.dataForm?.username_login
            },
            fetchPolicy: 'cache-and-network',
            onCompleted:(c:any)=>{                
                metodos.dispatch(setLoadView(false));
                localStorage.setItem("tokenUser",c?.authlogin?.token);
                metodos.navigate("/app/seguridades");
            },onError:(error:any)=>{                
                metodos.dispatch(setEtiqueta({mensaje:error.message,atributo:true}))
                metodos.dispatch(setLoadView(false));
            }

        }
    )
}

export const processAuthPerfil =(parameters:{setAuthPerfilLazyQuery:any,navigate:any})=>{
    
    parameters.setAuthPerfilLazyQuery({
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{
            
            const dataAuthPerfil:any=c.authPerfil;
            localStorage.setItem("getUserStorage",JSON.stringify(
                
                    {
                        'nombres':dataAuthPerfil.nombres+ ' ' +dataAuthPerfil.apellidos,
                        'email':dataAuthPerfil.email
                    }
                
            ) as any);

            sessionStorage.setItem("getRolSession",JSON.stringify(dataAuthPerfil?.rolusuario) as any);
            parameters.navigate("/app/seguridades");  
           
        },onError:(error:any)=>{            
            localStorage.clear();
            sessionStorage.clear();   
            parameters.navigate("/app/seguridades");   
        }
    })

}

export const onSubmitRol=(parameters:{data:any,getRolSession:any,setVisible:any,toast:any,setAuthModuloPermisosIdLazyQuery:any,dispatch:any,navigate:any})=>{
       
    const dataAuxRol=parameters.getRolSession[parameters.data.roles]
    sessionStorage.setItem("dataRolUser",JSON.stringify(
            
        {
            nombre:dataAuxRol?.rol?.nombre,key:parameters.data.roles,id:dataAuxRol?.rol?.id
        }
    
    ) as any);
     
    processAuthModuloPermisosId(parameters,dataAuxRol);
}

export const processAuthModuloPermisosId=(parameters:any,dataAuxRol:any)=>{
    
    parameters.dispatch(setLoadView(true));
    parameters.setAuthModuloPermisosIdLazyQuery(
        {
            variables:{
                rol_id:dataAuxRol?.rol?.id
            },
            fetchPolicy: 'cache-and-network',
            onCompleted:(c:any)=>{                                                
                
                parameters.dispatch(setLoadView(false));
                sessionStorage.removeItem('dataMenuUser')
                sessionStorage.setItem("getModuloSession",JSON.stringify(c?.authModuloPermisosId) as any);
                parameters.setVisible({active:false,header:'',closable:false,maximizable:true});
                parameters.navigate("/app/seguridades");

                parameters.toast.current.show({ icon:'pi pi-info-circle',severity: 'info', summary: 'Atención', 
                    content: (props:any)=>(
                        <div className="flex flex-column align-items-left" style={{ flex: '1' }}>                       
                            <div className="flex align-items-center gap-2 mb-3">
                                <i className={props.message.icon} style={{ fontSize: '1.5rem' }}></i>
                                <span className="font-bold text-sm">{props.message.summary}</span>
                            </div>
                            <div className='font-medium text-sm my-2'>El Rol - <span className='font-bold'>{dataAuxRol?.rol?.nombre}</span> se asigno correctamente</div>
                        </div>), life: 4000
                });               
            },onError:(error:any)=>{     
                parameters.toast.current.show({ severity: 'error', summary: 'Atención', 
                content: (<div className="flex flex-column align-items-left" style={{ flex: '1' }}><div className='font-medium'>{error?.message}</div></div>), life: 4000
                });           
                parameters.dispatch(setLoadView(false));
            }
        }
    )
} 

export const coreMenuUser=(parameters:{dataMenuUser:any,modulo:string,navigate:any})=>{
    parameters.navigate("/app/seguridades");
    sessionStorage.setItem("dataMenuUser",JSON.stringify({dataMenuUser:parameters.dataMenuUser,modulo:parameters.modulo}) as any);
    
}

export const coreMenuModulo=(parameters:{dataAuxMenu:any,dataMenuUser:any,navigate:any})=>{

    const itemRenderer = (item:any) => (
        <div className='p-menuitem-content'>
            <a className="flex align-items-center p-menuitem-link hover:text-primary" onClick={()=>{item.command()}}>
                <span className={item.icon} />
                <span className="mx-2 font-medium">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        </div>
    );

    let dataGenericaMenu:any=[
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#4fc3f7" d="M44.945,21.453L26.547,3.055c-1.404-1.404-3.689-1.404-5.094,0L3.055,21.453	c-1.404,1.404-1.404,3.689,0,5.094l18.398,18.398c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053l18.398-18.398	C46.349,25.143,46.349,22.857,44.945,21.453z M24,29l-5-5l5-5l5,5L24,29z">
                            </path>
                            <path fill="#2979ff" d="M33.246,9.754L24,19l5,5l-5,5l9.246,9.246l11.699-11.699c1.404-1.404,1.404-3.689,0-5.094	L33.246,9.754z">
                            </path>
                            <path fill="#2962ff" d="M14.754,38.246l6.699,6.699c0.702,0.702,1.625,1.053,2.547,1.053s1.845-0.351,2.547-1.053	l6.699-6.699L24,29L14.754,38.246z">    
                            </path>
                        </svg>
                        <span className="font-medium text-sm">
                        Blockchain System<span className="text-primary"> Voting </span>
                        </span>
                    </span>
                );
            }
        },
        {
            separator: true
        }
    ]


    if(parameters.dataAuxMenu){             
        dataGenericaMenu=[...dataGenericaMenu,
            {
                //label: parameters.dataMenuUser?.modulo,
                items:[
                ...parameters.dataAuxMenu.map((data:any)=>{                        
                    return( 
                        {
                            label: data.titulo,
                            icon: data.icono,
                            shortcut: '⌘+N',
                            template: itemRenderer,
                            command: () => {               				
                                //console.log(data)
                                parameters.navigate(data?.url);                              
                            },
                        }
                    )
                    
                })
                ]                    
            }
        ]            
    }

    return dataGenericaMenu;
    
}


export const processAuthLogout=(parameters:{dispatch:any,setAuthlogoutLazyQuery:any,navigate:any,toast:any})=>{

    parameters.dispatch(setLoadView(true));
    parameters.setAuthlogoutLazyQuery({
        fetchPolicy:'cache-and-network',

        onCompleted:(c:any)=>{
            parameters.dispatch(setLoadView(false));
            parameters.navigate("/app/seguridades");
            localStorage.clear();
            sessionStorage.clear();           
        },
        onError:(error:any)=>{
            parameters.dispatch(setLoadView(false));
            parameters.toast.current.show({ severity: 'error', summary: 'Atención', 
                content: (<div className="flex flex-column align-items-left" style={{ flex: '1' }}><div className='font-medium'>{error?.message}</div></div>), life: 4000
            }); 
            parameters.navigate("/app/seguridades");
            localStorage.clear();
            sessionStorage.clear();
        }
    })
}