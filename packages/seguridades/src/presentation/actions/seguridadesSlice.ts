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

export const seguridadesSlice = createSlice({ 

    name: 'seguridades',
    initialState,
    reducers: {

        resetAction: (state) => {
            state.notificacion =false;
            state.initial=0;
            
            state.visibleModal.dataGrid={},
            state.visibleModal.active=false,
            state.visibleModal.header='',
            state.visibleModal.opt='',
            state.visibleModal.closable=false,
            state.visibleModal.maximizable=true,
            state.visibleModal.closeOnEscape=false,

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


export const { resetAction,setAction, setInitial,setPageInfo,setLabelTab,setVisibleModal,setCache,setMessage,setDataGrid } = seguridadesSlice.actions