import { UtilsButton,UtilsModal } from '@components/partials/Utils';
import { Toolbar } from 'primereact/toolbar';
import { coreAccesosBsc } from '@components/service/authservice';
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';
import { useEffect,useRef,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { Tag } from 'primereact/tag';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { DataTable,DataTableSelectEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { locale, addLocale } from 'primereact/api';
import { Message } from 'primereact/message';
export const UtilsCoreToolbar=(
    {
        setVisibleModalAux,selectedGrid=false,onClickExport,onClickExportPdf,opt=false,navigate,
        dataGrid={}
    }:{
        setVisibleModalAux?:any,selectedGrid?:boolean,
        onClickExport?:any,onClickExportPdf?:any,opt?:boolean,
        navigate:any;dataGrid:any
    }
)=>{

    const dataAccesos=coreAccesosBsc();
    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                {(dataAccesos.onAdd && opt)&&
                    <UtilsButton label="Nuevo" size={'small'} icon="pi pi-plus"  severity="info" raised text link
                        onClick={()=>{setVisibleModalAux({dataGrid,active:true,header:'Nuevo Registro',opt:'N'})}}
                    />
                }
                {(dataAccesos.onEdit)&&
                    <UtilsButton label="Editar" type='button' size={'small'} icon="pi pi-pencil" severity="secondary"  raised text link 
                        onClick={()=>{navigate("new",{ state: { dataRecord:{dataGrid}} })}} 
                        disabled={!selectedGrid }
                    />
                }
                {(dataAccesos.onView)&&
                    <UtilsButton  label="Ver" size={'small'} icon="pi pi-eye"  severity="warning" raised text link
                        onClick={()=>{setVisibleModalAux({active:true,header:'Mostrar Registro',opt:'V',closable:true,maximizable:true})}}
                        disabled={!selectedGrid } 
                    />
                }
                {(dataAccesos.onDelete)&&
                    <UtilsButton label="Borrar" size={'small'} icon="pi pi-trash"  severity="danger" raised text link
                        onClick={()=>setVisibleModalAux({active:true,header:'Eliminar Registro',opt:'D',closable:true,maximizable:true})} 
                        disabled={!selectedGrid } 
                    />
                }

            </div>
        );
    };


    const rightToolbarTemplate = () => {
        return(
			<>
                <div>
                    {(dataAccesos.onPrint)&&
				        <>
                            <UtilsButton size='small' raised text link label="" icon="pi pi-file text-xl" className="p-button-secondary" onClick={onClickExport} /> &nbsp;&nbsp;
			    	        <UtilsButton size='small' raised text link label="" icon="pi pi-file-pdf text-xl" className="p-button-help text-red-500" severity="danger" onClick={onClickExportPdf} />
                        </>
                    }
                </div>
			</>
		)
    };


    return (
        <Toolbar className="p-2 border-none" end={leftToolbarTemplate} start={rightToolbarTemplate}></Toolbar>
    )
}

export const UtilsCoreTabMenu =(
    {
        model={labelNew:'Nuevo',labelGrid:'Grid',iconNew:'pi pi-clone',iconGrid:'pi pi-th-large'},
        viewForm='Formulario',viewGrid='Datos',useRoutes,navigate,init, setInitial, dispatch
        
    }:
    {
        model:{labelNew:string,labelGrid:string,iconNew:string,iconGrid:string,newItem?:{labelNew:string,iconNew:string,path:string}},
        viewForm:string|JSX.Element|JSX.Element[]|undefined, viewGrid:string|JSX.Element|JSX.Element[]|undefined ,useRoutes:any,
        navigate:any,init:number,setInitial:any,dispatch:any
    }
)=>{
   
    const {state} = useLocation();  
  
    const dataAccesos:any=coreAccesosBsc();
    const items: MenuItem[] = [
        { 
            ...(dataAccesos?.getTabs?.create)&&{
                label: (model.labelNew)?model.labelNew:'Nuevo', icon: (model.iconNew)?model.iconNew:'pi pi-clone', command: () => {navigate("new")} 
            }
        },
        { 
            ...(dataAccesos?.getTabs?.read)&&{
                label: (model.labelGrid)?model.labelGrid:'Grid', icon: (model.iconGrid)?model.iconGrid:'pi pi-th-large',command: () => {navigate("record")} 
            }
        }
        
    ];

   const  RutaCore =()=>{
        let router:any=useRoutes([
           
            {
                ...(dataAccesos?.getTabs?.create && init ===dataAccesos?.conteo?.initCreate)&&{
                    path:'new',
                    element:viewForm,                    
                }

            },
            
            {
                ...(dataAccesos?.getTabs?.read && init ===dataAccesos?.conteo?.initRead)&&{ 
                    path:'record',
                    element:viewGrid,
                }
            }
        ])
        return router
    }

    useEffect(()=>{
        if(state){           
            dispatch(setInitial({initial:0}))
        }   
    },[state])


    useEffect(()=>{
        navigate(dataAccesos.conteo.initDefault)
    },[])
       
    return(
        <>
            <TabMenu model={items.filter((e=>e?.label))} onTabChange={(e) => {dispatch(setInitial({initial:e.index}))}} 
            activeIndex={init} pt={{label:{'className':'text-sm'},icon:{'className':`hidden lg:inline-block`}}}/>           
            <RutaCore/>           
        </>
    )
}

interface ColumnMeta {
	field: string;
	header: string;
	sortable?:boolean;
	body?:any;
	filter?:boolean;
	filterPlaceholder?:string;
	hidden?:boolean,
    style?:any,
    frozen?:boolean,
    className?:string,
    footer?:any
}

export const UtilsCoreDataTable =(
    {
        columns,
        status={estado:'estado',header:'Estado'},
        selectedGrid, setselectedGrid,recordStatus=false,
        recordGrid,title='Listado',
        setPageInfo,pageInfo ,dispatch,
        ContenidoView='',navigate,onSubmit,toast,setMessage,
        setCache
    }:
    {
        columns:ColumnMeta[],status?:{estado:string,header:string},
        selectedGrid:any,setselectedGrid:any,recordStatus:boolean,
        recordGrid:any,onRowSelect:any,
        title:string,setPageInfo:any,pageInfo:{limit:number,offset:number,count:number},
        dispatch:any,ContenidoView:string|null|JSX.Element|JSX.Element[]|any,
        navigate:any,setVisibleModal:any, visibleModal:{dataGrid:any,active:boolean,header:string,opt?:string,closable:boolean,maximizable:boolean,closeOnEscape:boolean}
        onSubmit?:any,toast:any,setMessage:any,setCache:any
    }
)=>{

    locale('es');

    addLocale('es', {
        "startsWith": "Comience con",
        "contains": "Contenga",
        "notContains": "No contenga",
        "endsWith": "Termine con",
        "equals": "Igual a",
        "notEquals": "Diferente a",
        "noFilter": "Sin filtro",
        "lt": "Menor que",
        "lte": "Menor o igual a",
        "gt": "Mayor que",
        "gte": "Mayor o igual a",
        "dateIs": "Fecha igual a",
        "dateIsNot": "Fecha diferente a",
        "dateBefore": "Fecha antes de",
        "dateAfter": "Fecha después de",
        "custom": "Personalizar",
        "clear": "Limpiar",
        "apply": "Aplicar",
        "matchAll": "Coincidir todo",
        "matchAny": "Coincidir con cualquiera",
        "addRule": "Agregar regla",
        "removeRule": "Eliminar regla",
        "accept": "Sí",
        "reject": "No",
        "choose": "Escoger",
        "upload": "Subir",
        "cancel": "Cancelar",
        "fileSizeTypes": [
            "B",
            "KB",
            "MB",
            "GB",
            "TB",
            "PB",
            "EB",
            "ZB",
            "YB"
        ],
        "dayNames": [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado"
        ],
        "dayNamesShort": [
            "Dom",
            "Lun",
            "Mar",
            "Mié",
            "Jue",
            "Vie",
            "Sáb"
        ],
        "dayNamesMin": [
            "D",
            "L",
            "M",
            "M",
            "J",
            "V",
            "S"
        ],
        "monthNames": [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ],
        "monthNamesShort": [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ],
        "today": "Hoy",
        "now": "Ahora",
        "weekHeader": "Sem",
        "firstDayOfWeek": 1,
        "dateFormat": "dd/mm/yy",
        "weak": "Débil",
        "medium": "Medio",
        "strong": "Fuerte",
        "passwordPrompt": "Escriba una contraseña",
        "emptyFilterMessage": "Sin opciones disponibles",
        "emptyMessage": "No se han encontrado resultados",
        "aria": {
            "trueLabel": "Verdadero",
            "falseLabel": "Falso",
            "nullLabel": "No seleccionado",
            "star": "1 estrella",
            "stars": "{star} estrellas",
            "selectAll": "Seleccionar todos",
            "unselectAll": "Deseleccionar todos",
            "close": "Cerrar",
            "previous": "Anterior",
            "next": "Siguiente",
            "navigation": "Navegación",
            "scrollTop": "Desplazarse hacia arriba",
            "moveTop": "Mover arriba",
            "moveUp": "Subir",
            "moveDown": "Bajar",
            "moveBottom": "Desplazarse hacia abajo",
            "moveToTarget": "Mover al objetivo",
            "moveToSource": "Mover al origen",
            "moveAllToTarget": "Mover todo al objetivo",
            "moveAllToSource": "Mover todo al origen",
            "pageLabel": "Página {page}",
            "firstPageLabel": "Primera Página",
            "lastPageLabel": "Última Página",
            "nextPageLabel": "Siguiente Página",
            "previousPageLabel": "Página Anterior",
            "rowsPerPageLabel": "Filas por página",
            "jumpToPageDropdownLabel": "Ir al menú desplegable de página",
            "jumpToPageInputLabel": "Ir a la entrada de página",
            "selectRow": "Seleccionar fila",
            "unselectRow": "Desmarcar fila",
            "expandRow": "Expandir Fila",
            "collapseRow": "Reducir Fila",
            "showFilterMenu": "Mostrar menú del filtro",
            "hideFilterMenu": "Ocultar menú del filtro",
            "filterOperator": "Operador de filtro",
            "filterConstraint": "Restricción de filtro",
            "editRow": "Editar fila",
            "saveEdit": "Guardar editado",
            "cancelEdit": "Cancelar editado",
            "listView": "Vista de lista",
            "gridView": "Vista de cuadrícula",
            "slide": "Deslizar",
            "slideNumber": "{slideNumber}",
            "zoomImage": "Ampliar imagen",
            "zoomIn": "Ampliar",
            "zoomOut": "Reducir",
            "rotateRight": "Girar a la derecha",
            "rotateLeft": "Girar a la izquierda"
         }
        //...
    });

     
    const dt = useRef<DataTable<any>>(null);
    const onPageChange = (event: PaginatorPageChangeEvent) => {  
        dispatch(setPageInfo({limit:event.rows,offset:event.first}))
    };

    const statusBodyTemplate = (modulo:any) => {        
    	return <Message className='p-2' severity={`${(modulo.estado)?'info':'error'}`} 
        text={`${(modulo.estado)?'Activo':'Inactivo'}`}  
        pt={{text:{className:'text-xs'},icon:{className:'text-xs'}}} icon='pi pi-circle-fill'/>
    };

    const columnsAux: ColumnMeta[] = [
		...columns,
		{ field: status.estado, header: status.header, body:statusBodyTemplate }
    ];


    const exportCSV = () => {
        dt.current?.exportCSV();
    };

    const exportColumns = columns.map((col) => ({ title: col.header, dataKey: col.field }));

	const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc:any = new jsPDF.default(0 as any, 0 as any);

                doc.autoTable(exportColumns, recordGrid.data);
                doc.save(`${title}.pdf`);
            });
        });
    };
    
    const [ dataGrid, setdataGrid] = useState()


    const onRowSelect =(event: DataTableSelectEvent)=>{
		setdataGrid(event.data)	
	}


    //useState
    const [ visibleModalAux, setVisibleModalAux ] = useState<
    {
        active:boolean,header:string,opt?:string,closable:boolean,maximizable:boolean,closeOnEscape:boolean
    }>({active:false,header:'',opt:'',closable:false,maximizable:true,closeOnEscape:false});
    
    const rowClass = (data:any) => {        
        return {
            'text-gray-600': data.estado === false
        };
    };

    return (
        <>
        <Toast ref={toast} position="bottom-center" pt={{content:{className:'border-round-lg shadow-2'},message:{className:'text-sm font-semibold'}}} 
        onHide={()=>{dispatch(setMessage({message:null})); dispatch(setCache({cache:'cache-and-network'}))}}/> 
        <DataTable 				
				rows={pageInfo.limit}				
				selectionPageOnly={true}
				selection={selectedGrid} 					
				metaKeySelection={false}
				onSelectionChange={(e) => {setselectedGrid(e.value)}}
				filterDisplay="row"
				loading={recordStatus} 
				removableSort 
				sortMode="multiple"
				showGridlines={false}   				
				stripedRows 
				size='normal'							
				value={recordGrid?.data}				
				tableStyle={{ minWidth: '50rem' }} 					
                header={
                        <UtilsCoreToolbar                            
                            dataGrid={dataGrid} 
                            navigate={navigate} 
                            setVisibleModalAux={setVisibleModalAux} 
                            selectedGrid={selectedGrid} 
                            onClickExport={exportCSV} 
                            onClickExportPdf={exportPdf}
                        />
                        }
				ref={dt} 
				onRowSelect={onRowSelect} 
				selectionMode="single"
				unselectable='on'
                scrollable
                scrollHeight="550px"
                pt={{headerRow:{className:'text-sm text-gray-500'},header:{className:'text-gray-600 text-sm font-medium'}}}
                rowClassName={rowClass}
			>
            {columnsAux.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} sortable={col?.sortable} filter={col?.filter}				
                    filterPlaceholder={col?.filterPlaceholder} 
                    body={col.body} hidden={col.hidden} style={col.style} 
                    frozen={(col?.frozen)?true:false}
                    className={col?.className}
                    footer={col?.footer}
                />
			))}		
        </DataTable>
        <Paginator leftContent={<span className='text-sm font-semibold'>Total {recordGrid?.pageInfo?.count} Registros</span>} rightContent=' ' first={pageInfo.offset} rows={pageInfo.limit} totalRecords={recordGrid?.pageInfo?.count} rowsPerPageOptions={[5,10, 20, 30]} onPageChange={onPageChange} />

        {(visibleModalAux?.active)&&  
        
            <UtilsModal setVisible={setVisibleModalAux} closable={visibleModalAux?.closable}
                closeOnEscape={visibleModalAux?.closeOnEscape}
                headerElement={visibleModalAux?.header}
                visible={visibleModalAux?.active}
                contenido={ <ContenidoView dataGrid={dataGrid}/>}
                maximizable={visibleModalAux.maximizable}
                footerContent={
                    <>
                                                
                                    <UtilsButton 
                                    type='button'                                     
                                    onClick={()=>{setVisibleModalAux({active:false,header:'',opt:'',closable:false,maximizable:true,closeOnEscape:false})}} 
                                    icon={'pi pi-times'}
                                    size={'small'}  
                                    severity="danger"                                    
                                    raised text link 
                                    label= {'Salir'}   
                                    className="text-sm"/>
                                    {(visibleModalAux.opt=='D')&&
                                        <UtilsButton  
                                        
                                        type='submit'                                       
                                        icon={'pi pi-check'} 
                                        label= {'Eliminar'} 
                                        size={'small'} 
                                        severity="primary"  
                                        raised text                             
                                        className="text-sm" 
                                        onClick={()=>{onSubmit(dataGrid,toast)}}/>
                                    }
                               
                            </>
                }               
            />
        }
            
        </>
    )
}