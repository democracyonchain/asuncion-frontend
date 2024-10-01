import { setCache,setInitial,setMessage } from '@presentation/actions';
import { CheckBoxInput } from "@bsc/library";

/**
 * @constant
 * @name columnsRol
 * @description Define las columnas para la entidad Rol en la aplicación.
 * 
 * @property {Object[]} columnsRol - Arreglo de objetos que representan las columnas.
 * @property {string} columnsRol[].field - Nombre del campo en la entidad.
 * @property {string} columnsRol[].header - Encabezado que se mostrará en la tabla.
 * @property {boolean} [columnsRol[].hidden] - Indica si la columna debe estar oculta.
 * @property {boolean} [columnsRol[].sortable] - Indica si la columna es ordenable.
 * @property {boolean} [columnsRol[].filter] - Indica si la columna tiene filtro.
 * @property {string} [columnsRol[].filterPlaceholder] - Texto de marcador de posición para el filtro.
 * @property {Object} [columnsRol[].style] - Estilos CSS aplicados a la columna.
 * @property {string} [columnsRol[].style.minWidth] - Ancho mínimo de la columna.
 * @property {boolean} [columnsRol[].frozen] - Indica si la columna está congelada.
 * @property {string} [columnsRol[].className] - Clases CSS aplicadas a la columna.
 * @property {string} [columnsRol[].footer] - Texto del pie de página de la columna.
 */
export const columnsRol=[
    { field: 'id',header:'Id',hidden:true},
    { field: 'nombre', header: 'Nombre',sortable:true,filter:true, filterPlaceholder:'Buscar',
        style:{ minWidth: '150px' },frozen:true,className:'text-sm ',},
    { field: 'descripcion', header: 'Descripción',sortable:true,footer:'Descripción',className:'text-sm' },
]

/**
 * Lista de categorías utilizadas en el servicio de roles.
 * Cada categoría contiene un nombre, una clave y un ícono asociado.
 * 
 * @constant
 * @type {Array<{ name: string, key: string, icon: string }>}
 * 
 * @property {string} name - Nombre de la categoría.
 * @property {string} key - Clave abreviada de la categoría.
 * @property {string} icon - Nombre del ícono asociado a la categoría.
 * 
 * @example
 * const categories = [
 *   { name: 'crear', key: 'c', icon: 'add' },
 *   { name: 'editar', key: 'e', icon: 'edit_square' },
 *   { name: 'eliminar', key: 'd', icon: 'delete' },
 *   { name: 'leer', key: 'r', icon: 'draft' },
 *   { name: 'imprimir', key: 'i', icon: 'lab_profile' }
 * ];
 */
export const categories = [
    { name: 'crear', key:'c', icon:'add' },
    { name: 'editar', key:'e', icon:'edit_square'},
    { name: 'eliminar', key: 'd', icon:'delete' },
    { name: 'leer', key: 'r', icon:'draft' },
    { name: 'imprimir', key: 'i', icon:'lab_profile' }
]
/**
 * Procesa una colección de roles utilizando una consulta perezosa.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar la colección de roles.
 * @param parameters.getRolCollectionLazyQuery - Función para ejecutar la consulta perezosa de la colección de roles.
 * @param parameters.setDataRolCollection - Función para establecer los datos de la colección de roles.
 * @param parameters.limit - Límite de elementos a obtener en la consulta.
 * @param parameters.offset - Desplazamiento de elementos a obtener en la consulta.
 * @param parameters.cache - Política de caché a utilizar en la consulta.
 * @param parameters.dispatch - Función para despachar acciones al store de Redux.
 *
 * La función ejecuta una consulta perezosa para obtener una colección de roles con los parámetros especificados.
 * Al completarse la consulta, se establecen los datos de la colección de roles y se actualiza la política de caché.
 * En caso de error, se establece una colección de roles vacía.
 */
export const processRolCollection =(parameters:{getRolCollectionLazyQuery:any,setDataRolCollection:any,limit:number,offset:number,cache:string,dispatch:any})=>{
    parameters.getRolCollectionLazyQuery({
        variables:{        
            inputPagination:{
                limit:parameters.limit,
                offset:parameters.offset
            },
            inputOrder:{
                asc:'nombre'
            }
        },
        fetchPolicy: parameters.cache,
        onCompleted:(c:any)=>{                     
            parameters.setDataRolCollection(c?.adminRolCollection);
            parameters.dispatch(setCache({cache:'cache-first'}))           
        },onError:(error:any)=>{            
            parameters.setDataRolCollection([]);
        }
    })
}

/**
 * Procesa una consulta de rol.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar la consulta.
 * @param parameters.getRolLazyQuery - Función para ejecutar la consulta de rol.
 * @param parameters.setRolQuery - Función para establecer el resultado de la consulta de rol.
 * @param parameters.query - Objeto que contiene los parámetros de la consulta.
 * @param parameters.query.id - ID del rol a consultar.
 * @param [parameters.setStatusLoading] - Función opcional para establecer el estado de carga.
 *
 * @remarks
 * Esta función ejecuta una consulta de rol utilizando `getRolLazyQuery` y actualiza el estado de carga y el resultado de la consulta
 * utilizando `setStatusLoading` y `setRolQuery` respectivamente. En caso de error, establece el resultado de la consulta como un arreglo vacío
 * y actualiza el estado de carga.
 */
export const processRolQuery =(parameters:{getRolLazyQuery:any,setRolQuery:any,query:{id:number},setStatusLoading?:any})=>{
    parameters.setStatusLoading(true)
    parameters.getRolLazyQuery({
        variables:{
            id: parameters.query?.id
        },
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{              
            parameters.setStatusLoading(false);
            parameters.setRolQuery(c.adminRol);           
        },onError:(error:any)=>{
            parameters.setRolQuery([]);
            parameters.setStatusLoading(false)
        }
    })
}

/**
 * Procesa la selección del menú y actualiza el estado correspondiente.
 *
 * @param {Object} parameters - Parámetros necesarios para procesar la selección del menú.
 * @param {Function} parameters.getMenuSelectLazyQuery - Función para ejecutar la consulta perezosa del menú.
 * @param {Function} parameters.setDataMenuSelect - Función para establecer los datos del menú seleccionado.
 * @param {string} parameters.cache - Cadena que representa la política de caché.
 * @param {Function} parameters.dispatch - Función para despachar acciones.
 * @param {Function} parameters.setDisabled - Función para establecer el estado de deshabilitado de los elementos del menú.
 *
 * La función `processMenuSelect` ejecuta una consulta perezosa para obtener los datos del menú con el estado activo.
 * Al completarse la consulta, actualiza los datos del menú seleccionado y establece los elementos del menú como deshabilitados.
 * En caso de error, establece los datos del menú seleccionado como un arreglo vacío.
 */
export const processMenuSelect =(parameters:{getMenuSelectLazyQuery:any,setDataMenuSelect:any,cache:string,dispatch:any,setDisabled:any})=>{
    
    parameters.getMenuSelectLazyQuery({
        variables:{        
            inputWhere:{
                estado: { is: true }
            }
        },
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{  
            let valoresDiabled:any=[]          
            parameters.setDataMenuSelect(c?.adminMenuCollection?.data);
            c?.adminMenuCollection?.data.forEach((values:any,key:any)=>{               
                valoresDiabled =[...valoresDiabled,{menu:values.titulo,disabled:true,key}]
            })          

            parameters.setDisabled(valoresDiabled)
           
        },onError:(error:any)=>{            
            parameters.setDataMenuSelect([]);
        }
    })
}

/**
 * Procesa el formulario de reinicio.
 *
 * @param {Object} parameters - Los parámetros necesarios para procesar el formulario.
 * @param {Function} parameters.clearErrors - Función para limpiar los errores del formulario.
 * @param {Function} parameters.reset - Función para reiniciar el formulario con valores predeterminados.
 * @param {Function} parameters.dispatch - Función para despachar acciones al estado global.
 * @param {Object} parameters.labelTab - Objeto que contiene las etiquetas de las pestañas.
 * @param {Function} parameters.setLabelTab - Función para establecer las etiquetas de las pestañas.
 * @param {Function} parameters.navigate - Función para navegar a una ruta específica.
 */
export const processResetForm=(parameters:{clearErrors:any,reset:any,dispatch:any,labelTab:any,setLabelTab:any,navigate:any})=>{
    parameters.clearErrors(); 
    parameters.reset({
        nombre_rol:'',
        descripcion_rol:'',
        id_rol:''
    });
    parameters.navigate("new")
    parameters.dispatch(parameters.setLabelTab({...parameters.labelTab,labelNew:'Nuevo Rol',iconNew:'post_add'}));
}

/**
 * Procesa y establece los valores del formulario basado en los datos de la consulta de roles.
 * 
 * @param parameters - Objeto que contiene las funciones y datos necesarios para procesar el formulario.
 * @param parameters.setValue - Función para establecer los valores del formulario.
 * @param parameters.rolQuery - Datos de la consulta del rol.
 * @param parameters.setEstadoForm - Función para establecer el estado del formulario.
 * @param parameters.setDisabled - Función para establecer el estado de deshabilitado de los elementos.
 * @param parameters.disabled - Lista de elementos deshabilitados.
 * @param parameters.getValues - Función para obtener los valores del formulario.
 * 
 * @remarks
 * Esta función establece los valores del formulario basándose en los datos proporcionados por la consulta del rol.
 * También actualiza el estado del formulario y los elementos deshabilitados según los permisos del rol.
 * 
 * @example
 * ```typescript
 * processValueForm({
 *   setValue: setValueFunction,
 *   rolQuery: rolQueryData,
 *   setEstadoForm: setEstadoFormFunction,
 *   setDisabled: setDisabledFunction,
 *   disabled: disabledElements,
 *   getValues: getValuesFunction
 * });
 * ```
 */
export const processValueForm=(parameters:{setValue:any,rolQuery:any,setEstadoForm:any,setDisabled:any,disabled:any,getValues:any})=>{
    parameters.setValue('nombre_rol',parameters.rolQuery?.nombre);
    parameters.setValue('descripcion_rol',parameters.rolQuery?.descripcion);
    parameters.setValue('estado_rol',parameters.rolQuery?.estado);
    parameters.setValue('id_rol',parameters.rolQuery?.id);
    parameters.setEstadoForm({status:false,etiqueta:(parameters.rolQuery?.estado)?'Activo':'Inactivo'});

    parameters.rolQuery?.permisos?.forEach((data:any,key:number) => {    
          
        parameters.setValue(`accesos${data.menu.titulo}${data.menu.id}`,true);
        let demoDisabled=parameters.disabled.filter((e:any,key:any)=>e.menu == data.menu.titulo);

        if(demoDisabled.length > 0){            
            parameters.disabled[demoDisabled[0]?.key].disabled=false;
        }
       
        parameters.setDisabled([...parameters.disabled])
        
        categories.forEach((options,key1)=>{
            if(data[options.name]){
                parameters.setValue(`accesos${key1}${data.menu.id}`,true);
                    processDataCheck({data:data.menu,category:options,chek:true,key:demoDisabled[0]?.key,opt:'C',setValue:parameters.setValue,getValues:parameters.getValues})                
            }else{
                if(demoDisabled.length > 0){
                    processDataCheck({data:data.menu,category:options,chek:false,key:demoDisabled[0]?.key,opt:'C',setValue:parameters.setValue,getValues:parameters.getValues})
                }
            }
        })
    });
}


/**
 * Procesa el envío del formulario de rol.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar el formulario.
 * @param parameters.setVisible - Función para establecer la visibilidad de un componente.
 * @param parameters.toast - Componente para mostrar mensajes emergentes.
 * @param parameters.data - Datos del formulario.
 * @param parameters.labels - Etiquetas utilizadas en el formulario.
 * @param parameters.rolCreateMutation - Mutación para crear un rol.
 * @param parameters.rolUpdateMutation - Mutación para actualizar un rol.
 * @param parameters.navigate - Función para navegar a diferentes rutas.
 * @param parameters.dispatch - Función para despachar acciones.
 * @param parameters.setMensaje - Función para establecer un mensaje.
 *
 * Filtra los accesos del menú que están activos y los procesa para crear o actualizar un rol.
 * Si no hay accesos activos, establece un mensaje indicando que se deben registrar los accesos.
 */
export const processSubmitForm=(
    parameters:
    {
        setVisible:any,toast:any,data:any,labels:any,rolCreateMutation:any,rolUpdateMutation:any,
        navigate:any,dispatch:any,setMensaje:any
})=>{


   
    let resulAcceso= (parameters.data?.menuAcceso)?(parameters.data?.menuAcceso)?.filter((e:any)=>e?.status ==true):[];
    let resulAccesoGeneral:any=[]
   
    if(resulAcceso.length >0){
       
        resulAcceso.forEach((data:any) => {        
            resulAccesoGeneral =[...resulAccesoGeneral,{
                crear:data.crear,
                editar:data.editar,
                eliminar:data.eliminar,
                leer:data.leer,
                imprimir:data.imprimir,
                menu_id:data.menu_id
            }]           
        });
        
        
        parameters.setMensaje(null)
        parameters.setVisible(
            {
                status:true,mensaje:`Esta seguro que desea ${(parameters?.labels.opt =='N')?'Guardar ':'Editar '} este Registro?`,
                accept:()=>{
                    (parameters?.labels?.opt=='N')?processCreateRol(
                        {
                            data:parameters.data,toast:parameters.toast,
                            rolCreateMutation:parameters.rolCreateMutation,
                            navigate:parameters.navigate,
                            dispatch:parameters.dispatch,  
                            resulAccesoGeneral                      
                        }
                    ):processUpdateRol(
                        {
                            data:parameters.data,toast:parameters.toast,
                            rolUpdateMutation:parameters.rolUpdateMutation,
                            navigate:parameters.navigate,
                            dispatch:parameters.dispatch,
                            resulAccesoGeneral
                        }
                    )
                },reject:()=>{}
            }
        );
    }else{
        parameters.setMensaje('Registre los accesos en listado de Menu ')
    }

}


/**
 * Procesa la creación de un rol.
 *
 * @param create - Un objeto que contiene los siguientes parámetros:
 * @param create.data - Los datos del rol a crear.
 * @param create.toast - Referencia al componente de notificación para mostrar mensajes.
 * @param create.rolCreateMutation - Función de mutación para crear el rol.
 * @param create.navigate - Función para navegar a otra ruta después de la creación.
 * @param create.dispatch - Función para despachar acciones al store de Redux.
 * @param create.resulAccesoGeneral - Permisos asociados al rol.
 *
 * La función realiza la mutación para crear un rol con los datos proporcionados. 
 * Si la mutación se completa con éxito, navega a la ruta "record" y despacha acciones para 
 * inicializar el estado y mostrar un mensaje de éxito. Si ocurre un error, muestra un mensaje 
 * de error utilizando el componente de notificación.
 */
const processCreateRol=(create:{data:any,toast:any,rolCreateMutation:any,navigate:any,dispatch:any,resulAccesoGeneral:any})=>{
    
    const dataRol=create.data
    create.rolCreateMutation({
       variables:{
           inputCreate: {
                descripcion: dataRol.descripcion_rol, 
                nombre: dataRol.nombre_rol,   
                permisos:create.resulAccesoGeneral          
           }
       },
       onCompleted:(c:any)=>{             
           create.navigate("record");       
           create.dispatch(setInitial({initial:1}))
           create.dispatch(setMessage({message:c.adminRolCreate?.message}))
       },onError:(error:any)=>{           
           create.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });   
       }
    })
}

/**
 * Procesa la actualización de un rol.
 *
 * @param update - Un objeto que contiene los siguientes parámetros:
 * @param update.data - Los datos del rol a actualizar.
 * @param update.toast - Referencia al componente de notificación para mostrar mensajes.
 * @param update.rolUpdateMutation - Función de mutación para actualizar el rol.
 * @param update.navigate - Función para navegar a una ruta específica.
 * @param update.dispatch - Función para despachar acciones al store de Redux.
 * @param update.resulAccesoGeneral - Lista de permisos asociados al rol.
 *
 * La función realiza la mutación para actualizar el rol con los datos proporcionados.
 * En caso de éxito, navega a la ruta "record" y despacha acciones para inicializar el estado y mostrar un mensaje.
 * En caso de error, muestra una notificación con el mensaje de error.
 */
const processUpdateRol=(update:{data:any,toast:any,rolUpdateMutation:any,navigate:any,dispatch:any,resulAccesoGeneral:any})=>{
    const dataRol=update.data   
    update.rolUpdateMutation({
        variables:{
            inputUpdate: {
                id: dataRol.id_rol,
                descripcion: dataRol.descripcion_rol, 
                nombre: dataRol.nombre_rol,
                estado:dataRol.estado_rol, 
                permisos:update.resulAccesoGeneral      
           }
        },onCompleted:(c:any)=>{       
            update.navigate("record");
            update.dispatch(setInitial({initial:1}))
            update.dispatch(setMessage({message:c.adminRolUpdate?.message}))

        },onError:(error:any)=>{
            update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
       }
    })
}

/**
 * Procesa la eliminación de un rol.
 *
 * @param eliminar - Un objeto que contiene los siguientes campos:
 *   @param eliminar.data - Los datos del rol a eliminar.
 *   @param eliminar.toast - Referencia al componente de notificación.
 *   @param eliminar.rolDeleteMutation - Función de mutación para eliminar el rol.
 *   @param eliminar.navigate - Función para navegar a otra ruta.
 *   @param eliminar.dispatch - Función para despachar acciones al store.
 *
 * La función realiza la mutación para eliminar el rol y maneja las respuestas
 * exitosas y los errores. En caso de éxito, actualiza el caché, navega a la 
 * ruta "record" y despacha acciones para establecer el estado inicial y el 
 * mensaje de respuesta. En caso de error, muestra una notificación con el 
 * mensaje de error.
 */
export const processEliminarRol=(eliminar:{data:any,toast:any,rolDeleteMutation:any,navigate:any,dispatch:any})=>{
    const dataRol=eliminar.data
    eliminar.rolDeleteMutation({
        variables:{
            id: dataRol.id,
        },
        onCompleted:(c:any)=>{
            eliminar.dispatch(setCache({cache:'cache-and-network'}));  
            eliminar.navigate("record");       
            eliminar.dispatch(setInitial({initial:1}));
            eliminar.dispatch(setMessage({message:c.adminRolDelete?.message}));                                              
        },onError:(error:any)=>{
            eliminar.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });              
        }
    })
}

/**
 * Procesa y actualiza los valores de acceso del menú basado en los parámetros proporcionados.
 *
 * @param {Object} parameters - Objeto que contiene los parámetros necesarios para procesar la verificación de datos.
 * @param {any} parameters.data - Datos relacionados con el menú.
 * @param {any} parameters.category - Categoría del menú.
 * @param {boolean} parameters.chek - Indicador de verificación.
 * @param {number} parameters.key - Clave única para identificar el acceso del menú.
 * @param {string} parameters.opt - Opción que determina el comportamiento de la función ('C' para crear o actualizar).
 * @param {any} [parameters.etiqueta] - Etiqueta opcional.
 * @param {Function} parameters.setValue - Función para establecer el valor en el formulario.
 * @param {Function} parameters.getValues - Función para obtener los valores del formulario.
 */
export const processDataCheck=(parameters:{data:any,category:any,chek:boolean,key:number,opt:string,etiqueta?:any,setValue:any,getValues:any})=>{    
    if(parameters.opt=='C'){
        
        (parameters.chek)?parameters.setValue(`menuAcceso.${parameters.key}`,{...parameters.getValues(`menuAcceso.${parameters.key}`),menu_id:parameters.data.id,[parameters.category.name]:true,status:true}):
        parameters.setValue(`menuAcceso.${parameters.key}`,{...parameters.getValues(`menuAcceso.${parameters.key}`),menu_id:parameters.data.id,[parameters.category.name]:false})
    }else{
        parameters.setValue(`menuAcceso.${parameters.key}`,{...parameters.getValues(`menuAcceso.${parameters.key}`),menu_id:parameters.data.id,[parameters.category.name]:false,status:false})   
    }
}

/**
 * Procesa y genera una plantilla de encabezado con un checkbox y un elemento de alternancia.
 * 
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar la plantilla.
 * @param parameters.data - Datos utilizados en la plantilla.
 * @param parameters.options - Opciones adicionales para la plantilla.
 * @param parameters.key - Clave única para identificar el elemento.
 * @param parameters.setValue - Función para establecer valores en el formulario.
 * @param parameters.getValues - Función para obtener valores del formulario.
 * @param parameters.methods - Métodos adicionales que pueden ser utilizados.
 * @param parameters.setDisabled - Función para establecer el estado de deshabilitado.
 * @param parameters.disabled - Estado actual de deshabilitado.
 * 
 * @returns Un elemento JSX que representa la plantilla de encabezado.
 */
export const processHeaderTemplate=(parameters:{ data:any,options:any,key:any,setValue:any,getValues:any,methods:any,setDisabled:any,disabled:any})=>{        
    const className = ` ${parameters.options.className} p-panel-header justify-content-space-between`;
    return(
        <div className={className}>
            <div className="flex align-items-center gap-2">
               
                <CheckBoxInput  methods={parameters.methods} name={`accesos${parameters.data.titulo}${parameters.data.id}`}  value= {`${parameters.data}`}  
                onChangeCheck={
                    (e:any)=>{
                        
                            if(e.checked){
                                parameters.disabled[parameters.key].disabled=false
                            }else{
                                parameters.disabled[parameters.key].disabled=true
                            }
                            
                            parameters.setDisabled([...parameters.disabled])

                            
                        categories.forEach((options,key)=>{
                            if(e.checked){                                                             
                                parameters.setValue(`accesos${key}${parameters.data.id}`,true);
                                processDataCheck({data:parameters.data,category:options,chek:true,key:parameters.key,opt:'C',setValue:parameters.setValue,getValues:parameters.getValues})
                            }else{                                    
                                parameters.setValue(`accesos${key}${parameters.data.id}`,false);
                                processDataCheck({data:parameters.data,category:options,chek:false,key:parameters.key,opt:'D',setValue:parameters.setValue,getValues:parameters.getValues})
                            }
                        })
                    }
                }/>

                <span className='text-xs font-semibold uppercase' > Menu: {parameters.data.titulo}</span>
            </div>
            <div>                                  
                {parameters.options.togglerElement}
            </div>
        </div>
    )
}