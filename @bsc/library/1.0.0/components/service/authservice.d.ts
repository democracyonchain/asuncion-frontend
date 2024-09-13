export declare const onClikSaveAuth: (metodos: {
    dataForm: any;
    dispatch: any;
    setAuthloginLazyQuery: any;
    trigger?: any;
    navigate: any;
}) => void;
export declare const processAuthPerfil: (parameters: {
    setAuthPerfilLazyQuery: any;
    navigate: any;
}) => void;
export declare const onSubmitRol: (parameters: {
    data: any;
    getRolSession: any;
    setVisible: any;
    toast: any;
    setAuthModuloPermisosIdLazyQuery: any;
    dispatch: any;
    navigate: any;
}) => void;
export declare const onSubmitPass: (parameters: {
    data: any;
    setVisible: any;
    toast: any;
    setAuthAuthCambioPasswordLazyQuery: any;
    dispatch: any;
    navigate: any;
    setAuthlogoutLazyQuery: any;
}) => void;
export declare const processAuthModuloPermisosId: (parameters: any, dataAuxRol: any) => void;
export declare const coreMenuUser: (parameters: {
    dataMenuUser: any;
    modulo: string;
    navigate: any;
    url: string;
}) => void;
export declare const coreMenuModulo: (parameters: {
    dataAuxMenu: any;
    dataMenuUser: any;
    navigate: any;
}) => any;
export declare const processAuthLogout: (parameters: {
    dispatch: any;
    setAuthlogoutLazyQuery: any;
    navigate: any;
    toast: any;
}) => void;
interface IpermisosValues {
    onEdit?: boolean;
    onView?: boolean;
    onAdd?: boolean;
    onDelete?: boolean;
    onNew?: boolean;
    onPrint?: boolean;
    dataTabs?: {
        read?: boolean;
        create?: boolean;
    };
    conteo?: {
        initDefault?: string;
        initCreate?: number;
        initRead?: number;
    };
}
export declare const coreAccesosBsc: () => IpermisosValues;
export declare const processAdminConfiguracion: (parameters: {
    getConfiguracionLazyQuery: any;
}) => void;
export {};
