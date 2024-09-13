import type { PayloadAction } from '@reduxjs/toolkit';
export interface IArguments {
    notificacion: boolean;
    periodo: boolean;
    menu: boolean;
    ejercicioLocal: number;
    prdoLocal: number;
    periodoLocal: number;
    mesLocal: string;
    dataUser: {
        data: any;
        status: boolean;
        etiqueta: string;
    };
    etiquetas: {
        identificador: number | null;
        mensaje: string;
        atributo: boolean;
        tipo: string;
        icon: string;
    };
    navegacion: {
        open: boolean;
    };
    mensajes: {
        label: string | null;
        tipo: string | null;
    };
    viewModal: {
        open: boolean;
    };
    dataEntidad: {
        unicodigo: null | number;
        nombreEntidad: string;
        open: boolean;
        data: [];
        title: string;
        mensaje: string;
    };
    loadView: boolean;
    visibleModal: {
        dataGrid?: any;
        active: boolean;
        header: string;
        opt?: string;
        closable: boolean;
        maximizable: boolean;
        closeOnEscape: boolean;
    };
}
export declare const initialState: IArguments;
export declare const librarySlice: import("@reduxjs/toolkit").Slice<IArguments, {
    resetAction: (state: import("immer").WritableDraft<IArguments>) => void;
    setAction: (state: import("immer").WritableDraft<IArguments>, action: {
        payload: any;
        type: string;
    }) => void;
    setEjercicio: (state: import("immer").WritableDraft<IArguments>, action: {
        payload: any;
        type: string;
    }) => void;
    setDataUser: (state: import("immer").WritableDraft<IArguments>, action: PayloadAction<{
        data: any;
        status: boolean;
    }>) => void;
    setEtiqueta: (state: import("immer").WritableDraft<IArguments>, action: {
        payload: any;
        type: string;
    }) => void;
    setNavegacion: (state: import("immer").WritableDraft<IArguments>, action: {
        payload: any;
        type: string;
    }) => void;
    setDataEntidad: (state: import("immer").WritableDraft<IArguments>, action: {
        payload: any;
        type: string;
    }) => void;
    setViewModal: (state: import("immer").WritableDraft<IArguments>, action: {
        payload: any;
        type: string;
    }) => void;
    setMensajes: (state: import("immer").WritableDraft<IArguments>, action: {
        payload: any;
        type: string;
    }) => void;
    setLoadView: (state: import("immer").WritableDraft<IArguments>, action: {
        payload: any;
        type: string;
    }) => void;
    setVisibleModal: (state: import("immer").WritableDraft<IArguments>, action: PayloadAction<{
        dataGrid?: any;
        active: boolean;
        header: string;
        opt?: string;
        closable: boolean;
        maximizable: boolean;
        closeOnEscape: boolean;
    }>) => void;
}, "action", "action", import("@reduxjs/toolkit").SliceSelectors<IArguments>>;
export declare const resetAction: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"action/resetAction">, setAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "action/setAction">, setEjercicio: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "action/setEjercicio">, setDataUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    data: any;
    status: boolean;
}, "action/setDataUser">, setEtiqueta: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "action/setEtiqueta">, setNavegacion: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "action/setNavegacion">, setDataEntidad: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "action/setDataEntidad">, setViewModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "action/setViewModal">, setMensajes: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "action/setMensajes">, setLoadView: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "action/setLoadView">, setVisibleModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    dataGrid?: any;
    active: boolean;
    header: string;
    opt?: string | undefined;
    closable: boolean;
    maximizable: boolean;
    closeOnEscape: boolean;
}, "action/setVisibleModal">;
