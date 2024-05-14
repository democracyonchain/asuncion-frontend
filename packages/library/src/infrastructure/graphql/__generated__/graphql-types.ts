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
  DateScalar: { input: any; output: any };
  Decimal: { input: any; output: any };
};

export type GlobalResultType = {
  __typename?: "GlobalResultType";
  message: Scalars["String"]["output"];
  status: Scalars["Boolean"]["output"];
};

export type Login = {
  __typename?: "Login";
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
  estado?: InputMaybe<Scalars["Float"]["input"]>;
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
  estado: Scalars["Boolean"]["output"];
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
  estado?: InputMaybe<Scalars["Float"]["input"]>;
  icono?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  nombre?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  menuCreate?: Maybe<MenuAdministracion>;
  menuDelete?: Maybe<GlobalResultType>;
  menuUpdate?: Maybe<MenuAdministracion>;
  moduloCreate?: Maybe<ModuloAdministracion>;
  moduloDelete?: Maybe<GlobalResultType>;
  moduloUpdate?: Maybe<ModuloAdministracion>;
  rolCreate?: Maybe<RolAdministracion>;
  rolDelete?: Maybe<GlobalResultType>;
  rolUpdate?: Maybe<RolAdministracion>;
  usuarioCreate?: Maybe<UsuarioAdministracion>;
  usuarioDelete?: Maybe<GlobalResultType>;
  usuarioUpdate?: Maybe<UsuarioAdministracion>;
};

export type MutationMenuCreateArgs = {
  dataInput: MenuCreateInput;
};

export type MutationMenuDeleteArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationMenuUpdateArgs = {
  dataInput: MenuUpdateInput;
};

export type MutationModuloCreateArgs = {
  dataInput: ModuloCreateInput;
};

export type MutationModuloDeleteArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationModuloUpdateArgs = {
  dataInput: ModuloUpdateInput;
};

export type MutationRolCreateArgs = {
  dataInput: RolCreateInput;
};

export type MutationRolDeleteArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationRolUpdateArgs = {
  dataInput: RolUpdateInput;
};

export type MutationUsuarioCreateArgs = {
  dataInput: UsuarioCreateInput;
};

export type MutationUsuarioDeleteArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationUsuarioUpdateArgs = {
  dataInput: UsuarioUpdateInput;
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

export type Query = {
  __typename?: "Query";
  authCambioPassword: GlobalResultType;
  authModuloPermisosId: Array<ModuloAuth>;
  authPerfil: UsuarioAuth;
  authlogin: Login;
  authlogout: GlobalResultType;
  menu: MenuAdministracion;
  menuCollection?: Maybe<MenuCollectionType>;
  modulo: ModuloAdministracion;
  moduloCollection?: Maybe<ModuloCollectionType>;
  rol: Rol;
  rolCollection?: Maybe<RolCollectionType>;
  usuario: UsuarioAdministracion;
  usuarioCollection?: Maybe<UsuarioCollectionType>;
};

export type QueryAuthCambioPasswordArgs = {
  password: Scalars["String"]["input"];
};

export type QueryAuthModuloPermisosIdArgs = {
  rol_id: Scalars["Int"]["input"];
};

export type QueryAuthloginArgs = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type QueryMenuArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryMenuCollectionArgs = {
  order?: InputMaybe<StringOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<MenuFilterInput>;
};

export type QueryModuloArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryModuloCollectionArgs = {
  order?: InputMaybe<StringOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<ModuloFilterInput>;
};

export type QueryRolArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRolCollectionArgs = {
  order?: InputMaybe<StringOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<RolFilterInput>;
};

export type QueryUsuarioArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUsuarioCollectionArgs = {
  order?: InputMaybe<StringOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<UsuarioFilterInput>;
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
  estado?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["Int"]["input"];
  nombre?: InputMaybe<Scalars["String"]["input"]>;
  permisos?: InputMaybe<Array<PermisosUpdateInput>>;
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
  id: Scalars["Float"]["output"];
  nombres: Scalars["String"]["output"];
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

export type UsuarioCollectionType = {
  __typename?: "UsuarioCollectionType";
  data?: Maybe<Array<UsuarioAdministracion>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UsuarioCreateInput = {
  apellidos: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  nombres: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  roles: Array<Scalars["Int"]["input"]>;
  username: Scalars["String"]["input"];
};

export type UsuarioFilterInput = {
  apellidos?: InputMaybe<StringWhereInput>;
  nombres?: InputMaybe<StringWhereInput>;
  username?: InputMaybe<StringWhereInput>;
};

export type UsuarioUpdateInput = {
  apellidos?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  estado?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["Int"]["input"];
  nombres?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  roles?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type AuthLoginFieldsFragment = {
  __typename?: "Login";
  token: string;
  username: string;
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
  estado: boolean;
  icono: string;
  id: number;
  nombre: string;
  url: string;
  color: string;
  menu?: Array<{
    __typename?: "MenuforModuloAuth";
    id: number;
    titulo: string;
    icono: string;
    url: string;
    permisos?: Array<{
      __typename?: "PermisosForModuloAuth";
      crear: boolean;
      editar: boolean;
      eliminar: boolean;
      id: number;
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

export type AuthloginQueryVariables = Exact<{
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
}>;

export type AuthloginQuery = {
  __typename?: "Query";
  authlogin: { __typename?: "Login"; token: string; username: string };
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
    estado: boolean;
    icono: string;
    id: number;
    nombre: string;
    url: string;
    color: string;
    menu?: Array<{
      __typename?: "MenuforModuloAuth";
      id: number;
      titulo: string;
      icono: string;
      url: string;
      permisos?: Array<{
        __typename?: "PermisosForModuloAuth";
        crear: boolean;
        editar: boolean;
        eliminar: boolean;
        id: number;
        imprimir: boolean;
        leer: boolean;
      }> | null;
    }> | null;
  }>;
};

export type AuthCambioPasswordQueryVariables = Exact<{
  password: Scalars["String"]["input"];
}>;

export type AuthCambioPasswordQuery = {
  __typename?: "Query";
  authCambioPassword: {
    __typename?: "GlobalResultType";
    message: string;
    status: boolean;
  };
};

export type AuthlogoutQueryVariables = Exact<{ [key: string]: never }>;

export type AuthlogoutQuery = {
  __typename?: "Query";
  authlogout: {
    __typename?: "GlobalResultType";
    message: string;
    status: boolean;
  };
};

export const AuthLoginFieldsFragmentDoc = gql`
  fragment authLoginFields on Login {
    token
    username
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
    estado
    icono
    id
    nombre
    url
    color
    menu {
      id
      titulo
      icono
      url
      permisos {
        crear
        editar
        eliminar
        id
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
export const AuthloginDocument = gql`
  query Authlogin($password: String!, $username: String!) {
    authlogin(password: $password, username: $username) {
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
  query AuthCambioPassword($password: String!) {
    authCambioPassword(password: $password) {
      ...authCambioPassword
    }
  }
  ${AuthCambioPasswordFragmentDoc}
`;

/**
 * __useAuthCambioPasswordQuery__
 *
 * To run a query within a React component, call `useAuthCambioPasswordQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthCambioPasswordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthCambioPasswordQuery({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthCambioPasswordQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuthCambioPasswordQuery,
    AuthCambioPasswordQueryVariables
  > &
    (
      | { variables: AuthCambioPasswordQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AuthCambioPasswordQuery,
    AuthCambioPasswordQueryVariables
  >(AuthCambioPasswordDocument, options);
}
export function useAuthCambioPasswordLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthCambioPasswordQuery,
    AuthCambioPasswordQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AuthCambioPasswordQuery,
    AuthCambioPasswordQueryVariables
  >(AuthCambioPasswordDocument, options);
}
export function useAuthCambioPasswordSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AuthCambioPasswordQuery,
    AuthCambioPasswordQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    AuthCambioPasswordQuery,
    AuthCambioPasswordQueryVariables
  >(AuthCambioPasswordDocument, options);
}
export type AuthCambioPasswordQueryHookResult = ReturnType<
  typeof useAuthCambioPasswordQuery
>;
export type AuthCambioPasswordLazyQueryHookResult = ReturnType<
  typeof useAuthCambioPasswordLazyQuery
>;
export type AuthCambioPasswordSuspenseQueryHookResult = ReturnType<
  typeof useAuthCambioPasswordSuspenseQuery
>;
export type AuthCambioPasswordQueryResult = Apollo.QueryResult<
  AuthCambioPasswordQuery,
  AuthCambioPasswordQueryVariables
>;
export const AuthlogoutDocument = gql`
  query Authlogout {
    authlogout {
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
export const namedOperations = {
  Query: {
    Authlogin: "Authlogin",
    AuthPerfil: "AuthPerfil",
    AuthModuloPermisosId: "AuthModuloPermisosId",
    AuthCambioPassword: "AuthCambioPassword",
    Authlogout: "Authlogout",
  },
  Fragment: {
    authLoginFields: "authLoginFields",
    authPerfilFields: "authPerfilFields",
    authModuloPermisoIdFields: "authModuloPermisoIdFields",
    authCambioPassword: "authCambioPassword",
    authLogout: "authLogout",
  },
};
