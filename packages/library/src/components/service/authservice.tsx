import { setEtiqueta,setLoadView } from '@store/slices/';
import { Badge } from 'primereact/badge';
import Icon from '@mui/material/Icon';
/**
 * Función para manejar el evento de guardar autenticación.
 * 
 * @param metodos - Objeto que contiene los métodos y datos necesarios para la autenticación.
 * @param metodos.dataForm - Datos del formulario de autenticación.
 * @param metodos.dispatch - Función para despachar acciones al estado global.
 * @param metodos.setAuthloginLazyQuery - Función para ejecutar la consulta de autenticación.
 * @param metodos.trigger - (Opcional) Función adicional para disparar eventos.
 * @param metodos.navigate - Función para navegar a diferentes rutas.
 * 
 * La función realiza las siguientes acciones:
 * 1. Despacha una acción para mostrar una vista de carga.
 * 2. Despacha una acción para resetear la etiqueta de mensaje.
 * 3. Ejecuta la consulta de autenticación con los datos del formulario.
 * 4. En caso de éxito, guarda el token de usuario en el localStorage y navega a la ruta de seguridades.
 * 5. En caso de error, despacha una acción para mostrar el mensaje de error y oculta la vista de carga.
 */
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

/**
 * Procesa la autenticación del perfil del usuario.
 *
 * @param parameters - Un objeto que contiene las siguientes propiedades:
 * @param parameters.setAuthPerfilLazyQuery - Función para establecer la consulta perezosa del perfil de autenticación.
 * @param parameters.navigate - Función para navegar a una ruta específica.
 *
 * La función realiza una consulta perezosa para obtener el perfil de autenticación del usuario. 
 * Si la consulta se completa con éxito, almacena los datos del usuario en el localStorage y el rol del usuario en el sessionStorage, 
 * y luego navega a la ruta "/app/seguridades". 
 * Si ocurre un error durante la consulta, limpia el localStorage y el sessionStorage, y navega a la misma ruta.
 */
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

/**
 * Envía los datos del rol seleccionado y procesa los permisos de autenticación del módulo.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para la función.
 * @param parameters.data - Datos relacionados con el rol.
 * @param parameters.getRolSession - Función para obtener la sesión del rol.
 * @param parameters.setVisible - Función para establecer la visibilidad.
 * @param parameters.toast - Función para mostrar notificaciones.
 * @param parameters.setAuthModuloPermisosIdLazyQuery - Función para establecer la consulta perezosa de permisos de módulo de autenticación.
 * @param parameters.dispatch - Función para despachar acciones.
 * @param parameters.navigate - Función para navegar entre rutas.
 */
export const onSubmitRol=(parameters:{data:any,getRolSession:any,setVisible:any,toast:any,setAuthModuloPermisosIdLazyQuery:any,dispatch:any,navigate:any})=>{
       
    const dataAuxRol=parameters.getRolSession[parameters.data.roles]
    sessionStorage.setItem("dataRolUser",JSON.stringify(
            
        {
            nombre:dataAuxRol?.rol?.nombre,key:parameters.data.roles,id:dataAuxRol?.rol?.id
        }
    
    ) as any);
     
    processAuthModuloPermisosId(parameters,dataAuxRol);
}

/**
 * Envía la nueva contraseña y maneja la respuesta del servidor.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para la función.
 * @param parameters.data - Datos que contienen la nueva contraseña.
 * @param parameters.setVisible - Función para establecer la visibilidad de algún componente.
 * @param parameters.toast - Referencia al componente de notificación.
 * @param parameters.setAuthAuthCambioPasswordLazyQuery - Función para ejecutar la consulta de cambio de contraseña.
 * @param parameters.dispatch - Función para despachar acciones al store de Redux.
 * @param parameters.navigate - Función para navegar a diferentes rutas.
 * @param parameters.setAuthlogoutLazyQuery - Función para ejecutar la consulta de cierre de sesión.
 */
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
/**
 * Procesa la autorización del módulo y permisos por ID.
 *
 * @param {any} parameters - Objeto que contiene los parámetros necesarios para la función.
 * @param {any} dataAuxRol - Objeto que contiene la información del rol auxiliar.
 *
 * La función realiza las siguientes acciones:
 * 1. Despacha una acción para establecer la vista de carga a verdadero.
 * 2. Establece una consulta perezosa para obtener los permisos del módulo por ID del rol.
 * 3. En caso de éxito, realiza las siguientes acciones:
 *    - Despacha una acción para establecer la vista de carga a falso.
 *    - Elimina el elemento 'dataMenuUser' del sessionStorage.
 *    - Establece el elemento 'getModuloSession' en el sessionStorage con los datos obtenidos.
 *    - Establece la visibilidad de ciertos parámetros.
 *    - Navega a la ruta "/app/seguridades".
 *    - Muestra un mensaje de éxito utilizando un componente de toast.
 * 4. En caso de error, realiza las siguientes acciones:
 *    - Muestra un mensaje de error utilizando un componente de toast.
 *    - Despacha una acción para establecer la vista de carga a falso.
 */
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

/**
 * Función que maneja la navegación y almacenamiento de datos del menú de usuario en la sesión.
 *
 * @param {Object} parameters - Parámetros para la función.
 * @param {any} parameters.dataMenuUser - Datos del menú de usuario.
 * @param {string} parameters.modulo - Nombre del módulo.
 * @param {any} parameters.navigate - Función de navegación.
 * @param {string} parameters.url - URL a la que se debe navegar.
 *
 * @returns {void}
 */
export const coreMenuUser=(parameters:{dataMenuUser:any,modulo:string,navigate:any,url:string})=>{
    parameters.navigate(parameters.url);
    sessionStorage.setItem("dataMenuUser",JSON.stringify({dataMenuUser:parameters.dataMenuUser,modulo:parameters.modulo}) as any);
    
}

/**
 * Genera un menú genérico basado en los parámetros proporcionados.
 * 
 * @param parameters - Objeto que contiene los datos necesarios para generar el menú.
 * @param parameters.dataAuxMenu - Datos auxiliares del menú que se utilizarán para construir los elementos del menú.
 * @param parameters.dataMenuUser - Datos del menú del usuario (no utilizado en la función actual).
 * @param parameters.navigate - Función de navegación para redirigir a diferentes rutas.
 * 
 * @returns Un array de objetos que representan los elementos del menú.
 * 
 * La función `coreMenuModulo` construye un menú genérico utilizando los datos proporcionados en `parameters.dataAuxMenu`.
 * Si `dataAuxMenu` está presente, se mapea para crear elementos del menú con etiquetas, íconos y comandos específicos.
 * Cada elemento del menú puede tener una plantilla personalizada y un comando que se ejecuta al hacer clic.
 * La función también incluye un elemento de plantilla estático y un separador.
 */
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


/**
 * Procesa el cierre de sesión de autenticación.
 *
 * @param {Object} parameters - Parámetros necesarios para el proceso de cierre de sesión.
 * @param {Function} parameters.dispatch - Función para despachar acciones al store.
 * @param {Function} parameters.setAuthlogoutLazyQuery - Función para ejecutar la consulta de cierre de sesión.
 * @param {Function} parameters.navigate - Función para navegar a diferentes rutas.
 * @param {Object} parameters.toast - Referencia al componente de notificación para mostrar mensajes.
 *
 * Esta función realiza las siguientes acciones:
 * 1. Despacha una acción para mostrar una vista de carga.
 * 2. Ejecuta la consulta de cierre de sesión con una política de caché y red.
 * 3. En caso de éxito, oculta la vista de carga, navega a la ruta de seguridades y limpia el almacenamiento local y de sesión.
 * 4. En caso de error, oculta la vista de carga, muestra un mensaje de error, navega a la ruta de seguridades y limpia el almacenamiento local y de sesión.
 */
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
/**
 * Función que obtiene y procesa los accesos almacenados en el sessionStorage bajo la clave "accesosBsc".
 * 
 * @returns {IpermisosValues} Un objeto que contiene los permisos de botones y el conteo de accesos.
 * 
 * El objeto retornado tiene la siguiente estructura:
 * - `onView`: Indica si el usuario tiene permiso para ver.
 * - `onEdit`: Indica si el usuario tiene permiso para editar.
 * - `onDelete`: Indica si el usuario tiene permiso para eliminar.
 * - `onPrint`: Indica si el usuario tiene permiso para imprimir.
 * - `onAdd`: Indica si el usuario tiene permiso para crear.
 * - `conteo`: Un objeto que contiene la configuración inicial basada en los permisos:
 *   - `initDefault`: Puede ser 'new' o 'record' dependiendo de los permisos.
 *   - `initCreate`: Indica el estado inicial de creación.
 *   - `initRead`: Indica el estado inicial de lectura.
 */
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

/**
 * Procesa la configuración de administrador.
 *
 * @param parameters - Un objeto que contiene la consulta `getConfiguracionLazyQuery`.
 * @param parameters.getConfiguracionLazyQuery - Función de consulta que obtiene la configuración.
 *
 * Esta función ejecuta la consulta `getConfiguracionLazyQuery` con las variables necesarias para
 * obtener la configuración del administrador. Utiliza una política de obtención de datos de 
 * 'cache-and-network'. 
 *
 * - En caso de éxito (`onCompleted`), guarda los datos de configuración del administrador en 
 *   `sessionStorage` bajo la clave "getAdminConfig".
 * - En caso de error (`onError`), limpia tanto `localStorage` como `sessionStorage`.
 *
 * @example
 * ```typescript
 * processAdminConfiguracion({
 *   getConfiguracionLazyQuery: someLazyQueryFunction
 * });
 * ```
 */
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