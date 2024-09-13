/// <reference types="react" />
export declare const UtilsCoreToolbar: ({ setVisibleModalAux, selectedGrid, onClickExport, onClickExportPdf, opt, navigate, dataGrid }: {
    setVisibleModalAux?: any;
    selectedGrid?: boolean | undefined;
    onClickExport?: any;
    onClickExportPdf?: any;
    opt?: boolean | undefined;
    navigate: any;
    dataGrid: any;
}) => JSX.Element;
export declare const UtilsCoreTabMenu: ({ model, viewForm, viewGrid, useRoutes, navigate, init, setInitial, dispatch }: {
    model: {
        labelNew: string;
        labelGrid: string;
        iconNew: string;
        iconGrid: string;
        newItem?: {
            labelNew: string;
            iconNew: string;
            path: string;
        };
    };
    viewForm: string | JSX.Element | JSX.Element[] | undefined;
    viewGrid: string | JSX.Element | JSX.Element[] | undefined;
    useRoutes: any;
    navigate: any;
    init: number;
    setInitial: any;
    dispatch: any;
}) => JSX.Element;
interface ColumnMeta {
    field: string;
    header: string;
    sortable?: boolean;
    body?: any;
    filter?: boolean;
    filterPlaceholder?: string;
    hidden?: boolean;
    style?: any;
    frozen?: boolean;
    className?: string;
    footer?: any;
}
export declare const UtilsCoreDataTable: ({ columns, status, selectedGrid, setselectedGrid, recordStatus, recordGrid, title, setPageInfo, pageInfo, dispatch, ContenidoView, navigate, onSubmit, toast, setMessage, setCache }: {
    columns: ColumnMeta[];
    status?: {
        estado: string;
        header: string;
    } | undefined;
    selectedGrid: any;
    setselectedGrid: any;
    recordStatus: boolean;
    recordGrid: any;
    onRowSelect: any;
    title: string;
    setPageInfo: any;
    pageInfo: {
        limit: number;
        offset: number;
        count: number;
    };
    dispatch: any;
    ContenidoView: string | null | JSX.Element | JSX.Element[] | any;
    navigate: any;
    setVisibleModal: any;
    visibleModal: {
        dataGrid: any;
        active: boolean;
        header: string;
        opt?: string | undefined;
        closable: boolean;
        maximizable: boolean;
        closeOnEscape: boolean;
    };
    onSubmit?: any;
    toast: any;
    setMessage: any;
    setCache: any;
}) => JSX.Element;
export {};
