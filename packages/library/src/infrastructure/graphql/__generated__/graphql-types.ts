import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Base64: { input: any; output: any };
  DateScalar: { input: any; output: any };
  Decimal: { input: any; output: any };
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

export type AuthPerfilQueryVariables = Exact<{ [key: string]: never }>;

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

export type AuthlogoutQueryVariables = Exact<{ [key: string]: never }>;

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
    modulo?: { __typename?: "ModuloAdministracion"; nombre: string } | null;
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
      modulo?: { __typename?: "ModuloAdministracion"; nombre: string } | null;
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
    menu: { __typename?: "MenuAdministracion"; id: number; titulo: string };
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
      menu: { __typename?: "MenuAdministracion"; id: number; titulo: string };
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

export const AuthLoginFieldsFragmentDoc = gql`
  fragment authLoginFields on Login {
    token
    username
    provincia
  }
`;
export const AuthPerfilFieldsFragmentDoc = gql`
  fragment authPerfilFields on UsuarioAuth {
    apellidos
    email
    id
    nombres
    username
    rolusuario {
      id
      rol {
        descripcion
        id
        nombre
      }
    }
  }
`;
export const AuthModuloPermisoIdFieldsFragmentDoc = gql`
  fragment authModuloPermisoIdFields on ModuloAuth {
    codigo
    icono
    nombre
    url
    color
    menu {
      titulo
      icono
      url
      permisos {
        crear
        editar
        eliminar
        imprimir
        leer
      }
    }
  }
`;
export const AuthCambioPasswordFragmentDoc = gql`
  fragment authCambioPassword on GlobalResultType {
    message
    status
  }
`;
export const AuthLogoutFragmentDoc = gql`
  fragment authLogout on GlobalResultType {
    message
    status
  }
`;
export const ProvinciaSelectFieldsFragmentDoc = gql`
  fragment provinciaSelectFields on ProvinciaCollectionType {
    data {
      id
      nombre
    }
  }
`;
export const EstablecimientoSelectFieldsFragmentDoc = gql`
  fragment establecimientoSelectFields on EstablecimientoCollectionType {
    data {
      id
      nombre
    }
  }
`;
export const AdminConfiguracionFieldsFragmentDoc = gql`
  fragment adminConfiguracionFields on ConfiguracionCollectionType {
    data {
      codigoproceso
      estado
      fechaproceso
      id
      nombreproceso
    }
  }
`;
export const ProvinciaDigtSelectFieldsFragmentDoc = gql`
  fragment provinciaDigtSelectFields on ProvinciaDigitalizacionCollectionType {
    data {
      id
      nombre
    }
  }
`;
export const CantonDigtSelectFieldsFragmentDoc = gql`
  fragment cantonDigtSelectFields on CantonDigitalizacionCollectionType {
    data {
      id
      nombre
    }
  }
`;
export const ParroquiaDigtSelectFieldsFragmentDoc = gql`
  fragment parroquiaDigtSelectFields on ParroquiaDigitalizacionCollectionType {
    data {
      id
      nombre
    }
  }
`;
export const ZonaDigtSelectFieldsFragmentDoc = gql`
  fragment zonaDigtSelectFields on ZonaDigitalizacionCollectionType {
    data {
      nombre
      zona_id
    }
  }
`;
export const JuntaDigtSelectFieldsFragmentDoc = gql`
  fragment juntaDigtSelectFields on JuntaDigitalizacionCollectionType {
    data {
      electores
      id
      junta
      sexo
      zona_id
    }
  }
`;
export const DignidadDigtSelectFieldsFragmentDoc = gql`
  fragment dignidadDigtSelectFields on DignidadDigitalizacionCollectionType {
    data {
      id
      nombre
    }
  }
`;
export const ActaDigtListFieldsFragmentDoc = gql`
  fragment actaDigtListFields on ActaDigitalizacionVoto {
    blancosdigitacion
    dignidad_id
    estado
    id
    junta_id
    nulosdigitacion
    peticion
    seguridad
    sufragantesdigitacion
    dignidad {
      ambito
      estado
      id
      nombre
      orden
    }
    junta {
      electores
      id
      junta
      sexo
      zona_id
      canton {
        id
        nombre
      }
      parroquia {
        id
        nombre
      }
      provincia {
        id
        nombre
      }
    }
    votos {
      votos
      votoscontrol
      votosdigitacion
      votosicr
      candidato {
        cedula
        id
        nombre
        orden
        dignidad {
          ambito
          estado
          id
          nombre
          orden
        }
        partido {
          id
          nombre
          lista
          siglas
        }
      }
    }
  }
`;
export const ActaByDigititalizacionListFieldsFragmentDoc = gql`
  fragment actaByDigititalizacionListFields on ActaDigitalizacionVotoImagen {
    id
    votos {
      votosdigitacion
      imagensegmento {
        imagen
        candidato_id
      }
    }
  }
`;
export const ActaDigitaCrudFieldsFragmentDoc = gql`
  fragment actaDigitaCrudFields on GlobalResultType {
    message
    status
  }
`;
export const MenuCollectionFieldsFragmentDoc = gql`
  fragment menuCollectionFields on MenuCollectionType {
    data {
      estado
      icono
      id
      modulo_id
      orden
      titulo
      url
      modulo {
        nombre
      }
    }
    pageInfo {
      count
      hasNextPage
      hasPreviousPage
      limit
      offset
    }
  }
`;
export const MenuIdFieldsFragmentDoc = gql`
  fragment menuIdFields on MenuAdministracion {
    estado
    icono
    id
    orden
    titulo
    url
    modulo {
      id
      nombre
    }
  }
`;
export const MenuCrudFieldsFragmentDoc = gql`
  fragment menuCrudFields on GlobalResultType {
    message
    status
  }
`;
export const MenuSelectFieldsFragmentDoc = gql`
  fragment menuSelectFields on MenuCollectionType {
    data {
      id
      titulo
    }
  }
`;
export const ModuloCollectionFieldsFragmentDoc = gql`
  fragment moduloCollectionFields on ModuloCollectionType {
    data {
      codigo
      color
      estado
      icono
      id
      nombre
      url
    }
    pageInfo {
      count
      hasNextPage
      hasPreviousPage
      limit
      offset
    }
  }
`;
export const ModuloIdFieldsFragmentDoc = gql`
  fragment moduloIdFields on ModuloAdministracion {
    codigo
    color
    estado
    icono
    id
    nombre
    url
  }
`;
export const ModuloCrudFieldsFragmentDoc = gql`
  fragment moduloCrudFields on GlobalResultType {
    message
    status
  }
`;
export const ModuloSelectFieldsFragmentDoc = gql`
  fragment moduloSelectFields on ModuloCollectionType {
    data {
      id
      nombre
    }
  }
`;
export const RolCollectionFieldsFragmentDoc = gql`
  fragment rolCollectionFields on RolCollectionType {
    data {
      descripcion
      estado
      id
      nombre
    }
    pageInfo {
      count
      hasNextPage
      hasPreviousPage
      limit
      offset
    }
  }
`;
export const RolIdFieldsFragmentDoc = gql`
  fragment rolIdFields on Rol {
    descripcion
    estado
    id
    nombre
    permisos {
      crear
      editar
      eliminar
      estado
      id
      imprimir
      leer
      menu {
        id
        titulo
      }
    }
  }
`;
export const RolCrudFieldsFragmentDoc = gql`
  fragment rolCrudFields on GlobalResultType {
    message
    status
  }
`;
export const RolSelectFieldsFragmentDoc = gql`
  fragment rolSelectFields on RolCollectionType {
    data {
      id
      nombre
    }
  }
`;
export const UsuarioCollectionFieldsFragmentDoc = gql`
  fragment usuarioCollectionFields on UsuarioCollectionType {
    data {
      apellidos
      estado
      id
      nombres
      provincia_id
      username
      email
      provincia {
        id
        nombre
      }
    }
    pageInfo {
      count
      hasNextPage
      hasPreviousPage
      limit
      offset
    }
  }
`;
export const UsuarioIdFieldsFragmentDoc = gql`
  fragment usuarioIdFields on UsuarioAdministracion {
    apellidos
    establecimiento_id
    estado
    id
    nombres
    provincia_id
    username
    email
    rolusuario {
      id
      rol {
        id
        nombre
      }
    }
    provincia {
      id
      nombre
    }
    establecimiento {
      id
      logo
      nombre
    }
  }
`;
export const UsuarioCrudFieldsFragmentDoc = gql`
  fragment usuarioCrudFields on GlobalResultType {
    message
    status
  }
`;
export const AuthloginDocument = gql`
  query Authlogin($password: String!, $username: String!) {
    authLogin(password: $password, username: $username) {
      ...authLoginFields
    }
  }
  ${AuthLoginFieldsFragmentDoc}
`;

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
export function useAuthloginQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuthloginQuery,
    AuthloginQueryVariables
  > &
    ({ variables: AuthloginQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuthloginQuery, AuthloginQueryVariables>(
    AuthloginDocument,
    options
  );
}
export function useAuthloginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthloginQuery,
    AuthloginQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AuthloginQuery, AuthloginQueryVariables>(
    AuthloginDocument,
    options
  );
}
export function useAuthloginSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AuthloginQuery,
    AuthloginQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AuthloginQuery, AuthloginQueryVariables>(
    AuthloginDocument,
    options
  );
}
export type AuthloginQueryHookResult = ReturnType<typeof useAuthloginQuery>;
export type AuthloginLazyQueryHookResult = ReturnType<
  typeof useAuthloginLazyQuery
>;
export type AuthloginSuspenseQueryHookResult = ReturnType<
  typeof useAuthloginSuspenseQuery
>;
export type AuthloginQueryResult = Apollo.QueryResult<
  AuthloginQuery,
  AuthloginQueryVariables
>;
export const AuthPerfilDocument = gql`
  query AuthPerfil {
    authPerfil {
      ...authPerfilFields
    }
  }
  ${AuthPerfilFieldsFragmentDoc}
`;

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
export function useAuthPerfilQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AuthPerfilQuery,
    AuthPerfilQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuthPerfilQuery, AuthPerfilQueryVariables>(
    AuthPerfilDocument,
    options
  );
}
export function useAuthPerfilLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthPerfilQuery,
    AuthPerfilQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AuthPerfilQuery, AuthPerfilQueryVariables>(
    AuthPerfilDocument,
    options
  );
}
export function useAuthPerfilSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AuthPerfilQuery,
    AuthPerfilQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AuthPerfilQuery, AuthPerfilQueryVariables>(
    AuthPerfilDocument,
    options
  );
}
export type AuthPerfilQueryHookResult = ReturnType<typeof useAuthPerfilQuery>;
export type AuthPerfilLazyQueryHookResult = ReturnType<
  typeof useAuthPerfilLazyQuery
>;
export type AuthPerfilSuspenseQueryHookResult = ReturnType<
  typeof useAuthPerfilSuspenseQuery
>;
export type AuthPerfilQueryResult = Apollo.QueryResult<
  AuthPerfilQuery,
  AuthPerfilQueryVariables
>;
export const AuthModuloPermisosIdDocument = gql`
  query AuthModuloPermisosId($rol_id: Int!) {
    authModuloPermisosId(rol_id: $rol_id) {
      ...authModuloPermisoIdFields
    }
  }
  ${AuthModuloPermisoIdFieldsFragmentDoc}
`;

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
export function useAuthModuloPermisosIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuthModuloPermisosIdQuery,
    AuthModuloPermisosIdQueryVariables
  > &
    (
      | { variables: AuthModuloPermisosIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AuthModuloPermisosIdQuery,
    AuthModuloPermisosIdQueryVariables
  >(AuthModuloPermisosIdDocument, options);
}
export function useAuthModuloPermisosIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthModuloPermisosIdQuery,
    AuthModuloPermisosIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AuthModuloPermisosIdQuery,
    AuthModuloPermisosIdQueryVariables
  >(AuthModuloPermisosIdDocument, options);
}
export function useAuthModuloPermisosIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AuthModuloPermisosIdQuery,
    AuthModuloPermisosIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    AuthModuloPermisosIdQuery,
    AuthModuloPermisosIdQueryVariables
  >(AuthModuloPermisosIdDocument, options);
}
export type AuthModuloPermisosIdQueryHookResult = ReturnType<
  typeof useAuthModuloPermisosIdQuery
>;
export type AuthModuloPermisosIdLazyQueryHookResult = ReturnType<
  typeof useAuthModuloPermisosIdLazyQuery
>;
export type AuthModuloPermisosIdSuspenseQueryHookResult = ReturnType<
  typeof useAuthModuloPermisosIdSuspenseQuery
>;
export type AuthModuloPermisosIdQueryResult = Apollo.QueryResult<
  AuthModuloPermisosIdQuery,
  AuthModuloPermisosIdQueryVariables
>;
export const AuthCambioPasswordDocument = gql`
  mutation AuthCambioPassword($password: String!) {
    authCambioPassword(password: $password) {
      ...authCambioPassword
    }
  }
  ${AuthCambioPasswordFragmentDoc}
`;
export type AuthCambioPasswordMutationFn = Apollo.MutationFunction<
  AuthCambioPasswordMutation,
  AuthCambioPasswordMutationVariables
>;

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
export function useAuthCambioPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthCambioPasswordMutation,
    AuthCambioPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthCambioPasswordMutation,
    AuthCambioPasswordMutationVariables
  >(AuthCambioPasswordDocument, options);
}
export type AuthCambioPasswordMutationHookResult = ReturnType<
  typeof useAuthCambioPasswordMutation
>;
export type AuthCambioPasswordMutationResult =
  Apollo.MutationResult<AuthCambioPasswordMutation>;
export type AuthCambioPasswordMutationOptions = Apollo.BaseMutationOptions<
  AuthCambioPasswordMutation,
  AuthCambioPasswordMutationVariables
>;
export const AuthlogoutDocument = gql`
  query Authlogout {
    authLogout {
      ...authLogout
    }
  }
  ${AuthLogoutFragmentDoc}
`;

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
export function useAuthlogoutQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AuthlogoutQuery,
    AuthlogoutQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuthlogoutQuery, AuthlogoutQueryVariables>(
    AuthlogoutDocument,
    options
  );
}
export function useAuthlogoutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthlogoutQuery,
    AuthlogoutQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AuthlogoutQuery, AuthlogoutQueryVariables>(
    AuthlogoutDocument,
    options
  );
}
export function useAuthlogoutSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AuthlogoutQuery,
    AuthlogoutQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AuthlogoutQuery, AuthlogoutQueryVariables>(
    AuthlogoutDocument,
    options
  );
}
export type AuthlogoutQueryHookResult = ReturnType<typeof useAuthlogoutQuery>;
export type AuthlogoutLazyQueryHookResult = ReturnType<
  typeof useAuthlogoutLazyQuery
>;
export type AuthlogoutSuspenseQueryHookResult = ReturnType<
  typeof useAuthlogoutSuspenseQuery
>;
export type AuthlogoutQueryResult = Apollo.QueryResult<
  AuthlogoutQuery,
  AuthlogoutQueryVariables
>;
export const ProvinciaSelectDocument = gql`
  query ProvinciaSelect(
    $inputWhere: ProvinciaFilterInput
    $inputOrder: StringOrderInput
  ) {
    adminProvinciaCollection(where: $inputWhere, order: $inputOrder) {
      ...provinciaSelectFields
    }
  }
  ${ProvinciaSelectFieldsFragmentDoc}
`;

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
export function useProvinciaSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ProvinciaSelectQuery,
    ProvinciaSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProvinciaSelectQuery, ProvinciaSelectQueryVariables>(
    ProvinciaSelectDocument,
    options
  );
}
export function useProvinciaSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProvinciaSelectQuery,
    ProvinciaSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ProvinciaSelectQuery,
    ProvinciaSelectQueryVariables
  >(ProvinciaSelectDocument, options);
}
export function useProvinciaSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ProvinciaSelectQuery,
    ProvinciaSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ProvinciaSelectQuery,
    ProvinciaSelectQueryVariables
  >(ProvinciaSelectDocument, options);
}
export type ProvinciaSelectQueryHookResult = ReturnType<
  typeof useProvinciaSelectQuery
>;
export type ProvinciaSelectLazyQueryHookResult = ReturnType<
  typeof useProvinciaSelectLazyQuery
>;
export type ProvinciaSelectSuspenseQueryHookResult = ReturnType<
  typeof useProvinciaSelectSuspenseQuery
>;
export type ProvinciaSelectQueryResult = Apollo.QueryResult<
  ProvinciaSelectQuery,
  ProvinciaSelectQueryVariables
>;
export const EstablecimientoSelectDocument = gql`
  query EstablecimientoSelect(
    $inputWhere: EstablecimientoFilterInput
    $inputOrder: StringOrderInput
  ) {
    adminEstablecimientoCollection(where: $inputWhere, order: $inputOrder) {
      ...establecimientoSelectFields
    }
  }
  ${EstablecimientoSelectFieldsFragmentDoc}
`;

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
export function useEstablecimientoSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    EstablecimientoSelectQuery,
    EstablecimientoSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    EstablecimientoSelectQuery,
    EstablecimientoSelectQueryVariables
  >(EstablecimientoSelectDocument, options);
}
export function useEstablecimientoSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EstablecimientoSelectQuery,
    EstablecimientoSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    EstablecimientoSelectQuery,
    EstablecimientoSelectQueryVariables
  >(EstablecimientoSelectDocument, options);
}
export function useEstablecimientoSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    EstablecimientoSelectQuery,
    EstablecimientoSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    EstablecimientoSelectQuery,
    EstablecimientoSelectQueryVariables
  >(EstablecimientoSelectDocument, options);
}
export type EstablecimientoSelectQueryHookResult = ReturnType<
  typeof useEstablecimientoSelectQuery
>;
export type EstablecimientoSelectLazyQueryHookResult = ReturnType<
  typeof useEstablecimientoSelectLazyQuery
>;
export type EstablecimientoSelectSuspenseQueryHookResult = ReturnType<
  typeof useEstablecimientoSelectSuspenseQuery
>;
export type EstablecimientoSelectQueryResult = Apollo.QueryResult<
  EstablecimientoSelectQuery,
  EstablecimientoSelectQueryVariables
>;
export const AdminConfiguracionCollectionDocument = gql`
  query AdminConfiguracionCollection(
    $inputWhere: ConfiguracionFilterInput
    $inputOrder: StringOrderInput
  ) {
    adminConfiguracionCollection(where: $inputWhere, order: $inputOrder) {
      ...adminConfiguracionFields
    }
  }
  ${AdminConfiguracionFieldsFragmentDoc}
`;

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
export function useAdminConfiguracionCollectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AdminConfiguracionCollectionQuery,
    AdminConfiguracionCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AdminConfiguracionCollectionQuery,
    AdminConfiguracionCollectionQueryVariables
  >(AdminConfiguracionCollectionDocument, options);
}
export function useAdminConfiguracionCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminConfiguracionCollectionQuery,
    AdminConfiguracionCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AdminConfiguracionCollectionQuery,
    AdminConfiguracionCollectionQueryVariables
  >(AdminConfiguracionCollectionDocument, options);
}
export function useAdminConfiguracionCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AdminConfiguracionCollectionQuery,
    AdminConfiguracionCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    AdminConfiguracionCollectionQuery,
    AdminConfiguracionCollectionQueryVariables
  >(AdminConfiguracionCollectionDocument, options);
}
export type AdminConfiguracionCollectionQueryHookResult = ReturnType<
  typeof useAdminConfiguracionCollectionQuery
>;
export type AdminConfiguracionCollectionLazyQueryHookResult = ReturnType<
  typeof useAdminConfiguracionCollectionLazyQuery
>;
export type AdminConfiguracionCollectionSuspenseQueryHookResult = ReturnType<
  typeof useAdminConfiguracionCollectionSuspenseQuery
>;
export type AdminConfiguracionCollectionQueryResult = Apollo.QueryResult<
  AdminConfiguracionCollectionQuery,
  AdminConfiguracionCollectionQueryVariables
>;
export const DigtVotosUpdateDocument = gql`
  mutation DigtVotosUpdate($inputUpdate: VotosDigitacionUpdateInput!) {
    digtVotosUpdate(dataInput: $inputUpdate) {
      ...actaDigitaCrudFields
    }
  }
  ${ActaDigitaCrudFieldsFragmentDoc}
`;
export type DigtVotosUpdateMutationFn = Apollo.MutationFunction<
  DigtVotosUpdateMutation,
  DigtVotosUpdateMutationVariables
>;

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
export function useDigtVotosUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DigtVotosUpdateMutation,
    DigtVotosUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DigtVotosUpdateMutation,
    DigtVotosUpdateMutationVariables
  >(DigtVotosUpdateDocument, options);
}
export type DigtVotosUpdateMutationHookResult = ReturnType<
  typeof useDigtVotosUpdateMutation
>;
export type DigtVotosUpdateMutationResult =
  Apollo.MutationResult<DigtVotosUpdateMutation>;
export type DigtVotosUpdateMutationOptions = Apollo.BaseMutationOptions<
  DigtVotosUpdateMutation,
  DigtVotosUpdateMutationVariables
>;
export const ProvinciaDigtSelectDocument = gql`
  query ProvinciaDigtSelect(
    $inputWhere: ProvinciaDigitalizacionFilterInput
    $inputOrder: StringOrderInput
  ) {
    digtProvinciaCollection(where: $inputWhere, order: $inputOrder) {
      ...provinciaDigtSelectFields
    }
  }
  ${ProvinciaDigtSelectFieldsFragmentDoc}
`;

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
export function useProvinciaDigtSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ProvinciaDigtSelectQuery,
    ProvinciaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ProvinciaDigtSelectQuery,
    ProvinciaDigtSelectQueryVariables
  >(ProvinciaDigtSelectDocument, options);
}
export function useProvinciaDigtSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProvinciaDigtSelectQuery,
    ProvinciaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ProvinciaDigtSelectQuery,
    ProvinciaDigtSelectQueryVariables
  >(ProvinciaDigtSelectDocument, options);
}
export function useProvinciaDigtSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ProvinciaDigtSelectQuery,
    ProvinciaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ProvinciaDigtSelectQuery,
    ProvinciaDigtSelectQueryVariables
  >(ProvinciaDigtSelectDocument, options);
}
export type ProvinciaDigtSelectQueryHookResult = ReturnType<
  typeof useProvinciaDigtSelectQuery
>;
export type ProvinciaDigtSelectLazyQueryHookResult = ReturnType<
  typeof useProvinciaDigtSelectLazyQuery
>;
export type ProvinciaDigtSelectSuspenseQueryHookResult = ReturnType<
  typeof useProvinciaDigtSelectSuspenseQuery
>;
export type ProvinciaDigtSelectQueryResult = Apollo.QueryResult<
  ProvinciaDigtSelectQuery,
  ProvinciaDigtSelectQueryVariables
>;
export const CantonDigtSelectDocument = gql`
  query CantonDigtSelect(
    $inputWhere: CantonDigitalizacionFilterInput
    $inputOrder: StringOrderInput
  ) {
    digtCantonCollection(where: $inputWhere, order: $inputOrder) {
      ...cantonDigtSelectFields
    }
  }
  ${CantonDigtSelectFieldsFragmentDoc}
`;

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
export function useCantonDigtSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CantonDigtSelectQuery,
    CantonDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CantonDigtSelectQuery, CantonDigtSelectQueryVariables>(
    CantonDigtSelectDocument,
    options
  );
}
export function useCantonDigtSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CantonDigtSelectQuery,
    CantonDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CantonDigtSelectQuery,
    CantonDigtSelectQueryVariables
  >(CantonDigtSelectDocument, options);
}
export function useCantonDigtSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CantonDigtSelectQuery,
    CantonDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    CantonDigtSelectQuery,
    CantonDigtSelectQueryVariables
  >(CantonDigtSelectDocument, options);
}
export type CantonDigtSelectQueryHookResult = ReturnType<
  typeof useCantonDigtSelectQuery
>;
export type CantonDigtSelectLazyQueryHookResult = ReturnType<
  typeof useCantonDigtSelectLazyQuery
>;
export type CantonDigtSelectSuspenseQueryHookResult = ReturnType<
  typeof useCantonDigtSelectSuspenseQuery
>;
export type CantonDigtSelectQueryResult = Apollo.QueryResult<
  CantonDigtSelectQuery,
  CantonDigtSelectQueryVariables
>;
export const ParroquiaDigtSelectDocument = gql`
  query ParroquiaDigtSelect(
    $inputWhere: ParroquiaDigitalizacionFilterInput
    $inputOrder: StringOrderInput
  ) {
    digtParroquiaCollection(where: $inputWhere, order: $inputOrder) {
      ...parroquiaDigtSelectFields
    }
  }
  ${ParroquiaDigtSelectFieldsFragmentDoc}
`;

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
export function useParroquiaDigtSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ParroquiaDigtSelectQuery,
    ParroquiaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ParroquiaDigtSelectQuery,
    ParroquiaDigtSelectQueryVariables
  >(ParroquiaDigtSelectDocument, options);
}
export function useParroquiaDigtSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ParroquiaDigtSelectQuery,
    ParroquiaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ParroquiaDigtSelectQuery,
    ParroquiaDigtSelectQueryVariables
  >(ParroquiaDigtSelectDocument, options);
}
export function useParroquiaDigtSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ParroquiaDigtSelectQuery,
    ParroquiaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ParroquiaDigtSelectQuery,
    ParroquiaDigtSelectQueryVariables
  >(ParroquiaDigtSelectDocument, options);
}
export type ParroquiaDigtSelectQueryHookResult = ReturnType<
  typeof useParroquiaDigtSelectQuery
>;
export type ParroquiaDigtSelectLazyQueryHookResult = ReturnType<
  typeof useParroquiaDigtSelectLazyQuery
>;
export type ParroquiaDigtSelectSuspenseQueryHookResult = ReturnType<
  typeof useParroquiaDigtSelectSuspenseQuery
>;
export type ParroquiaDigtSelectQueryResult = Apollo.QueryResult<
  ParroquiaDigtSelectQuery,
  ParroquiaDigtSelectQueryVariables
>;
export const ZonaDigtSelectDocument = gql`
  query ZonaDigtSelect(
    $inputWhere: ZonaDigitalizacionFilterInput
    $inputOrder: StringOrderInput
  ) {
    digtZonaCollection(where: $inputWhere, order: $inputOrder) {
      ...zonaDigtSelectFields
    }
  }
  ${ZonaDigtSelectFieldsFragmentDoc}
`;

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
export function useZonaDigtSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ZonaDigtSelectQuery,
    ZonaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ZonaDigtSelectQuery, ZonaDigtSelectQueryVariables>(
    ZonaDigtSelectDocument,
    options
  );
}
export function useZonaDigtSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ZonaDigtSelectQuery,
    ZonaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ZonaDigtSelectQuery, ZonaDigtSelectQueryVariables>(
    ZonaDigtSelectDocument,
    options
  );
}
export function useZonaDigtSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ZonaDigtSelectQuery,
    ZonaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ZonaDigtSelectQuery,
    ZonaDigtSelectQueryVariables
  >(ZonaDigtSelectDocument, options);
}
export type ZonaDigtSelectQueryHookResult = ReturnType<
  typeof useZonaDigtSelectQuery
>;
export type ZonaDigtSelectLazyQueryHookResult = ReturnType<
  typeof useZonaDigtSelectLazyQuery
>;
export type ZonaDigtSelectSuspenseQueryHookResult = ReturnType<
  typeof useZonaDigtSelectSuspenseQuery
>;
export type ZonaDigtSelectQueryResult = Apollo.QueryResult<
  ZonaDigtSelectQuery,
  ZonaDigtSelectQueryVariables
>;
export const JuntaDigtSelectDocument = gql`
  query JuntaDigtSelect(
    $inputWhere: JuntaDigitalizacionFilterInput
    $inputOrder: StringOrderInput
  ) {
    digtJuntaCollection(where: $inputWhere, order: $inputOrder) {
      ...juntaDigtSelectFields
    }
  }
  ${JuntaDigtSelectFieldsFragmentDoc}
`;

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
export function useJuntaDigtSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    JuntaDigtSelectQuery,
    JuntaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<JuntaDigtSelectQuery, JuntaDigtSelectQueryVariables>(
    JuntaDigtSelectDocument,
    options
  );
}
export function useJuntaDigtSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    JuntaDigtSelectQuery,
    JuntaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    JuntaDigtSelectQuery,
    JuntaDigtSelectQueryVariables
  >(JuntaDigtSelectDocument, options);
}
export function useJuntaDigtSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    JuntaDigtSelectQuery,
    JuntaDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    JuntaDigtSelectQuery,
    JuntaDigtSelectQueryVariables
  >(JuntaDigtSelectDocument, options);
}
export type JuntaDigtSelectQueryHookResult = ReturnType<
  typeof useJuntaDigtSelectQuery
>;
export type JuntaDigtSelectLazyQueryHookResult = ReturnType<
  typeof useJuntaDigtSelectLazyQuery
>;
export type JuntaDigtSelectSuspenseQueryHookResult = ReturnType<
  typeof useJuntaDigtSelectSuspenseQuery
>;
export type JuntaDigtSelectQueryResult = Apollo.QueryResult<
  JuntaDigtSelectQuery,
  JuntaDigtSelectQueryVariables
>;
export const DignidadDigtSelectDocument = gql`
  query DignidadDigtSelect(
    $inputWhere: DignidadDigitalizacionFilterInput
    $inputOrder: StringOrderInput
  ) {
    digtDignidadCollection(where: $inputWhere, order: $inputOrder) {
      ...dignidadDigtSelectFields
    }
  }
  ${DignidadDigtSelectFieldsFragmentDoc}
`;

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
export function useDignidadDigtSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DignidadDigtSelectQuery,
    DignidadDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DignidadDigtSelectQuery,
    DignidadDigtSelectQueryVariables
  >(DignidadDigtSelectDocument, options);
}
export function useDignidadDigtSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DignidadDigtSelectQuery,
    DignidadDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DignidadDigtSelectQuery,
    DignidadDigtSelectQueryVariables
  >(DignidadDigtSelectDocument, options);
}
export function useDignidadDigtSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    DignidadDigtSelectQuery,
    DignidadDigtSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DignidadDigtSelectQuery,
    DignidadDigtSelectQueryVariables
  >(DignidadDigtSelectDocument, options);
}
export type DignidadDigtSelectQueryHookResult = ReturnType<
  typeof useDignidadDigtSelectQuery
>;
export type DignidadDigtSelectLazyQueryHookResult = ReturnType<
  typeof useDignidadDigtSelectLazyQuery
>;
export type DignidadDigtSelectSuspenseQueryHookResult = ReturnType<
  typeof useDignidadDigtSelectSuspenseQuery
>;
export type DignidadDigtSelectQueryResult = Apollo.QueryResult<
  DignidadDigtSelectQuery,
  DignidadDigtSelectQueryVariables
>;
export const DigtActaByJuntaListDocument = gql`
  query DigtActaByJuntaList($dignidad_id: Int!, $junta_id: Int!) {
    digtActaByJuntaList(dignidad_id: $dignidad_id, junta_id: $junta_id) {
      ...actaDigtListFields
    }
  }
  ${ActaDigtListFieldsFragmentDoc}
`;

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
export function useDigtActaByJuntaListQuery(
  baseOptions: Apollo.QueryHookOptions<
    DigtActaByJuntaListQuery,
    DigtActaByJuntaListQueryVariables
  > &
    (
      | { variables: DigtActaByJuntaListQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DigtActaByJuntaListQuery,
    DigtActaByJuntaListQueryVariables
  >(DigtActaByJuntaListDocument, options);
}
export function useDigtActaByJuntaListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DigtActaByJuntaListQuery,
    DigtActaByJuntaListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DigtActaByJuntaListQuery,
    DigtActaByJuntaListQueryVariables
  >(DigtActaByJuntaListDocument, options);
}
export function useDigtActaByJuntaListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    DigtActaByJuntaListQuery,
    DigtActaByJuntaListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DigtActaByJuntaListQuery,
    DigtActaByJuntaListQueryVariables
  >(DigtActaByJuntaListDocument, options);
}
export type DigtActaByJuntaListQueryHookResult = ReturnType<
  typeof useDigtActaByJuntaListQuery
>;
export type DigtActaByJuntaListLazyQueryHookResult = ReturnType<
  typeof useDigtActaByJuntaListLazyQuery
>;
export type DigtActaByJuntaListSuspenseQueryHookResult = ReturnType<
  typeof useDigtActaByJuntaListSuspenseQuery
>;
export type DigtActaByJuntaListQueryResult = Apollo.QueryResult<
  DigtActaByJuntaListQuery,
  DigtActaByJuntaListQueryVariables
>;
export const DigtActaByDignidadListDocument = gql`
  query DigtActaByDignidadList($dignidad_id: Int!) {
    digtActaByDignidadList(dignidad_id: $dignidad_id) {
      ...actaByDigititalizacionListFields
    }
  }
  ${ActaByDigititalizacionListFieldsFragmentDoc}
`;

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
export function useDigtActaByDignidadListQuery(
  baseOptions: Apollo.QueryHookOptions<
    DigtActaByDignidadListQuery,
    DigtActaByDignidadListQueryVariables
  > &
    (
      | { variables: DigtActaByDignidadListQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DigtActaByDignidadListQuery,
    DigtActaByDignidadListQueryVariables
  >(DigtActaByDignidadListDocument, options);
}
export function useDigtActaByDignidadListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DigtActaByDignidadListQuery,
    DigtActaByDignidadListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DigtActaByDignidadListQuery,
    DigtActaByDignidadListQueryVariables
  >(DigtActaByDignidadListDocument, options);
}
export function useDigtActaByDignidadListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    DigtActaByDignidadListQuery,
    DigtActaByDignidadListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DigtActaByDignidadListQuery,
    DigtActaByDignidadListQueryVariables
  >(DigtActaByDignidadListDocument, options);
}
export type DigtActaByDignidadListQueryHookResult = ReturnType<
  typeof useDigtActaByDignidadListQuery
>;
export type DigtActaByDignidadListLazyQueryHookResult = ReturnType<
  typeof useDigtActaByDignidadListLazyQuery
>;
export type DigtActaByDignidadListSuspenseQueryHookResult = ReturnType<
  typeof useDigtActaByDignidadListSuspenseQuery
>;
export type DigtActaByDignidadListQueryResult = Apollo.QueryResult<
  DigtActaByDignidadListQuery,
  DigtActaByDignidadListQueryVariables
>;
export const MenuUpdateDocument = gql`
  mutation MenuUpdate($inputUpdate: MenuUpdateInput!) {
    adminMenuUpdate(dataInput: $inputUpdate) {
      ...menuCrudFields
    }
  }
  ${MenuCrudFieldsFragmentDoc}
`;
export type MenuUpdateMutationFn = Apollo.MutationFunction<
  MenuUpdateMutation,
  MenuUpdateMutationVariables
>;

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
export function useMenuUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MenuUpdateMutation,
    MenuUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<MenuUpdateMutation, MenuUpdateMutationVariables>(
    MenuUpdateDocument,
    options
  );
}
export type MenuUpdateMutationHookResult = ReturnType<
  typeof useMenuUpdateMutation
>;
export type MenuUpdateMutationResult =
  Apollo.MutationResult<MenuUpdateMutation>;
export type MenuUpdateMutationOptions = Apollo.BaseMutationOptions<
  MenuUpdateMutation,
  MenuUpdateMutationVariables
>;
export const MenuCreateDocument = gql`
  mutation MenuCreate($inputCreate: MenuCreateInput!) {
    adminMenuCreate(dataInput: $inputCreate) {
      ...menuCrudFields
    }
  }
  ${MenuCrudFieldsFragmentDoc}
`;
export type MenuCreateMutationFn = Apollo.MutationFunction<
  MenuCreateMutation,
  MenuCreateMutationVariables
>;

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
export function useMenuCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MenuCreateMutation,
    MenuCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<MenuCreateMutation, MenuCreateMutationVariables>(
    MenuCreateDocument,
    options
  );
}
export type MenuCreateMutationHookResult = ReturnType<
  typeof useMenuCreateMutation
>;
export type MenuCreateMutationResult =
  Apollo.MutationResult<MenuCreateMutation>;
export type MenuCreateMutationOptions = Apollo.BaseMutationOptions<
  MenuCreateMutation,
  MenuCreateMutationVariables
>;
export const MenuDeleteDocument = gql`
  mutation MenuDelete($id: Int!) {
    adminMenuDelete(id: $id) {
      ...menuCrudFields
    }
  }
  ${MenuCrudFieldsFragmentDoc}
`;
export type MenuDeleteMutationFn = Apollo.MutationFunction<
  MenuDeleteMutation,
  MenuDeleteMutationVariables
>;

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
export function useMenuDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MenuDeleteMutation,
    MenuDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<MenuDeleteMutation, MenuDeleteMutationVariables>(
    MenuDeleteDocument,
    options
  );
}
export type MenuDeleteMutationHookResult = ReturnType<
  typeof useMenuDeleteMutation
>;
export type MenuDeleteMutationResult =
  Apollo.MutationResult<MenuDeleteMutation>;
export type MenuDeleteMutationOptions = Apollo.BaseMutationOptions<
  MenuDeleteMutation,
  MenuDeleteMutationVariables
>;
export const MenuCollectionDocument = gql`
  query MenuCollection(
    $inputWhere: MenuFilterInput
    $inputOrder: StringOrderInput
    $inputPagination: PaginationInput
  ) {
    adminMenuCollection(
      where: $inputWhere
      order: $inputOrder
      pagination: $inputPagination
    ) {
      ...menuCollectionFields
    }
  }
  ${MenuCollectionFieldsFragmentDoc}
`;

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
export function useMenuCollectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MenuCollectionQuery,
    MenuCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MenuCollectionQuery, MenuCollectionQueryVariables>(
    MenuCollectionDocument,
    options
  );
}
export function useMenuCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MenuCollectionQuery,
    MenuCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MenuCollectionQuery, MenuCollectionQueryVariables>(
    MenuCollectionDocument,
    options
  );
}
export function useMenuCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MenuCollectionQuery,
    MenuCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MenuCollectionQuery,
    MenuCollectionQueryVariables
  >(MenuCollectionDocument, options);
}
export type MenuCollectionQueryHookResult = ReturnType<
  typeof useMenuCollectionQuery
>;
export type MenuCollectionLazyQueryHookResult = ReturnType<
  typeof useMenuCollectionLazyQuery
>;
export type MenuCollectionSuspenseQueryHookResult = ReturnType<
  typeof useMenuCollectionSuspenseQuery
>;
export type MenuCollectionQueryResult = Apollo.QueryResult<
  MenuCollectionQuery,
  MenuCollectionQueryVariables
>;
export const MenuDocument = gql`
  query Menu($id: Int!) {
    adminMenu(id: $id) {
      ...menuIdFields
    }
  }
  ${MenuIdFieldsFragmentDoc}
`;

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
export function useMenuQuery(
  baseOptions: Apollo.QueryHookOptions<MenuQuery, MenuQueryVariables> &
    ({ variables: MenuQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
}
export function useMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MenuQuery, MenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MenuQuery, MenuQueryVariables>(
    MenuDocument,
    options
  );
}
export function useMenuSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<MenuQuery, MenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MenuQuery, MenuQueryVariables>(
    MenuDocument,
    options
  );
}
export type MenuQueryHookResult = ReturnType<typeof useMenuQuery>;
export type MenuLazyQueryHookResult = ReturnType<typeof useMenuLazyQuery>;
export type MenuSuspenseQueryHookResult = ReturnType<
  typeof useMenuSuspenseQuery
>;
export type MenuQueryResult = Apollo.QueryResult<MenuQuery, MenuQueryVariables>;
export const MenuSelectDocument = gql`
  query MenuSelect(
    $inputWhere: MenuFilterInput
    $inputOrder: StringOrderInput
  ) {
    adminMenuCollection(where: $inputWhere, order: $inputOrder) {
      ...menuSelectFields
    }
  }
  ${MenuSelectFieldsFragmentDoc}
`;

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
export function useMenuSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MenuSelectQuery,
    MenuSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MenuSelectQuery, MenuSelectQueryVariables>(
    MenuSelectDocument,
    options
  );
}
export function useMenuSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MenuSelectQuery,
    MenuSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MenuSelectQuery, MenuSelectQueryVariables>(
    MenuSelectDocument,
    options
  );
}
export function useMenuSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MenuSelectQuery,
    MenuSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MenuSelectQuery, MenuSelectQueryVariables>(
    MenuSelectDocument,
    options
  );
}
export type MenuSelectQueryHookResult = ReturnType<typeof useMenuSelectQuery>;
export type MenuSelectLazyQueryHookResult = ReturnType<
  typeof useMenuSelectLazyQuery
>;
export type MenuSelectSuspenseQueryHookResult = ReturnType<
  typeof useMenuSelectSuspenseQuery
>;
export type MenuSelectQueryResult = Apollo.QueryResult<
  MenuSelectQuery,
  MenuSelectQueryVariables
>;
export const ModuloUpdateDocument = gql`
  mutation ModuloUpdate($inputUpdate: ModuloUpdateInput!) {
    adminModuloUpdate(dataInput: $inputUpdate) {
      ...moduloCrudFields
    }
  }
  ${ModuloCrudFieldsFragmentDoc}
`;
export type ModuloUpdateMutationFn = Apollo.MutationFunction<
  ModuloUpdateMutation,
  ModuloUpdateMutationVariables
>;

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
export function useModuloUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ModuloUpdateMutation,
    ModuloUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ModuloUpdateMutation,
    ModuloUpdateMutationVariables
  >(ModuloUpdateDocument, options);
}
export type ModuloUpdateMutationHookResult = ReturnType<
  typeof useModuloUpdateMutation
>;
export type ModuloUpdateMutationResult =
  Apollo.MutationResult<ModuloUpdateMutation>;
export type ModuloUpdateMutationOptions = Apollo.BaseMutationOptions<
  ModuloUpdateMutation,
  ModuloUpdateMutationVariables
>;
export const ModuloCreateDocument = gql`
  mutation ModuloCreate($inputCreate: ModuloCreateInput!) {
    adminModuloCreate(dataInput: $inputCreate) {
      ...moduloCrudFields
    }
  }
  ${ModuloCrudFieldsFragmentDoc}
`;
export type ModuloCreateMutationFn = Apollo.MutationFunction<
  ModuloCreateMutation,
  ModuloCreateMutationVariables
>;

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
export function useModuloCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ModuloCreateMutation,
    ModuloCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ModuloCreateMutation,
    ModuloCreateMutationVariables
  >(ModuloCreateDocument, options);
}
export type ModuloCreateMutationHookResult = ReturnType<
  typeof useModuloCreateMutation
>;
export type ModuloCreateMutationResult =
  Apollo.MutationResult<ModuloCreateMutation>;
export type ModuloCreateMutationOptions = Apollo.BaseMutationOptions<
  ModuloCreateMutation,
  ModuloCreateMutationVariables
>;
export const ModuloDeleteDocument = gql`
  mutation ModuloDelete($id: Int!) {
    adminModuloDelete(id: $id) {
      ...moduloCrudFields
    }
  }
  ${ModuloCrudFieldsFragmentDoc}
`;
export type ModuloDeleteMutationFn = Apollo.MutationFunction<
  ModuloDeleteMutation,
  ModuloDeleteMutationVariables
>;

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
export function useModuloDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ModuloDeleteMutation,
    ModuloDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ModuloDeleteMutation,
    ModuloDeleteMutationVariables
  >(ModuloDeleteDocument, options);
}
export type ModuloDeleteMutationHookResult = ReturnType<
  typeof useModuloDeleteMutation
>;
export type ModuloDeleteMutationResult =
  Apollo.MutationResult<ModuloDeleteMutation>;
export type ModuloDeleteMutationOptions = Apollo.BaseMutationOptions<
  ModuloDeleteMutation,
  ModuloDeleteMutationVariables
>;
export const ModuloCollectionDocument = gql`
  query ModuloCollection(
    $inputWhere: ModuloFilterInput
    $inputOrder: StringOrderInput
    $inputPagination: PaginationInput
  ) {
    adminModuloCollection(
      where: $inputWhere
      order: $inputOrder
      pagination: $inputPagination
    ) {
      ...moduloCollectionFields
    }
  }
  ${ModuloCollectionFieldsFragmentDoc}
`;

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
export function useModuloCollectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ModuloCollectionQuery,
    ModuloCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ModuloCollectionQuery, ModuloCollectionQueryVariables>(
    ModuloCollectionDocument,
    options
  );
}
export function useModuloCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ModuloCollectionQuery,
    ModuloCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ModuloCollectionQuery,
    ModuloCollectionQueryVariables
  >(ModuloCollectionDocument, options);
}
export function useModuloCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ModuloCollectionQuery,
    ModuloCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ModuloCollectionQuery,
    ModuloCollectionQueryVariables
  >(ModuloCollectionDocument, options);
}
export type ModuloCollectionQueryHookResult = ReturnType<
  typeof useModuloCollectionQuery
>;
export type ModuloCollectionLazyQueryHookResult = ReturnType<
  typeof useModuloCollectionLazyQuery
>;
export type ModuloCollectionSuspenseQueryHookResult = ReturnType<
  typeof useModuloCollectionSuspenseQuery
>;
export type ModuloCollectionQueryResult = Apollo.QueryResult<
  ModuloCollectionQuery,
  ModuloCollectionQueryVariables
>;
export const ModuloDocument = gql`
  query Modulo($id: Int!) {
    adminModulo(id: $id) {
      ...moduloIdFields
    }
  }
  ${ModuloIdFieldsFragmentDoc}
`;

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
export function useModuloQuery(
  baseOptions: Apollo.QueryHookOptions<ModuloQuery, ModuloQueryVariables> &
    ({ variables: ModuloQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ModuloQuery, ModuloQueryVariables>(
    ModuloDocument,
    options
  );
}
export function useModuloLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ModuloQuery, ModuloQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ModuloQuery, ModuloQueryVariables>(
    ModuloDocument,
    options
  );
}
export function useModuloSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ModuloQuery,
    ModuloQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ModuloQuery, ModuloQueryVariables>(
    ModuloDocument,
    options
  );
}
export type ModuloQueryHookResult = ReturnType<typeof useModuloQuery>;
export type ModuloLazyQueryHookResult = ReturnType<typeof useModuloLazyQuery>;
export type ModuloSuspenseQueryHookResult = ReturnType<
  typeof useModuloSuspenseQuery
>;
export type ModuloQueryResult = Apollo.QueryResult<
  ModuloQuery,
  ModuloQueryVariables
>;
export const ModuloSelectDocument = gql`
  query ModuloSelect(
    $inputWhere: ModuloFilterInput
    $inputOrder: StringOrderInput
  ) {
    adminModuloCollection(where: $inputWhere, order: $inputOrder) {
      ...moduloSelectFields
    }
  }
  ${ModuloSelectFieldsFragmentDoc}
`;

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
export function useModuloSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ModuloSelectQuery,
    ModuloSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ModuloSelectQuery, ModuloSelectQueryVariables>(
    ModuloSelectDocument,
    options
  );
}
export function useModuloSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ModuloSelectQuery,
    ModuloSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ModuloSelectQuery, ModuloSelectQueryVariables>(
    ModuloSelectDocument,
    options
  );
}
export function useModuloSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ModuloSelectQuery,
    ModuloSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ModuloSelectQuery, ModuloSelectQueryVariables>(
    ModuloSelectDocument,
    options
  );
}
export type ModuloSelectQueryHookResult = ReturnType<
  typeof useModuloSelectQuery
>;
export type ModuloSelectLazyQueryHookResult = ReturnType<
  typeof useModuloSelectLazyQuery
>;
export type ModuloSelectSuspenseQueryHookResult = ReturnType<
  typeof useModuloSelectSuspenseQuery
>;
export type ModuloSelectQueryResult = Apollo.QueryResult<
  ModuloSelectQuery,
  ModuloSelectQueryVariables
>;
export const RolUpdateDocument = gql`
  mutation RolUpdate($inputUpdate: RolUpdateInput!) {
    adminRolUpdate(dataInput: $inputUpdate) {
      ...rolCrudFields
    }
  }
  ${RolCrudFieldsFragmentDoc}
`;
export type RolUpdateMutationFn = Apollo.MutationFunction<
  RolUpdateMutation,
  RolUpdateMutationVariables
>;

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
export function useRolUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RolUpdateMutation,
    RolUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RolUpdateMutation, RolUpdateMutationVariables>(
    RolUpdateDocument,
    options
  );
}
export type RolUpdateMutationHookResult = ReturnType<
  typeof useRolUpdateMutation
>;
export type RolUpdateMutationResult = Apollo.MutationResult<RolUpdateMutation>;
export type RolUpdateMutationOptions = Apollo.BaseMutationOptions<
  RolUpdateMutation,
  RolUpdateMutationVariables
>;
export const RolCreateDocument = gql`
  mutation RolCreate($inputCreate: RolCreateInput!) {
    adminRolCreate(dataInput: $inputCreate) {
      ...rolCrudFields
    }
  }
  ${RolCrudFieldsFragmentDoc}
`;
export type RolCreateMutationFn = Apollo.MutationFunction<
  RolCreateMutation,
  RolCreateMutationVariables
>;

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
export function useRolCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RolCreateMutation,
    RolCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RolCreateMutation, RolCreateMutationVariables>(
    RolCreateDocument,
    options
  );
}
export type RolCreateMutationHookResult = ReturnType<
  typeof useRolCreateMutation
>;
export type RolCreateMutationResult = Apollo.MutationResult<RolCreateMutation>;
export type RolCreateMutationOptions = Apollo.BaseMutationOptions<
  RolCreateMutation,
  RolCreateMutationVariables
>;
export const RolDeleteDocument = gql`
  mutation RolDelete($id: Int!) {
    adminRolDelete(id: $id) {
      ...rolCrudFields
    }
  }
  ${RolCrudFieldsFragmentDoc}
`;
export type RolDeleteMutationFn = Apollo.MutationFunction<
  RolDeleteMutation,
  RolDeleteMutationVariables
>;

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
export function useRolDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RolDeleteMutation,
    RolDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RolDeleteMutation, RolDeleteMutationVariables>(
    RolDeleteDocument,
    options
  );
}
export type RolDeleteMutationHookResult = ReturnType<
  typeof useRolDeleteMutation
>;
export type RolDeleteMutationResult = Apollo.MutationResult<RolDeleteMutation>;
export type RolDeleteMutationOptions = Apollo.BaseMutationOptions<
  RolDeleteMutation,
  RolDeleteMutationVariables
>;
export const RolCollectionDocument = gql`
  query RolCollection(
    $inputWhere: RolFilterInput
    $inputOrder: StringOrderInput
    $inputPagination: PaginationInput
  ) {
    adminRolCollection(
      where: $inputWhere
      order: $inputOrder
      pagination: $inputPagination
    ) {
      ...rolCollectionFields
    }
  }
  ${RolCollectionFieldsFragmentDoc}
`;

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
export function useRolCollectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RolCollectionQuery,
    RolCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RolCollectionQuery, RolCollectionQueryVariables>(
    RolCollectionDocument,
    options
  );
}
export function useRolCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RolCollectionQuery,
    RolCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RolCollectionQuery, RolCollectionQueryVariables>(
    RolCollectionDocument,
    options
  );
}
export function useRolCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    RolCollectionQuery,
    RolCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    RolCollectionQuery,
    RolCollectionQueryVariables
  >(RolCollectionDocument, options);
}
export type RolCollectionQueryHookResult = ReturnType<
  typeof useRolCollectionQuery
>;
export type RolCollectionLazyQueryHookResult = ReturnType<
  typeof useRolCollectionLazyQuery
>;
export type RolCollectionSuspenseQueryHookResult = ReturnType<
  typeof useRolCollectionSuspenseQuery
>;
export type RolCollectionQueryResult = Apollo.QueryResult<
  RolCollectionQuery,
  RolCollectionQueryVariables
>;
export const RolDocument = gql`
  query Rol($id: Int!) {
    adminRol(id: $id) {
      ...rolIdFields
    }
  }
  ${RolIdFieldsFragmentDoc}
`;

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
export function useRolQuery(
  baseOptions: Apollo.QueryHookOptions<RolQuery, RolQueryVariables> &
    ({ variables: RolQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RolQuery, RolQueryVariables>(RolDocument, options);
}
export function useRolLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RolQuery, RolQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RolQuery, RolQueryVariables>(RolDocument, options);
}
export function useRolSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<RolQuery, RolQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<RolQuery, RolQueryVariables>(
    RolDocument,
    options
  );
}
export type RolQueryHookResult = ReturnType<typeof useRolQuery>;
export type RolLazyQueryHookResult = ReturnType<typeof useRolLazyQuery>;
export type RolSuspenseQueryHookResult = ReturnType<typeof useRolSuspenseQuery>;
export type RolQueryResult = Apollo.QueryResult<RolQuery, RolQueryVariables>;
export const RolSelectDocument = gql`
  query RolSelect($inputWhere: RolFilterInput, $inputOrder: StringOrderInput) {
    adminRolCollection(where: $inputWhere, order: $inputOrder) {
      ...rolSelectFields
    }
  }
  ${RolSelectFieldsFragmentDoc}
`;

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
export function useRolSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<RolSelectQuery, RolSelectQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RolSelectQuery, RolSelectQueryVariables>(
    RolSelectDocument,
    options
  );
}
export function useRolSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RolSelectQuery,
    RolSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RolSelectQuery, RolSelectQueryVariables>(
    RolSelectDocument,
    options
  );
}
export function useRolSelectSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    RolSelectQuery,
    RolSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<RolSelectQuery, RolSelectQueryVariables>(
    RolSelectDocument,
    options
  );
}
export type RolSelectQueryHookResult = ReturnType<typeof useRolSelectQuery>;
export type RolSelectLazyQueryHookResult = ReturnType<
  typeof useRolSelectLazyQuery
>;
export type RolSelectSuspenseQueryHookResult = ReturnType<
  typeof useRolSelectSuspenseQuery
>;
export type RolSelectQueryResult = Apollo.QueryResult<
  RolSelectQuery,
  RolSelectQueryVariables
>;
export const UsuarioUpdateDocument = gql`
  mutation UsuarioUpdate($inputUpdate: UsuarioUpdateInput!) {
    adminUsuarioUpdate(dataInput: $inputUpdate) {
      ...usuarioCrudFields
    }
  }
  ${UsuarioCrudFieldsFragmentDoc}
`;
export type UsuarioUpdateMutationFn = Apollo.MutationFunction<
  UsuarioUpdateMutation,
  UsuarioUpdateMutationVariables
>;

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
export function useUsuarioUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UsuarioUpdateMutation,
    UsuarioUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UsuarioUpdateMutation,
    UsuarioUpdateMutationVariables
  >(UsuarioUpdateDocument, options);
}
export type UsuarioUpdateMutationHookResult = ReturnType<
  typeof useUsuarioUpdateMutation
>;
export type UsuarioUpdateMutationResult =
  Apollo.MutationResult<UsuarioUpdateMutation>;
export type UsuarioUpdateMutationOptions = Apollo.BaseMutationOptions<
  UsuarioUpdateMutation,
  UsuarioUpdateMutationVariables
>;
export const UsuarioCreateDocument = gql`
  mutation UsuarioCreate($inputCreate: UsuarioCreateInput!) {
    adminUsuarioCreate(dataInput: $inputCreate) {
      ...usuarioCrudFields
    }
  }
  ${UsuarioCrudFieldsFragmentDoc}
`;
export type UsuarioCreateMutationFn = Apollo.MutationFunction<
  UsuarioCreateMutation,
  UsuarioCreateMutationVariables
>;

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
export function useUsuarioCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UsuarioCreateMutation,
    UsuarioCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UsuarioCreateMutation,
    UsuarioCreateMutationVariables
  >(UsuarioCreateDocument, options);
}
export type UsuarioCreateMutationHookResult = ReturnType<
  typeof useUsuarioCreateMutation
>;
export type UsuarioCreateMutationResult =
  Apollo.MutationResult<UsuarioCreateMutation>;
export type UsuarioCreateMutationOptions = Apollo.BaseMutationOptions<
  UsuarioCreateMutation,
  UsuarioCreateMutationVariables
>;
export const UsuarioDeleteDocument = gql`
  mutation UsuarioDelete($id: Int!) {
    adminUsuarioDelete(id: $id) {
      ...usuarioCrudFields
    }
  }
  ${UsuarioCrudFieldsFragmentDoc}
`;
export type UsuarioDeleteMutationFn = Apollo.MutationFunction<
  UsuarioDeleteMutation,
  UsuarioDeleteMutationVariables
>;

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
export function useUsuarioDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UsuarioDeleteMutation,
    UsuarioDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UsuarioDeleteMutation,
    UsuarioDeleteMutationVariables
  >(UsuarioDeleteDocument, options);
}
export type UsuarioDeleteMutationHookResult = ReturnType<
  typeof useUsuarioDeleteMutation
>;
export type UsuarioDeleteMutationResult =
  Apollo.MutationResult<UsuarioDeleteMutation>;
export type UsuarioDeleteMutationOptions = Apollo.BaseMutationOptions<
  UsuarioDeleteMutation,
  UsuarioDeleteMutationVariables
>;
export const UsuarioCollectionDocument = gql`
  query usuarioCollection(
    $inputWhere: UsuarioFilterInput
    $inputOrder: StringOrderInput
    $inputPagination: PaginationInput
  ) {
    adminUsuarioCollection(
      where: $inputWhere
      order: $inputOrder
      pagination: $inputPagination
    ) {
      ...usuarioCollectionFields
    }
  }
  ${UsuarioCollectionFieldsFragmentDoc}
`;

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
export function useUsuarioCollectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UsuarioCollectionQuery,
    UsuarioCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    UsuarioCollectionQuery,
    UsuarioCollectionQueryVariables
  >(UsuarioCollectionDocument, options);
}
export function useUsuarioCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsuarioCollectionQuery,
    UsuarioCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    UsuarioCollectionQuery,
    UsuarioCollectionQueryVariables
  >(UsuarioCollectionDocument, options);
}
export function useUsuarioCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UsuarioCollectionQuery,
    UsuarioCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    UsuarioCollectionQuery,
    UsuarioCollectionQueryVariables
  >(UsuarioCollectionDocument, options);
}
export type UsuarioCollectionQueryHookResult = ReturnType<
  typeof useUsuarioCollectionQuery
>;
export type UsuarioCollectionLazyQueryHookResult = ReturnType<
  typeof useUsuarioCollectionLazyQuery
>;
export type UsuarioCollectionSuspenseQueryHookResult = ReturnType<
  typeof useUsuarioCollectionSuspenseQuery
>;
export type UsuarioCollectionQueryResult = Apollo.QueryResult<
  UsuarioCollectionQuery,
  UsuarioCollectionQueryVariables
>;
export const UsuarioDocument = gql`
  query Usuario($id: Int!) {
    adminUsuario(id: $id) {
      ...usuarioIdFields
    }
  }
  ${UsuarioIdFieldsFragmentDoc}
`;

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
export function useUsuarioQuery(
  baseOptions: Apollo.QueryHookOptions<UsuarioQuery, UsuarioQueryVariables> &
    ({ variables: UsuarioQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsuarioQuery, UsuarioQueryVariables>(
    UsuarioDocument,
    options
  );
}
export function useUsuarioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsuarioQuery, UsuarioQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsuarioQuery, UsuarioQueryVariables>(
    UsuarioDocument,
    options
  );
}
export function useUsuarioSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UsuarioQuery,
    UsuarioQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UsuarioQuery, UsuarioQueryVariables>(
    UsuarioDocument,
    options
  );
}
export type UsuarioQueryHookResult = ReturnType<typeof useUsuarioQuery>;
export type UsuarioLazyQueryHookResult = ReturnType<typeof useUsuarioLazyQuery>;
export type UsuarioSuspenseQueryHookResult = ReturnType<
  typeof useUsuarioSuspenseQuery
>;
export type UsuarioQueryResult = Apollo.QueryResult<
  UsuarioQuery,
  UsuarioQueryVariables
>;
export const namedOperations = {
  Query: {
    Authlogin: "Authlogin",
    AuthPerfil: "AuthPerfil",
    AuthModuloPermisosId: "AuthModuloPermisosId",
    Authlogout: "Authlogout",
    ProvinciaSelect: "ProvinciaSelect",
    EstablecimientoSelect: "EstablecimientoSelect",
    AdminConfiguracionCollection: "AdminConfiguracionCollection",
    ProvinciaDigtSelect: "ProvinciaDigtSelect",
    CantonDigtSelect: "CantonDigtSelect",
    ParroquiaDigtSelect: "ParroquiaDigtSelect",
    ZonaDigtSelect: "ZonaDigtSelect",
    JuntaDigtSelect: "JuntaDigtSelect",
    DignidadDigtSelect: "DignidadDigtSelect",
    DigtActaByJuntaList: "DigtActaByJuntaList",
    DigtActaByDignidadList: "DigtActaByDignidadList",
    MenuCollection: "MenuCollection",
    Menu: "Menu",
    MenuSelect: "MenuSelect",
    ModuloCollection: "ModuloCollection",
    Modulo: "Modulo",
    ModuloSelect: "ModuloSelect",
    RolCollection: "RolCollection",
    Rol: "Rol",
    RolSelect: "RolSelect",
    usuarioCollection: "usuarioCollection",
    Usuario: "Usuario",
  },
  Mutation: {
    AuthCambioPassword: "AuthCambioPassword",
    DigtVotosUpdate: "DigtVotosUpdate",
    MenuUpdate: "MenuUpdate",
    MenuCreate: "MenuCreate",
    MenuDelete: "MenuDelete",
    ModuloUpdate: "ModuloUpdate",
    ModuloCreate: "ModuloCreate",
    ModuloDelete: "ModuloDelete",
    RolUpdate: "RolUpdate",
    RolCreate: "RolCreate",
    RolDelete: "RolDelete",
    UsuarioUpdate: "UsuarioUpdate",
    UsuarioCreate: "UsuarioCreate",
    UsuarioDelete: "UsuarioDelete",
  },
  Fragment: {
    authLoginFields: "authLoginFields",
    authPerfilFields: "authPerfilFields",
    authModuloPermisoIdFields: "authModuloPermisoIdFields",
    authCambioPassword: "authCambioPassword",
    authLogout: "authLogout",
    provinciaSelectFields: "provinciaSelectFields",
    establecimientoSelectFields: "establecimientoSelectFields",
    adminConfiguracionFields: "adminConfiguracionFields",
    provinciaDigtSelectFields: "provinciaDigtSelectFields",
    cantonDigtSelectFields: "cantonDigtSelectFields",
    parroquiaDigtSelectFields: "parroquiaDigtSelectFields",
    zonaDigtSelectFields: "zonaDigtSelectFields",
    juntaDigtSelectFields: "juntaDigtSelectFields",
    dignidadDigtSelectFields: "dignidadDigtSelectFields",
    actaDigtListFields: "actaDigtListFields",
    actaByDigititalizacionListFields: "actaByDigititalizacionListFields",
    actaDigitaCrudFields: "actaDigitaCrudFields",
    menuCollectionFields: "menuCollectionFields",
    menuIdFields: "menuIdFields",
    menuCrudFields: "menuCrudFields",
    menuSelectFields: "menuSelectFields",
    moduloCollectionFields: "moduloCollectionFields",
    moduloIdFields: "moduloIdFields",
    moduloCrudFields: "moduloCrudFields",
    moduloSelectFields: "moduloSelectFields",
    rolCollectionFields: "rolCollectionFields",
    rolIdFields: "rolIdFields",
    rolCrudFields: "rolCrudFields",
    rolSelectFields: "rolSelectFields",
    usuarioCollectionFields: "usuarioCollectionFields",
    usuarioIdFields: "usuarioIdFields",
    usuarioCrudFields: "usuarioCrudFields",
  },
};
