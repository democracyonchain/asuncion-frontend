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
 * Slice de Redux para gestionar el estado de los procesos.
 * 
 * @module procesosSlice
 */

/**
 * Restablece el estado a sus valores iniciales.
 * 
 * @function resetAction
 * @param {Object} state - El estado actual del slice.
 */

/**
 * Establece el valor de la notificación en el estado.
 * 
 * @function setAction
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<{notificacion: boolean}>} action - La acción que contiene el valor de la notificación.
 */

/**
 * Establece el valor inicial en el estado.
 * 
 * @function setInitial
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<{initial: number}>} action - La acción que contiene el valor inicial.
 */

/**
 * Establece la información de la paginación en el estado.
 * 
 * @function setPageInfo
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<{limit: number, offset: number}>} action - La acción que contiene los valores de limit y offset.
 */

/**
 * Establece las etiquetas y los iconos de las pestañas en el estado.
 * 
 * @function setLabelTab
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<{labelNew: string, labelGrid: string, iconNew?: string, iconGrid?: string}>} action - La acción que contiene las etiquetas y los iconos.
 */

/**
 * Establece la visibilidad y las propiedades del modal en el estado.
 * 
 * @function setVisibleModal
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<{dataGrid?: any, active: boolean, header: string, opt?: string, closable: boolean, maximizable: boolean, closeOnEscape: boolean}>} action - La acción que contiene las propiedades del modal.
 */

/**
 * Establece el valor de la caché en el estado.
 * 
 * @function setCache
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<{cache: string}>} action - La acción que contiene el valor de la caché.
 */

/**
 * Establece el mensaje en el estado.
 * 
 * @function setMessage
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<{message: string}>} action - La acción que contiene el mensaje.
 */

/**
 * Establece los datos del grid en el estado.
 * 
 * @function setDataGrid
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<{data: any}>} action - La acción que contiene los datos del grid.
 */
export const procesosSlice = createSlice({ 

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
 * Exporta varias acciones del slice de procesos.
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
export const { resetAction,setAction, setInitial,setPageInfo,setLabelTab,setVisibleModal,setCache,setMessage,setDataGrid } = procesosSlice.actions