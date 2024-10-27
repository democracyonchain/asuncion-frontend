const dataEnv:any =process;

/**
 * Clase que contiene constantes utilizadas en el sistema.
 * 
 * @remarks
 * Esta clase define varias constantes de tipo string y número que representan
 * diferentes acciones y estados en el sistema, así como URLs de conexión.
 * 
 * @example
 * ```typescript
 * const nuevoRegistro = Constantes.NUEVO_REGISTRO;
 * const urlConexion = Constantes.URLCONEXIONGRAPQL;
 * ```
 * 
 * @public
 */
export class Constantes{

    /**
     * Constante que representa un nuevo registro.
     * 
     * @constant {string} NUEVO_REGISTRO - Indica que el registro es nuevo.
     */
    static readonly NUEVO_REGISTRO:string = 'N';
    /**
     * Constante que representa la acción de editar un registro.
     * @constant {string}
     */
    static readonly EDITAR_REGISTRO:string = 'E';
    
    /**
     * Constante que representa la acción de "Ver Registro".
     * 
     * @constant {string}
     */
    static readonly VER_REGISTRO:string = 'V';
    
    /**
     * Constante que representa la acción de borrar un registro.
     * @constant {string}
     */
    static readonly BORRAR_REGISTRO:string = 'D';
    
    /**
     * Constante que representa la acción de agregar un registro.
     * 
     * @constant {string} AGREGAR_REGISTRO - Valor 'A' que indica la acción de agregar un nuevo registro.
     */
    static readonly AGREGAR_REGISTRO:string = 'A';
    
    /**
     * Constante que representa la acción de imprimir un registro.
     * @constant {string}
     */
    static readonly IMPRIMIR_REGISTRO:string = 'P';
    
    /**
     * Constante que representa el valor para sincronizar un registro.
     * 
     * @constant {string} SINCRONIZAR_REGISTRO - Valor utilizado para indicar la sincronización de un registro.
     */
    static readonly SINCRONIZAR_REGISTRO:string = 'S';
    
    /**
     * Constante que representa la acción de listar registros.
     * @constant {string}
     */
    static readonly LISTAR_REGISTRO:string = 'L';
    
    /**
     * Constante que indica si un elemento es modificable.
     * 
     * @constant {number} ES_MODIFICABLE
     * @readonly
     */
    static readonly ES_MODIFICABLE:number = 1;

    /**
     * URL de conexión para el servicio GraphQL.
     * 
     * Esta constante almacena la URL utilizada para conectarse al servicio GraphQL.
     * La URL se obtiene de la variable de entorno `dataEnv.URLCONEXIONGRAPQL`.
     */
    static readonly URLCONEXIONGRAPQL: string = dataEnv.URLCONEXIONGRAPQL;
    
    /**
     * @constant {string} URLHOME
     * @description URL de la página principal obtenida de las variables de entorno.
     */
    static readonly URLHOME: string = dataEnv.URLHOME;
    
    /**
     * URL utilizada para redirigir al usuario a la página de cierre de sesión.
     * 
     * @constant {string} URLHOMELOGOUT - URL de cierre de sesión obtenida de las variables de entorno.
     */
    static readonly URLHOMELOGOUT: string = dataEnv.URLLOGOUT;
}