import { setCache,setInitial,setMessage } from '@presentation/actions';

/**
 * @constant
 * @name columnsMenu
 * @description
 * Arreglo de objetos que define las columnas para el menú. Cada objeto representa una columna con sus propiedades.
 * 
 * @property {string} field - Nombre del campo de la columna.
 * @property {string} header - Encabezado de la columna.
 * @property {boolean} [hidden] - Indica si la columna está oculta.
 * @property {boolean} [sortable] - Indica si la columna es ordenable.
 * @property {boolean} [filter] - Indica si la columna tiene filtro.
 * @property {string} [filterPlaceholder] - Texto de marcador de posición para el filtro.
 * @property {object} [style] - Estilos CSS aplicados a la columna.
 * @property {boolean} [frozen] - Indica si la columna está congelada.
 * @property {string} [className] - Clase CSS aplicada a la columna.
 * @property {string} [footer] - Texto del pie de página de la columna.
 */
export const columnsMenu=[
    { field: 'id',header:'Id',hidden:true},
    { field: 'titulo', header: 'Título',sortable:true,filter:true, filterPlaceholder:'Buscar',
        style:{ minWidth: '150px' },frozen:true,className:'text-sm ',},
    { field: 'orden', header: 'Orden',sortable:true,footer:'Orden',className:'text-sm' },
    { field: 'modulo.nombre', header: 'Módulo',sortable:true,footer:'Módulo',className:'text-sm',filter:true },   		  
    { field: 'url', header: 'Url',filter:true, filterPlaceholder:'Buscar', className:'text-sm',style:{ minWidth: '300px' },footer:'Url' },
    { field: 'icono', header: 'Icono',style:{ minWidth: '200px' },footer:'Icono',className:'text-sm'},
]
/**
 * Procesa la colección de menús utilizando una consulta perezosa.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar la colección de menús.
 * @param parameters.getMenuCollectionLazyQuery - Función para ejecutar la consulta perezosa de la colección de menús.
 * @param parameters.setDataMenuCollection - Función para establecer los datos de la colección de menús.
 * @param parameters.limit - Límite de elementos a obtener en la consulta.
 * @param parameters.offset - Desplazamiento de elementos a obtener en la consulta.
 * @param parameters.cache - Política de caché a utilizar en la consulta.
 * @param parameters.dispatch - Función para despachar acciones al store de Redux.
 */
export const processMenuCollection =(parameters:{getMenuCollectionLazyQuery:any,setDataMenuCollection:any,limit:number,offset:number,cache:string,dispatch:any})=>{
    parameters.getMenuCollectionLazyQuery({
        variables:{        
            inputPagination:{
                limit:parameters.limit,
                offset:parameters.offset
            },
            inputOrder:{
                asc:'modulo_id'
            }
        },
        fetchPolicy: parameters.cache,
        onCompleted:(c:any)=>{            
            parameters.setDataMenuCollection(c?.adminMenuCollection);
            parameters.dispatch(setCache({cache:'cache-first'}))           
        },onError:(error:any)=>{            
            parameters.setDataMenuCollection([]);
        }
    })
}

/**
 * Procesa la selección de módulos.
 *
 * @param {Object} parameters - Parámetros para la función.
 * @param {Function} parameters.getModuloSelectLazyQuery - Función para obtener la consulta de selección de módulos.
 * @param {Function} parameters.setDataModuloSelect - Función para establecer los datos de la selección de módulos.
 * @param {string} parameters.cache - Cadena que representa la política de caché.
 * @param {Function} parameters.dispatch - Función de despacho para manejar acciones.
 *
 * @returns {void}
 */
export const processModuloSelect =(parameters:{getModuloSelectLazyQuery:any,setDataModuloSelect:any,cache:string,dispatch:any})=>{
    
    parameters.getModuloSelectLazyQuery({
        variables:{        
            inputWhere:{
                estado: { is: true }
            }
        },
        fetchPolicy: 'cache-first',
        onCompleted:(c:any)=>{            
            parameters.setDataModuloSelect(c?.adminModuloCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataModuloSelect([]);
        }
    })
}

/**
 * Procesa una consulta de menú utilizando los parámetros proporcionados.
 *
 * @param parameters - Un objeto que contiene las siguientes propiedades:
 * @param parameters.getMenuLazyQuery - Función para ejecutar la consulta de menú.
 * @param parameters.setMenuQuery - Función para establecer el resultado de la consulta de menú.
 * @param parameters.query - Objeto que contiene los parámetros de la consulta, incluyendo el ID del menú.
 * @param parameters.query.id - ID del menú a consultar.
 * @param [parameters.setStatusLoading] - Función opcional para establecer el estado de carga.
 *
 * La función ejecuta la consulta de menú con el ID proporcionado. Mientras la consulta está en progreso, 
 * establece el estado de carga a verdadero. Cuando la consulta se completa con éxito, establece el estado 
 * de carga a falso y actualiza el resultado de la consulta de menú. Si ocurre un error durante la consulta, 
 * establece el resultado de la consulta de menú como un arreglo vacío y el estado de carga a falso.
 */
export const processMenuQuery =(parameters:{getMenuLazyQuery:any,setMenuQuery:any,query:{id:number},setStatusLoading?:any})=>{
    parameters.setStatusLoading(true)
    parameters.getMenuLazyQuery({
        variables:{
            id: parameters.query?.id
        },
        onCompleted:(c:any)=>{              
            parameters.setStatusLoading(false);
            parameters.setMenuQuery(c.adminMenu);           
        },onError:(error:any)=>{
            parameters.setMenuQuery([]);
            parameters.setStatusLoading(false)
        }
    })
}


/**
 * Procesa la eliminación de un menú.
 *
 * @param {Object} eliminar - Objeto que contiene los parámetros necesarios para la eliminación.
 * @param {Object} eliminar.data - Datos del menú a eliminar.
 * @param {Object} eliminar.toast - Referencia al componente de notificación.
 * @param {Function} eliminar.menuDeleteMutation - Función de mutación para eliminar el menú.
 * @param {Function} eliminar.navigate - Función para navegar a otra ruta.
 * @param {Function} eliminar.dispatch - Función para despachar acciones de Redux.
 *
 * @returns {void}
 *
 * La función realiza la mutación para eliminar el menú y maneja las respuestas de éxito y error.
 * En caso de éxito, navega a la ruta "record" y despacha acciones para inicializar el estado y mostrar un mensaje.
 * En caso de error, muestra una notificación con el mensaje de error.
 */
export const processEliminarMenu=(eliminar:{data:any,toast:any,menuDeleteMutation:any,navigate:any,dispatch:any})=>{
    const dataMenu=eliminar.data
    eliminar.menuDeleteMutation({
        variables:{
            id: dataMenu.id,
        },
        onCompleted:(c:any)=>{
            eliminar.navigate("record");       
            eliminar.dispatch(setInitial({initial:1}));
            eliminar.dispatch(setMessage({message:c.adminMenuDelete?.message}));                                              
        },onError:(error:any)=>{
            eliminar.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });              
        }
    })
}


/**
 * Procesa el formulario de reinicio con los parámetros proporcionados.
 *
 * @param {Object} parameters - Los parámetros necesarios para procesar el formulario de reinicio.
 * @param {Function} parameters.clearErrors - Función para limpiar los errores del formulario.
 * @param {Function} parameters.reset - Función para reiniciar el formulario con los valores predeterminados.
 * @param {Function} parameters.dispatch - Función para despachar acciones al estado global.
 * @param {Object} parameters.labelTab - Objeto que contiene las etiquetas de las pestañas.
 * @param {Function} parameters.setLabelTab - Función para establecer las etiquetas de las pestañas.
 * @param {Function} parameters.navigate - Función para navegar a una ruta específica.
 */
export const processResetForm=(parameters:{clearErrors:any,reset:any,dispatch:any,labelTab:any,setLabelTab:any,navigate:any})=>{
    parameters.clearErrors(); 
    parameters.reset({
        titulo_menu:'',
        idModulo_menu:'',
        url_menu:'',
        icono_menu:'',
        color_menu:'',
        id_menu:''
    });
    parameters.navigate("new")
    parameters.dispatch(parameters.setLabelTab({...parameters.labelTab,labelNew:'Nuevo Menu',iconNew:'post_add'}));
}

/**
 * Procesa y establece los valores del formulario basándose en los datos de la consulta del menú.
 *
 * @param {Object} parameters - Objeto que contiene las funciones y datos necesarios para procesar el formulario.
 * @param {Function} parameters.setValue - Función para establecer los valores del formulario.
 * @param {Object} parameters.menuQuery - Datos de la consulta del menú.
 * @param {Function} parameters.setEstadoForm - Función para establecer el estado del formulario.
 */
export const processValueForm=(parameters:{setValue:any,menuQuery:any,setEstadoForm:any})=>{
   
    parameters.setValue('titulo_menu',parameters.menuQuery?.titulo);
    parameters.setValue('idModulo_menu',{id:parameters.menuQuery?.modulo.id});
    parameters.setValue('url_menu',parameters.menuQuery?.url);
    parameters.setValue('icono_menu',parameters.menuQuery?.icono);
    parameters.setValue('orden_menu',parameters.menuQuery?.orden);
    parameters.setValue('estado_menu',parameters.menuQuery?.estado);
    parameters.setValue('id_menu',parameters.menuQuery?.id);
    parameters.setEstadoForm({status:false,etiqueta:(parameters.menuQuery?.estado)?'Activo':'Inactivo'})
}

/**
 * Procesa el envío de un formulario mostrando una confirmación antes de proceder.
 *
 * @param parameters - Objeto que contiene los siguientes parámetros:
 * @param parameters.setVisible - Función para establecer la visibilidad del mensaje de confirmación.
 * @param parameters.toast - Objeto para mostrar notificaciones.
 * @param parameters.data - Datos del formulario a procesar.
 * @param parameters.labels - Etiquetas que indican la acción a realizar ('N' para crear, otro valor para editar).
 * @param parameters.menuCreateMutation - Mutación para crear un nuevo menú.
 * @param parameters.menuUpdateMutation - Mutación para actualizar un menú existente.
 * @param parameters.navigate - Función para navegar a otra ruta.
 * @param parameters.dispatch - Función para despachar acciones en el estado global.
 */
export const processSubmitForm=(
    parameters:
    {
        setVisible:any,toast:any,data:any,labels:any,menuCreateMutation:any,menuUpdateMutation:any,
        navigate:any,dispatch:any,
})=>{

    parameters.setVisible(
        {
            status:true,mensaje:`Esta seguro que desea ${(parameters?.labels.opt =='N')?'Guardar ':'Editar '} este Registro?`,
            accept:()=>{
                (parameters?.labels?.opt=='N')?processCreateMenu(
                    {
                        data:parameters.data,toast:parameters.toast,
                        menuCreateMutation:parameters.menuCreateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,                        
                    }
                ):processUpdateMenu(
                    {
                        data:parameters.data,toast:parameters.toast,
                        menuUpdateMutation:parameters.menuUpdateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,
                    }
                )
            },reject:()=>{}
        }
    );

}

/**
 * Procesa la creación de un menú utilizando la mutación `menuCreateMutation`.
 * 
 * @param create - Un objeto que contiene las propiedades necesarias para la creación del menú.
 * @param create.data - Los datos del menú a crear.
 * @param create.toast - Referencia al componente de notificación para mostrar mensajes.
 * @param create.menuCreateMutation - La mutación GraphQL para crear el menú.
 * @param create.navigate - Función para navegar a otra ruta después de la creación.
 * @param create.dispatch - Función para despachar acciones al store de Redux.
 * 
 * La función realiza la mutación `menuCreateMutation` con los datos proporcionados y maneja
 * las respuestas exitosas y los errores. En caso de éxito, navega a la ruta "record" y despacha
 * acciones para inicializar el estado y mostrar un mensaje. En caso de error, muestra una notificación
 * con el mensaje de error.
 */
const processCreateMenu=(create:{data:any,toast:any,menuCreateMutation:any,navigate:any,dispatch:any})=>{
    
    const dataMenu=create.data
    create.menuCreateMutation({
       variables:{
           inputCreate: {
               modulo_id: dataMenu.idModulo_menu.id, 
               orden: dataMenu.orden_menu, 
               icono: dataMenu.icono_menu, 
               titulo: dataMenu.titulo_menu, 
               url: dataMenu.url_menu,                
           }
       },
       onCompleted:(c:any)=>{      
           create.navigate("record");       
           create.dispatch(setInitial({initial:1}))
           create.dispatch(setMessage({message:c.adminMenuCreate?.message}))
       },onError:(error:any)=>{           
           create.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });   
       }
    })
}

/**
 * Procesa la actualización de un menú.
 *
 * @param update - Un objeto que contiene los siguientes parámetros:
 * @param update.data - Los datos del menú a actualizar.
 * @param update.toast - Referencia al componente de notificación para mostrar mensajes.
 * @param update.menuUpdateMutation - Función de mutación para actualizar el menú.
 * @param update.navigate - Función para navegar a una ruta específica después de la actualización.
 * @param update.dispatch - Función para despachar acciones al store de Redux.
 *
 * La función realiza la mutación para actualizar el menú con los datos proporcionados.
 * En caso de éxito, navega a la ruta "record" y despacha acciones para establecer el estado inicial y mostrar un mensaje.
 * En caso de error, muestra una notificación con el mensaje de error.
 */
const processUpdateMenu=(update:{data:any,toast:any,menuUpdateMutation:any,navigate:any,dispatch:any})=>{
    const dataMenu=update.data
    update.menuUpdateMutation({
        variables:{
            inputUpdate: {
                id: dataMenu.id_menu,
                modulo_id: dataMenu.idModulo_menu.id, 
                orden: dataMenu.orden_menu, 
                icono: dataMenu.icono_menu, 
                titulo: dataMenu.titulo_menu, 
                url: dataMenu.url_menu,
                estado: dataMenu.estado_menu,
           }
        },onCompleted:(c:any)=>{      
            update.navigate("record");
            update.dispatch(setInitial({initial:1}))
            update.dispatch(setMessage({message:c.adminMenuUpdate?.message}))

        },onError:(error:any)=>{
            update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
       }
    })
}