import "jspdf-barcode";
import { setInitial,setMessage } from '@presentation/actions';
/**
 * Procesa el envío de un formulario y realiza una consulta perezosa para obtener datos de actas.
 * 
 * @param {Object} parameters - Objeto que contiene los parámetros necesarios para el procesamiento.
 * @param {Function} parameters.setVisible - Función para establecer la visibilidad de un componente.
 * @param {Object} parameters.toast - Objeto para mostrar notificaciones.
 * @param {Object} parameters.data - Datos del formulario.
 * @param {Object} parameters.labels - Etiquetas utilizadas en el formulario.
 * @param {Function} parameters.navigate - Función para navegar entre rutas.
 * @param {Function} parameters.dispatch - Función para despachar acciones de Redux.
 * @param {Function} parameters.listActaLazyQuery - Función para realizar una consulta perezosa de actas.
 * @param {Function} parameters.setLabelQr - Función para establecer las etiquetas QR.
 * @param {Function} parameters.setLabelQrAux - Función para establecer etiquetas QR auxiliares.
 * 
 * @returns {void}
 */
export const processSubmitForm=(
    parameters:
    {
        setVisible:any,toast:any,data:any,labels:any,
        navigate:any,dispatch:any,listActaLazyQuery:any,setLabelQr:any,
        setLabelQrAux:any
})=>{

   parameters.listActaLazyQuery({
        variables:{   
            dignidad_id: parameters.data.idDignidad_acta.id,
            junta_id: parameters.data.idJunta_acta.id ,        
        },
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{ 
            let datos = c?.digtActaByJuntaList;          
                       
            let itemsPerPage = 8;
            let valores=datos?.votos.length;
            let parteEntera=Math.trunc(valores/itemsPerPage);
            let resto=valores%itemsPerPage
            let numPaginas=parteEntera + (resto>0?1:0);
           

            let numPaginasMap:any=[];
            let numPaginasMapAux:any[string]=[]
           

            for (let aux=1; aux <= numPaginas; aux++){
                numPaginasMap=[...numPaginasMap,{id:'qrcode_'+aux,pagina:'pagina ' + aux + '->' + tratamientoValues(datos,parameters.data)}];
                 numPaginasMapAux['qrcode_'+aux]=''
                for (var i = 0; i < datos?.votos.length; i++) {
                    if (i >= (aux - 1) * itemsPerPage && i < aux * itemsPerPage) {
                        numPaginasMapAux['qrcode_'+aux]=[...numPaginasMapAux['qrcode_'+aux], datos?.votos[i].candidato.partido.id + ',' + datos?.votos[i].candidato.partido.id + ',' + datos?.votos[i].candidato.orden] 
                    }
                }
            }
            parameters.setLabelQr(numPaginasMap);
            parameters.setLabelQrAux(numPaginasMapAux);
            dataPdf(datos,parameters.data.idZona_acta.nombre,numPaginas); 

        },onError:(error:any)=>{            
            //parameters.setDataJuntaSelect([]);
        }
    })
}

/**
 * Genera un archivo PDF con los datos proporcionados utilizando las bibliotecas jsPDF y jsPDF-AutoTable.
 * 
 * @param {any} datos - Los datos que se utilizarán para generar el PDF.
 * @param {string} zona - La zona que se incluirá en el PDF.
 * @param {number} numPaginas - El número de páginas que tendrá el PDF.
 * 
 * @returns {void}
 * 
 * @remarks
 * Este método obtiene la configuración del administrador desde el sessionStorage, formatea la fecha del proceso,
 * y utiliza las bibliotecas jsPDF y jsPDF-AutoTable para generar un archivo PDF con los datos proporcionados.
 * 
 * El PDF incluye varias secciones, como encabezados, tablas y pie de página, y se guarda con un nombre de archivo
 * que incluye el ID y el número de seguridad de los datos.
 * 
 * @example
 * dataPdf(datos, 'Zona 1', 5);
 */
export const dataPdf=(datos:any,zona:string,numPaginas:number)=>{

    const getAdminConfig=JSON.parse(sessionStorage.getItem('getAdminConfig') as any)
    const fecha = new Date(getAdminConfig[0].fechaproceso).toLocaleDateString('es',{ year: 'numeric', month: 'long',day: 'numeric'});

    import('jspdf').then((jsPDF) => {
        import('jspdf-autotable').then(() => {
            const doc:any = new jsPDF.default('p', 'cm', 0 as any,true);           
            const totalPagesExp = 'total_pages_count_string';   
                
            doc.autoTable([
                {title:'Lista',key:"lista"},{title:'Candidato',key:"candidato"},
                {title:'Total en Letras',key:"valoresLetras"},{title:'Total en Números',key:"valoresNum"}
            ],tratamientoData(datos.votos),
                {
                    startY: 5,
                    margin: { top: 5.5,right:1,left:1 },
                    headStyles:{fontSize:7,lineColor:'#bebebe',lineWidth:0.01},
                    bodyStyles:{fontSize:7,lineColor:'#bebebe',lineWidth:0.01,minCellHeight:1.9,valign:'middle'},	
                    theme:'grid',
                    columnStyles: {  
                        lista: { cellWidth:1.5,halign: 'center',fillColor: [255, 255, 255],valign:'middle'},
                        candidato: { cellWidth:4,halign: 'center',fillColor: [255, 255, 255]},
                        valoresLetras: { cellWidth:7,halign: 'center',fillColor: [255, 255, 255]},
                    },
                    head:[
                        [
                            { content:'', styles:{cellPadding:0.1,fillColor: [255, 255, 255],textColor:[0,0,0],halign:'center',lineWidth:0} },
                            { content:'', styles:{cellPadding:0.1,fillColor: [255, 255, 255],textColor:[0,0,0],halign:'center',lineWidth:0} },
                            { content:'TOTAL EN LETRAS', styles:{cellPadding:0.1,fillColor: [255, 255, 255],textColor:[0,0,0],halign:'center',lineWidth:0} },
                            { content:'TOTAL EN NÚMEROS', styles:{cellPadding:0.1,fillColor: [255, 255, 255],textColor:[0,0,0],halign:'center',lineWidth:0} }
                        ],
                        [
                            {
                                content:`TOTAL DE SUFRAGANTES `,colSpan: 2,
                                styles: { halign: 'center', fontSize:7,fontStyle:'bold',valign:'middle', textColor:[0,0,0],fillColor: [255, 255, 255],minCellHeight:1.5,lineColor:'#bebebe',lineWidth:0.01}
                            },
                            {
                                content:'',
                                styles:{fillColor: [255, 255, 255],textColor:[0,0,0],valign:'middle',halign:'center'}
                            },
                            {
                                content:'',
                                styles:{fillColor: [255, 255, 255],textColor:[0,0,0],valign:'middle',halign:'center'}
                            }
                                                        
                        ],
                        [
                            {
                                content:`VOTOS BLANCOS`,colSpan: 2,
                                styles: { halign: 'center', fillColor: [255, 255, 255],textColor:[0,0,0],fontSize:7,fontStyle:'bold',valign:'middle',minCellHeight:2,lineColor:'#bebebe',lineWidth:0.01 }
                            },
                            {
                                content:'',
                                styles:{fillColor: [255, 255, 255],textColor:[0,0,0],valign:'middle',halign:'center',fontStyle:'normal'}
                            },
                            {
                                content:'',
                                styles:{fillColor: [255, 255, 255],textColor:[0,0,0],valign:'middle',halign:'center'}
                            }
                                                        
                        ],
                        [
                            {
                                content:`VOTOS NULOS `,colSpan: 2,
                                styles: { halign: 'center', fillColor: [255, 255, 255],textColor:[0,0,0],fontSize:7,fontStyle:'bold',valign:'middle',minCellHeight:2,lineColor:'#bebebe',lineWidth:0.01 }
                            },
                            {
                                content:'',
                                styles:{fillColor: [255, 255, 255],textColor:[0,0,0],valign:'middle',halign:'center'}
                            },
                            {
                                content:'',
                                styles:{fillColor: [255, 255, 255],textColor:[0,0,0],valign:'middle',halign:'center'}
                            }
                                                        
                        ],
                        [{ content:'',colSpan: 4, styles:{cellPadding:0.1,fillColor: [255, 255, 255],lineWidth:0} }],
                        [
                            {
                                content:`VOTACIÓN OBTENIDA PARA LAS O LOS CANDIDATOS `,
                                colSpan: 4,
                                styles: { halign: 'center', fillColor: [255, 255, 255],textColor:[0,0,0],fontSize:10,fontStyle:'bold',valign:'middle',lineWidth:0 }
                            }
                                                        
                        ],   
                        [
                            { content:'LISTA', styles:{cellPadding:0.1,fillColor: [255, 255, 255],textColor:[0,0,0],halign:'center',lineWidth:0} },
                            { content:'CANDIDATO', styles:{cellPadding:0.1,fillColor: [255, 255, 255],textColor:[0,0,0],halign:'center',lineWidth:0} },
                            { content:'TOTAL EN LETRAS', styles:{cellPadding:0.1,fillColor: [255, 255, 255],textColor:[0,0,0],halign:'center',lineWidth:0} },
                            { content:'TOTAL EN NÚMEROS', styles:{cellPadding:0.1,fillColor: [255, 255, 255],textColor:[0,0,0],halign:'center',lineWidth:0} }
                        ],                     
                    ],	
                    willDrawPage: function (data:any) {                        
                       
                         doc.setFont("Courier");
                         doc.barcode((datos.seguridad).toString() + ' Blockchain', {
                            fontSize: 45,
                            textColor: "#000000",
                            x: data.settings.margin.right + 9,
                            y: 1.7,
                          })

                        //Header
                        doc.setFontSize(10);
                        doc.setTextColor('#000000')
                        doc.setFont('helvetica','','normal');
                        doc.text(getAdminConfig[0].nombreproceso, data.settings.margin.right + 3, 0.5)

                        doc.setFont('helvetica','','bold');
                        doc.setFontSize(12);
                        doc.text('ACTA DE ESCRUTINIO', data.settings.margin.right + 3, 1)
                        doc.setFontSize(8);
                        doc.setFont('helvetica','','normal');
                        doc.text(fecha, data.settings.margin.right + 3, 1.4)

                        doc.setFontSize(10);
                        doc.setTextColor('#000000')
                        doc.setFont('helvetica','','bold');
                        doc.text(datos.dignidad.nombre, data.settings.margin.right + 3, 1.9)

                        doc.setFontSize(8);
                        doc.setTextColor('#000000')
                        doc.setFont('helvetica','','bold');
                        doc.text('Acta N°:', data.settings.margin.right + 9.3, 2)
                        doc.text('Control N°:', data.settings.margin.right + 14.8, 2)                      
                        doc.setFont('helvetica','','normal');
                        doc.text((datos.id).toString(), data.settings.margin.right + 10.6, 2)
                        doc.text((datos.seguridad).toString(), data.settings.margin.right + 16.3, 2)

                         //Sección 1
                        doc.setFont('helvetica','','bold');
                        doc.setFontSize(9)
                        doc.text( `PROVINCIA:`,4,3,{align:'left'});
                        doc.text( `PARROQUIA:`,12,3,{align:'left'});

                        doc.setFont('helvetica','','normal');
                        doc.setFontSize(8)
                        doc.text( datos.junta.provincia.nombre,6,3,{align:'left'});
                        doc.text( datos.junta.parroquia.nombre,14.2,3,{align:'left'});

                        //Seccion 2
                        doc.setFont('helvetica','','bold');
                        doc.setFontSize(9)
                        doc.text( `CANTON:`,4,3.5,{align:'left'});
                        doc.text( `ZONA:`,12,3.5,{align:'left'});

                        doc.setFont('helvetica','','normal');
                        doc.setFontSize(8)
                        doc.text( datos.junta.canton.nombre,5.5,3.5,{align:'left'});
                        doc.text( zona,13.2,3.5,{align:'left'});

                        //Seccion 3
                        doc.setFont('helvetica','','bold');
                        doc.setFontSize(9)
                        doc.text( `CIRCUNSCRIPCIÓN:`,4,4,{align:'left'});
                        doc.text( `JUNTA N°:`,12,4,{align:'left'});

                        doc.setFont('helvetica','','normal');
                        doc.setFontSize(8)
                        doc.text( ' ',6.5,4,{align:'left'});
                        doc.text( datos.junta.junta + ' - ' + datos.junta.sexo ,14,4,{align:'left'});
            

                      },
                    didDrawPage:function (data:any) {
                        const footer ='Blockchain Voting System | BSM';
                        const footerAsuncion ='democracyonchain.com'
                        let pagina = 'Página ' + doc.internal.getNumberOfPages()
                        let pageSize = doc.internal.pageSize;
                        let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                    
                        if (typeof doc.putTotalPages === 'function') {
                            pagina = pagina + ' / ' + totalPagesExp 
                        }

                        doc.setFont('helvetica','','normal');
                        doc.setTextColor('#9e9e9e')
                        doc.setFontSize(9)

                        doc.text(footerAsuncion, data.settings.margin.left, pageHeight - 0.5);
                        doc.text(footer, data.settings.margin.left, pageHeight - 0.9);  
                        doc.text(pagina,  doc.internal.pageSize.getWidth() / 2, pageHeight - 0.8)
                        doc.setFont('helvetica','','bold');
                        doc.setFontSize(50)
                        
                     },
                    showHead:'firstPage'
                }
            )

            for (let aux=1; aux <= numPaginas; aux++){                
                let img = document.querySelector('canvas#qrcode_'+aux);  
                doc.setTextColor('#000000')
                doc.setPage(aux)               
                doc.addImage(img, 'JPEG', 0.2, 0, 3.8, 3.8)               
            }

            if (typeof doc.putTotalPages === 'function') { 
                doc.putTotalPages(totalPagesExp) 
            }
            doc.save(`Acta-${datos.id}[${datos.seguridad}].pdf`);
        })
    })
}

/**
 * Procesa los datos de entrada y devuelve una lista de objetos con información específica.
 *
 * @param {any} datos - Los datos de entrada que se van a procesar. Se espera que sea un array de objetos.
 * @returns {Array<{ lista: string, candidato: string, valoresLetras: string, valoresNum: string }>} 
 *          Una lista de objetos con las propiedades `lista`, `candidato`, `valoresLetras` y `valoresNum`.
 */
const tratamientoData =(datos:any)=>{
    
    const valores= datos?.map((element:any) => {

        return {
            lista:element.candidato.partido.lista,
            candidato:element.candidato.partido.nombre + ' - ' + element.candidato.nombre,
            valoresLetras:'',
            valoresNum:''
        }
    })

    return valores;
}


/**
 * Procesa y concatena valores específicos de los objetos `datos` y `formData` en una cadena separada por comas.
 * 
 * @param {any} datos - Objeto que contiene información como `id`, `seguridad`, `junta`, y `dignidad`.
 * @param {any} formData - Objeto que contiene información de ubicación como `idProvincia_acta`, `idCanton_acta`, `idParroquia_acta`, e `idZona_acta`.
 * @returns {string} - Una cadena JSON que representa los valores concatenados de `datos` y `formData`.
 */
const tratamientoValues=(datos:any,formData:any)=>{

    let objValues= datos.id + ',' + datos.seguridad + ',' + formData.idProvincia_acta.id + ',' +
        formData.idCanton_acta.id + ',' + formData.idParroquia_acta.id + ',' +
        formData.idZona_acta.id + ','+ datos.junta.junta + ',' + datos.junta.sexo + ',' +
        datos.dignidad.id
    return JSON.stringify(objValues)
}

/**
 * Restablece el formulario y navega a una nueva ruta.
 * 
 * @param {Object} parameters - Los parámetros necesarios para el proceso.
 * @param {Function} parameters.clearErrors - Función para limpiar los errores del formulario.
 * @param {Function} parameters.reset - Función para restablecer el formulario con valores predeterminados.
 * @param {Function} parameters.dispatch - Función para despachar acciones al estado global.
 * @param {Object} parameters.labelTab - Objeto que contiene las etiquetas de las pestañas.
 * @param {Function} parameters.setLabelTab - Función para actualizar las etiquetas de las pestañas.
 * @param {Function} parameters.navigate - Función para navegar a una nueva ruta.
 */
export const processResetForm=(parameters:{clearErrors:any,reset:any,dispatch:any,labelTab:any,setLabelTab:any,navigate:any})=>{
    parameters.clearErrors(); 
    parameters.reset({
        idProvincia_acta:'',
        idCanton_acta:'',
        idParroquia_acta:'',
        idZona_acta:'',
        idDignidad_acta:'',
        idJunta_acta:''
    });
    parameters.navigate("new")
    parameters.dispatch(parameters.setLabelTab({...parameters.labelTab,labelNew:'Imprimir Acta',iconNew:'post_add'}));
}

/**
 * Procesa la selección de provincia utilizando una consulta perezosa.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para la función.
 * @param parameters.getProvinciaSelectLazyQuery - Función para ejecutar la consulta perezosa de selección de provincia.
 * @param parameters.setDataProvinciaSelect - Función para establecer los datos de la selección de provincia.
 * @param [parameters.cache] - (Opcional) Cadena que representa la caché.
 * @param parameters.dispatch - Función de despacho para manejar acciones adicionales.
 *
 * La función ejecuta una consulta perezosa con una política de obtención de 'cache-and-network'.
 * En caso de éxito, establece los datos de la selección de provincia utilizando la función `setDataProvinciaSelect`.
 * En caso de error, establece un arreglo vacío utilizando la misma función.
 */
export const processProvinciaSelect =(parameters:{getProvinciaSelectLazyQuery:any,setDataProvinciaSelect:any,cache?:string,dispatch:any})=>{
    
    parameters.getProvinciaSelectLazyQuery({
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{            
            parameters.setDataProvinciaSelect(c?.digtProvinciaCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataProvinciaSelect([]);
        }
    })
}

/**
 * Procesa la selección de cantón y actualiza los datos relacionados.
 *
 * @param parameters - Objeto que contiene las funciones y valores necesarios para procesar la selección de cantón.
 * @param parameters.getCantonSelectLazyQuery - Función para ejecutar la consulta perezosa de selección de cantón.
 * @param parameters.setDataCantonSelect - Función para establecer los datos de la selección de cantón.
 * @param parameters.setDataParroquiaSelect - (Opcional) Función para establecer los datos de la selección de parroquia.
 * @param parameters.setDataZonaSelect - (Opcional) Función para establecer los datos de la selección de zona.
 * @param parameters.setDataJuntaSelect - (Opcional) Función para establecer los datos de la selección de junta.
 * @param parameters.dispatch - Función de despacho para actualizar el estado global.
 * @param parameters.id - Identificador del cantón seleccionado.
 * @param parameters.setValue - (Opcional) Función para establecer valores en el formulario.
 *
 * Si el parámetro `id` está presente, ejecuta la consulta perezosa para obtener los datos del cantón y actualiza los datos de la selección de cantón.
 * Si ocurre un error durante la consulta, establece los datos de la selección de cantón como un arreglo vacío.
 * Si el parámetro `id` no está presente, establece todos los datos de selección (cantón, parroquia, zona, junta) como arreglos vacíos y restablece los valores del formulario.
 */
export const processCantonSelect =(
    parameters:{
        getCantonSelectLazyQuery:any,setDataCantonSelect:any,setDataParroquiaSelect?:any,setDataZonaSelect?:any,setDataJuntaSelect?:any,
        dispatch:any,id:any,setValue?:any
    })=>{
    if(parameters.id){
        parameters.getCantonSelectLazyQuery({
            variables:{        
                inputWhere:{
                    provincia_id: { is: parameters.id }
                }
            },
            fetchPolicy: 'cache-and-network',
            onCompleted:(c:any)=>{            
                parameters.setDataCantonSelect(c?.digtCantonCollection?.data);          
            },onError:(error:any)=>{            
                parameters.setDataCantonSelect([]);
            }
        })
    }else{
        parameters.setDataCantonSelect([]);
        parameters.setDataParroquiaSelect([]);
        parameters.setDataZonaSelect([]);
        parameters.setDataJuntaSelect([]);

        parameters.setValue('idCanton_acta',null);
        parameters.setValue('idParroquia_acta',null);
        parameters.setValue('idZona_acta',null);
        parameters.setValue('idJunta_acta',null);
    }
}

/**
 * Procesa la selección de parroquias basado en el ID proporcionado.
 * 
 * @param parameters - Objeto que contiene los parámetros necesarios para la función.
 * @param parameters.getParroquiaSelectLazyQuery - Función para realizar la consulta perezosa de selección de parroquias.
 * @param parameters.setDataParroquiaSelect - Función para establecer los datos de la selección de parroquias.
 * @param parameters.setDataZonaSelect - (Opcional) Función para establecer los datos de la selección de zonas.
 * @param parameters.setDataJuntaSelect - (Opcional) Función para establecer los datos de la selección de juntas.
 * @param parameters.dispatch - Función de despacho para manejar acciones.
 * @param parameters.id - ID del cantón para realizar la consulta.
 * @param parameters.setValue - (Opcional) Función para establecer valores en el formulario.
 * 
 * Si el ID está presente, realiza una consulta para obtener las parroquias correspondientes al cantón y actualiza los datos de la selección de parroquias.
 * Si el ID no está presente, limpia las selecciones de parroquias, zonas y juntas, y restablece los valores del formulario.
 */
export const processParroquiaSelect =(
    parameters:{
        getParroquiaSelectLazyQuery:any,setDataParroquiaSelect:any,setDataZonaSelect?:any,setDataJuntaSelect?:any,
        dispatch:any,id:any,setValue?:any
    })=>{
    if(parameters.id){
        parameters.getParroquiaSelectLazyQuery({
            variables:{        
                inputWhere:{
                    canton_id: { is: parameters.id }
                }
            },
            fetchPolicy: 'cache-and-network',
            onCompleted:(c:any)=>{            
                parameters.setDataParroquiaSelect(c?.digtParroquiaCollection?.data);          
            },onError:(error:any)=>{            
                parameters.setDataParroquiaSelect([]);
            }
        })
    }else{
        parameters.setDataParroquiaSelect([]);
        parameters.setDataZonaSelect([]);
        parameters.setDataJuntaSelect([]);

        parameters.setValue('idParroquia_acta',null);
        parameters.setValue('idZona_acta',null);
        parameters.setValue('idJunta_acta',null);
    }
}

/**
 * Procesa la selección de zona y actualiza los datos correspondientes.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar la selección de zona.
 * @param parameters.getZonaSelectLazyQuery - Función para ejecutar la consulta de selección de zona.
 * @param parameters.setDataZonaSelect - Función para establecer los datos de la selección de zona.
 * @param parameters.cache - (Opcional) Política de caché para la consulta.
 * @param parameters.setDataJuntaSelect - (Opcional) Función para establecer los datos de la selección de junta.
 * @param parameters.dispatch - (Opcional) Función de despacho para acciones adicionales.
 * @param parameters.id - Identificador de la parroquia para la consulta.
 * @param parameters.setValue - (Opcional) Función para establecer valores en el formulario.
 */
export const processZonaSelect =(
        parameters:{
            getZonaSelectLazyQuery:any,setDataZonaSelect:any,cache?:string,setDataJuntaSelect?:any
            dispatch?:any,id:any,setValue?:any
        })=>{
    if(parameters.id){
        parameters.getZonaSelectLazyQuery({
            variables:{        
                inputWhere:{
                    parroquia_id: { is: parameters.id }
                }
            },
            fetchPolicy: 'cache-and-network',
            onCompleted:(c:any)=>{ 
                let datos = c?.digtZonaCollection?.data;           
                parameters.setDataZonaSelect(datos.map((element:any)=>{
                    return {
                        id:element.zona_id,
                        nombre: element.nombre
                    }
                }));          
            },onError:(error:any)=>{            
                parameters.setDataZonaSelect([]);
            }
        })
    }else{
        parameters.setDataZonaSelect([]);
        parameters.setDataJuntaSelect([]);

        parameters.setValue('idZona_acta',null);
        parameters.setValue('idJunta_acta',null);
    }
}

/**
 * Procesa la selección de la junta y actualiza los datos correspondientes.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para procesar la selección de la junta.
 * @param parameters.getJuntaSelectLazyQuery - Función para ejecutar la consulta de selección de junta.
 * @param parameters.setDataJuntaSelect - Función para establecer los datos de la selección de junta.
 * @param [parameters.cache] - (Opcional) Cadena de texto para la caché.
 * @param [parameters.dispatch] - (Opcional) Función de despacho para actualizar el estado.
 * @param parameters.idParroquia - ID de la parroquia.
 * @param parameters.idCanton - ID del cantón.
 * @param parameters.idProvincia - ID de la provincia.
 * @param parameters.idZona - ID de la zona.
 * @param [parameters.setValue] - (Opcional) Función para establecer el valor de un campo específico.
 *
 * Si el parámetro `idZona` está presente, se ejecuta la consulta `getJuntaSelectLazyQuery` con los parámetros
 * proporcionados y se actualizan los datos de la selección de junta con los resultados obtenidos. Si ocurre un error
 * durante la consulta, se establece un arreglo vacío en los datos de la selección de junta.
 *
 * Si el parámetro `idZona` no está presente, se establece un arreglo vacío en los datos de la selección de junta y
 * se establece el valor del campo `idJunta_acta` a `null`.
 */
export const processJuntaSelect =(
    parameters:{
        getJuntaSelectLazyQuery:any,setDataJuntaSelect:any,cache?:string,dispatch?:any,
        idParroquia:number,idCanton:number,idProvincia:number,idZona:number,setValue?:any
    })=>{
    if(parameters.idZona){
        parameters.getJuntaSelectLazyQuery({
            variables:{        
                inputWhere:{
                    parroquia_id: { is: parameters.idParroquia },
                    canton_id: { is: parameters.idCanton },
                    provincia_id: { is: parameters.idProvincia },
                    zona_id: { is: parameters.idZona }
                }
            },
            fetchPolicy: 'cache-and-network',
            onCompleted:(c:any)=>{ 
                let datos = c?.digtJuntaCollection?.data;           
                parameters.setDataJuntaSelect(datos.map((element:any)=>{
                    return {
                        id:element.id,
                        nombre: 'Junta ' + element.junta + ' - ' +  element.sexo
                    }
                }));          
            },onError:(error:any)=>{            
                parameters.setDataJuntaSelect([]);
            }
        })
    }else{
        parameters.setDataJuntaSelect([]);

        parameters.setValue('idJunta_acta',null);
    }
}


/**
 * Procesa la selección de dignidad utilizando una consulta perezosa.
 *
 * @param parameters - Objeto que contiene los parámetros necesarios para la función.
 * @param parameters.getDignidadLazyQuery - Función para ejecutar la consulta perezosa.
 * @param parameters.setDataDignidadSelect - Función para establecer los datos de la selección de dignidad.
 * @param parameters.cache - (Opcional) Cadena que representa la política de caché.
 * @param parameters.dispatch - Función de despacho para manejar acciones adicionales.
 *
 * La función ejecuta la consulta perezosa con una política de 'cache-and-network'.
 * En caso de éxito, establece los datos de la selección de dignidad con los datos obtenidos.
 * En caso de error, establece la selección de dignidad como un arreglo vacío.
 */
export const processDignidadSelect =(parameters:{getDignidadLazyQuery:any,setDataDignidadSelect:any,cache?:string,dispatch:any})=>{
    
    parameters.getDignidadLazyQuery({
        fetchPolicy: 'cache-and-network',
        onCompleted:(c:any)=>{            
            parameters.setDataDignidadSelect(c?.digtDignidadCollection?.data);          
        },onError:(error:any)=>{            
            parameters.setDataDignidadSelect([]);
        }
    })
}

/**
 * Procesa un acta de dignidad.
 *
 * @param {Object} parameters - Los parámetros necesarios para procesar el acta.
 * @param {any} parameters.toast - Componente de notificación para mostrar mensajes.
 * @param {any} parameters.data - Datos necesarios para procesar el acta.
 * @param {any} parameters.listActaDigitaLazyQuery - Función para realizar la consulta de actas.
 * @param {any} parameters.setDataDigita - Función para actualizar los datos de actas digitalizadas.
 * @param {any} parameters.setStatusLoading - Función para establecer el estado de carga.
 *
 * @returns {void}
 *
 * Esta función realiza una consulta para obtener una lista de actas digitalizadas 
 * basadas en la dignidad proporcionada. Muestra un mensaje de éxito si la consulta 
 * se completa correctamente y actualiza los datos de actas digitalizadas. En caso 
 * de error, muestra un mensaje de error.
 */
export const processActaDignidad=(
    parameters:
    {
        toast:any,data:any,listActaDigitaLazyQuery:any,setDataDigita:any,setStatusLoading:any
})=>{
    parameters.setStatusLoading(true);
    parameters.listActaDigitaLazyQuery({
            variables:{   
                dignidad_id: parameters.data.idDignidad_acta.id,
            },
            fetchPolicy: 'cache-and-network',
            onCompleted:(c:any)=>{ 
                parameters.toast.current.show({ severity: 'success', summary: 'Atención', detail:'Acta procesada', life: 3000 });
                parameters.setDataDigita(c.digtActaByDignidadList);
                parameters.setStatusLoading(false);
            },onError:(error:any)=>{
                parameters.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 3000 });  
                parameters.setStatusLoading(false); 
            }
        })
}

/**
 * Procesa y guarda la digitalización de votos.
 * 
 * @param {Object} parameters - Parámetros necesarios para el procesamiento.
 * @param {Function} parameters.setVisible - Función para establecer la visibilidad de un componente.
 * @param {Object} parameters.toast - Objeto para mostrar mensajes de notificación.
 * @param {Object} parameters.data - Datos que contienen los votos a procesar.
 * @param {Function} parameters.digtVotosUpdateMutation - Mutación para actualizar los votos digitalizados.
 * @param {Function} parameters.navigate - Función para navegar a diferentes rutas.
 * @param {Function} parameters.dispatch - Función para despachar acciones en el estado global.
 * @param {Function} parameters.setStatusLoading - Función para establecer el estado de carga.
 * 
 * @returns {Promise<boolean>} - Retorna false si hay datos faltantes, de lo contrario no retorna nada.
 */
export const processSaveDigita=async (parameters:{setVisible:any,toast:any,data:any,digtVotosUpdateMutation:any,navigate:any,dispatch:any,setStatusLoading:any})=>{
    
    let dataFaltante=parameters.data.atributoRecorte.filter((x:any)=>x === null);
    if(dataFaltante.length >0){
        parameters.toast.current.show({ severity: 'warn', summary: 'Atención', detail:'Registre todos los valores del listado Acta', life: 3000 });    
        return false;
    }

    parameters.setVisible(
        {
            status:true,mensaje:`Esta seguro que desea Procesar esta Acta?`,
            accept:()=>{
                processUpdateDigitaVoto(
                    {
                        data:parameters.data,toast:parameters.toast,
                        digtVotosUpdateMutation:parameters.digtVotosUpdateMutation,
                        navigate:parameters.navigate,setStatusLoading:parameters.setStatusLoading,
                        dispatch:parameters.dispatch,
                    }
                )
            },reject:()=>{}
        }
    );
    
}

/**
 * Procesa la actualización de la digitación de votos.
 *
 * @param {Object} update - Objeto que contiene las propiedades necesarias para la actualización.
 * @param {any} update.toast - Referencia al componente de notificación.
 * @param {any} update.data - Datos necesarios para la actualización.
 * @param {any} update.digtVotosUpdateMutation - Función de mutación para actualizar los votos digitados.
 * @param {any} update.navigate - Función para navegar a otra ruta.
 * @param {any} update.dispatch - Función para despachar acciones de Redux.
 * @param {any} update.setStatusLoading - Función para establecer el estado de carga.
 *
 * @throws {any} - Captura y maneja cualquier error que ocurra durante el proceso.
 *
 * @returns {void}
 */
const processUpdateDigitaVoto=(update:{toast:any,data:any,digtVotosUpdateMutation:any,navigate:any,dispatch:any,setStatusLoading:any})=>{
    try{
   
        const CryptoTS = require("crypto-ts");
        const iv =  CryptoTS.enc.Utf8.parse('algorithmencript');
        const key = 'asuncionbackalgorithmencript2024';
                
        let dataRecorte=update.data.atributoRecorte;
        let dataCandidato=update.data.dataGeneral.candidatoId   
        let dataSave:{candidato_id:number,votosdigitacion:number,cifrado:string}[]=[];
                
        dataRecorte.forEach((element:any,x:number) => {   
            dataSave=[...dataSave,{
                candidato_id:dataCandidato[x],
                votosdigitacion:parseInt(element),
                cifrado: CryptoTS.AES.encrypt(JSON.stringify(
                    {candidato_id:dataCandidato[x],votosdigitacion:element}),  key,
                        {
                            mode: CryptoTS.mode.CBC,
                            iv: iv,  
                        }
                    ).toString()
                }
            ]
        });
        update.setStatusLoading(true);
        update.digtVotosUpdateMutation({
            variables:{
                inputUpdate: {
                    acta_id:update.data.actaId,
                   votos:dataSave
               }
            },onCompleted:(c:any)=>{      
                update.navigate("record");
                update.dispatch(setInitial({initial:1}))
                update.dispatch(setMessage({message:c.digtVotosUpdate?.message}))
                update.setStatusLoading(false);
            },onError:(error:any)=>{
                update.toast.current.show({ severity: 'error', summary: 'Atención', detail: error.message, life: 4000 });   
                update.setStatusLoading(false);           
           }
        })
    
    
        }catch(e:any){
            update.setStatusLoading(false);
        }
}