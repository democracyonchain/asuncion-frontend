import {ApolloClient, createHttpLink, from, InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context';
import {Constantes} from "@components/service/";
import {onError} from "@apollo/client/link/error";


const httpLink = createHttpLink({
  uri: Constantes.URLCONEXIONGRAPQL
});

const dataEnv:any = process;

const errorLink = onError(({ graphQLErrors, networkError,response }) => {
	

	if (graphQLErrors) {
			graphQLErrors.map(({ message,extensions }:any) =>{
				if(extensions?.response?.statusCode == 403) { //Forbidden
					localStorage.setItem('errorGraphql', `[GraphQL error]: Message: ${message}, Code: ${extensions?.response?.statusCode}, Error: ${extensions?.response?.error}`);
				}else if(extensions?.response?.statusCode == 500){ //Internal Server Error
				}else if(extensions?.response?.statusCode == 401){ //Unauthorized					
					window.location.href=Constantes.URLHOME +'/app/seguridades';
					localStorage.clear();
                	sessionStorage.clear();
				}
				else{
					if(dataEnv.NODE_ENV=='local'){
						throw Error(`[GraphQL error]: Message: ${message}, Code: ${extensions?.response?.statusCode}, Error: ${extensions?.response?.error}`);
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

const authLink = setContext((_, { headers }) => {  
	const token = localStorage.getItem('tokenUser'); 
	return {
		headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : "",
		}
	}
});

export const graphqlClient = new ApolloClient({
	link: authLink.concat(appLink),
	cache: new InMemoryCache()
});
