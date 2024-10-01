import { setCache,setInitial,setMessage } from '@presentation/actions';

/**
 * @constant
 * @name columnsModulo
 * @description Arreglo de objetos que define las columnas para el módulo.
 * Cada objeto representa una columna con sus propiedades específicas.
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
export const columnsModulo=[
    { field: 'id',header:'Id',hidden:true},
    { field: 'nombre', header: 'Nombre',sortable:true,filter:true, filterPlaceholder:'Buscar',
        style:{ minWidth: '200px' },frozen:true,className:'text-sm ',},   
    { field: 'codigo', header: 'Código',sortable:true,footer:'Código',className:'text-sm' },   		  
    { field: 'url', header: 'Url',filter:true, filterPlaceholder:'Buscar', className:'text-sm',style:{ minWidth: '300px' },footer:'Url' },
    { field: 'icono', header: 'Icono',style:{ minWidth: '200px' },footer:'Icono',className:'text-sm'},
    { field: 'color', header: 'Color',style:{ minWidth: '200px' },footer:'Color',className:'text-sm'}		
]
/**
 * Procesa una colección de módulos utilizando una consulta perezosa.
 *
 * @param parameters - Un objeto que contiene los siguientes parámetros:
 * @param parameters.getModuloCollectionLazyQuery - Función para ejecutar la consulta perezosa de la colección de módulos.
 * @param parameters.setDataModuloCollection - Función para establecer los datos de la colección de módulos.
 * @param parameters.limit - Límite de elementos a obtener en la consulta.
 * @param parameters.offset - Desplazamiento de elementos a obtener en la consulta.
 * @param parameters.cache - Política de caché a utilizar en la consulta.
 * @param parameters.dispatch - Función de despacho para actualizar el estado de la caché.
 *
 * La función ejecuta la consulta perezosa con los parámetros proporcionados y maneja los resultados
 * estableciendo los datos de la colección de módulos y actualizando la política de caché.
 * En caso de error, establece una colección vacía.
 */
export const processModuloCollection =(parameters:{getModuloCollectionLazyQuery:any,setDataModuloCollection:any,limit:number,offset:number,cache:string,dispatch:any})=>{
    
    parameters.getModuloCollectionLazyQuery({
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
            parameters.setDataModuloCollection(c?.adminModuloCollection);
            parameters.dispatch(setCache({cache:'cache-first'}))           
        },onError:(error:any)=>{            
            parameters.setDataModuloCollection([]);
        }
    })
}

/**
 * Procesa una consulta de módulo.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para la consulta.
 * @param parameters.getModuloLazyQuery - Función para ejecutar la consulta de módulo.
 * @param parameters.setModuloQuery - Función para establecer el resultado de la consulta de módulo.
 * @param parameters.query - Objeto que contiene los parámetros de la consulta.
 * @param parameters.query.id - ID del módulo a consultar.
 * @param [parameters.setStatusLoading] - Función opcional para establecer el estado de carga.
 *
 * @remarks
 * Esta función ejecuta una consulta de módulo utilizando `getModuloLazyQuery` y maneja los estados de carga y error.
 * Si la consulta se completa con éxito, establece el resultado en `setModuloQuery`.
 * Si ocurre un error, establece un arreglo vacío en `setModuloQuery` y cambia el estado de carga a `false`.
 */
export const processModuloQuery =(parameters:{getModuloLazyQuery:any,setModuloQuery:any,query:{id:number},setStatusLoading?:any})=>{
    parameters.setStatusLoading(true)
    parameters.getModuloLazyQuery({
        variables:{
            id: parameters.query?.id
        },
        onCompleted:(c:any)=>{              
            parameters.setStatusLoading(false);
            parameters.setModuloQuery(c.adminModulo);           
        },onError:(error:any)=>{
            parameters.setModuloQuery([]);
            parameters.setStatusLoading(false)
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
        nombre_modulo:'',
        codigo_modulo:'',
        url_modulo:'',
        icono_modulo:'',
        color_modulo:'',
        id_modulo:'',
    });
    parameters.navigate("new")
    parameters.dispatch(parameters.setLabelTab({...parameters.labelTab,labelNew:'Nuevo Modulo',iconNew:'post_add'}));
}

/**
 * Procesa y establece los valores del formulario basado en los datos de `moduloQuery`.
 *
 * @param {Object} parameters - Los parámetros necesarios para procesar el formulario.
 * @param {Function} parameters.setValue - Función para establecer los valores del formulario.
 * @param {Object} parameters.moduloQuery - Datos del módulo que se utilizarán para llenar el formulario.
 * @param {Function} parameters.setEstadoForm - Función para establecer el estado del formulario.
 *
 * @example
 * processValueForm({
 *   setValue: (field, value) => { ... },
 *   moduloQuery: {
 *     nombre: 'Nombre del Módulo',
 *     codigo: 'Código del Módulo',
 *     url: 'URL del Módulo',
 *     icono: 'Icono del Módulo',
 *     color: 'Color del Módulo',
 *     estado: true,
 *     id: 123
 *   },
 *   setEstadoForm: (estado) => { ... }
 * });
 */
export const processValueForm=(parameters:{setValue:any,moduloQuery:any,setEstadoForm:any})=>{
    parameters.setValue('nombre_modulo',parameters.moduloQuery?.nombre);
    parameters.setValue('codigo_modulo',parameters.moduloQuery?.codigo);
    parameters.setValue('url_modulo',parameters.moduloQuery?.url);
    parameters.setValue('icono_modulo',parameters.moduloQuery?.icono);
    parameters.setValue('color_modulo',parameters.moduloQuery?.color);
    parameters.setValue('estado_modulo',parameters.moduloQuery?.estado);
    parameters.setValue('id_modulo',parameters.moduloQuery?.id);
    parameters.setEstadoForm({status:false,etiqueta:(parameters.moduloQuery?.estado)?'Activo':'Inactivo'})
}

/**
 * Procesa el envío de un formulario, mostrando un mensaje de confirmación y ejecutando
 * la acción correspondiente (crear o actualizar) según la opción seleccionada.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar el formulario.
 * @param parameters.setVisible - Función para mostrar el mensaje de confirmación.
 * @param parameters.toast - Objeto para mostrar notificaciones.
 * @param parameters.data - Datos del formulario.
 * @param parameters.labels - Etiquetas que indican la acción a realizar ('N' para crear, otro valor para actualizar).
 * @param parameters.moduloCreateMutation - Mutación para crear un módulo.
 * @param parameters.moduloUpdateMutation - Mutación para actualizar un módulo.
 * @param parameters.navigate - Función para navegar a otra ruta.
 * @param parameters.dispatch - Función para despachar acciones de Redux.
 */
export const processSubmitForm=(
    parameters:
    {
        setVisible:any,toast:any,data:any,labels:any,moduloCreateMutation:any,moduloUpdateMutation:any,
        navigate:any,dispatch:any,
})=>{

    parameters.setVisible(
        {
            status:true,mensaje:`Esta seguro que desea ${(parameters?.labels.opt =='N')?'Guardar ':'Editar '} este Registro?`,
            accept:()=>{
                (parameters?.labels?.opt=='N')?processCreateModulo(
                    {
                        data:parameters.data,toast:parameters.toast,
                        moduloCreateMutation:parameters.moduloCreateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,                        
                    }
                ):processUpdateModulo(
                    {
                        data:parameters.data,toast:parameters.toast,
                        moduloUpdateMutation:parameters.moduloUpdateMutation,
                        navigate:parameters.navigate,
                        dispatch:parameters.dispatch,
                    }
                )
            },reject:()=>{}
        }
    );

}

/**
 * Procesa la creación de un módulo.
 *
 * @param create - Un objeto que contiene las propiedades necesarias para crear un módulo.
 * @param create.data - Los datos del módulo a crear.
 * @param create.toast - Referencia al componente de notificación para mostrar mensajes.
 * @param create.moduloCreateMutation - Función de mutación para crear el módulo.
 * @param create.navigate - Función para navegar a una ruta específica después de la creación.
 * @param create.dispatch - Función para despachar acciones al store de Redux.
 *
 * La función realiza una mutación para crear un módulo con los datos proporcionados.
 * Si la mutación se completa con éxito, navega a la ruta "record" y despacha acciones para
 * inicializar el estado y mostrar un mensaje de éxito.
 * Si ocurre un error durante la mutación, muestra un mensaje de error utilizando el componente de notificación.
 */
const processCreateModulo=(create:{data:any,toast:any,moduloCreateMutation:any,navigate:any,dispatch:any})=>{
    
     const dataModulo=create.data
     create.moduloCreateMutation({
        variables:{
            inputCreate: {
                codigo: dataModulo.codigo_modulo, 
                color: dataModulo.color_modulo, 
                icono: dataModulo.icono_modulo, 
                nombre: dataModulo.nombre_modulo, 
                url: dataModulo.url_modulo,                
            }
        },
        onCompleted:(c:any)=>{                   
            create.navigate("record");       
            create.dispatch(setInitial({initial:1}))
            create.dispatch(setMessage({message:c.adminModuloCreate?.message}))
        },onError:(error:any)=>{           
            create.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });   
        }
     })
}

/**
 * Procesa la actualización de un módulo.
 *
 * @param update - Un objeto que contiene los siguientes parámetros:
 * @param update.data - Los datos del módulo a actualizar.
 * @param update.toast - Referencia al componente de notificación para mostrar mensajes.
 * @param update.moduloUpdateMutation - Función de mutación para actualizar el módulo.
 * @param update.navigate - Función para navegar a otra ruta después de la actualización.
 * @param update.dispatch - Función para despachar acciones al store de Redux.
 *
 * La función realiza una mutación para actualizar el módulo con los datos proporcionados.
 * En caso de éxito, navega a la ruta "record" y despacha acciones para establecer el estado inicial y el mensaje de éxito.
 * En caso de error, muestra una notificación con el mensaje de error.
 */
const processUpdateModulo=(update:{data:any,toast:any,moduloUpdateMutation:any,navigate:any,dispatch:any})=>{
    const dataModulo=update.data
    update.moduloUpdateMutation({
        variables:{
            inputUpdate: {
                id: dataModulo.id_modulo,
                codigo: dataModulo.codigo_modulo, 
                color: dataModulo.color_modulo, 
                icono: dataModulo.icono_modulo, 
                nombre: dataModulo.nombre_modulo, 
                url: dataModulo.url_modulo,
                estado: dataModulo.estado_modulo
           }
        },onCompleted:(c:any)=>{                 
            update.navigate("record");
            update.dispatch(setInitial({initial:1}))
            update.dispatch(setMessage({message:c.adminModuloUpdate?.message}))

        },onError:(error:any)=>{
            update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
       }
    })
}


/**
 * Procesa la eliminación de un módulo.
 *
 * @param eliminar - Un objeto que contiene los siguientes parámetros:
 *   @param eliminar.data - Los datos del módulo a eliminar.
 *   @param eliminar.toast - Referencia al componente de notificación para mostrar mensajes.
 *   @param eliminar.moduloDeleteMutation - Función de mutación para eliminar el módulo.
 *   @param eliminar.navigate - Función para navegar a una ruta específica después de la eliminación.
 *   @param eliminar.dispatch - Función para despachar acciones al store de Redux.
 *
 * La función realiza la mutación para eliminar el módulo y maneja las respuestas de éxito y error.
 * En caso de éxito, navega a la ruta "record", despacha una acción para establecer el estado inicial
 * y otra para establecer un mensaje con la respuesta de la mutación.
 * En caso de error, muestra una notificación con el mensaje de error.
 */
export const processEliminarModulo=(eliminar:{data:any,toast:any,moduloDeleteMutation:any,navigate:any,dispatch:any})=>{
    const dataModulo=eliminar.data
    eliminar.moduloDeleteMutation({
        variables:{
            id: dataModulo.id,
        },
        onCompleted:(c:any)=>{  
            eliminar.navigate("record");       
            eliminar.dispatch(setInitial({initial:1}));
            eliminar.dispatch(setMessage({message:c.adminModuloDelete?.message}));
                                                          
        },onError:(error:any)=>{
            eliminar.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });              
        }
    })
}