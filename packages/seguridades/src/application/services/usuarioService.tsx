import { setCache,setInitial,setMessage } from '@presentation/actions';

/**
 * @constant
 * @name columnsUsuario
 * @description Configuración de las columnas para la tabla de usuarios.
 * 
 * @property {Object[]} columnsUsuario - Array de objetos que define las columnas de la tabla.
 * @property {string} columnsUsuario[].field - Nombre del campo de la columna.
 * @property {string} columnsUsuario[].header - Encabezado de la columna.
 * @property {boolean} [columnsUsuario[].hidden] - Indica si la columna está oculta.
 * @property {boolean} [columnsUsuario[].sortable] - Indica si la columna es ordenable.
 * @property {boolean} [columnsUsuario[].filter] - Indica si la columna tiene filtro.
 * @property {string} [columnsUsuario[].filterPlaceholder] - Placeholder del filtro de la columna.
 * @property {Object} [columnsUsuario[].style] - Estilo CSS aplicado a la columna.
 * @property {boolean} [columnsUsuario[].frozen] - Indica si la columna está congelada.
 * @property {string} [columnsUsuario[].className] - Clase CSS aplicada a la columna.
 * @property {string} [columnsUsuario[].footer] - Texto del pie de página de la columna.
 */
export const columnsUsuario=[
    { field: 'id',header:'Id',hidden:true},
    { field: 'apellidos', header: 'Apellidos',sortable:true,filter:true, filterPlaceholder:'Buscar',
        style:{ minWidth: '150px' },frozen:true,className:'text-sm ',},
    { field: 'nombres', header: 'Nombres',filter:true, filterPlaceholder:'Buscar', className:'text-sm',style:{ minWidth: '300px' },footer:'Nombres' },
    { field: 'username', header: 'Usuario',style:{ minWidth: '200px' },footer:'Usuario',className:'text-sm'},
    { field: 'provincia.nombre', header: 'Provincia',sortable:true,footer:'Provincia',className:'text-sm',filter:true },   		  
    
]
/**
 * Procesa la colección de usuarios.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar la colección de usuarios.
 * @param parameters.getUsuarioCollectionLazyQuery - Función para obtener la colección de usuarios de forma perezosa.
 * @param parameters.setDataUsuarioCollection - Función para establecer la colección de datos de usuarios.
 * @param parameters.limit - Límite de usuarios a obtener.
 * @param parameters.offset - Desplazamiento para la paginación de usuarios.
 * @param parameters.cache - Política de caché a utilizar.
 * @param parameters.dispatch - Función de despacho para actualizar el estado de la caché.
 */
export const processUsuarioCollection =(parameters:{getUsuarioCollectionLazyQuery:any,setDataUsuarioCollection:any,limit:number,offset:number,cache:string,dispatch:any})=>{
    parameters.getUsuarioCollectionLazyQuery({
        variables:{        
            inputPagination:{
                limit:parameters.limit,
                offset:parameters.offset
            },
            inputOrder:{
                asc:'provincia_id'
            }
        },
        fetchPolicy: parameters.cache,
        onCompleted:(c:any)=>{            
            parameters.setDataUsuarioCollection(c?.adminUsuarioCollection);
            parameters.dispatch(setCache({cache:'cache-first'}))           
        },onError:(error:any)=>{            
            parameters.setDataUsuarioCollection([]);
        }
    })
}


/**
 * Procesa la selección de roles utilizando una consulta perezosa.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para la función.
 * @param parameters.getRolSelectLazyQuery - Función para ejecutar la consulta perezosa.
 * @param parameters.setDataRolSelect - Función para establecer los datos de la selección de roles.
 * @param parameters.cache - Cadena que representa la política de caché.
 * @param parameters.dispatch - Función de despacho para manejar acciones.
 *
 * La función ejecuta una consulta perezosa para obtener la colección de roles con el estado activo.
 * Si la consulta se completa con éxito, se establecen los datos de la selección de roles.
 * Si ocurre un error durante la consulta, se establece un arreglo vacío.
 */
export const processRolSelect =(parameters:{getRolSelectLazyQuery:any,setDataRolSelect:any,cache:string,dispatch:any})=>{
    
    parameters.getRolSelectLazyQuery({
        variables:{        
            inputWhere:{
                estado: { is: true }
            }
        },
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{            
            parameters.setDataRolSelect(c?.adminRolCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataRolSelect([]);
        }
    })
}

/**
 * Procesa la selección de provincia.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para la función.
 * @param parameters.getProvinciaSelectLazyQuery - Función para obtener la selección de provincia con una consulta perezosa.
 * @param parameters.setDataProvinciaSelect - Función para establecer los datos de la selección de provincia.
 * @param parameters.cache - Cadena que representa la política de caché.
 * @param parameters.dispatch - Función de despacho para manejar acciones.
 *
 * La función realiza una consulta perezosa para obtener la selección de provincia y actualiza los datos de la selección
 * según el resultado de la consulta. Si la consulta se completa con éxito, se establecen los datos obtenidos. Si ocurre
 * un error, se establece un arreglo vacío.
 */
export const processProvinciaSelect =(parameters:{getProvinciaSelectLazyQuery:any,setDataProvinciaSelect:any,cache:string,dispatch:any})=>{
    
    parameters.getProvinciaSelectLazyQuery({       
        fetchPolicy: 'cache-first',
        onCompleted:(c:any)=>{            
            parameters.setDataProvinciaSelect(c?.adminProvinciaCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataProvinciaSelect([]);
        }
    })
}

/**
 * Procesa la selección de establecimiento.
 *
 * @param parameters - Objeto que contiene las siguientes propiedades:
 * @param parameters.getEstablecimientoSelectLazyQuery - Función para obtener la selección de establecimiento de forma perezosa.
 * @param parameters.setDataEstablecimientoSelect - Función para establecer los datos de la selección de establecimiento.
 * @param parameters.cache - Cadena que representa la política de caché.
 * @param parameters.dispatch - Función de despacho para manejar acciones.
 *
 * Esta función ejecuta la consulta `getEstablecimientoSelectLazyQuery` con una política de caché 'cache-first'.
 * Si la consulta se completa con éxito, establece los datos de la selección de establecimiento utilizando `setDataEstablecimientoSelect`.
 * Si ocurre un error durante la consulta, establece un arreglo vacío en `setDataEstablecimientoSelect`.
 */
export const processEstablecimientoSelect =(parameters:{getEstablecimientoSelectLazyQuery:any,setDataEstablecimientoSelect:any,cache:string,dispatch:any})=>{
    
    parameters.getEstablecimientoSelectLazyQuery({       
        fetchPolicy: 'cache-first',
        onCompleted:(c:any)=>{            
            parameters.setDataEstablecimientoSelect(c?.adminEstablecimientoCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataEstablecimientoSelect([]);
        }
    })
}

/**
 * Procesa una consulta de usuario utilizando una consulta perezosa.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar la consulta.
 * @param parameters.getUsuarioLazyQuery - Función para ejecutar la consulta perezosa de usuario.
 * @param parameters.setUsuarioQuery - Función para establecer el resultado de la consulta de usuario.
 * @param parameters.query - Objeto que contiene los parámetros de la consulta.
 * @param parameters.query.id - ID del usuario a consultar.
 * @param [parameters.setStatusLoading] - Función opcional para establecer el estado de carga.
 *
 * @remarks
 * Esta función ejecuta una consulta perezosa de usuario y maneja los estados de carga y error.
 * Si la consulta se completa con éxito, establece el resultado en `setUsuarioQuery`.
 * Si ocurre un error, establece un arreglo vacío en `setUsuarioQuery` y cambia el estado de carga a `false`.
 */
export const processUsuarioQuery =(parameters:{getUsuarioLazyQuery:any,setUsuarioQuery:any,query:{id:number},setStatusLoading?:any})=>{
    parameters.setStatusLoading(true)
    parameters.getUsuarioLazyQuery({
        variables:{
            id: parameters.query?.id
        },
        fetchPolicy:'cache-and-network',
        onCompleted:(c:any)=>{              
            parameters.setStatusLoading(false);
            parameters.setUsuarioQuery(c.adminUsuario);           
        },onError:(error:any)=>{
            parameters.setUsuarioQuery([]);
            parameters.setStatusLoading(false)
        }
    })
}


/**
 * Procesa el formulario de reinicio de usuario.
 *
 * @param {Object} parameters - Los parámetros necesarios para procesar el formulario.
 * @param {Function} parameters.clearErrors - Función para limpiar los errores del formulario.
 * @param {Function} parameters.reset - Función para reiniciar los valores del formulario.
 * @param {Function} parameters.dispatch - Función para despachar acciones al estado global.
 * @param {Object} parameters.labelTab - Objeto que contiene las etiquetas de las pestañas.
 * @param {Function} parameters.setLabelTab - Función para establecer las etiquetas de las pestañas.
 * @param {Function} parameters.navigate - Función para navegar a una ruta específica.
 *
 * Esta función limpia los errores del formulario, reinicia los valores del formulario a sus valores predeterminados,
 * navega a la ruta "new" y actualiza las etiquetas de las pestañas con los valores proporcionados.
 */
export const processResetForm=(parameters:{clearErrors:any,reset:any,dispatch:any,labelTab:any,setLabelTab:any,navigate:any})=>{
    parameters.clearErrors(); 
    parameters.reset({
        nombres_usuario:'',
        apellidos_usuario:'',
        username_usuario:'',
        correo_usuario:'',
        idRol_usuario:'',
        contrasenia_usuario:'',
        estado_usuario:true
    });
    parameters.navigate("new")
    parameters.dispatch(parameters.setLabelTab({...parameters.labelTab,labelNew:'Nuevo Usuario',iconNew:'post_add'}));
}

/**
 * Procesa y establece los valores del formulario basado en la consulta de usuario.
 *
 * @param {Object} parameters - Objeto que contiene las funciones y datos necesarios para procesar el formulario.
 * @param {Function} parameters.setValue - Función para establecer los valores del formulario.
 * @param {Object} parameters.usuarioQuery - Objeto que contiene los datos del usuario consultado.
 * @param {Function} parameters.setEstadoForm - Función para establecer el estado del formulario.
 *
 * @remarks
 * Esta función toma los datos del usuario consultado y los asigna a los campos correspondientes del formulario.
 * También establece el estado del formulario basado en el estado del usuario.
 *
 * @example
 * processValueForm({
 *   setValue: (field, value) => { ... },
 *   usuarioQuery: {
 *     nombres: 'Juan',
 *     apellidos: 'Pérez',
 *     username: 'juanp',
 *     email: 'juanp@example.com',
 *     estado: true,
 *     rolusuario: [{ rol: { id: 1 } }],
 *     provincia: { id: 2 },
 *     establecimiento: { id: 3 },
 *     id: 123
 *   },
 *   setEstadoForm: (estado) => { ... }
 * });
 */
export const processValueForm=(parameters:{setValue:any,usuarioQuery:any,setEstadoForm:any})=>{
   
    parameters.setValue('nombres_usuario',parameters.usuarioQuery?.nombres);
    parameters.setValue('apellidos_usuario',parameters.usuarioQuery?.apellidos);
    parameters.setValue('username_usuario',parameters.usuarioQuery?.username);
    parameters.setValue('correo_usuario',parameters.usuarioQuery?.email);
    parameters.setValue('estado_usuario',parameters.usuarioQuery?.estado);
    parameters.setValue('idRol_usuario',parameters.usuarioQuery?.rolusuario?.map((data:any)=>{		       		
        return(
            data.rol?.id
        )         
    }));
    parameters.setValue('idProvincia_usuario',{id:parameters.usuarioQuery?.provincia?.id});
    parameters.setValue('idEstablecimiento_usuario',{id:parameters.usuarioQuery?.establecimiento?.id});
    parameters.setValue('contrasenia_usuario',parameters.usuarioQuery?.estado);
    parameters.setValue('id_usuario',parameters.usuarioQuery?.id);
    parameters.setEstadoForm({status:false,etiqueta:(parameters.usuarioQuery?.estado)?'Activo':'Inactivo'})
}

/**
 * Procesa el envío de un formulario, mostrando un mensaje de confirmación y ejecutando
 * la acción correspondiente (crear o actualizar) según la opción seleccionada.
 *
 * @param {Object} parameters - Parámetros necesarios para procesar el formulario.
 * @param {Function} parameters.setVisible - Función para mostrar el mensaje de confirmación.
 * @param {Object} parameters.toast - Objeto para mostrar notificaciones.
 * @param {Object} parameters.data - Datos del formulario.
 * @param {Object} parameters.labels - Etiquetas y opciones del formulario.
 * @param {Function} parameters.usuarioCreateMutation - Mutación para crear un usuario.
 * @param {Function} parameters.usuarioUpdateMutation - Mutación para actualizar un usuario.
 * @param {Function} parameters.navigate - Función para navegar a otra ruta.
 * @param {Function} parameters.dispatch - Función para despachar acciones de Redux.
 */
export const processSubmitForm=(
    parameters:
    {
        setVisible:any,toast:any,data:any,labels:any,usuarioCreateMutation:any,usuarioUpdateMutation:any,
        navigate:any,dispatch:any,
})=>{

    parameters.setVisible(
        {
            status:true,mensaje:`Esta seguro que desea ${(parameters?.labels.opt =='N')?'Guardar ':'Editar '} este Registro?`,
            accept:()=>{
                (parameters?.labels?.opt=='N')?processCreateUsuario(
                    {
                        data:parameters.data,toast:parameters.toast,
                        usuarioCreateMutation:parameters.usuarioCreateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,                        
                    }
                ):processUpdateUsuario(
                    {
                        data:parameters.data,toast:parameters.toast,
                        usuarioUpdateMutation:parameters.usuarioUpdateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,
                    }
                )
            },reject:()=>{}
        }
    );

}

/**
 * Procesa la creación de un usuario.
 *
 * @param create - Un objeto que contiene los datos necesarios para crear un usuario.
 * @param create.data - Los datos del usuario a crear.
 * @param create.toast - Referencia al componente de notificación para mostrar mensajes.
 * @param create.usuarioCreateMutation - Función de mutación para crear el usuario.
 * @param create.navigate - Función para navegar a otra ruta después de la creación.
 * @param create.dispatch - Función para despachar acciones al store de Redux.
 *
 * La función realiza una mutación para crear un usuario con los datos proporcionados.
 * Si la mutación es exitosa, navega a la ruta "record" y despacha acciones para
 * inicializar el estado y establecer un mensaje. Si ocurre un error, muestra un mensaje
 * de error utilizando el componente de notificación.
 */
const processCreateUsuario=(create:{data:any,toast:any,usuarioCreateMutation:any,navigate:any,dispatch:any})=>{
    
    const dataUsuario=create.data
    create.usuarioCreateMutation({
       variables:{
           inputCreate: {
                apellidos: dataUsuario.apellidos_usuario, 
                email: dataUsuario.correo_usuario, 
                estado: dataUsuario.estado_usuario, 
                nombres: dataUsuario.nombres_usuario, 
                password: dataUsuario.contrasenia_usuario,
                provincia_id: dataUsuario.idProvincia_usuario.id,
                roles: dataUsuario.idRol_usuario,
                username: dataUsuario.username_usuario,               
                establecimiento_id:dataUsuario.idEstablecimiento_usuario
           }
       },
       onCompleted:(c:any)=>{      
           create.navigate("record");       
           create.dispatch(setInitial({initial:1}))
           create.dispatch(setMessage({message:c.adminUsuarioCreate?.message}))
       },onError:(error:any)=>{           
           create.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });   
       }
    })
}

/**
 * Procesa la actualización de un usuario.
 *
 * @param update - Un objeto que contiene los siguientes campos:
 *   @param update.data - Los datos del usuario a actualizar.
 *   @param update.toast - Referencia al componente de notificación para mostrar mensajes.
 *   @param update.usuarioUpdateMutation - Función de mutación para actualizar el usuario.
 *   @param update.navigate - Función para navegar a una ruta específica después de la actualización.
 *   @param update.dispatch - Función para despachar acciones al store de Redux.
 *
 * La función realiza la mutación para actualizar el usuario con los datos proporcionados y maneja
 * las respuestas de éxito y error. En caso de éxito, navega a la ruta "record" y despacha acciones
 * para establecer el estado inicial y el mensaje de respuesta. En caso de error, muestra una notificación
 * con el mensaje de error.
 */
const processUpdateUsuario=(update:{data:any,toast:any,usuarioUpdateMutation:any,navigate:any,dispatch:any})=>{
    const dataUsuario=update.data
    update.usuarioUpdateMutation({
        variables:{
            inputUpdate: {
                id: dataUsuario.id_usuario,
                apellidos: dataUsuario.apellidos_usuario, 
                email: dataUsuario.correo_usuario, 
                estado: dataUsuario.estado_usuario, 
                nombres: dataUsuario.nombres_usuario,                
                provincia_id: dataUsuario.idProvincia_usuario.id,
                roles: dataUsuario.idRol_usuario,
                username: dataUsuario.username_usuario,
                establecimiento_id:dataUsuario.idEstablecimiento_usuario.establecimiento_id
           }
        },onCompleted:(c:any)=>{      
            update.navigate("record");
            update.dispatch(setInitial({initial:1}))
            update.dispatch(setMessage({message:c.adminUsuarioUpdate?.message}))

        },onError:(error:any)=>{
            update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
       }
    })
}

/**
 * Procesa la eliminación de un usuario.
 *
 * @param {Object} eliminar - Objeto que contiene las propiedades necesarias para eliminar un usuario.
 * @param {any} eliminar.data - Datos del usuario a eliminar.
 * @param {any} eliminar.toast - Referencia al componente de notificación.
 * @param {any} eliminar.usuarioDeleteMutation - Función de mutación para eliminar el usuario.
 * @param {any} eliminar.navigate - Función para navegar a otra ruta.
 * @param {any} eliminar.dispatch - Función para despachar acciones al store.
 *
 * @returns {void}
 *
 * Esta función realiza una mutación para eliminar un usuario. Si la mutación es exitosa, navega a la ruta "record",
 * despacha una acción para inicializar el estado y otra para establecer un mensaje con la respuesta de la mutación.
 * Si ocurre un error durante la mutación, muestra una notificación de error.
 */
export const processEliminarUsuario=(eliminar:{data:any,toast:any,usuarioDeleteMutation:any,navigate:any,dispatch:any})=>{
    const dataUsuario=eliminar.data
    eliminar.usuarioDeleteMutation({
        variables:{
            id: dataUsuario.id,
        },
        onCompleted:(c:any)=>{
            eliminar.navigate("record");       
            eliminar.dispatch(setInitial({initial:1}));
            eliminar.dispatch(setMessage({message:c.adminUsuarioDelete?.message}));                                              
        },onError:(error:any)=>{
            eliminar.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });              
        }
    })
}