const dataEnv:any =process;

export class Constantes{

    /**
     * Catalogos CRUD
     */
    static NUEVO_REGISTRO:string = 'N';
    static EDITAR_REGISTRO:string = 'E';
    static VER_REGISTRO:string = 'V';
    static BORRAR_REGISTRO:string = 'D';
    static AGREGAR_REGISTRO:string = 'A';
    static IMPRIMIR_REGISTRO:string = 'P';
    static SINCRONIZAR_REGISTRO:string = 'S';
    static LISTAR_REGISTRO:string = 'L';
    static ES_MODIFICABLE:number = 1;

    /**
    * Constantes Core Sistema Nacional de Inventarios
    */
    static URLCONEXIONGRAPQL: string = dataEnv.URLCONEXIONGRAPQL;
    static URLHOME: string = dataEnv.URLHOME;
    static URLHOMELOGOUT: string = dataEnv.URLLOGOUT;
}