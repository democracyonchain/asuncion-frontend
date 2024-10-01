import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IArguments{
    notificacion: boolean,
    initial:number
    pageInfo:{
        limit:number
        offset:number
    },
    labelTab:{
        labelNew:string
        labelGrid:string
        iconNew?:string
        iconGrid?:string
    },
    visibleModal:{
        dataGrid:any
        active:boolean,
        header:string,
        opt?:string,
        closable:boolean,
        maximizable:boolean,
        closeOnEscape:boolean
    },
    cache?:string,
    message?:string|null,
    dataGrid:{
        data:any
    }
}

export const initialState:IArguments = {
    notificacion: false,
    initial:0,
    pageInfo:{
        limit:10,
        offset:0
    },
    labelTab:{
        labelNew:'',
        labelGrid:'',
        iconNew:'',
        iconGrid:''
    },
    visibleModal:{
        dataGrid:{},
        active:false,
        header:'',
        opt:'',
        closable:false,
        maximizable:true,
        closeOnEscape:false
    },
    cache:'cache-and-network',
    message:'',
    dataGrid:{
        data:{}
    }
}

/**
 * Slice de Redux para gestionar el estado de seguridades.
 * 
 * @module seguridadesSlice
 */

/**
 * Acción para reiniciar el estado a sus valores iniciales.
 * 
 * @function resetAction
 * @param {Object} state - El estado actual del slice.
 */

/**
 * Acción para establecer el valor de notificación.
 * 
 * @function setAction
 * @param {Object} state - El estado actual del slice.
 * @param {Object} action - La acción de Redux.
 * @param {boolean} action.payload.notificacion - El nuevo valor de notificación.
 */

/**
 * Acción para establecer el valor inicial.
 * 
 * @function setInitial
 * @param {Object} state - El estado actual del slice.
 * @param {Object} action - La acción de Redux.
 * @param {number} action.payload.initial - El nuevo valor inicial.
 */

/**
 * Acción para establecer la información de la página.
 * 
 * @function setPageInfo
 * @param {Object} state - El estado actual del slice.
 * @param {Object} action - La acción de Redux.
 * @param {number} action.payload.limit - El nuevo límite de la página.
 * @param {number} action.payload.offset - El nuevo offset de la página.
 */

/**
 * Acción para establecer las etiquetas de las pestañas.
 * 
 * @function setLabelTab
 * @param {Object} state - El estado actual del slice.
 * @param {Object} action - La acción de Redux.
 * @param {string} action.payload.labelNew - La nueva etiqueta para "Nuevo".
 * @param {string} action.payload.labelGrid - La nueva etiqueta para "Grid".
 * @param {string} [action.payload.iconNew] - El nuevo icono para "Nuevo".
 * @param {string} [action.payload.iconGrid] - El nuevo icono para "Grid".
 */

/**
 * Acción para establecer la visibilidad del modal.
 * 
 * @function setVisibleModal
 * @param {Object} state - El estado actual del slice.
 * @param {Object} action - La acción de Redux.
 * @param {any} [action.payload.dataGrid] - Los datos del grid.
 * @param {boolean} action.payload.active - Si el modal está activo.
 * @param {string} action.payload.header - El encabezado del modal.
 * @param {string} [action.payload.opt] - Opciones adicionales del modal.
 * @param {boolean} action.payload.closable - Si el modal es cerrable.
 * @param {boolean} action.payload.maximizable - Si el modal es maximizable.
 * @param {boolean} action.payload.closeOnEscape - Si el modal se cierra al presionar escape.
 */

/**
 * Acción para establecer el valor de caché.
 * 
 * @function setCache
 * @param {Object} state - El estado actual del slice.
 * @param {Object} action - La acción de Redux.
 * @param {string} action.payload.cache - El nuevo valor de caché.
 */

/**
 * Acción para establecer el mensaje.
 * 
 * @function setMessage
 * @param {Object} state - El estado actual del slice.
 * @param {Object} action - La acción de Redux.
 * @param {string} action.payload.message - El nuevo mensaje.
 */

/**
 * Acción para establecer los datos del grid.
 * 
 * @function setDataGrid
 * @param {Object} state - El estado actual del slice.
 * @param {Object} action - La acción de Redux.
 * @param {any} action.payload.data - Los nuevos datos del grid.
 */
export const seguridadesSlice = createSlice({ 

    name: 'seguridades',
    initialState,
    reducers: {

        resetAction: (state) => {
            state.notificacion =false;
            state.initial=0;
            
            state.visibleModal.dataGrid={}
            state.visibleModal.active=false
            state.visibleModal.header=''
            state.visibleModal.opt=''
            state.visibleModal.closable=false
            state.visibleModal.maximizable=true
            state.visibleModal.closeOnEscape=false

            state.labelTab.labelGrid='';
            state.labelTab.labelNew='';
            state.labelTab.iconNew='';
            state.labelTab.iconGrid='';
            state.cache='cache-and-network';

            state.pageInfo.limit=10
            state.pageInfo.offset=0

            state.message=''
            state.dataGrid.data=null
        },

        setAction :(state,action:PayloadAction<{notificacion:boolean}>)=>{
            state.notificacion=(action.payload.notificacion)?action.payload.notificacion:false;           
        },

        setInitial:(state,action:PayloadAction<{initial:number}>)=>{
            state.initial=(action.payload.initial)?action.payload.initial:0
        },
        setPageInfo:(state,action:PayloadAction<{limit:number,offset:number }>)=>{
            state.pageInfo.limit=action.payload.limit;
            state.pageInfo.offset=action.payload.offset;
        },
        setLabelTab:(state,action:PayloadAction<{labelNew:string,labelGrid:string,iconNew?:string,iconGrid?:string }>)=>{
            state.labelTab.labelGrid=action.payload.labelGrid;
            state.labelTab.labelNew=action.payload.labelNew;
            state.labelTab.iconNew=action.payload.iconNew;
            state.labelTab.iconGrid=action.payload.iconGrid;
        },
        setVisibleModal:(state,action:PayloadAction<{dataGrid?:any,active:boolean,header:string,opt?:string,closable:boolean,maximizable:boolean,closeOnEscape:boolean}>)=>{
            
            state.visibleModal.dataGrid=action.payload.dataGrid;
            state.visibleModal.active=action.payload.active;
            state.visibleModal.header=action.payload.header;
            state.visibleModal.opt=action.payload.opt;
            state.visibleModal.closable=action.payload.closable;
            state.visibleModal.maximizable=action.payload.maximizable;
            state.visibleModal.closeOnEscape=action.payload.closeOnEscape;
        },
        setCache:(state,action:PayloadAction<{cache:string}>)=>{
            state.cache = action.payload.cache;
        },
        setMessage:(state,action:PayloadAction<{message:string}>)=>{
            state.message = action.payload.message;
        },
        setDataGrid:(state,action:PayloadAction<{data:any}>)=>{
            state.dataGrid.data=action.payload.data
        }
    }
})


/**
 * Exporta varias acciones del slice de seguridades.
 * 
 * Acciones exportadas:
 * - `resetAction`: Acción para reiniciar el estado.
 * - `setAction`: Acción para establecer un valor específico.
 * - `setInitial`: Acción para establecer el estado inicial.
 * - `setPageInfo`: Acción para establecer la información de la página.
 * - `setLabelTab`: Acción para establecer la etiqueta de la pestaña.
 * - `setVisibleModal`: Acción para establecer la visibilidad del modal.
 * - `setCache`: Acción para establecer la caché.
 * - `setMessage`: Acción para establecer un mensaje.
 * - `setDataGrid`: Acción para establecer los datos de la cuadrícula.
 */
export const { resetAction,setAction, setInitial,setPageInfo,setLabelTab,setVisibleModal,setCache,setMessage,setDataGrid } = seguridadesSlice.actions