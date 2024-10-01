import {ApolloClient, createHttpLink, from, InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context';
import {Constantes} from "@components/service/";
import {onError} from "@apollo/client/link/error";


const httpLink = createHttpLink({
  uri: Constantes.URLCONEXIONGRAPQL
});

const dataEnv:any = process;

/**
 * Maneja los errores de GraphQL y de red.
 * 
 * @param {Object} param - Parámetros de error.
 * @param {Array} param.graphQLErrors - Errores de GraphQL.
 * @param {Object} param.networkError - Error de red.
 * @param {Object} param.response - Respuesta de la solicitud.
 * 
 * @remarks
 * Este enlace de error realiza las siguientes acciones:
 * - Si hay errores de GraphQL, los procesa según el código de estado:
 *   - 403 (Prohibido): Guarda el error en el localStorage.
 *   - 500 (Error Interno del Servidor): No realiza ninguna acción.
 *   - 401 (No Autorizado): Redirige al usuario a la página de seguridades y limpia el almacenamiento local y de sesión.
 *   - Otros: Si el entorno es local, lanza un error.
 * - Si hay un error de red, lanza un error indicando que el servicio de GraphQL no está disponible.
 */
const errorLink = onError(({ graphQLErrors, networkError,response }) => {
	

	if (graphQLErrors) {
			graphQLErrors.map(({ message,extensions }:any) =>{				
				if(extensions?.originalError?.statusCode == 403) { //Forbidden
					localStorage.setItem('errorGraphql', `[GraphQL error]: Message: ${message}, Code: ${extensions?.originalError?.statusCode}, Error: ${extensions?.originalError?.error}`);
				}else if(extensions?.originalError?.statusCode == 500){ //Internal Server Error
				}else if(extensions?.originalError?.statusCode == 401){ //Unauthorized					
					window.location.href=Constantes.URLHOME +'/app/seguridades';
					localStorage.clear();
                	sessionStorage.clear();
				}
				else{
					if(dataEnv.NODE_ENV=='local'){
						throw Error(`[GraphQL error]: Message: ${message}, Code: ${extensions?.originalError?.statusCode}, Error: ${extensions?.originalError?.error}`);
					}
				}
			}
		);
	}

	if (networkError) {
		throw Error(`[Network error]: ${networkError} | Servicio GRAPHQL no disponible`)
	}

});


const appLink = from([
  	errorLink, httpLink
])

/**
 * Enlace de autenticación para Apollo Client.
 * 
 * Este enlace se utiliza para agregar el token de autenticación a las cabeceras
 * de cada solicitud GraphQL. El token se obtiene del almacenamiento local 
 * (`localStorage`) bajo la clave 'tokenUser'.
 * 
 * @param _ - Parámetro no utilizado.
 * @param headers - Las cabeceras actuales de la solicitud.
 * @returns Un objeto con las cabeceras actualizadas, incluyendo la cabecera de 
 *          autorización con el token de autenticación si está presente.
 */
const authLink = setContext((_, { headers }) => {  
	const token = localStorage.getItem('tokenUser'); 
	return {
		headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : "",
		}
	}
});

/**
 * Cliente GraphQL configurado con Apollo Client.
 * 
 * Este cliente utiliza un enlace de autenticación (`authLink`) concatenado con un enlace de aplicación (`appLink`).
 * Además, emplea una caché en memoria (`InMemoryCache`) para almacenar los resultados de las consultas.
 */
export const graphqlClient = new ApolloClient({
	link: authLink.concat(appLink),
	cache: new InMemoryCache()
});
