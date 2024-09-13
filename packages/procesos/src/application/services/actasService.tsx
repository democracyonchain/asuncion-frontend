import "jspdf-barcode";
import { setCache,setInitial,setMessage } from '@presentation/actions';
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


const tratamientoValues=(datos:any,formData:any)=>{

    let objValues= datos.id + ',' + datos.seguridad + ',' + formData.idProvincia_acta.id + ',' +
        formData.idCanton_acta.id + ',' + formData.idParroquia_acta.id + ',' +
        formData.idZona_acta.id + ','+ datos.junta.junta + ',' + datos.junta.sexo + ',' +
        datos.dignidad.id
    return JSON.stringify(objValues)
}

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