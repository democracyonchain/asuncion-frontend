import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    Base64: {
        input: any;
        output: any;
    };
    DateScalar: {
        input: any;
        output: any;
    };
    Decimal: {
        input: any;
        output: any;
    };
};
export type ActaDigitalizacionBasic = {
    __typename?: "ActaDigitalizacionBasic";
    dignidad?: Maybe<DignidadDigitalizacion>;
    dignidad_id?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Float"]["output"];
    junta?: Maybe<JuntaDigitalizacion>;
    junta_id?: Maybe<Scalars["Float"]["output"]>;
};
export type ActaDigitalizacionBasicCollectionType = {
    __typename?: "ActaDigitalizacionBasicCollectionType";
    data?: Maybe<Array<ActaDigitalizacionBasic>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ActaDigitalizacionFilterInput = {
    bloqueo?: InputMaybe<StateWhereInput>;
    usuariocontrol?: InputMaybe<RelationsWhereInput>;
    usuariodigitacion?: InputMaybe<RelationsWhereInput>;
    usuarioescaneo?: InputMaybe<RelationsWhereInput>;
};
export type ActaDigitalizacionVoto = {
    __typename?: "ActaDigitalizacionVoto";
    blancosdigitacion?: Maybe<Scalars["Float"]["output"]>;
    dignidad?: Maybe<DignidadDigitalizacion>;
    dignidad_id?: Maybe<Scalars["Float"]["output"]>;
    estado?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Float"]["output"];
    junta?: Maybe<JuntaDigitalizacion>;
    junta_id?: Maybe<Scalars["Float"]["output"]>;
    nulosdigitacion?: Maybe<Scalars["Float"]["output"]>;
    peticion?: Maybe<Scalars["Float"]["output"]>;
    seguridad?: Maybe<Scalars["Float"]["output"]>;
    sufragantesdigitacion?: Maybe<Scalars["Float"]["output"]>;
    votos: Array<VotosDigitalizacion>;
};
export type ActaDigitalizacionVotoImagen = {
    __typename?: "ActaDigitalizacionVotoImagen";
    blancosdigitacion?: Maybe<Scalars["Float"]["output"]>;
    dignidad?: Maybe<DignidadDigitalizacion>;
    dignidad_id?: Maybe<Scalars["Float"]["output"]>;
    estado?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Float"]["output"];
    junta?: Maybe<JuntaDigitalizacion>;
    junta_id?: Maybe<Scalars["Float"]["output"]>;
    nulosdigitacion?: Maybe<Scalars["Float"]["output"]>;
    peticion?: Maybe<Scalars["Float"]["output"]>;
    seguridad?: Maybe<Scalars["Float"]["output"]>;
    sufragantesdigitacion?: Maybe<Scalars["Float"]["output"]>;
    votos: Array<VotosDigitalizacionAleatorio>;
};
export type ActaUpdateInput = {
    blancos: Scalars["Int"]["input"];
    id: Scalars["Int"]["input"];
    imagenacta: ImagenActaUpdateInput;
    imagensegmento: Array<ImagenSegmentoUpdateInput>;
    nulos: Scalars["Int"]["input"];
    sufragantes: Scalars["Int"]["input"];
    votos: Array<VotosUpdateInput>;
    votosicr?: InputMaybe<Scalars["Int"]["input"]>;
};
export type CandidatoDigitalizacion = {
    __typename?: "CandidatoDigitalizacion";
    cedula?: Maybe<Scalars["String"]["output"]>;
    dignidad?: Maybe<DignidadDigitalizacion>;
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
    orden?: Maybe<Scalars["Float"]["output"]>;
    partido?: Maybe<PartidoDigitalizacion>;
};
export type CantonDigitalizacion = {
    __typename?: "CantonDigitalizacion";
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
    provincia?: Maybe<ProvinciaDigitalizacion>;
};
export type CantonDigitalizacionCollectionType = {
    __typename?: "CantonDigitalizacionCollectionType";
    data?: Maybe<Array<CantonDigitalizacion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type CantonDigitalizacionFilterInput = {
    nombre?: InputMaybe<StringWhereInput>;
    provincia_id?: InputMaybe<NumberWhereInput>;
};
export type ConfiguracionAdminitracion = {
    __typename?: "ConfiguracionAdminitracion";
    codigoproceso: Scalars["String"]["output"];
    estado: Scalars["Boolean"]["output"];
    fechaproceso: Scalars["DateScalar"]["output"];
    id: Scalars["Float"]["output"];
    nombreproceso: Scalars["String"]["output"];
};
export type ConfiguracionCollectionType = {
    __typename?: "ConfiguracionCollectionType";
    data?: Maybe<Array<ConfiguracionAdminitracion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ConfiguracionFilterInput = {
    codigoproceso?: InputMaybe<StringWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    nombreproceso?: InputMaybe<StringWhereInput>;
};
export type DignidadDigitalizacion = {
    __typename?: "DignidadDigitalizacion";
    ambito?: Maybe<Scalars["String"]["output"]>;
    estado?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Float"]["output"];
    nombre?: Maybe<Scalars["String"]["output"]>;
    orden?: Maybe<Scalars["Float"]["output"]>;
};
export type DignidadDigitalizacionCollectionType = {
    __typename?: "DignidadDigitalizacionCollectionType";
    data?: Maybe<Array<DignidadDigitalizacion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type DignidadDigitalizacionFilterInput = {
    ambito?: InputMaybe<StringWhereInput>;
    estado?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};
export type EstablecimientoAdminitracion = {
    __typename?: "EstablecimientoAdminitracion";
    id: Scalars["Float"]["output"];
    logo?: Maybe<Scalars["Base64"]["output"]>;
    nombre: Scalars["String"]["output"];
};
export type EstablecimientoAuth = {
    __typename?: "EstablecimientoAuth";
    id: Scalars["Float"]["output"];
    logo?: Maybe<Scalars["Base64"]["output"]>;
    nombre: Scalars["String"]["output"];
};
export type EstablecimientoCollectionType = {
    __typename?: "EstablecimientoCollectionType";
    data?: Maybe<Array<EstablecimientoAdminitracion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type EstablecimientoCreateInput = {
    logo: Scalars["String"]["input"];
    nombre: Scalars["String"]["input"];
};
export type EstablecimientoFilterInput = {
    estado?: InputMaybe<StateWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};
export type EstablecimientoUpdateInput = {
    estado?: InputMaybe<Scalars["Boolean"]["input"]>;
    id: Scalars["Int"]["input"];
    logo?: InputMaybe<Scalars["String"]["input"]>;
    nombre?: InputMaybe<Scalars["String"]["input"]>;
};
export type GlobalResultType = {
    __typename?: "GlobalResultType";
    message: Scalars["String"]["output"];
    status: Scalars["Boolean"]["output"];
};
export type ImagenActaUpdateInput = {
    hash?: InputMaybe<Scalars["String"]["input"]>;
    imagen: Scalars["String"]["input"];
    nombre: Scalars["String"]["input"];
    pagina?: InputMaybe<Scalars["String"]["input"]>;
    pathipfs?: InputMaybe<Scalars["String"]["input"]>;
};
export type ImagenSegmentoDigitalizacionAleatorio = {
    __typename?: "ImagenSegmentoDigitalizacionAleatorio";
    candidato_id: Scalars["Float"]["output"];
    dignidad_id: Scalars["Float"]["output"];
    imagen?: Maybe<Scalars["String"]["output"]>;
    junta_id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
};
export type ImagenSegmentoUpdateInput = {
    candidato_id: Scalars["Int"]["input"];
    hash?: InputMaybe<Scalars["String"]["input"]>;
    imagen: Scalars["String"]["input"];
    nombre: Scalars["String"]["input"];
    pathipfs?: InputMaybe<Scalars["String"]["input"]>;
};
export type JuntaDigitalizacion = {
    __typename?: "JuntaDigitalizacion";
    canton?: Maybe<CantonDigitalizacion>;
    electores: Scalars["Float"]["output"];
    id: Scalars["Float"]["output"];
    junta: Scalars["Float"]["output"];
    parroquia?: Maybe<ParroquiaDigitalizacion>;
    provincia?: Maybe<ProvinciaDigitalizacion>;
    sexo: Scalars["String"]["output"];
    zona_id?: Maybe<Scalars["Float"]["output"]>;
};
export type JuntaDigitalizacionCollectionType = {
    __typename?: "JuntaDigitalizacionCollectionType";
    data?: Maybe<Array<JuntaDigitalizacion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type JuntaDigitalizacionFilterInput = {
    canton_id?: InputMaybe<NumberWhereInput>;
    parroquia_id?: InputMaybe<NumberWhereInput>;
    provincia_id?: InputMaybe<NumberWhereInput>;
    sexo?: InputMaybe<StringWhereInput>;
    zona_id?: InputMaybe<NumberWhereInput>;
};
export type Login = {
    __typename?: "Login";
    establecimiento?: Maybe<EstablecimientoAuth>;
    provincia: Scalars["String"]["output"];
    provincia_id: Scalars["Float"]["output"];
    token: Scalars["String"]["output"];
    username: Scalars["String"]["output"];
};
export type MenuAdministracion = {
    __typename?: "MenuAdministracion";
    estado: Scalars["Boolean"]["output"];
    icono: Scalars["String"]["output"];
    id: Scalars["Float"]["output"];
    modulo?: Maybe<ModuloAdministracion>;
    modulo_id: Scalars["Float"]["output"];
    orden?: Maybe<Scalars["Float"]["output"]>;
    titulo: Scalars["String"]["output"];
    url: Scalars["String"]["output"];
};
export type MenuAuth = {
    __typename?: "MenuAuth";
    id: Scalars["Float"]["output"];
    modulo?: Maybe<ModuloAuth>;
    titulo: Scalars["String"]["output"];
};
export type MenuCollectionType = {
    __typename?: "MenuCollectionType";
    data?: Maybe<Array<MenuAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type MenuCreateInput = {
    icono: Scalars["String"]["input"];
    modulo_id: Scalars["Float"]["input"];
    orden?: InputMaybe<Scalars["Float"]["input"]>;
    titulo: Scalars["String"]["input"];
    url: Scalars["String"]["input"];
};
export type MenuFilterInput = {
    estado?: InputMaybe<StateWhereInput>;
    modulo?: InputMaybe<ModuloFilterInput>;
    orden?: InputMaybe<NumberWhereInput>;
    titulo?: InputMaybe<StringWhereInput>;
};
export type MenuUpdateInput = {
    estado?: InputMaybe<Scalars["Boolean"]["input"]>;
    icono?: InputMaybe<Scalars["String"]["input"]>;
    id: Scalars["Int"]["input"];
    modulo_id?: InputMaybe<Scalars["Float"]["input"]>;
    orden?: InputMaybe<Scalars["Float"]["input"]>;
    titulo?: InputMaybe<Scalars["String"]["input"]>;
    url?: InputMaybe<Scalars["String"]["input"]>;
};
export type MenuforModuloAuth = {
    __typename?: "MenuforModuloAuth";
    icono: Scalars["String"]["output"];
    id: Scalars["Float"]["output"];
    permisos?: Maybe<Array<PermisosForModuloAuth>>;
    titulo: Scalars["String"]["output"];
    url: Scalars["String"]["output"];
};
export type ModuloAdministracion = {
    __typename?: "ModuloAdministracion";
    codigo: Scalars["String"]["output"];
    color: Scalars["String"]["output"];
    estado: Scalars["Boolean"]["output"];
    icono: Scalars["String"]["output"];
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
    url: Scalars["String"]["output"];
};
export type ModuloAuth = {
    __typename?: "ModuloAuth";
    codigo: Scalars["String"]["output"];
    color: Scalars["String"]["output"];
    icono: Scalars["String"]["output"];
    id: Scalars["Float"]["output"];
    menu?: Maybe<Array<MenuforModuloAuth>>;
    nombre: Scalars["String"]["output"];
    url: Scalars["String"]["output"];
};
export type ModuloCollectionType = {
    __typename?: "ModuloCollectionType";
    data?: Maybe<Array<ModuloAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ModuloCreateInput = {
    codigo: Scalars["String"]["input"];
    color: Scalars["String"]["input"];
    icono?: InputMaybe<Scalars["String"]["input"]>;
    nombre: Scalars["String"]["input"];
    url: Scalars["String"]["input"];
};
export type ModuloFilterInput = {
    codigo?: InputMaybe<StringWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    nombres?: InputMaybe<StringWhereInput>;
};
export type ModuloUpdateInput = {
    codigo?: InputMaybe<Scalars["String"]["input"]>;
    color?: InputMaybe<Scalars["String"]["input"]>;
    estado?: InputMaybe<Scalars["Boolean"]["input"]>;
    icono?: InputMaybe<Scalars["String"]["input"]>;
    id: Scalars["Int"]["input"];
    nombre?: InputMaybe<Scalars["String"]["input"]>;
    url?: InputMaybe<Scalars["String"]["input"]>;
};
export type Mutation = {
    __typename?: "Mutation";
    adminEstablecimientoCreate: GlobalResultType;
    adminEstablecimientoDelete: GlobalResultType;
    adminEstablecimientoUpdate: GlobalResultType;
    adminMenuCreate: GlobalResultType;
    adminMenuDelete: GlobalResultType;
    adminMenuUpdate: GlobalResultType;
    adminModuloCreate: GlobalResultType;
    adminModuloDelete: GlobalResultType;
    adminModuloUpdate: GlobalResultType;
    adminRolCreate: GlobalResultType;
    adminRolDelete: GlobalResultType;
    adminRolUpdate: GlobalResultType;
    adminUsuarioCreate: GlobalResultType;
    adminUsuarioDelete: GlobalResultType;
    adminUsuarioUpdate: GlobalResultType;
    authCambioPassword: GlobalResultType;
    digtActaLiberaUpdate: GlobalResultType;
    digtActaUpdate: GlobalResultType;
    digtVotosUpdate: GlobalResultType;
};
export type MutationAdminEstablecimientoCreateArgs = {
    dataInput: EstablecimientoCreateInput;
};
export type MutationAdminEstablecimientoDeleteArgs = {
    id: Scalars["Int"]["input"];
};
export type MutationAdminEstablecimientoUpdateArgs = {
    dataInput: EstablecimientoUpdateInput;
};
export type MutationAdminMenuCreateArgs = {
    dataInput: MenuCreateInput;
};
export type MutationAdminMenuDeleteArgs = {
    id: Scalars["Int"]["input"];
};
export type MutationAdminMenuUpdateArgs = {
    dataInput: MenuUpdateInput;
};
export type MutationAdminModuloCreateArgs = {
    dataInput: ModuloCreateInput;
};
export type MutationAdminModuloDeleteArgs = {
    id: Scalars["Int"]["input"];
};
export type MutationAdminModuloUpdateArgs = {
    dataInput: ModuloUpdateInput;
};
export type MutationAdminRolCreateArgs = {
    dataInput: RolCreateInput;
};
export type MutationAdminRolDeleteArgs = {
    id: Scalars["Int"]["input"];
};
export type MutationAdminRolUpdateArgs = {
    dataInput: RolUpdateInput;
};
export type MutationAdminUsuarioCreateArgs = {
    dataInput: UsuarioCreateInput;
};
export type MutationAdminUsuarioDeleteArgs = {
    id: Scalars["Int"]["input"];
};
export type MutationAdminUsuarioUpdateArgs = {
    dataInput: UsuarioUpdateInput;
};
export type MutationAuthCambioPasswordArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
    password: Scalars["String"]["input"];
};
export type MutationDigtActaLiberaUpdateArgs = {
    dignidad_id: Scalars["Int"]["input"];
    junta_id: Scalars["Int"]["input"];
};
export type MutationDigtActaUpdateArgs = {
    dataInput: ActaUpdateInput;
};
export type MutationDigtVotosUpdateArgs = {
    dataInput: VotosDigitacionUpdateInput;
};
/** Filtros para cuando los filtros son de tipo numero */
export type NumberWhereInput = {
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    is?: InputMaybe<Scalars["Int"]["input"]>;
    is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    lte?: InputMaybe<Scalars["Int"]["input"]>;
    not?: InputMaybe<Scalars["Int"]["input"]>;
    not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};
export type PageInfo = {
    __typename?: "PageInfo";
    count?: Maybe<Scalars["Int"]["output"]>;
    hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
    hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>;
    limit?: Maybe<Scalars["Int"]["output"]>;
    offset?: Maybe<Scalars["Int"]["output"]>;
};
/** Ingresar por lo menos un campo, limit o offset */
export type PaginationInput = {
    /** Paginate limit */
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    /** Paginate offset */
    offset?: InputMaybe<Scalars["Int"]["input"]>;
};
export type ParroquiaDigitalizacion = {
    __typename?: "ParroquiaDigitalizacion";
    canton?: Maybe<CantonDigitalizacion>;
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
};
export type ParroquiaDigitalizacionCollectionType = {
    __typename?: "ParroquiaDigitalizacionCollectionType";
    data?: Maybe<Array<ParroquiaDigitalizacion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ParroquiaDigitalizacionFilterInput = {
    canton_id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};
export type PartidoDigitalizacion = {
    __typename?: "PartidoDigitalizacion";
    id: Scalars["Float"]["output"];
    lista?: Maybe<Scalars["String"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    siglas?: Maybe<Scalars["String"]["output"]>;
};
export type Permisos = {
    __typename?: "Permisos";
    crear: Scalars["Boolean"]["output"];
    editar: Scalars["Boolean"]["output"];
    eliminar: Scalars["Boolean"]["output"];
    estado: Scalars["Boolean"]["output"];
    id: Scalars["Float"]["output"];
    imprimir: Scalars["Boolean"]["output"];
    leer: Scalars["Boolean"]["output"];
    menu: MenuAdministracion;
    menu_id: Scalars["Float"]["output"];
};
export type PermisosCrearInput = {
    crear: Scalars["Boolean"]["input"];
    editar: Scalars["Boolean"]["input"];
    eliminar: Scalars["Boolean"]["input"];
    imprimir: Scalars["Boolean"]["input"];
    leer: Scalars["Boolean"]["input"];
    menu_id: Scalars["Float"]["input"];
};
export type PermisosForModuloAuth = {
    __typename?: "PermisosForModuloAuth";
    crear: Scalars["Boolean"]["output"];
    editar: Scalars["Boolean"]["output"];
    eliminar: Scalars["Boolean"]["output"];
    id: Scalars["Float"]["output"];
    imprimir: Scalars["Boolean"]["output"];
    leer: Scalars["Boolean"]["output"];
};
export type PermisosUpdateInput = {
    crear: Scalars["Boolean"]["input"];
    editar: Scalars["Boolean"]["input"];
    eliminar: Scalars["Boolean"]["input"];
    id?: InputMaybe<Scalars["Float"]["input"]>;
    imprimir: Scalars["Boolean"]["input"];
    leer: Scalars["Boolean"]["input"];
    menu_id: Scalars["Float"]["input"];
};
export type ProvinciaAdministracion = {
    __typename?: "ProvinciaAdministracion";
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
};
export type ProvinciaCollectionType = {
    __typename?: "ProvinciaCollectionType";
    data?: Maybe<Array<ProvinciaAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ProvinciaDigitalizacion = {
    __typename?: "ProvinciaDigitalizacion";
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
};
export type ProvinciaDigitalizacionCollectionType = {
    __typename?: "ProvinciaDigitalizacionCollectionType";
    data?: Maybe<Array<ProvinciaDigitalizacion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ProvinciaDigitalizacionFilterInput = {
    nombre?: InputMaybe<StringWhereInput>;
};
export type ProvinciaFilterInput = {
    nombre?: InputMaybe<StringWhereInput>;
};
export type ProvinciaReportes = {
    __typename?: "ProvinciaReportes";
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
};
export type ProvinciaReportesCollectionType = {
    __typename?: "ProvinciaReportesCollectionType";
    data?: Maybe<Array<ProvinciaReportes>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ProvinciaReportesFilterInput = {
    nombre?: InputMaybe<StringWhereInput>;
};
export type ProvinciaVerificacion = {
    __typename?: "ProvinciaVerificacion";
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
};
export type ProvinciaVerificacionCollectionType = {
    __typename?: "ProvinciaVerificacionCollectionType";
    data?: Maybe<Array<ProvinciaVerificacion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ProvinciaVerificacionFilterInput = {
    nombre?: InputMaybe<StringWhereInput>;
};
export type Query = {
    __typename?: "Query";
    adminConfiguracionCollection?: Maybe<ConfiguracionCollectionType>;
    adminEstablecimiento: EstablecimientoAdminitracion;
    adminEstablecimientoCollection?: Maybe<EstablecimientoCollectionType>;
    adminMenu: MenuAdministracion;
    adminMenuCollection?: Maybe<MenuCollectionType>;
    adminModulo: ModuloAdministracion;
    adminModuloCollection?: Maybe<ModuloCollectionType>;
    adminProvincia: ProvinciaAdministracion;
    adminProvinciaCollection?: Maybe<ProvinciaCollectionType>;
    adminRol: Rol;
    adminRolCollection?: Maybe<RolCollectionType>;
    adminUsuario: UsuarioAdministracion;
    adminUsuarioCollection?: Maybe<UsuarioCollectionType>;
    authLogin: Login;
    authLogout: GlobalResultType;
    authModuloPermisosId: Array<ModuloAuth>;
    authPerfil: UsuarioAuth;
    digitActaCollection?: Maybe<ActaDigitalizacionBasicCollectionType>;
    digtActaByDignidadList: ActaDigitalizacionVotoImagen;
    digtActaByJuntaList: ActaDigitalizacionVoto;
    digtCantonCollection?: Maybe<CantonDigitalizacionCollectionType>;
    digtDignidadCollection?: Maybe<DignidadDigitalizacionCollectionType>;
    digtJuntaCollection?: Maybe<JuntaDigitalizacionCollectionType>;
    digtParroquiaCollection?: Maybe<ParroquiaDigitalizacionCollectionType>;
    digtProvincia: ProvinciaDigitalizacion;
    digtProvinciaCollection?: Maybe<ProvinciaDigitalizacionCollectionType>;
    digtZonaCollection?: Maybe<ZonaDigitalizacionCollectionType>;
    rptProvincia: ProvinciaReportes;
    rptProvinciaCollection?: Maybe<ProvinciaReportesCollectionType>;
    vrfProvinciaVerificacion: ProvinciaVerificacion;
    vrfProvinciaVerificacionCollection?: Maybe<ProvinciaVerificacionCollectionType>;
};
export type QueryAdminConfiguracionCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ConfiguracionFilterInput>;
};
export type QueryAdminEstablecimientoArgs = {
    id: Scalars["Int"]["input"];
};
export type QueryAdminEstablecimientoCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<EstablecimientoFilterInput>;
};
export type QueryAdminMenuArgs = {
    id: Scalars["Int"]["input"];
};
export type QueryAdminMenuCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<MenuFilterInput>;
};
export type QueryAdminModuloArgs = {
    id: Scalars["Int"]["input"];
};
export type QueryAdminModuloCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ModuloFilterInput>;
};
export type QueryAdminProvinciaArgs = {
    id: Scalars["Int"]["input"];
};
export type QueryAdminProvinciaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProvinciaFilterInput>;
};
export type QueryAdminRolArgs = {
    id: Scalars["Int"]["input"];
};
export type QueryAdminRolCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<RolFilterInput>;
};
export type QueryAdminUsuarioArgs = {
    id: Scalars["Int"]["input"];
};
export type QueryAdminUsuarioCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<UsuarioFilterInput>;
};
export type QueryAuthLoginArgs = {
    password: Scalars["String"]["input"];
    username: Scalars["String"]["input"];
};
export type QueryAuthModuloPermisosIdArgs = {
    rol_id: Scalars["Int"]["input"];
};
export type QueryDigitActaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ActaDigitalizacionFilterInput>;
};
export type QueryDigtActaByDignidadListArgs = {
    dignidad_id: Scalars["Int"]["input"];
};
export type QueryDigtActaByJuntaListArgs = {
    dignidad_id: Scalars["Int"]["input"];
    junta_id: Scalars["Int"]["input"];
};
export type QueryDigtCantonCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<CantonDigitalizacionFilterInput>;
};
export type QueryDigtDignidadCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<DignidadDigitalizacionFilterInput>;
};
export type QueryDigtJuntaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<JuntaDigitalizacionFilterInput>;
};
export type QueryDigtParroquiaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ParroquiaDigitalizacionFilterInput>;
};
export type QueryDigtProvinciaArgs = {
    id: Scalars["Int"]["input"];
};
export type QueryDigtProvinciaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProvinciaDigitalizacionFilterInput>;
};
export type QueryDigtZonaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ZonaDigitalizacionFilterInput>;
};
export type QueryRptProvinciaArgs = {
    id: Scalars["Int"]["input"];
};
export type QueryRptProvinciaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProvinciaReportesFilterInput>;
};
export type QueryVrfProvinciaVerificacionArgs = {
    id: Scalars["Int"]["input"];
};
export type QueryVrfProvinciaVerificacionCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProvinciaVerificacionFilterInput>;
};
/** Filtros para cuando se usan relaciones  */
export type RelationsWhereInput = {
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    is?: InputMaybe<Scalars["Int"]["input"]>;
    not?: InputMaybe<Scalars["Int"]["input"]>;
    not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};
export type Rol = {
    __typename?: "Rol";
    descripcion?: Maybe<Scalars["String"]["output"]>;
    estado?: Maybe<Scalars["Boolean"]["output"]>;
    id?: Maybe<Scalars["Float"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    permisos: Array<Permisos>;
};
export type RolAdministracion = {
    __typename?: "RolAdministracion";
    descripcion: Scalars["String"]["output"];
    estado: Scalars["Boolean"]["output"];
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
};
export type RolAuth = {
    __typename?: "RolAuth";
    descripcion: Scalars["String"]["output"];
    id: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
};
export type RolCollectionType = {
    __typename?: "RolCollectionType";
    data?: Maybe<Array<RolAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type RolCreateInput = {
    descripcion: Scalars["String"]["input"];
    nombre: Scalars["String"]["input"];
    permisos: Array<PermisosCrearInput>;
};
export type RolFilterInput = {
    estado?: InputMaybe<StateWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};
export type RolUpdateInput = {
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    estado?: InputMaybe<Scalars["Boolean"]["input"]>;
    id: Scalars["Int"]["input"];
    nombre?: InputMaybe<Scalars["String"]["input"]>;
    permisos?: InputMaybe<Array<PermisosUpdateInput>>;
};
export type RolUsuarioAdministracion = {
    __typename?: "RolUsuarioAdministracion";
    id: Scalars["Float"]["output"];
    rol?: Maybe<RolAdministracion>;
};
export type RolUsuarioAuth = {
    __typename?: "RolUsuarioAuth";
    id: Scalars["Float"]["output"];
    rol?: Maybe<RolAuth>;
};
/** Filtros para tipo estado */
export type StateWhereInput = {
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    not?: InputMaybe<Scalars["Boolean"]["input"]>;
};
/** Si existen relaciones, especificar el nombre de la entidad y el campo separado por un punto. Ejemplo:{order:{asc:"paciente.id"}} */
export type StringOrderInput = {
    asc?: InputMaybe<Scalars["String"]["input"]>;
    desc?: InputMaybe<Scalars["String"]["input"]>;
};
/** Filtros para cuando los datos son de tipo string */
export type StringWhereInput = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    ends_with?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    is?: InputMaybe<Scalars["String"]["input"]>;
    not?: InputMaybe<Scalars["String"]["input"]>;
    not_contains?: InputMaybe<Scalars["String"]["input"]>;
    not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    starts_with?: InputMaybe<Scalars["String"]["input"]>;
};
export type UsuarioAdministracion = {
    __typename?: "UsuarioAdministracion";
    apellidos: Scalars["String"]["output"];
    email: Scalars["String"]["output"];
    establecimiento: EstablecimientoAdminitracion;
    establecimiento_id: Scalars["Float"]["output"];
    estado: Scalars["Boolean"]["output"];
    id: Scalars["Float"]["output"];
    nombres: Scalars["String"]["output"];
    provincia: ProvinciaAdministracion;
    provincia_id: Scalars["Float"]["output"];
    rolusuario?: Maybe<Array<RolUsuarioAdministracion>>;
    username: Scalars["String"]["output"];
};
export type UsuarioAuth = {
    __typename?: "UsuarioAuth";
    apellidos: Scalars["String"]["output"];
    email: Scalars["String"]["output"];
    id: Scalars["Float"]["output"];
    nombres: Scalars["String"]["output"];
    rolusuario?: Maybe<Array<RolUsuarioAuth>>;
    username: Scalars["String"]["output"];
};
export type UsuarioBasicAdministracion = {
    __typename?: "UsuarioBasicAdministracion";
    apellidos: Scalars["String"]["output"];
    email: Scalars["String"]["output"];
    establecimiento: EstablecimientoAdminitracion;
    establecimiento_id: Scalars["Float"]["output"];
    estado: Scalars["Boolean"]["output"];
    id: Scalars["Float"]["output"];
    nombres: Scalars["String"]["output"];
    provincia: ProvinciaAdministracion;
    provincia_id: Scalars["Float"]["output"];
    username: Scalars["String"]["output"];
};
export type UsuarioCollectionType = {
    __typename?: "UsuarioCollectionType";
    data?: Maybe<Array<UsuarioBasicAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type UsuarioCreateInput = {
    apellidos: Scalars["String"]["input"];
    email: Scalars["String"]["input"];
    establecimiento_id: Scalars["Float"]["input"];
    nombres: Scalars["String"]["input"];
    password: Scalars["String"]["input"];
    provincia_id: Scalars["Float"]["input"];
    roles: Array<Scalars["Int"]["input"]>;
    username: Scalars["String"]["input"];
};
export type UsuarioFilterInput = {
    apellidos?: InputMaybe<StringWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    nombres?: InputMaybe<StringWhereInput>;
    provincia_id?: InputMaybe<NumberWhereInput>;
    username?: InputMaybe<StringWhereInput>;
};
export type UsuarioUpdateInput = {
    apellidos?: InputMaybe<Scalars["String"]["input"]>;
    email?: InputMaybe<Scalars["String"]["input"]>;
    establecimiento_id?: InputMaybe<Scalars["Float"]["input"]>;
    estado?: InputMaybe<Scalars["Boolean"]["input"]>;
    id: Scalars["Int"]["input"];
    nombres?: InputMaybe<Scalars["String"]["input"]>;
    password?: InputMaybe<Scalars["String"]["input"]>;
    provincia_id?: InputMaybe<Scalars["Float"]["input"]>;
    roles?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    username?: InputMaybe<Scalars["String"]["input"]>;
};
export type VotosDigitacionUpdateBasicInput = {
    candidato_id: Scalars["Int"]["input"];
    cifrado?: InputMaybe<Scalars["String"]["input"]>;
    votosdigitacion: Scalars["Int"]["input"];
};
export type VotosDigitacionUpdateInput = {
    acta_id: Scalars["Int"]["input"];
    votos: Array<VotosDigitacionUpdateBasicInput>;
};
export type VotosDigitalizacion = {
    __typename?: "VotosDigitalizacion";
    candidato?: Maybe<CandidatoDigitalizacion>;
    votos: Scalars["Float"]["output"];
    votoscontrol: Scalars["Float"]["output"];
    votosdigitacion: Scalars["Float"]["output"];
    votosicr: Scalars["Float"]["output"];
};
export type VotosDigitalizacionAleatorio = {
    __typename?: "VotosDigitalizacionAleatorio";
    candidato?: Maybe<CandidatoDigitalizacion>;
    imagensegmento?: Maybe<ImagenSegmentoDigitalizacionAleatorio>;
    votosdigitacion: Scalars["Float"]["output"];
};
export type VotosUpdateInput = {
    candidato_id: Scalars["Int"]["input"];
    votosicr: Scalars["Int"]["input"];
};
export type ZonaDigitalizacion = {
    __typename?: "ZonaDigitalizacion";
    nombre: Scalars["String"]["output"];
    parroquia?: Maybe<ParroquiaDigitalizacion>;
    parroquia_id: Scalars["Float"]["output"];
    zona_id: Scalars["Float"]["output"];
};
export type ZonaDigitalizacionCollectionType = {
    __typename?: "ZonaDigitalizacionCollectionType";
    data?: Maybe<Array<ZonaDigitalizacion>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ZonaDigitalizacionFilterInput = {
    nombre?: InputMaybe<StringWhereInput>;
    parroquia_id?: InputMaybe<NumberWhereInput>;
    zona_id?: InputMaybe<NumberWhereInput>;
};
export type AuthLoginFieldsFragment = {
    __typename?: "Login";
    token: string;
    username: string;
    provincia: string;
};
export type AuthPerfilFieldsFragment = {
    __typename?: "UsuarioAuth";
    apellidos: string;
    email: string;
    id: number;
    nombres: string;
    username: string;
    rolusuario?: Array<{
        __typename?: "RolUsuarioAuth";
        id: number;
        rol?: {
            __typename?: "RolAuth";
            descripcion: string;
            id: number;
            nombre: string;
        } | null;
    }> | null;
};
export type AuthModuloPermisoIdFieldsFragment = {
    __typename?: "ModuloAuth";
    codigo: string;
    icono: string;
    nombre: string;
    url: string;
    color: string;
    menu?: Array<{
        __typename?: "MenuforModuloAuth";
        titulo: string;
        icono: string;
        url: string;
        permisos?: Array<{
            __typename?: "PermisosForModuloAuth";
            crear: boolean;
            editar: boolean;
            eliminar: boolean;
            imprimir: boolean;
            leer: boolean;
        }> | null;
    }> | null;
};
export type AuthCambioPasswordFragment = {
    __typename?: "GlobalResultType";
    message: string;
    status: boolean;
};
export type AuthLogoutFragment = {
    __typename?: "GlobalResultType";
    message: string;
    status: boolean;
};
export type ProvinciaSelectFieldsFragment = {
    __typename?: "ProvinciaCollectionType";
    data?: Array<{
        __typename?: "ProvinciaAdministracion";
        id: number;
        nombre: string;
    }> | null;
};
export type EstablecimientoSelectFieldsFragment = {
    __typename?: "EstablecimientoCollectionType";
    data?: Array<{
        __typename?: "EstablecimientoAdminitracion";
        id: number;
        nombre: string;
    }> | null;
};
export type AdminConfiguracionFieldsFragment = {
    __typename?: "ConfiguracionCollectionType";
    data?: Array<{
        __typename?: "ConfiguracionAdminitracion";
        codigoproceso: string;
        estado: boolean;
        fechaproceso: any;
        id: number;
        nombreproceso: string;
    }> | null;
};
export type AuthloginQueryVariables = Exact<{
    password: Scalars["String"]["input"];
    username: Scalars["String"]["input"];
}>;
export type AuthloginQuery = {
    __typename?: "Query";
    authLogin: {
        __typename?: "Login";
        token: string;
        username: string;
        provincia: string;
    };
};
export type AuthPerfilQueryVariables = Exact<{
    [key: string]: never;
}>;
export type AuthPerfilQuery = {
    __typename?: "Query";
    authPerfil: {
        __typename?: "UsuarioAuth";
        apellidos: string;
        email: string;
        id: number;
        nombres: string;
        username: string;
        rolusuario?: Array<{
            __typename?: "RolUsuarioAuth";
            id: number;
            rol?: {
                __typename?: "RolAuth";
                descripcion: string;
                id: number;
                nombre: string;
            } | null;
        }> | null;
    };
};
export type AuthModuloPermisosIdQueryVariables = Exact<{
    rol_id: Scalars["Int"]["input"];
}>;
export type AuthModuloPermisosIdQuery = {
    __typename?: "Query";
    authModuloPermisosId: Array<{
        __typename?: "ModuloAuth";
        codigo: string;
        icono: string;
        nombre: string;
        url: string;
        color: string;
        menu?: Array<{
            __typename?: "MenuforModuloAuth";
            titulo: string;
            icono: string;
            url: string;
            permisos?: Array<{
                __typename?: "PermisosForModuloAuth";
                crear: boolean;
                editar: boolean;
                eliminar: boolean;
                imprimir: boolean;
                leer: boolean;
            }> | null;
        }> | null;
    }>;
};
export type AuthCambioPasswordMutationVariables = Exact<{
    password: Scalars["String"]["input"];
}>;
export type AuthCambioPasswordMutation = {
    __typename?: "Mutation";
    authCambioPassword: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type AuthlogoutQueryVariables = Exact<{
    [key: string]: never;
}>;
export type AuthlogoutQuery = {
    __typename?: "Query";
    authLogout: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type ProvinciaSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<ProvinciaFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type ProvinciaSelectQuery = {
    __typename?: "Query";
    adminProvinciaCollection?: {
        __typename?: "ProvinciaCollectionType";
        data?: Array<{
            __typename?: "ProvinciaAdministracion";
            id: number;
            nombre: string;
        }> | null;
    } | null;
};
export type EstablecimientoSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<EstablecimientoFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type EstablecimientoSelectQuery = {
    __typename?: "Query";
    adminEstablecimientoCollection?: {
        __typename?: "EstablecimientoCollectionType";
        data?: Array<{
            __typename?: "EstablecimientoAdminitracion";
            id: number;
            nombre: string;
        }> | null;
    } | null;
};
export type AdminConfiguracionCollectionQueryVariables = Exact<{
    inputWhere?: InputMaybe<ConfiguracionFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type AdminConfiguracionCollectionQuery = {
    __typename?: "Query";
    adminConfiguracionCollection?: {
        __typename?: "ConfiguracionCollectionType";
        data?: Array<{
            __typename?: "ConfiguracionAdminitracion";
            codigoproceso: string;
            estado: boolean;
            fechaproceso: any;
            id: number;
            nombreproceso: string;
        }> | null;
    } | null;
};
export type ProvinciaDigtSelectFieldsFragment = {
    __typename?: "ProvinciaDigitalizacionCollectionType";
    data?: Array<{
        __typename?: "ProvinciaDigitalizacion";
        id: number;
        nombre: string;
    }> | null;
};
export type CantonDigtSelectFieldsFragment = {
    __typename?: "CantonDigitalizacionCollectionType";
    data?: Array<{
        __typename?: "CantonDigitalizacion";
        id: number;
        nombre: string;
    }> | null;
};
export type ParroquiaDigtSelectFieldsFragment = {
    __typename?: "ParroquiaDigitalizacionCollectionType";
    data?: Array<{
        __typename?: "ParroquiaDigitalizacion";
        id: number;
        nombre: string;
    }> | null;
};
export type ZonaDigtSelectFieldsFragment = {
    __typename?: "ZonaDigitalizacionCollectionType";
    data?: Array<{
        __typename?: "ZonaDigitalizacion";
        nombre: string;
        zona_id: number;
    }> | null;
};
export type JuntaDigtSelectFieldsFragment = {
    __typename?: "JuntaDigitalizacionCollectionType";
    data?: Array<{
        __typename?: "JuntaDigitalizacion";
        electores: number;
        id: number;
        junta: number;
        sexo: string;
        zona_id?: number | null;
    }> | null;
};
export type DignidadDigtSelectFieldsFragment = {
    __typename?: "DignidadDigitalizacionCollectionType";
    data?: Array<{
        __typename?: "DignidadDigitalizacion";
        id: number;
        nombre?: string | null;
    }> | null;
};
export type ActaDigtListFieldsFragment = {
    __typename?: "ActaDigitalizacionVoto";
    blancosdigitacion?: number | null;
    dignidad_id?: number | null;
    estado?: number | null;
    id: number;
    junta_id?: number | null;
    nulosdigitacion?: number | null;
    peticion?: number | null;
    seguridad?: number | null;
    sufragantesdigitacion?: number | null;
    dignidad?: {
        __typename?: "DignidadDigitalizacion";
        ambito?: string | null;
        estado?: number | null;
        id: number;
        nombre?: string | null;
        orden?: number | null;
    } | null;
    junta?: {
        __typename?: "JuntaDigitalizacion";
        electores: number;
        id: number;
        junta: number;
        sexo: string;
        zona_id?: number | null;
        canton?: {
            __typename?: "CantonDigitalizacion";
            id: number;
            nombre: string;
        } | null;
        parroquia?: {
            __typename?: "ParroquiaDigitalizacion";
            id: number;
            nombre: string;
        } | null;
        provincia?: {
            __typename?: "ProvinciaDigitalizacion";
            id: number;
            nombre: string;
        } | null;
    } | null;
    votos: Array<{
        __typename?: "VotosDigitalizacion";
        votos: number;
        votoscontrol: number;
        votosdigitacion: number;
        votosicr: number;
        candidato?: {
            __typename?: "CandidatoDigitalizacion";
            cedula?: string | null;
            id: number;
            nombre: string;
            orden?: number | null;
            dignidad?: {
                __typename?: "DignidadDigitalizacion";
                ambito?: string | null;
                estado?: number | null;
                id: number;
                nombre?: string | null;
                orden?: number | null;
            } | null;
            partido?: {
                __typename?: "PartidoDigitalizacion";
                id: number;
                nombre?: string | null;
                lista?: string | null;
                siglas?: string | null;
            } | null;
        } | null;
    }>;
};
export type ActaByDigititalizacionListFieldsFragment = {
    __typename?: "ActaDigitalizacionVotoImagen";
    id: number;
    votos: Array<{
        __typename?: "VotosDigitalizacionAleatorio";
        votosdigitacion: number;
        imagensegmento?: {
            __typename?: "ImagenSegmentoDigitalizacionAleatorio";
            imagen?: string | null;
            candidato_id: number;
        } | null;
    }>;
};
export type ActaDigitaCrudFieldsFragment = {
    __typename?: "GlobalResultType";
    message: string;
    status: boolean;
};
export type DigtVotosUpdateMutationVariables = Exact<{
    inputUpdate: VotosDigitacionUpdateInput;
}>;
export type DigtVotosUpdateMutation = {
    __typename?: "Mutation";
    digtVotosUpdate: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type ProvinciaDigtSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<ProvinciaDigitalizacionFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type ProvinciaDigtSelectQuery = {
    __typename?: "Query";
    digtProvinciaCollection?: {
        __typename?: "ProvinciaDigitalizacionCollectionType";
        data?: Array<{
            __typename?: "ProvinciaDigitalizacion";
            id: number;
            nombre: string;
        }> | null;
    } | null;
};
export type CantonDigtSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<CantonDigitalizacionFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type CantonDigtSelectQuery = {
    __typename?: "Query";
    digtCantonCollection?: {
        __typename?: "CantonDigitalizacionCollectionType";
        data?: Array<{
            __typename?: "CantonDigitalizacion";
            id: number;
            nombre: string;
        }> | null;
    } | null;
};
export type ParroquiaDigtSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<ParroquiaDigitalizacionFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type ParroquiaDigtSelectQuery = {
    __typename?: "Query";
    digtParroquiaCollection?: {
        __typename?: "ParroquiaDigitalizacionCollectionType";
        data?: Array<{
            __typename?: "ParroquiaDigitalizacion";
            id: number;
            nombre: string;
        }> | null;
    } | null;
};
export type ZonaDigtSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<ZonaDigitalizacionFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type ZonaDigtSelectQuery = {
    __typename?: "Query";
    digtZonaCollection?: {
        __typename?: "ZonaDigitalizacionCollectionType";
        data?: Array<{
            __typename?: "ZonaDigitalizacion";
            nombre: string;
            zona_id: number;
        }> | null;
    } | null;
};
export type JuntaDigtSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<JuntaDigitalizacionFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type JuntaDigtSelectQuery = {
    __typename?: "Query";
    digtJuntaCollection?: {
        __typename?: "JuntaDigitalizacionCollectionType";
        data?: Array<{
            __typename?: "JuntaDigitalizacion";
            electores: number;
            id: number;
            junta: number;
            sexo: string;
            zona_id?: number | null;
        }> | null;
    } | null;
};
export type DignidadDigtSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<DignidadDigitalizacionFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type DignidadDigtSelectQuery = {
    __typename?: "Query";
    digtDignidadCollection?: {
        __typename?: "DignidadDigitalizacionCollectionType";
        data?: Array<{
            __typename?: "DignidadDigitalizacion";
            id: number;
            nombre?: string | null;
        }> | null;
    } | null;
};
export type DigtActaByJuntaListQueryVariables = Exact<{
    dignidad_id: Scalars["Int"]["input"];
    junta_id: Scalars["Int"]["input"];
}>;
export type DigtActaByJuntaListQuery = {
    __typename?: "Query";
    digtActaByJuntaList: {
        __typename?: "ActaDigitalizacionVoto";
        blancosdigitacion?: number | null;
        dignidad_id?: number | null;
        estado?: number | null;
        id: number;
        junta_id?: number | null;
        nulosdigitacion?: number | null;
        peticion?: number | null;
        seguridad?: number | null;
        sufragantesdigitacion?: number | null;
        dignidad?: {
            __typename?: "DignidadDigitalizacion";
            ambito?: string | null;
            estado?: number | null;
            id: number;
            nombre?: string | null;
            orden?: number | null;
        } | null;
        junta?: {
            __typename?: "JuntaDigitalizacion";
            electores: number;
            id: number;
            junta: number;
            sexo: string;
            zona_id?: number | null;
            canton?: {
                __typename?: "CantonDigitalizacion";
                id: number;
                nombre: string;
            } | null;
            parroquia?: {
                __typename?: "ParroquiaDigitalizacion";
                id: number;
                nombre: string;
            } | null;
            provincia?: {
                __typename?: "ProvinciaDigitalizacion";
                id: number;
                nombre: string;
            } | null;
        } | null;
        votos: Array<{
            __typename?: "VotosDigitalizacion";
            votos: number;
            votoscontrol: number;
            votosdigitacion: number;
            votosicr: number;
            candidato?: {
                __typename?: "CandidatoDigitalizacion";
                cedula?: string | null;
                id: number;
                nombre: string;
                orden?: number | null;
                dignidad?: {
                    __typename?: "DignidadDigitalizacion";
                    ambito?: string | null;
                    estado?: number | null;
                    id: number;
                    nombre?: string | null;
                    orden?: number | null;
                } | null;
                partido?: {
                    __typename?: "PartidoDigitalizacion";
                    id: number;
                    nombre?: string | null;
                    lista?: string | null;
                    siglas?: string | null;
                } | null;
            } | null;
        }>;
    };
};
export type DigtActaByDignidadListQueryVariables = Exact<{
    dignidad_id: Scalars["Int"]["input"];
}>;
export type DigtActaByDignidadListQuery = {
    __typename?: "Query";
    digtActaByDignidadList: {
        __typename?: "ActaDigitalizacionVotoImagen";
        id: number;
        votos: Array<{
            __typename?: "VotosDigitalizacionAleatorio";
            votosdigitacion: number;
            imagensegmento?: {
                __typename?: "ImagenSegmentoDigitalizacionAleatorio";
                imagen?: string | null;
                candidato_id: number;
            } | null;
        }>;
    };
};
export type MenuCollectionFieldsFragment = {
    __typename?: "MenuCollectionType";
    data?: Array<{
        __typename?: "MenuAdministracion";
        estado: boolean;
        icono: string;
        id: number;
        modulo_id: number;
        orden?: number | null;
        titulo: string;
        url: string;
        modulo?: {
            __typename?: "ModuloAdministracion";
            nombre: string;
        } | null;
    }> | null;
    pageInfo?: {
        __typename?: "PageInfo";
        count?: number | null;
        hasNextPage?: boolean | null;
        hasPreviousPage?: boolean | null;
        limit?: number | null;
        offset?: number | null;
    } | null;
};
export type MenuIdFieldsFragment = {
    __typename?: "MenuAdministracion";
    estado: boolean;
    icono: string;
    id: number;
    orden?: number | null;
    titulo: string;
    url: string;
    modulo?: {
        __typename?: "ModuloAdministracion";
        id: number;
        nombre: string;
    } | null;
};
export type MenuCrudFieldsFragment = {
    __typename?: "GlobalResultType";
    message: string;
    status: boolean;
};
export type MenuSelectFieldsFragment = {
    __typename?: "MenuCollectionType";
    data?: Array<{
        __typename?: "MenuAdministracion";
        id: number;
        titulo: string;
    }> | null;
};
export type MenuUpdateMutationVariables = Exact<{
    inputUpdate: MenuUpdateInput;
}>;
export type MenuUpdateMutation = {
    __typename?: "Mutation";
    adminMenuUpdate: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type MenuCreateMutationVariables = Exact<{
    inputCreate: MenuCreateInput;
}>;
export type MenuCreateMutation = {
    __typename?: "Mutation";
    adminMenuCreate: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type MenuDeleteMutationVariables = Exact<{
    id: Scalars["Int"]["input"];
}>;
export type MenuDeleteMutation = {
    __typename?: "Mutation";
    adminMenuDelete: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type MenuCollectionQueryVariables = Exact<{
    inputWhere?: InputMaybe<MenuFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
    inputPagination?: InputMaybe<PaginationInput>;
}>;
export type MenuCollectionQuery = {
    __typename?: "Query";
    adminMenuCollection?: {
        __typename?: "MenuCollectionType";
        data?: Array<{
            __typename?: "MenuAdministracion";
            estado: boolean;
            icono: string;
            id: number;
            modulo_id: number;
            orden?: number | null;
            titulo: string;
            url: string;
            modulo?: {
                __typename?: "ModuloAdministracion";
                nombre: string;
            } | null;
        }> | null;
        pageInfo?: {
            __typename?: "PageInfo";
            count?: number | null;
            hasNextPage?: boolean | null;
            hasPreviousPage?: boolean | null;
            limit?: number | null;
            offset?: number | null;
        } | null;
    } | null;
};
export type MenuQueryVariables = Exact<{
    id: Scalars["Int"]["input"];
}>;
export type MenuQuery = {
    __typename?: "Query";
    adminMenu: {
        __typename?: "MenuAdministracion";
        estado: boolean;
        icono: string;
        id: number;
        orden?: number | null;
        titulo: string;
        url: string;
        modulo?: {
            __typename?: "ModuloAdministracion";
            id: number;
            nombre: string;
        } | null;
    };
};
export type MenuSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<MenuFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type MenuSelectQuery = {
    __typename?: "Query";
    adminMenuCollection?: {
        __typename?: "MenuCollectionType";
        data?: Array<{
            __typename?: "MenuAdministracion";
            id: number;
            titulo: string;
        }> | null;
    } | null;
};
export type ModuloCollectionFieldsFragment = {
    __typename?: "ModuloCollectionType";
    data?: Array<{
        __typename?: "ModuloAdministracion";
        codigo: string;
        color: string;
        estado: boolean;
        icono: string;
        id: number;
        nombre: string;
        url: string;
    }> | null;
    pageInfo?: {
        __typename?: "PageInfo";
        count?: number | null;
        hasNextPage?: boolean | null;
        hasPreviousPage?: boolean | null;
        limit?: number | null;
        offset?: number | null;
    } | null;
};
export type ModuloIdFieldsFragment = {
    __typename?: "ModuloAdministracion";
    codigo: string;
    color: string;
    estado: boolean;
    icono: string;
    id: number;
    nombre: string;
    url: string;
};
export type ModuloCrudFieldsFragment = {
    __typename?: "GlobalResultType";
    message: string;
    status: boolean;
};
export type ModuloSelectFieldsFragment = {
    __typename?: "ModuloCollectionType";
    data?: Array<{
        __typename?: "ModuloAdministracion";
        id: number;
        nombre: string;
    }> | null;
};
export type ModuloUpdateMutationVariables = Exact<{
    inputUpdate: ModuloUpdateInput;
}>;
export type ModuloUpdateMutation = {
    __typename?: "Mutation";
    adminModuloUpdate: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type ModuloCreateMutationVariables = Exact<{
    inputCreate: ModuloCreateInput;
}>;
export type ModuloCreateMutation = {
    __typename?: "Mutation";
    adminModuloCreate: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type ModuloDeleteMutationVariables = Exact<{
    id: Scalars["Int"]["input"];
}>;
export type ModuloDeleteMutation = {
    __typename?: "Mutation";
    adminModuloDelete: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type ModuloCollectionQueryVariables = Exact<{
    inputWhere?: InputMaybe<ModuloFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
    inputPagination?: InputMaybe<PaginationInput>;
}>;
export type ModuloCollectionQuery = {
    __typename?: "Query";
    adminModuloCollection?: {
        __typename?: "ModuloCollectionType";
        data?: Array<{
            __typename?: "ModuloAdministracion";
            codigo: string;
            color: string;
            estado: boolean;
            icono: string;
            id: number;
            nombre: string;
            url: string;
        }> | null;
        pageInfo?: {
            __typename?: "PageInfo";
            count?: number | null;
            hasNextPage?: boolean | null;
            hasPreviousPage?: boolean | null;
            limit?: number | null;
            offset?: number | null;
        } | null;
    } | null;
};
export type ModuloQueryVariables = Exact<{
    id: Scalars["Int"]["input"];
}>;
export type ModuloQuery = {
    __typename?: "Query";
    adminModulo: {
        __typename?: "ModuloAdministracion";
        codigo: string;
        color: string;
        estado: boolean;
        icono: string;
        id: number;
        nombre: string;
        url: string;
    };
};
export type ModuloSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<ModuloFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type ModuloSelectQuery = {
    __typename?: "Query";
    adminModuloCollection?: {
        __typename?: "ModuloCollectionType";
        data?: Array<{
            __typename?: "ModuloAdministracion";
            id: number;
            nombre: string;
        }> | null;
    } | null;
};
export type RolCollectionFieldsFragment = {
    __typename?: "RolCollectionType";
    data?: Array<{
        __typename?: "RolAdministracion";
        descripcion: string;
        estado: boolean;
        id: number;
        nombre: string;
    }> | null;
    pageInfo?: {
        __typename?: "PageInfo";
        count?: number | null;
        hasNextPage?: boolean | null;
        hasPreviousPage?: boolean | null;
        limit?: number | null;
        offset?: number | null;
    } | null;
};
export type RolIdFieldsFragment = {
    __typename?: "Rol";
    descripcion?: string | null;
    estado?: boolean | null;
    id?: number | null;
    nombre?: string | null;
    permisos: Array<{
        __typename?: "Permisos";
        crear: boolean;
        editar: boolean;
        eliminar: boolean;
        estado: boolean;
        id: number;
        imprimir: boolean;
        leer: boolean;
        menu: {
            __typename?: "MenuAdministracion";
            id: number;
            titulo: string;
        };
    }>;
};
export type RolCrudFieldsFragment = {
    __typename?: "GlobalResultType";
    message: string;
    status: boolean;
};
export type RolSelectFieldsFragment = {
    __typename?: "RolCollectionType";
    data?: Array<{
        __typename?: "RolAdministracion";
        id: number;
        nombre: string;
    }> | null;
};
export type RolUpdateMutationVariables = Exact<{
    inputUpdate: RolUpdateInput;
}>;
export type RolUpdateMutation = {
    __typename?: "Mutation";
    adminRolUpdate: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type RolCreateMutationVariables = Exact<{
    inputCreate: RolCreateInput;
}>;
export type RolCreateMutation = {
    __typename?: "Mutation";
    adminRolCreate: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type RolDeleteMutationVariables = Exact<{
    id: Scalars["Int"]["input"];
}>;
export type RolDeleteMutation = {
    __typename?: "Mutation";
    adminRolDelete: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type RolCollectionQueryVariables = Exact<{
    inputWhere?: InputMaybe<RolFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
    inputPagination?: InputMaybe<PaginationInput>;
}>;
export type RolCollectionQuery = {
    __typename?: "Query";
    adminRolCollection?: {
        __typename?: "RolCollectionType";
        data?: Array<{
            __typename?: "RolAdministracion";
            descripcion: string;
            estado: boolean;
            id: number;
            nombre: string;
        }> | null;
        pageInfo?: {
            __typename?: "PageInfo";
            count?: number | null;
            hasNextPage?: boolean | null;
            hasPreviousPage?: boolean | null;
            limit?: number | null;
            offset?: number | null;
        } | null;
    } | null;
};
export type RolQueryVariables = Exact<{
    id: Scalars["Int"]["input"];
}>;
export type RolQuery = {
    __typename?: "Query";
    adminRol: {
        __typename?: "Rol";
        descripcion?: string | null;
        estado?: boolean | null;
        id?: number | null;
        nombre?: string | null;
        permisos: Array<{
            __typename?: "Permisos";
            crear: boolean;
            editar: boolean;
            eliminar: boolean;
            estado: boolean;
            id: number;
            imprimir: boolean;
            leer: boolean;
            menu: {
                __typename?: "MenuAdministracion";
                id: number;
                titulo: string;
            };
        }>;
    };
};
export type RolSelectQueryVariables = Exact<{
    inputWhere?: InputMaybe<RolFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
}>;
export type RolSelectQuery = {
    __typename?: "Query";
    adminRolCollection?: {
        __typename?: "RolCollectionType";
        data?: Array<{
            __typename?: "RolAdministracion";
            id: number;
            nombre: string;
        }> | null;
    } | null;
};
export type UsuarioCollectionFieldsFragment = {
    __typename?: "UsuarioCollectionType";
    data?: Array<{
        __typename?: "UsuarioBasicAdministracion";
        apellidos: string;
        estado: boolean;
        id: number;
        nombres: string;
        provincia_id: number;
        username: string;
        email: string;
        provincia: {
            __typename?: "ProvinciaAdministracion";
            id: number;
            nombre: string;
        };
    }> | null;
    pageInfo?: {
        __typename?: "PageInfo";
        count?: number | null;
        hasNextPage?: boolean | null;
        hasPreviousPage?: boolean | null;
        limit?: number | null;
        offset?: number | null;
    } | null;
};
export type UsuarioIdFieldsFragment = {
    __typename?: "UsuarioAdministracion";
    apellidos: string;
    establecimiento_id: number;
    estado: boolean;
    id: number;
    nombres: string;
    provincia_id: number;
    username: string;
    email: string;
    rolusuario?: Array<{
        __typename?: "RolUsuarioAdministracion";
        id: number;
        rol?: {
            __typename?: "RolAdministracion";
            id: number;
            nombre: string;
        } | null;
    }> | null;
    provincia: {
        __typename?: "ProvinciaAdministracion";
        id: number;
        nombre: string;
    };
    establecimiento: {
        __typename?: "EstablecimientoAdminitracion";
        id: number;
        logo?: any | null;
        nombre: string;
    };
};
export type UsuarioCrudFieldsFragment = {
    __typename?: "GlobalResultType";
    message: string;
    status: boolean;
};
export type UsuarioUpdateMutationVariables = Exact<{
    inputUpdate: UsuarioUpdateInput;
}>;
export type UsuarioUpdateMutation = {
    __typename?: "Mutation";
    adminUsuarioUpdate: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type UsuarioCreateMutationVariables = Exact<{
    inputCreate: UsuarioCreateInput;
}>;
export type UsuarioCreateMutation = {
    __typename?: "Mutation";
    adminUsuarioCreate: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type UsuarioDeleteMutationVariables = Exact<{
    id: Scalars["Int"]["input"];
}>;
export type UsuarioDeleteMutation = {
    __typename?: "Mutation";
    adminUsuarioDelete: {
        __typename?: "GlobalResultType";
        message: string;
        status: boolean;
    };
};
export type UsuarioCollectionQueryVariables = Exact<{
    inputWhere?: InputMaybe<UsuarioFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
    inputPagination?: InputMaybe<PaginationInput>;
}>;
export type UsuarioCollectionQuery = {
    __typename?: "Query";
    adminUsuarioCollection?: {
        __typename?: "UsuarioCollectionType";
        data?: Array<{
            __typename?: "UsuarioBasicAdministracion";
            apellidos: string;
            estado: boolean;
            id: number;
            nombres: string;
            provincia_id: number;
            username: string;
            email: string;
            provincia: {
                __typename?: "ProvinciaAdministracion";
                id: number;
                nombre: string;
            };
        }> | null;
        pageInfo?: {
            __typename?: "PageInfo";
            count?: number | null;
            hasNextPage?: boolean | null;
            hasPreviousPage?: boolean | null;
            limit?: number | null;
            offset?: number | null;
        } | null;
    } | null;
};
export type UsuarioQueryVariables = Exact<{
    id: Scalars["Int"]["input"];
}>;
export type UsuarioQuery = {
    __typename?: "Query";
    adminUsuario: {
        __typename?: "UsuarioAdministracion";
        apellidos: string;
        establecimiento_id: number;
        estado: boolean;
        id: number;
        nombres: string;
        provincia_id: number;
        username: string;
        email: string;
        rolusuario?: Array<{
            __typename?: "RolUsuarioAdministracion";
            id: number;
            rol?: {
                __typename?: "RolAdministracion";
                id: number;
                nombre: string;
            } | null;
        }> | null;
        provincia: {
            __typename?: "ProvinciaAdministracion";
            id: number;
            nombre: string;
        };
        establecimiento: {
            __typename?: "EstablecimientoAdminitracion";
            id: number;
            logo?: any | null;
            nombre: string;
        };
    };
};
export declare const AuthLoginFieldsFragmentDoc: Apollo.DocumentNode;
export declare const AuthPerfilFieldsFragmentDoc: Apollo.DocumentNode;
export declare const AuthModuloPermisoIdFieldsFragmentDoc: Apollo.DocumentNode;
export declare const AuthCambioPasswordFragmentDoc: Apollo.DocumentNode;
export declare const AuthLogoutFragmentDoc: Apollo.DocumentNode;
export declare const ProvinciaSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const EstablecimientoSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const AdminConfiguracionFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ProvinciaDigtSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const CantonDigtSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ParroquiaDigtSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ZonaDigtSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const JuntaDigtSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const DignidadDigtSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ActaDigtListFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ActaByDigititalizacionListFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ActaDigitaCrudFieldsFragmentDoc: Apollo.DocumentNode;
export declare const MenuCollectionFieldsFragmentDoc: Apollo.DocumentNode;
export declare const MenuIdFieldsFragmentDoc: Apollo.DocumentNode;
export declare const MenuCrudFieldsFragmentDoc: Apollo.DocumentNode;
export declare const MenuSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ModuloCollectionFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ModuloIdFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ModuloCrudFieldsFragmentDoc: Apollo.DocumentNode;
export declare const ModuloSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const RolCollectionFieldsFragmentDoc: Apollo.DocumentNode;
export declare const RolIdFieldsFragmentDoc: Apollo.DocumentNode;
export declare const RolCrudFieldsFragmentDoc: Apollo.DocumentNode;
export declare const RolSelectFieldsFragmentDoc: Apollo.DocumentNode;
export declare const UsuarioCollectionFieldsFragmentDoc: Apollo.DocumentNode;
export declare const UsuarioIdFieldsFragmentDoc: Apollo.DocumentNode;
export declare const UsuarioCrudFieldsFragmentDoc: Apollo.DocumentNode;
export declare const AuthloginDocument: Apollo.DocumentNode;
/**
 * __useAuthloginQuery__
 *
 * To run a query within a React component, call `useAuthloginQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthloginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthloginQuery({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export declare function useAuthloginQuery(baseOptions: Apollo.QueryHookOptions<AuthloginQuery, AuthloginQueryVariables> & ({
    variables: AuthloginQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<AuthloginQuery, Exact<{
    password: string;
    username: string;
}>>;
export declare function useAuthloginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthloginQuery, AuthloginQueryVariables>): Apollo.LazyQueryResultTuple<AuthloginQuery, Exact<{
    password: string;
    username: string;
}>>;
export declare function useAuthloginSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthloginQuery, AuthloginQueryVariables>): Apollo.UseSuspenseQueryResult<AuthloginQuery, Exact<{
    password: string;
    username: string;
}>>;
export type AuthloginQueryHookResult = ReturnType<typeof useAuthloginQuery>;
export type AuthloginLazyQueryHookResult = ReturnType<typeof useAuthloginLazyQuery>;
export type AuthloginSuspenseQueryHookResult = ReturnType<typeof useAuthloginSuspenseQuery>;
export type AuthloginQueryResult = Apollo.QueryResult<AuthloginQuery, AuthloginQueryVariables>;
export declare const AuthPerfilDocument: Apollo.DocumentNode;
/**
 * __useAuthPerfilQuery__
 *
 * To run a query within a React component, call `useAuthPerfilQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthPerfilQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthPerfilQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAuthPerfilQuery(baseOptions?: Apollo.QueryHookOptions<AuthPerfilQuery, AuthPerfilQueryVariables>): Apollo.QueryResult<AuthPerfilQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAuthPerfilLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthPerfilQuery, AuthPerfilQueryVariables>): Apollo.LazyQueryResultTuple<AuthPerfilQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAuthPerfilSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthPerfilQuery, AuthPerfilQueryVariables>): Apollo.UseSuspenseQueryResult<AuthPerfilQuery, Exact<{
    [key: string]: never;
}>>;
export type AuthPerfilQueryHookResult = ReturnType<typeof useAuthPerfilQuery>;
export type AuthPerfilLazyQueryHookResult = ReturnType<typeof useAuthPerfilLazyQuery>;
export type AuthPerfilSuspenseQueryHookResult = ReturnType<typeof useAuthPerfilSuspenseQuery>;
export type AuthPerfilQueryResult = Apollo.QueryResult<AuthPerfilQuery, AuthPerfilQueryVariables>;
export declare const AuthModuloPermisosIdDocument: Apollo.DocumentNode;
/**
 * __useAuthModuloPermisosIdQuery__
 *
 * To run a query within a React component, call `useAuthModuloPermisosIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthModuloPermisosIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthModuloPermisosIdQuery({
 *   variables: {
 *      rol_id: // value for 'rol_id'
 *   },
 * });
 */
export declare function useAuthModuloPermisosIdQuery(baseOptions: Apollo.QueryHookOptions<AuthModuloPermisosIdQuery, AuthModuloPermisosIdQueryVariables> & ({
    variables: AuthModuloPermisosIdQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<AuthModuloPermisosIdQuery, Exact<{
    rol_id: number;
}>>;
export declare function useAuthModuloPermisosIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthModuloPermisosIdQuery, AuthModuloPermisosIdQueryVariables>): Apollo.LazyQueryResultTuple<AuthModuloPermisosIdQuery, Exact<{
    rol_id: number;
}>>;
export declare function useAuthModuloPermisosIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthModuloPermisosIdQuery, AuthModuloPermisosIdQueryVariables>): Apollo.UseSuspenseQueryResult<AuthModuloPermisosIdQuery, Exact<{
    rol_id: number;
}>>;
export type AuthModuloPermisosIdQueryHookResult = ReturnType<typeof useAuthModuloPermisosIdQuery>;
export type AuthModuloPermisosIdLazyQueryHookResult = ReturnType<typeof useAuthModuloPermisosIdLazyQuery>;
export type AuthModuloPermisosIdSuspenseQueryHookResult = ReturnType<typeof useAuthModuloPermisosIdSuspenseQuery>;
export type AuthModuloPermisosIdQueryResult = Apollo.QueryResult<AuthModuloPermisosIdQuery, AuthModuloPermisosIdQueryVariables>;
export declare const AuthCambioPasswordDocument: Apollo.DocumentNode;
export type AuthCambioPasswordMutationFn = Apollo.MutationFunction<AuthCambioPasswordMutation, AuthCambioPasswordMutationVariables>;
/**
 * __useAuthCambioPasswordMutation__
 *
 * To run a mutation, you first call `useAuthCambioPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthCambioPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authCambioPasswordMutation, { data, loading, error }] = useAuthCambioPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export declare function useAuthCambioPasswordMutation(baseOptions?: Apollo.MutationHookOptions<AuthCambioPasswordMutation, AuthCambioPasswordMutationVariables>): Apollo.MutationTuple<AuthCambioPasswordMutation, Exact<{
    password: string;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type AuthCambioPasswordMutationHookResult = ReturnType<typeof useAuthCambioPasswordMutation>;
export type AuthCambioPasswordMutationResult = Apollo.MutationResult<AuthCambioPasswordMutation>;
export type AuthCambioPasswordMutationOptions = Apollo.BaseMutationOptions<AuthCambioPasswordMutation, AuthCambioPasswordMutationVariables>;
export declare const AuthlogoutDocument: Apollo.DocumentNode;
/**
 * __useAuthlogoutQuery__
 *
 * To run a query within a React component, call `useAuthlogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthlogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthlogoutQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAuthlogoutQuery(baseOptions?: Apollo.QueryHookOptions<AuthlogoutQuery, AuthlogoutQueryVariables>): Apollo.QueryResult<AuthlogoutQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAuthlogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthlogoutQuery, AuthlogoutQueryVariables>): Apollo.LazyQueryResultTuple<AuthlogoutQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAuthlogoutSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthlogoutQuery, AuthlogoutQueryVariables>): Apollo.UseSuspenseQueryResult<AuthlogoutQuery, Exact<{
    [key: string]: never;
}>>;
export type AuthlogoutQueryHookResult = ReturnType<typeof useAuthlogoutQuery>;
export type AuthlogoutLazyQueryHookResult = ReturnType<typeof useAuthlogoutLazyQuery>;
export type AuthlogoutSuspenseQueryHookResult = ReturnType<typeof useAuthlogoutSuspenseQuery>;
export type AuthlogoutQueryResult = Apollo.QueryResult<AuthlogoutQuery, AuthlogoutQueryVariables>;
export declare const ProvinciaSelectDocument: Apollo.DocumentNode;
/**
 * __useProvinciaSelectQuery__
 *
 * To run a query within a React component, call `useProvinciaSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProvinciaSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProvinciaSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useProvinciaSelectQuery(baseOptions?: Apollo.QueryHookOptions<ProvinciaSelectQuery, ProvinciaSelectQueryVariables>): Apollo.QueryResult<ProvinciaSelectQuery, Exact<{
    inputWhere?: InputMaybe<ProvinciaFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useProvinciaSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProvinciaSelectQuery, ProvinciaSelectQueryVariables>): Apollo.LazyQueryResultTuple<ProvinciaSelectQuery, Exact<{
    inputWhere?: InputMaybe<ProvinciaFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useProvinciaSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProvinciaSelectQuery, ProvinciaSelectQueryVariables>): Apollo.UseSuspenseQueryResult<ProvinciaSelectQuery, Exact<{
    inputWhere?: InputMaybe<ProvinciaFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type ProvinciaSelectQueryHookResult = ReturnType<typeof useProvinciaSelectQuery>;
export type ProvinciaSelectLazyQueryHookResult = ReturnType<typeof useProvinciaSelectLazyQuery>;
export type ProvinciaSelectSuspenseQueryHookResult = ReturnType<typeof useProvinciaSelectSuspenseQuery>;
export type ProvinciaSelectQueryResult = Apollo.QueryResult<ProvinciaSelectQuery, ProvinciaSelectQueryVariables>;
export declare const EstablecimientoSelectDocument: Apollo.DocumentNode;
/**
 * __useEstablecimientoSelectQuery__
 *
 * To run a query within a React component, call `useEstablecimientoSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useEstablecimientoSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEstablecimientoSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useEstablecimientoSelectQuery(baseOptions?: Apollo.QueryHookOptions<EstablecimientoSelectQuery, EstablecimientoSelectQueryVariables>): Apollo.QueryResult<EstablecimientoSelectQuery, Exact<{
    inputWhere?: InputMaybe<EstablecimientoFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useEstablecimientoSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EstablecimientoSelectQuery, EstablecimientoSelectQueryVariables>): Apollo.LazyQueryResultTuple<EstablecimientoSelectQuery, Exact<{
    inputWhere?: InputMaybe<EstablecimientoFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useEstablecimientoSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EstablecimientoSelectQuery, EstablecimientoSelectQueryVariables>): Apollo.UseSuspenseQueryResult<EstablecimientoSelectQuery, Exact<{
    inputWhere?: InputMaybe<EstablecimientoFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type EstablecimientoSelectQueryHookResult = ReturnType<typeof useEstablecimientoSelectQuery>;
export type EstablecimientoSelectLazyQueryHookResult = ReturnType<typeof useEstablecimientoSelectLazyQuery>;
export type EstablecimientoSelectSuspenseQueryHookResult = ReturnType<typeof useEstablecimientoSelectSuspenseQuery>;
export type EstablecimientoSelectQueryResult = Apollo.QueryResult<EstablecimientoSelectQuery, EstablecimientoSelectQueryVariables>;
export declare const AdminConfiguracionCollectionDocument: Apollo.DocumentNode;
/**
 * __useAdminConfiguracionCollectionQuery__
 *
 * To run a query within a React component, call `useAdminConfiguracionCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminConfiguracionCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminConfiguracionCollectionQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useAdminConfiguracionCollectionQuery(baseOptions?: Apollo.QueryHookOptions<AdminConfiguracionCollectionQuery, AdminConfiguracionCollectionQueryVariables>): Apollo.QueryResult<AdminConfiguracionCollectionQuery, Exact<{
    inputWhere?: InputMaybe<ConfiguracionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useAdminConfiguracionCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminConfiguracionCollectionQuery, AdminConfiguracionCollectionQueryVariables>): Apollo.LazyQueryResultTuple<AdminConfiguracionCollectionQuery, Exact<{
    inputWhere?: InputMaybe<ConfiguracionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useAdminConfiguracionCollectionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdminConfiguracionCollectionQuery, AdminConfiguracionCollectionQueryVariables>): Apollo.UseSuspenseQueryResult<AdminConfiguracionCollectionQuery, Exact<{
    inputWhere?: InputMaybe<ConfiguracionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type AdminConfiguracionCollectionQueryHookResult = ReturnType<typeof useAdminConfiguracionCollectionQuery>;
export type AdminConfiguracionCollectionLazyQueryHookResult = ReturnType<typeof useAdminConfiguracionCollectionLazyQuery>;
export type AdminConfiguracionCollectionSuspenseQueryHookResult = ReturnType<typeof useAdminConfiguracionCollectionSuspenseQuery>;
export type AdminConfiguracionCollectionQueryResult = Apollo.QueryResult<AdminConfiguracionCollectionQuery, AdminConfiguracionCollectionQueryVariables>;
export declare const DigtVotosUpdateDocument: Apollo.DocumentNode;
export type DigtVotosUpdateMutationFn = Apollo.MutationFunction<DigtVotosUpdateMutation, DigtVotosUpdateMutationVariables>;
/**
 * __useDigtVotosUpdateMutation__
 *
 * To run a mutation, you first call `useDigtVotosUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDigtVotosUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [digtVotosUpdateMutation, { data, loading, error }] = useDigtVotosUpdateMutation({
 *   variables: {
 *      inputUpdate: // value for 'inputUpdate'
 *   },
 * });
 */
export declare function useDigtVotosUpdateMutation(baseOptions?: Apollo.MutationHookOptions<DigtVotosUpdateMutation, DigtVotosUpdateMutationVariables>): Apollo.MutationTuple<DigtVotosUpdateMutation, Exact<{
    inputUpdate: VotosDigitacionUpdateInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type DigtVotosUpdateMutationHookResult = ReturnType<typeof useDigtVotosUpdateMutation>;
export type DigtVotosUpdateMutationResult = Apollo.MutationResult<DigtVotosUpdateMutation>;
export type DigtVotosUpdateMutationOptions = Apollo.BaseMutationOptions<DigtVotosUpdateMutation, DigtVotosUpdateMutationVariables>;
export declare const ProvinciaDigtSelectDocument: Apollo.DocumentNode;
/**
 * __useProvinciaDigtSelectQuery__
 *
 * To run a query within a React component, call `useProvinciaDigtSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProvinciaDigtSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProvinciaDigtSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useProvinciaDigtSelectQuery(baseOptions?: Apollo.QueryHookOptions<ProvinciaDigtSelectQuery, ProvinciaDigtSelectQueryVariables>): Apollo.QueryResult<ProvinciaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<ProvinciaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useProvinciaDigtSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProvinciaDigtSelectQuery, ProvinciaDigtSelectQueryVariables>): Apollo.LazyQueryResultTuple<ProvinciaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<ProvinciaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useProvinciaDigtSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProvinciaDigtSelectQuery, ProvinciaDigtSelectQueryVariables>): Apollo.UseSuspenseQueryResult<ProvinciaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<ProvinciaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type ProvinciaDigtSelectQueryHookResult = ReturnType<typeof useProvinciaDigtSelectQuery>;
export type ProvinciaDigtSelectLazyQueryHookResult = ReturnType<typeof useProvinciaDigtSelectLazyQuery>;
export type ProvinciaDigtSelectSuspenseQueryHookResult = ReturnType<typeof useProvinciaDigtSelectSuspenseQuery>;
export type ProvinciaDigtSelectQueryResult = Apollo.QueryResult<ProvinciaDigtSelectQuery, ProvinciaDigtSelectQueryVariables>;
export declare const CantonDigtSelectDocument: Apollo.DocumentNode;
/**
 * __useCantonDigtSelectQuery__
 *
 * To run a query within a React component, call `useCantonDigtSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useCantonDigtSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCantonDigtSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useCantonDigtSelectQuery(baseOptions?: Apollo.QueryHookOptions<CantonDigtSelectQuery, CantonDigtSelectQueryVariables>): Apollo.QueryResult<CantonDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<CantonDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useCantonDigtSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CantonDigtSelectQuery, CantonDigtSelectQueryVariables>): Apollo.LazyQueryResultTuple<CantonDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<CantonDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useCantonDigtSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CantonDigtSelectQuery, CantonDigtSelectQueryVariables>): Apollo.UseSuspenseQueryResult<CantonDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<CantonDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type CantonDigtSelectQueryHookResult = ReturnType<typeof useCantonDigtSelectQuery>;
export type CantonDigtSelectLazyQueryHookResult = ReturnType<typeof useCantonDigtSelectLazyQuery>;
export type CantonDigtSelectSuspenseQueryHookResult = ReturnType<typeof useCantonDigtSelectSuspenseQuery>;
export type CantonDigtSelectQueryResult = Apollo.QueryResult<CantonDigtSelectQuery, CantonDigtSelectQueryVariables>;
export declare const ParroquiaDigtSelectDocument: Apollo.DocumentNode;
/**
 * __useParroquiaDigtSelectQuery__
 *
 * To run a query within a React component, call `useParroquiaDigtSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useParroquiaDigtSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParroquiaDigtSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useParroquiaDigtSelectQuery(baseOptions?: Apollo.QueryHookOptions<ParroquiaDigtSelectQuery, ParroquiaDigtSelectQueryVariables>): Apollo.QueryResult<ParroquiaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<ParroquiaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useParroquiaDigtSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParroquiaDigtSelectQuery, ParroquiaDigtSelectQueryVariables>): Apollo.LazyQueryResultTuple<ParroquiaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<ParroquiaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useParroquiaDigtSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ParroquiaDigtSelectQuery, ParroquiaDigtSelectQueryVariables>): Apollo.UseSuspenseQueryResult<ParroquiaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<ParroquiaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type ParroquiaDigtSelectQueryHookResult = ReturnType<typeof useParroquiaDigtSelectQuery>;
export type ParroquiaDigtSelectLazyQueryHookResult = ReturnType<typeof useParroquiaDigtSelectLazyQuery>;
export type ParroquiaDigtSelectSuspenseQueryHookResult = ReturnType<typeof useParroquiaDigtSelectSuspenseQuery>;
export type ParroquiaDigtSelectQueryResult = Apollo.QueryResult<ParroquiaDigtSelectQuery, ParroquiaDigtSelectQueryVariables>;
export declare const ZonaDigtSelectDocument: Apollo.DocumentNode;
/**
 * __useZonaDigtSelectQuery__
 *
 * To run a query within a React component, call `useZonaDigtSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useZonaDigtSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZonaDigtSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useZonaDigtSelectQuery(baseOptions?: Apollo.QueryHookOptions<ZonaDigtSelectQuery, ZonaDigtSelectQueryVariables>): Apollo.QueryResult<ZonaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<ZonaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useZonaDigtSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZonaDigtSelectQuery, ZonaDigtSelectQueryVariables>): Apollo.LazyQueryResultTuple<ZonaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<ZonaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useZonaDigtSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ZonaDigtSelectQuery, ZonaDigtSelectQueryVariables>): Apollo.UseSuspenseQueryResult<ZonaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<ZonaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type ZonaDigtSelectQueryHookResult = ReturnType<typeof useZonaDigtSelectQuery>;
export type ZonaDigtSelectLazyQueryHookResult = ReturnType<typeof useZonaDigtSelectLazyQuery>;
export type ZonaDigtSelectSuspenseQueryHookResult = ReturnType<typeof useZonaDigtSelectSuspenseQuery>;
export type ZonaDigtSelectQueryResult = Apollo.QueryResult<ZonaDigtSelectQuery, ZonaDigtSelectQueryVariables>;
export declare const JuntaDigtSelectDocument: Apollo.DocumentNode;
/**
 * __useJuntaDigtSelectQuery__
 *
 * To run a query within a React component, call `useJuntaDigtSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useJuntaDigtSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJuntaDigtSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useJuntaDigtSelectQuery(baseOptions?: Apollo.QueryHookOptions<JuntaDigtSelectQuery, JuntaDigtSelectQueryVariables>): Apollo.QueryResult<JuntaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<JuntaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useJuntaDigtSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JuntaDigtSelectQuery, JuntaDigtSelectQueryVariables>): Apollo.LazyQueryResultTuple<JuntaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<JuntaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useJuntaDigtSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<JuntaDigtSelectQuery, JuntaDigtSelectQueryVariables>): Apollo.UseSuspenseQueryResult<JuntaDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<JuntaDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type JuntaDigtSelectQueryHookResult = ReturnType<typeof useJuntaDigtSelectQuery>;
export type JuntaDigtSelectLazyQueryHookResult = ReturnType<typeof useJuntaDigtSelectLazyQuery>;
export type JuntaDigtSelectSuspenseQueryHookResult = ReturnType<typeof useJuntaDigtSelectSuspenseQuery>;
export type JuntaDigtSelectQueryResult = Apollo.QueryResult<JuntaDigtSelectQuery, JuntaDigtSelectQueryVariables>;
export declare const DignidadDigtSelectDocument: Apollo.DocumentNode;
/**
 * __useDignidadDigtSelectQuery__
 *
 * To run a query within a React component, call `useDignidadDigtSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useDignidadDigtSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDignidadDigtSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useDignidadDigtSelectQuery(baseOptions?: Apollo.QueryHookOptions<DignidadDigtSelectQuery, DignidadDigtSelectQueryVariables>): Apollo.QueryResult<DignidadDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<DignidadDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useDignidadDigtSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DignidadDigtSelectQuery, DignidadDigtSelectQueryVariables>): Apollo.LazyQueryResultTuple<DignidadDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<DignidadDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useDignidadDigtSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DignidadDigtSelectQuery, DignidadDigtSelectQueryVariables>): Apollo.UseSuspenseQueryResult<DignidadDigtSelectQuery, Exact<{
    inputWhere?: InputMaybe<DignidadDigitalizacionFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type DignidadDigtSelectQueryHookResult = ReturnType<typeof useDignidadDigtSelectQuery>;
export type DignidadDigtSelectLazyQueryHookResult = ReturnType<typeof useDignidadDigtSelectLazyQuery>;
export type DignidadDigtSelectSuspenseQueryHookResult = ReturnType<typeof useDignidadDigtSelectSuspenseQuery>;
export type DignidadDigtSelectQueryResult = Apollo.QueryResult<DignidadDigtSelectQuery, DignidadDigtSelectQueryVariables>;
export declare const DigtActaByJuntaListDocument: Apollo.DocumentNode;
/**
 * __useDigtActaByJuntaListQuery__
 *
 * To run a query within a React component, call `useDigtActaByJuntaListQuery` and pass it any options that fit your needs.
 * When your component renders, `useDigtActaByJuntaListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDigtActaByJuntaListQuery({
 *   variables: {
 *      dignidad_id: // value for 'dignidad_id'
 *      junta_id: // value for 'junta_id'
 *   },
 * });
 */
export declare function useDigtActaByJuntaListQuery(baseOptions: Apollo.QueryHookOptions<DigtActaByJuntaListQuery, DigtActaByJuntaListQueryVariables> & ({
    variables: DigtActaByJuntaListQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<DigtActaByJuntaListQuery, Exact<{
    dignidad_id: number;
    junta_id: number;
}>>;
export declare function useDigtActaByJuntaListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DigtActaByJuntaListQuery, DigtActaByJuntaListQueryVariables>): Apollo.LazyQueryResultTuple<DigtActaByJuntaListQuery, Exact<{
    dignidad_id: number;
    junta_id: number;
}>>;
export declare function useDigtActaByJuntaListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DigtActaByJuntaListQuery, DigtActaByJuntaListQueryVariables>): Apollo.UseSuspenseQueryResult<DigtActaByJuntaListQuery, Exact<{
    dignidad_id: number;
    junta_id: number;
}>>;
export type DigtActaByJuntaListQueryHookResult = ReturnType<typeof useDigtActaByJuntaListQuery>;
export type DigtActaByJuntaListLazyQueryHookResult = ReturnType<typeof useDigtActaByJuntaListLazyQuery>;
export type DigtActaByJuntaListSuspenseQueryHookResult = ReturnType<typeof useDigtActaByJuntaListSuspenseQuery>;
export type DigtActaByJuntaListQueryResult = Apollo.QueryResult<DigtActaByJuntaListQuery, DigtActaByJuntaListQueryVariables>;
export declare const DigtActaByDignidadListDocument: Apollo.DocumentNode;
/**
 * __useDigtActaByDignidadListQuery__
 *
 * To run a query within a React component, call `useDigtActaByDignidadListQuery` and pass it any options that fit your needs.
 * When your component renders, `useDigtActaByDignidadListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDigtActaByDignidadListQuery({
 *   variables: {
 *      dignidad_id: // value for 'dignidad_id'
 *   },
 * });
 */
export declare function useDigtActaByDignidadListQuery(baseOptions: Apollo.QueryHookOptions<DigtActaByDignidadListQuery, DigtActaByDignidadListQueryVariables> & ({
    variables: DigtActaByDignidadListQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<DigtActaByDignidadListQuery, Exact<{
    dignidad_id: number;
}>>;
export declare function useDigtActaByDignidadListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DigtActaByDignidadListQuery, DigtActaByDignidadListQueryVariables>): Apollo.LazyQueryResultTuple<DigtActaByDignidadListQuery, Exact<{
    dignidad_id: number;
}>>;
export declare function useDigtActaByDignidadListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DigtActaByDignidadListQuery, DigtActaByDignidadListQueryVariables>): Apollo.UseSuspenseQueryResult<DigtActaByDignidadListQuery, Exact<{
    dignidad_id: number;
}>>;
export type DigtActaByDignidadListQueryHookResult = ReturnType<typeof useDigtActaByDignidadListQuery>;
export type DigtActaByDignidadListLazyQueryHookResult = ReturnType<typeof useDigtActaByDignidadListLazyQuery>;
export type DigtActaByDignidadListSuspenseQueryHookResult = ReturnType<typeof useDigtActaByDignidadListSuspenseQuery>;
export type DigtActaByDignidadListQueryResult = Apollo.QueryResult<DigtActaByDignidadListQuery, DigtActaByDignidadListQueryVariables>;
export declare const MenuUpdateDocument: Apollo.DocumentNode;
export type MenuUpdateMutationFn = Apollo.MutationFunction<MenuUpdateMutation, MenuUpdateMutationVariables>;
/**
 * __useMenuUpdateMutation__
 *
 * To run a mutation, you first call `useMenuUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMenuUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [menuUpdateMutation, { data, loading, error }] = useMenuUpdateMutation({
 *   variables: {
 *      inputUpdate: // value for 'inputUpdate'
 *   },
 * });
 */
export declare function useMenuUpdateMutation(baseOptions?: Apollo.MutationHookOptions<MenuUpdateMutation, MenuUpdateMutationVariables>): Apollo.MutationTuple<MenuUpdateMutation, Exact<{
    inputUpdate: MenuUpdateInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type MenuUpdateMutationHookResult = ReturnType<typeof useMenuUpdateMutation>;
export type MenuUpdateMutationResult = Apollo.MutationResult<MenuUpdateMutation>;
export type MenuUpdateMutationOptions = Apollo.BaseMutationOptions<MenuUpdateMutation, MenuUpdateMutationVariables>;
export declare const MenuCreateDocument: Apollo.DocumentNode;
export type MenuCreateMutationFn = Apollo.MutationFunction<MenuCreateMutation, MenuCreateMutationVariables>;
/**
 * __useMenuCreateMutation__
 *
 * To run a mutation, you first call `useMenuCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMenuCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [menuCreateMutation, { data, loading, error }] = useMenuCreateMutation({
 *   variables: {
 *      inputCreate: // value for 'inputCreate'
 *   },
 * });
 */
export declare function useMenuCreateMutation(baseOptions?: Apollo.MutationHookOptions<MenuCreateMutation, MenuCreateMutationVariables>): Apollo.MutationTuple<MenuCreateMutation, Exact<{
    inputCreate: MenuCreateInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type MenuCreateMutationHookResult = ReturnType<typeof useMenuCreateMutation>;
export type MenuCreateMutationResult = Apollo.MutationResult<MenuCreateMutation>;
export type MenuCreateMutationOptions = Apollo.BaseMutationOptions<MenuCreateMutation, MenuCreateMutationVariables>;
export declare const MenuDeleteDocument: Apollo.DocumentNode;
export type MenuDeleteMutationFn = Apollo.MutationFunction<MenuDeleteMutation, MenuDeleteMutationVariables>;
/**
 * __useMenuDeleteMutation__
 *
 * To run a mutation, you first call `useMenuDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMenuDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [menuDeleteMutation, { data, loading, error }] = useMenuDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useMenuDeleteMutation(baseOptions?: Apollo.MutationHookOptions<MenuDeleteMutation, MenuDeleteMutationVariables>): Apollo.MutationTuple<MenuDeleteMutation, Exact<{
    id: number;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type MenuDeleteMutationHookResult = ReturnType<typeof useMenuDeleteMutation>;
export type MenuDeleteMutationResult = Apollo.MutationResult<MenuDeleteMutation>;
export type MenuDeleteMutationOptions = Apollo.BaseMutationOptions<MenuDeleteMutation, MenuDeleteMutationVariables>;
export declare const MenuCollectionDocument: Apollo.DocumentNode;
/**
 * __useMenuCollectionQuery__
 *
 * To run a query within a React component, call `useMenuCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuCollectionQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *      inputPagination: // value for 'inputPagination'
 *   },
 * });
 */
export declare function useMenuCollectionQuery(baseOptions?: Apollo.QueryHookOptions<MenuCollectionQuery, MenuCollectionQueryVariables>): Apollo.QueryResult<MenuCollectionQuery, Exact<{
    inputWhere?: InputMaybe<MenuFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export declare function useMenuCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuCollectionQuery, MenuCollectionQueryVariables>): Apollo.LazyQueryResultTuple<MenuCollectionQuery, Exact<{
    inputWhere?: InputMaybe<MenuFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export declare function useMenuCollectionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MenuCollectionQuery, MenuCollectionQueryVariables>): Apollo.UseSuspenseQueryResult<MenuCollectionQuery, Exact<{
    inputWhere?: InputMaybe<MenuFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export type MenuCollectionQueryHookResult = ReturnType<typeof useMenuCollectionQuery>;
export type MenuCollectionLazyQueryHookResult = ReturnType<typeof useMenuCollectionLazyQuery>;
export type MenuCollectionSuspenseQueryHookResult = ReturnType<typeof useMenuCollectionSuspenseQuery>;
export type MenuCollectionQueryResult = Apollo.QueryResult<MenuCollectionQuery, MenuCollectionQueryVariables>;
export declare const MenuDocument: Apollo.DocumentNode;
/**
 * __useMenuQuery__
 *
 * To run a query within a React component, call `useMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useMenuQuery(baseOptions: Apollo.QueryHookOptions<MenuQuery, MenuQueryVariables> & ({
    variables: MenuQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<MenuQuery, Exact<{
    id: number;
}>>;
export declare function useMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuQuery, MenuQueryVariables>): Apollo.LazyQueryResultTuple<MenuQuery, Exact<{
    id: number;
}>>;
export declare function useMenuSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MenuQuery, MenuQueryVariables>): Apollo.UseSuspenseQueryResult<MenuQuery, Exact<{
    id: number;
}>>;
export type MenuQueryHookResult = ReturnType<typeof useMenuQuery>;
export type MenuLazyQueryHookResult = ReturnType<typeof useMenuLazyQuery>;
export type MenuSuspenseQueryHookResult = ReturnType<typeof useMenuSuspenseQuery>;
export type MenuQueryResult = Apollo.QueryResult<MenuQuery, MenuQueryVariables>;
export declare const MenuSelectDocument: Apollo.DocumentNode;
/**
 * __useMenuSelectQuery__
 *
 * To run a query within a React component, call `useMenuSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useMenuSelectQuery(baseOptions?: Apollo.QueryHookOptions<MenuSelectQuery, MenuSelectQueryVariables>): Apollo.QueryResult<MenuSelectQuery, Exact<{
    inputWhere?: InputMaybe<MenuFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useMenuSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuSelectQuery, MenuSelectQueryVariables>): Apollo.LazyQueryResultTuple<MenuSelectQuery, Exact<{
    inputWhere?: InputMaybe<MenuFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useMenuSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MenuSelectQuery, MenuSelectQueryVariables>): Apollo.UseSuspenseQueryResult<MenuSelectQuery, Exact<{
    inputWhere?: InputMaybe<MenuFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type MenuSelectQueryHookResult = ReturnType<typeof useMenuSelectQuery>;
export type MenuSelectLazyQueryHookResult = ReturnType<typeof useMenuSelectLazyQuery>;
export type MenuSelectSuspenseQueryHookResult = ReturnType<typeof useMenuSelectSuspenseQuery>;
export type MenuSelectQueryResult = Apollo.QueryResult<MenuSelectQuery, MenuSelectQueryVariables>;
export declare const ModuloUpdateDocument: Apollo.DocumentNode;
export type ModuloUpdateMutationFn = Apollo.MutationFunction<ModuloUpdateMutation, ModuloUpdateMutationVariables>;
/**
 * __useModuloUpdateMutation__
 *
 * To run a mutation, you first call `useModuloUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModuloUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moduloUpdateMutation, { data, loading, error }] = useModuloUpdateMutation({
 *   variables: {
 *      inputUpdate: // value for 'inputUpdate'
 *   },
 * });
 */
export declare function useModuloUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ModuloUpdateMutation, ModuloUpdateMutationVariables>): Apollo.MutationTuple<ModuloUpdateMutation, Exact<{
    inputUpdate: ModuloUpdateInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type ModuloUpdateMutationHookResult = ReturnType<typeof useModuloUpdateMutation>;
export type ModuloUpdateMutationResult = Apollo.MutationResult<ModuloUpdateMutation>;
export type ModuloUpdateMutationOptions = Apollo.BaseMutationOptions<ModuloUpdateMutation, ModuloUpdateMutationVariables>;
export declare const ModuloCreateDocument: Apollo.DocumentNode;
export type ModuloCreateMutationFn = Apollo.MutationFunction<ModuloCreateMutation, ModuloCreateMutationVariables>;
/**
 * __useModuloCreateMutation__
 *
 * To run a mutation, you first call `useModuloCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModuloCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moduloCreateMutation, { data, loading, error }] = useModuloCreateMutation({
 *   variables: {
 *      inputCreate: // value for 'inputCreate'
 *   },
 * });
 */
export declare function useModuloCreateMutation(baseOptions?: Apollo.MutationHookOptions<ModuloCreateMutation, ModuloCreateMutationVariables>): Apollo.MutationTuple<ModuloCreateMutation, Exact<{
    inputCreate: ModuloCreateInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type ModuloCreateMutationHookResult = ReturnType<typeof useModuloCreateMutation>;
export type ModuloCreateMutationResult = Apollo.MutationResult<ModuloCreateMutation>;
export type ModuloCreateMutationOptions = Apollo.BaseMutationOptions<ModuloCreateMutation, ModuloCreateMutationVariables>;
export declare const ModuloDeleteDocument: Apollo.DocumentNode;
export type ModuloDeleteMutationFn = Apollo.MutationFunction<ModuloDeleteMutation, ModuloDeleteMutationVariables>;
/**
 * __useModuloDeleteMutation__
 *
 * To run a mutation, you first call `useModuloDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModuloDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moduloDeleteMutation, { data, loading, error }] = useModuloDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useModuloDeleteMutation(baseOptions?: Apollo.MutationHookOptions<ModuloDeleteMutation, ModuloDeleteMutationVariables>): Apollo.MutationTuple<ModuloDeleteMutation, Exact<{
    id: number;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type ModuloDeleteMutationHookResult = ReturnType<typeof useModuloDeleteMutation>;
export type ModuloDeleteMutationResult = Apollo.MutationResult<ModuloDeleteMutation>;
export type ModuloDeleteMutationOptions = Apollo.BaseMutationOptions<ModuloDeleteMutation, ModuloDeleteMutationVariables>;
export declare const ModuloCollectionDocument: Apollo.DocumentNode;
/**
 * __useModuloCollectionQuery__
 *
 * To run a query within a React component, call `useModuloCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useModuloCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModuloCollectionQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *      inputPagination: // value for 'inputPagination'
 *   },
 * });
 */
export declare function useModuloCollectionQuery(baseOptions?: Apollo.QueryHookOptions<ModuloCollectionQuery, ModuloCollectionQueryVariables>): Apollo.QueryResult<ModuloCollectionQuery, Exact<{
    inputWhere?: InputMaybe<ModuloFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export declare function useModuloCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModuloCollectionQuery, ModuloCollectionQueryVariables>): Apollo.LazyQueryResultTuple<ModuloCollectionQuery, Exact<{
    inputWhere?: InputMaybe<ModuloFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export declare function useModuloCollectionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ModuloCollectionQuery, ModuloCollectionQueryVariables>): Apollo.UseSuspenseQueryResult<ModuloCollectionQuery, Exact<{
    inputWhere?: InputMaybe<ModuloFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export type ModuloCollectionQueryHookResult = ReturnType<typeof useModuloCollectionQuery>;
export type ModuloCollectionLazyQueryHookResult = ReturnType<typeof useModuloCollectionLazyQuery>;
export type ModuloCollectionSuspenseQueryHookResult = ReturnType<typeof useModuloCollectionSuspenseQuery>;
export type ModuloCollectionQueryResult = Apollo.QueryResult<ModuloCollectionQuery, ModuloCollectionQueryVariables>;
export declare const ModuloDocument: Apollo.DocumentNode;
/**
 * __useModuloQuery__
 *
 * To run a query within a React component, call `useModuloQuery` and pass it any options that fit your needs.
 * When your component renders, `useModuloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModuloQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useModuloQuery(baseOptions: Apollo.QueryHookOptions<ModuloQuery, ModuloQueryVariables> & ({
    variables: ModuloQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<ModuloQuery, Exact<{
    id: number;
}>>;
export declare function useModuloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModuloQuery, ModuloQueryVariables>): Apollo.LazyQueryResultTuple<ModuloQuery, Exact<{
    id: number;
}>>;
export declare function useModuloSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ModuloQuery, ModuloQueryVariables>): Apollo.UseSuspenseQueryResult<ModuloQuery, Exact<{
    id: number;
}>>;
export type ModuloQueryHookResult = ReturnType<typeof useModuloQuery>;
export type ModuloLazyQueryHookResult = ReturnType<typeof useModuloLazyQuery>;
export type ModuloSuspenseQueryHookResult = ReturnType<typeof useModuloSuspenseQuery>;
export type ModuloQueryResult = Apollo.QueryResult<ModuloQuery, ModuloQueryVariables>;
export declare const ModuloSelectDocument: Apollo.DocumentNode;
/**
 * __useModuloSelectQuery__
 *
 * To run a query within a React component, call `useModuloSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useModuloSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModuloSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useModuloSelectQuery(baseOptions?: Apollo.QueryHookOptions<ModuloSelectQuery, ModuloSelectQueryVariables>): Apollo.QueryResult<ModuloSelectQuery, Exact<{
    inputWhere?: InputMaybe<ModuloFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useModuloSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModuloSelectQuery, ModuloSelectQueryVariables>): Apollo.LazyQueryResultTuple<ModuloSelectQuery, Exact<{
    inputWhere?: InputMaybe<ModuloFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useModuloSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ModuloSelectQuery, ModuloSelectQueryVariables>): Apollo.UseSuspenseQueryResult<ModuloSelectQuery, Exact<{
    inputWhere?: InputMaybe<ModuloFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type ModuloSelectQueryHookResult = ReturnType<typeof useModuloSelectQuery>;
export type ModuloSelectLazyQueryHookResult = ReturnType<typeof useModuloSelectLazyQuery>;
export type ModuloSelectSuspenseQueryHookResult = ReturnType<typeof useModuloSelectSuspenseQuery>;
export type ModuloSelectQueryResult = Apollo.QueryResult<ModuloSelectQuery, ModuloSelectQueryVariables>;
export declare const RolUpdateDocument: Apollo.DocumentNode;
export type RolUpdateMutationFn = Apollo.MutationFunction<RolUpdateMutation, RolUpdateMutationVariables>;
/**
 * __useRolUpdateMutation__
 *
 * To run a mutation, you first call `useRolUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRolUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rolUpdateMutation, { data, loading, error }] = useRolUpdateMutation({
 *   variables: {
 *      inputUpdate: // value for 'inputUpdate'
 *   },
 * });
 */
export declare function useRolUpdateMutation(baseOptions?: Apollo.MutationHookOptions<RolUpdateMutation, RolUpdateMutationVariables>): Apollo.MutationTuple<RolUpdateMutation, Exact<{
    inputUpdate: RolUpdateInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type RolUpdateMutationHookResult = ReturnType<typeof useRolUpdateMutation>;
export type RolUpdateMutationResult = Apollo.MutationResult<RolUpdateMutation>;
export type RolUpdateMutationOptions = Apollo.BaseMutationOptions<RolUpdateMutation, RolUpdateMutationVariables>;
export declare const RolCreateDocument: Apollo.DocumentNode;
export type RolCreateMutationFn = Apollo.MutationFunction<RolCreateMutation, RolCreateMutationVariables>;
/**
 * __useRolCreateMutation__
 *
 * To run a mutation, you first call `useRolCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRolCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rolCreateMutation, { data, loading, error }] = useRolCreateMutation({
 *   variables: {
 *      inputCreate: // value for 'inputCreate'
 *   },
 * });
 */
export declare function useRolCreateMutation(baseOptions?: Apollo.MutationHookOptions<RolCreateMutation, RolCreateMutationVariables>): Apollo.MutationTuple<RolCreateMutation, Exact<{
    inputCreate: RolCreateInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type RolCreateMutationHookResult = ReturnType<typeof useRolCreateMutation>;
export type RolCreateMutationResult = Apollo.MutationResult<RolCreateMutation>;
export type RolCreateMutationOptions = Apollo.BaseMutationOptions<RolCreateMutation, RolCreateMutationVariables>;
export declare const RolDeleteDocument: Apollo.DocumentNode;
export type RolDeleteMutationFn = Apollo.MutationFunction<RolDeleteMutation, RolDeleteMutationVariables>;
/**
 * __useRolDeleteMutation__
 *
 * To run a mutation, you first call `useRolDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRolDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rolDeleteMutation, { data, loading, error }] = useRolDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useRolDeleteMutation(baseOptions?: Apollo.MutationHookOptions<RolDeleteMutation, RolDeleteMutationVariables>): Apollo.MutationTuple<RolDeleteMutation, Exact<{
    id: number;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type RolDeleteMutationHookResult = ReturnType<typeof useRolDeleteMutation>;
export type RolDeleteMutationResult = Apollo.MutationResult<RolDeleteMutation>;
export type RolDeleteMutationOptions = Apollo.BaseMutationOptions<RolDeleteMutation, RolDeleteMutationVariables>;
export declare const RolCollectionDocument: Apollo.DocumentNode;
/**
 * __useRolCollectionQuery__
 *
 * To run a query within a React component, call `useRolCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useRolCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolCollectionQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *      inputPagination: // value for 'inputPagination'
 *   },
 * });
 */
export declare function useRolCollectionQuery(baseOptions?: Apollo.QueryHookOptions<RolCollectionQuery, RolCollectionQueryVariables>): Apollo.QueryResult<RolCollectionQuery, Exact<{
    inputWhere?: InputMaybe<RolFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export declare function useRolCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RolCollectionQuery, RolCollectionQueryVariables>): Apollo.LazyQueryResultTuple<RolCollectionQuery, Exact<{
    inputWhere?: InputMaybe<RolFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export declare function useRolCollectionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RolCollectionQuery, RolCollectionQueryVariables>): Apollo.UseSuspenseQueryResult<RolCollectionQuery, Exact<{
    inputWhere?: InputMaybe<RolFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export type RolCollectionQueryHookResult = ReturnType<typeof useRolCollectionQuery>;
export type RolCollectionLazyQueryHookResult = ReturnType<typeof useRolCollectionLazyQuery>;
export type RolCollectionSuspenseQueryHookResult = ReturnType<typeof useRolCollectionSuspenseQuery>;
export type RolCollectionQueryResult = Apollo.QueryResult<RolCollectionQuery, RolCollectionQueryVariables>;
export declare const RolDocument: Apollo.DocumentNode;
/**
 * __useRolQuery__
 *
 * To run a query within a React component, call `useRolQuery` and pass it any options that fit your needs.
 * When your component renders, `useRolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useRolQuery(baseOptions: Apollo.QueryHookOptions<RolQuery, RolQueryVariables> & ({
    variables: RolQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<RolQuery, Exact<{
    id: number;
}>>;
export declare function useRolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RolQuery, RolQueryVariables>): Apollo.LazyQueryResultTuple<RolQuery, Exact<{
    id: number;
}>>;
export declare function useRolSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RolQuery, RolQueryVariables>): Apollo.UseSuspenseQueryResult<RolQuery, Exact<{
    id: number;
}>>;
export type RolQueryHookResult = ReturnType<typeof useRolQuery>;
export type RolLazyQueryHookResult = ReturnType<typeof useRolLazyQuery>;
export type RolSuspenseQueryHookResult = ReturnType<typeof useRolSuspenseQuery>;
export type RolQueryResult = Apollo.QueryResult<RolQuery, RolQueryVariables>;
export declare const RolSelectDocument: Apollo.DocumentNode;
/**
 * __useRolSelectQuery__
 *
 * To run a query within a React component, call `useRolSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useRolSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolSelectQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *   },
 * });
 */
export declare function useRolSelectQuery(baseOptions?: Apollo.QueryHookOptions<RolSelectQuery, RolSelectQueryVariables>): Apollo.QueryResult<RolSelectQuery, Exact<{
    inputWhere?: InputMaybe<RolFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useRolSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RolSelectQuery, RolSelectQueryVariables>): Apollo.LazyQueryResultTuple<RolSelectQuery, Exact<{
    inputWhere?: InputMaybe<RolFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export declare function useRolSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RolSelectQuery, RolSelectQueryVariables>): Apollo.UseSuspenseQueryResult<RolSelectQuery, Exact<{
    inputWhere?: InputMaybe<RolFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
}>>;
export type RolSelectQueryHookResult = ReturnType<typeof useRolSelectQuery>;
export type RolSelectLazyQueryHookResult = ReturnType<typeof useRolSelectLazyQuery>;
export type RolSelectSuspenseQueryHookResult = ReturnType<typeof useRolSelectSuspenseQuery>;
export type RolSelectQueryResult = Apollo.QueryResult<RolSelectQuery, RolSelectQueryVariables>;
export declare const UsuarioUpdateDocument: Apollo.DocumentNode;
export type UsuarioUpdateMutationFn = Apollo.MutationFunction<UsuarioUpdateMutation, UsuarioUpdateMutationVariables>;
/**
 * __useUsuarioUpdateMutation__
 *
 * To run a mutation, you first call `useUsuarioUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsuarioUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usuarioUpdateMutation, { data, loading, error }] = useUsuarioUpdateMutation({
 *   variables: {
 *      inputUpdate: // value for 'inputUpdate'
 *   },
 * });
 */
export declare function useUsuarioUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UsuarioUpdateMutation, UsuarioUpdateMutationVariables>): Apollo.MutationTuple<UsuarioUpdateMutation, Exact<{
    inputUpdate: UsuarioUpdateInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UsuarioUpdateMutationHookResult = ReturnType<typeof useUsuarioUpdateMutation>;
export type UsuarioUpdateMutationResult = Apollo.MutationResult<UsuarioUpdateMutation>;
export type UsuarioUpdateMutationOptions = Apollo.BaseMutationOptions<UsuarioUpdateMutation, UsuarioUpdateMutationVariables>;
export declare const UsuarioCreateDocument: Apollo.DocumentNode;
export type UsuarioCreateMutationFn = Apollo.MutationFunction<UsuarioCreateMutation, UsuarioCreateMutationVariables>;
/**
 * __useUsuarioCreateMutation__
 *
 * To run a mutation, you first call `useUsuarioCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsuarioCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usuarioCreateMutation, { data, loading, error }] = useUsuarioCreateMutation({
 *   variables: {
 *      inputCreate: // value for 'inputCreate'
 *   },
 * });
 */
export declare function useUsuarioCreateMutation(baseOptions?: Apollo.MutationHookOptions<UsuarioCreateMutation, UsuarioCreateMutationVariables>): Apollo.MutationTuple<UsuarioCreateMutation, Exact<{
    inputCreate: UsuarioCreateInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UsuarioCreateMutationHookResult = ReturnType<typeof useUsuarioCreateMutation>;
export type UsuarioCreateMutationResult = Apollo.MutationResult<UsuarioCreateMutation>;
export type UsuarioCreateMutationOptions = Apollo.BaseMutationOptions<UsuarioCreateMutation, UsuarioCreateMutationVariables>;
export declare const UsuarioDeleteDocument: Apollo.DocumentNode;
export type UsuarioDeleteMutationFn = Apollo.MutationFunction<UsuarioDeleteMutation, UsuarioDeleteMutationVariables>;
/**
 * __useUsuarioDeleteMutation__
 *
 * To run a mutation, you first call `useUsuarioDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsuarioDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usuarioDeleteMutation, { data, loading, error }] = useUsuarioDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useUsuarioDeleteMutation(baseOptions?: Apollo.MutationHookOptions<UsuarioDeleteMutation, UsuarioDeleteMutationVariables>): Apollo.MutationTuple<UsuarioDeleteMutation, Exact<{
    id: number;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UsuarioDeleteMutationHookResult = ReturnType<typeof useUsuarioDeleteMutation>;
export type UsuarioDeleteMutationResult = Apollo.MutationResult<UsuarioDeleteMutation>;
export type UsuarioDeleteMutationOptions = Apollo.BaseMutationOptions<UsuarioDeleteMutation, UsuarioDeleteMutationVariables>;
export declare const UsuarioCollectionDocument: Apollo.DocumentNode;
/**
 * __useUsuarioCollectionQuery__
 *
 * To run a query within a React component, call `useUsuarioCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsuarioCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsuarioCollectionQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *      inputPagination: // value for 'inputPagination'
 *   },
 * });
 */
export declare function useUsuarioCollectionQuery(baseOptions?: Apollo.QueryHookOptions<UsuarioCollectionQuery, UsuarioCollectionQueryVariables>): Apollo.QueryResult<UsuarioCollectionQuery, Exact<{
    inputWhere?: InputMaybe<UsuarioFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export declare function useUsuarioCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsuarioCollectionQuery, UsuarioCollectionQueryVariables>): Apollo.LazyQueryResultTuple<UsuarioCollectionQuery, Exact<{
    inputWhere?: InputMaybe<UsuarioFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export declare function useUsuarioCollectionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UsuarioCollectionQuery, UsuarioCollectionQueryVariables>): Apollo.UseSuspenseQueryResult<UsuarioCollectionQuery, Exact<{
    inputWhere?: InputMaybe<UsuarioFilterInput> | undefined;
    inputOrder?: InputMaybe<StringOrderInput> | undefined;
    inputPagination?: InputMaybe<PaginationInput> | undefined;
}>>;
export type UsuarioCollectionQueryHookResult = ReturnType<typeof useUsuarioCollectionQuery>;
export type UsuarioCollectionLazyQueryHookResult = ReturnType<typeof useUsuarioCollectionLazyQuery>;
export type UsuarioCollectionSuspenseQueryHookResult = ReturnType<typeof useUsuarioCollectionSuspenseQuery>;
export type UsuarioCollectionQueryResult = Apollo.QueryResult<UsuarioCollectionQuery, UsuarioCollectionQueryVariables>;
export declare const UsuarioDocument: Apollo.DocumentNode;
/**
 * __useUsuarioQuery__
 *
 * To run a query within a React component, call `useUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsuarioQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useUsuarioQuery(baseOptions: Apollo.QueryHookOptions<UsuarioQuery, UsuarioQueryVariables> & ({
    variables: UsuarioQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<UsuarioQuery, Exact<{
    id: number;
}>>;
export declare function useUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsuarioQuery, UsuarioQueryVariables>): Apollo.LazyQueryResultTuple<UsuarioQuery, Exact<{
    id: number;
}>>;
export declare function useUsuarioSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UsuarioQuery, UsuarioQueryVariables>): Apollo.UseSuspenseQueryResult<UsuarioQuery, Exact<{
    id: number;
}>>;
export type UsuarioQueryHookResult = ReturnType<typeof useUsuarioQuery>;
export type UsuarioLazyQueryHookResult = ReturnType<typeof useUsuarioLazyQuery>;
export type UsuarioSuspenseQueryHookResult = ReturnType<typeof useUsuarioSuspenseQuery>;
export type UsuarioQueryResult = Apollo.QueryResult<UsuarioQuery, UsuarioQueryVariables>;
export declare const namedOperations: {
    Query: {
        Authlogin: string;
        AuthPerfil: string;
        AuthModuloPermisosId: string;
        Authlogout: string;
        ProvinciaSelect: string;
        EstablecimientoSelect: string;
        AdminConfiguracionCollection: string;
        ProvinciaDigtSelect: string;
        CantonDigtSelect: string;
        ParroquiaDigtSelect: string;
        ZonaDigtSelect: string;
        JuntaDigtSelect: string;
        DignidadDigtSelect: string;
        DigtActaByJuntaList: string;
        DigtActaByDignidadList: string;
        MenuCollection: string;
        Menu: string;
        MenuSelect: string;
        ModuloCollection: string;
        Modulo: string;
        ModuloSelect: string;
        RolCollection: string;
        Rol: string;
        RolSelect: string;
        usuarioCollection: string;
        Usuario: string;
    };
    Mutation: {
        AuthCambioPassword: string;
        DigtVotosUpdate: string;
        MenuUpdate: string;
        MenuCreate: string;
        MenuDelete: string;
        ModuloUpdate: string;
        ModuloCreate: string;
        ModuloDelete: string;
        RolUpdate: string;
        RolCreate: string;
        RolDelete: string;
        UsuarioUpdate: string;
        UsuarioCreate: string;
        UsuarioDelete: string;
    };
    Fragment: {
        authLoginFields: string;
        authPerfilFields: string;
        authModuloPermisoIdFields: string;
        authCambioPassword: string;
        authLogout: string;
        provinciaSelectFields: string;
        establecimientoSelectFields: string;
        adminConfiguracionFields: string;
        provinciaDigtSelectFields: string;
        cantonDigtSelectFields: string;
        parroquiaDigtSelectFields: string;
        zonaDigtSelectFields: string;
        juntaDigtSelectFields: string;
        dignidadDigtSelectFields: string;
        actaDigtListFields: string;
        actaByDigititalizacionListFields: string;
        actaDigitaCrudFields: string;
        menuCollectionFields: string;
        menuIdFields: string;
        menuCrudFields: string;
        menuSelectFields: string;
        moduloCollectionFields: string;
        moduloIdFields: string;
        moduloCrudFields: string;
        moduloSelectFields: string;
        rolCollectionFields: string;
        rolIdFields: string;
        rolCrudFields: string;
        rolSelectFields: string;
        usuarioCollectionFields: string;
        usuarioIdFields: string;
        usuarioCrudFields: string;
    };
};
