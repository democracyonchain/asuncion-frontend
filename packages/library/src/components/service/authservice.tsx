import { setEtiqueta,setLoadView } from '@store/slices/';
import { Badge } from 'primereact/badge';
import Icon from '@mui/material/Icon';
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
                localStorage.setItem("tokenUser",c?.authLogin?.token);
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
                        'email':dataAuthPerfil.email, 'username':dataAuthPerfil.username
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

export const onSubmitPass=(parameters:{data:any,setVisible:any,toast:any,setAuthAuthCambioPasswordLazyQuery:any,dispatch:any,navigate:any,setAuthlogoutLazyQuery:any})=>{
    parameters.dispatch(setLoadView(true));
    parameters.setAuthAuthCambioPasswordLazyQuery(
        {
            variables:{
                password:parameters.data?.contrasenia_login,               
            },
            onCompleted:(c:any)=>{                
                parameters.dispatch(setLoadView(false));
                parameters.toast.current.show({ icon:'pi pi-check',severity: 'info', summary: 'Atención',  detail: c?.authCambioPassword.message,life: 4000});                     
                processAuthLogout({setAuthlogoutLazyQuery:parameters.setAuthlogoutLazyQuery,dispatch:parameters.dispatch,navigate:parameters.navigate,toast:parameters.toast})
            },onError:(error:any)=>{                
                parameters.dispatch(setEtiqueta({mensaje:error.message,atributo:true}))
                parameters.dispatch(setLoadView(false));
            }

        }
    )
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

                parameters.toast.current.show({ icon:'pi pi-check',severity: 'info', summary: 'Atención', 
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

export const coreMenuUser=(parameters:{dataMenuUser:any,modulo:string,navigate:any,url:string})=>{
    parameters.navigate(parameters.url);
    sessionStorage.setItem("dataMenuUser",JSON.stringify({dataMenuUser:parameters.dataMenuUser,modulo:parameters.modulo}) as any);
    
}

export const coreMenuModulo=(parameters:{dataAuxMenu:any,dataMenuUser:any,navigate:any})=>{

    const itemRenderer = (item:any) => (
        <div className='p-menuitem-content'>
            <a className="flex align-items-center p-menuitem-link hover:text-primary" onClick={()=>{item.command()}}>                              
                <Icon fontSize="medium">{item.icon}</Icon>
                <span className="mx-2 font-bold">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        </div>
    );

    let dataGenericaMenu:any=[
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-2 bg-primary-50 p-1 border-round-md">
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
                items:[
                ...parameters.dataAuxMenu.map((data:any)=>{                        
                    return( 
                        {
                            label: data.titulo,
                            icon: data.icono,
                           
                            template: itemRenderer,
                            command: () => {  
                                let dataAux=data?.permisos[0];
                                let path=`${data?.url}${(dataAux?.crear && !dataAux?.leer)?'new':(dataAux?.crear && dataAux?.leer)?'new':(dataAux?.leer && !dataAux?.crear)&&'record'}`                                                           
                                sessionStorage.setItem("accesosBsc", JSON.stringify(data.permisos) as any);
                                parameters.navigate(path,{ state: { permisos:data?.permisos[0] } });                              
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


interface IpermisosValues  {
    onEdit?: boolean
    onView?: boolean
    onAdd?: boolean
    onDelete?: boolean
    onNew?:boolean
    onPrint?:boolean
    dataTabs?:{
        read?:boolean
        create?:boolean
    }
    conteo?:{
        initDefault?:string
        initCreate?:number
        initRead?:number
    }
};
export const coreAccesosBsc=()=>{
    const accesos=JSON.parse(sessionStorage.getItem("accesosBsc") as any);
    let getAccesos={};
    let getTabs:{create?:boolean,read?:boolean}={};
    let permisosBotones:IpermisosValues={};
    let conteo={}

    accesos?.forEach((element:any) => {
        getTabs={
            ...(element.leer || element?.editar || element.eliminar || element.imprimir)&&{read:true},
            ...(element.crear)&&{create:true}
        }
        getAccesos ={
            ...(element?.leer)&&{onView:true},...(element?.editar)&&{onEdit:true},
            ...(element?.eliminar)&&{onDelete:true}, ...(element.imprimir)&&{onPrint:true},
            ...(element?.crear)&&{onAdd:true},getTabs
        }

    });

    conteo={
        ...(getTabs.read && getTabs.create)&&{
            initDefault:'new',
            initCreate:0,
            initRead:1
        },
        ...(getTabs.create && !getTabs?.read)&&{
            initDefault:'new',
            initCreate:0,
        },
        ...(getTabs.read && !getTabs?.create)&&{
            initDefault:'record',
            initRead:0,
        }
    }
    permisosBotones = {...getAccesos,conteo};


    return permisosBotones;

}

export const processAdminConfiguracion =(parameters:{getConfiguracionLazyQuery:any})=>{
    
    parameters.getConfiguracionLazyQuery({
        variables:{
            inputWhere:{
                estado: { is: true }
            }
        },
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{            
            const dataAdminConfig:any=c.adminConfiguracionCollection.data;
            sessionStorage.setItem("getAdminConfig",JSON.stringify(dataAdminConfig) as any);
           
        },onError:(error:any)=>{            
            localStorage.clear();
            sessionStorage.clear();   
            
        }
    })

}