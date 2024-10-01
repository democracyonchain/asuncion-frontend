import { useEffect, useRef, useState,Dispatch } from 'react';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';
import { ScrollPanel } from 'primereact/scrollpanel';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';
import { useNavigate } from "react-router-dom";

/**
 * Componente de botón utilitario.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.label] - Etiqueta del botón.
 * @param {string} [props.type='button'] - Tipo de botón.
 * @param {boolean} [props.link=false] - Indica si el botón es un enlace.
 * @param {string} [props.icon=''] - Icono del botón.
 * @param {boolean} [props.loading=false] - Indica si el botón está en estado de carga.
 * @param {Function} [props.onClick] - Función que se ejecuta al hacer clic en el botón.
 * @param {string} [props.severity] - Severidad del botón.
 * @param {boolean} [props.disabled=false] - Indica si el botón está deshabilitado.
 * @param {boolean} [props.raised=false] - Indica si el botón tiene un estilo elevado.
 * @param {boolean} [props.rounded=false] - Indica si el botón tiene bordes redondeados.
 * @param {boolean} [props.text=false] - Indica si el botón es solo texto.
 * @param {boolean} [props.outlined=false] - Indica si el botón tiene un borde delineado.
 * @param {string} [props.ariaLabel=''] - Etiqueta aria para accesibilidad.
 * @param {any} [props.badge] - Contenido de la insignia del botón.
 * @param {string} [props.badgeClassName=''] - Clase CSS para la insignia del botón.
 * @param {string} [props.size] - Tamaño del botón.
 * @param {string} [props.className] - Clase CSS adicional para el botón.
 * @param {boolean} [props.autoFocus=false] - Indica si el botón debe recibir el foco automáticamente.
 *
 * @returns {JSX.Element} El componente de botón.
 */
export const UtilsButton = (
    {
        label=undefined,type='button',link=false,icon='',loading=false,onClick,severity=undefined,
        disabled=false,raised=false,rounded=false,text=false,outlined=false,ariaLabel='',badge,
        badgeClassName='', size=undefined, className, autoFocus=false
    }:
    {
        label:string|undefined,type?:any,link?:boolean,icon?:any,loading?:boolean,onClick?:any,severity?:any,
        disabled?:boolean,raised?:boolean,rounded?:boolean,text?:boolean,outlined?:boolean,ariaLabel?:any,badge?:any,
        badgeClassName?:any,size?:any,className?:any,autoFocus?:boolean
    }) => {

    return (
        <Button 
            label={label} rounded={rounded} type={type} link={link}  icon={icon} loading={loading} onClick={onClick} severity={severity}
            disabled={disabled} raised={raised} text={text} outlined={outlined} aria-label={ariaLabel} badge={badge} 
            badgeClassName={badgeClassName} size={size} className={className} autoFocus={autoFocus} pt={{label:{className:'hidden lg:inline-block'}}}
        />
    )
}


/**
 * Componente `UtilsAccordion` que renderiza un acordeón con pestañas dinámicas.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.data - Array de objetos que representan las pestañas del acordeón.
 * @param {Object} props.data[].header - Encabezado de la pestaña.
 * @param {Object} props.data[].children - Contenido de la pestaña.
 * @param {boolean} props.data[].disabled - Indica si la pestaña está deshabilitada.
 * @param {number} props.active - Índice de la pestaña activa.
 * @param {Function} props.onClick - Función que se ejecuta al cambiar de pestaña.
 * 
 * @returns {JSX.Element} El componente `UtilsAccordion`.
 * 
 * @example
 * <UtilsAccordion 
 *   data={[
 *     { header: 'Tab 1', children: <div>Contenido 1</div>, disabled: false },
 *     { header: 'Tab 2', children: <div>Contenido 2</div>, disabled: true }
 *   ]}
 *   active={0}
 *   onClick={(e) => console.log(e)}
 * />
 */
export const UtilsAccordion=(
    {
        data=[{header:'demo1',children:(<> Demo 1</>),disabled:false}],active=0,onClick
    }:
    {
        data:[{header:any,children:any,disabled:boolean}],active:number,onClick:()=>{}
    }
    )=>{
    

        const [activeIndex, setActiveIndex] = useState<number|number[]>();
    const createDynamicTabs = () => {
        return data.map((tab, i) => {
            return (
                <AccordionTab key={tab.header} header={tab.header} disabled={tab.disabled}>
                    {tab.children}
                </AccordionTab>
            );
        });
    };    
   
    useEffect(()=>{
        setActiveIndex(active);       
    },[active])

  
    return (
        <Accordion activeIndex={activeIndex} onTabChange={onClick}>{createDynamicTabs()}</Accordion>
    )
}

/**
 * Componente `UtilsFieldset` que renderiza un `Fieldset` con datos proporcionados.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.data - Los datos que se mostrarán dentro del `Fieldset`.
 * @param {string | null | JSX.Element | JSX.Element[]} [props.legend=''] - La leyenda del `Fieldset`, puede ser una cadena, nulo, un elemento JSX o una lista de elementos JSX.
 * @param {boolean} [props.toggleable=false] - Indica si el `Fieldset` es colapsable.
 *
 * @returns {JSX.Element} El componente `Fieldset` con los datos y la leyenda proporcionados.
 */
export const UtilsFieldset=({data,legend='',toggleable=false}:{data:any,legend:string|null|JSX.Element|JSX.Element[],toggleable:boolean})=>{

    return (
        <Fieldset legend={legend} toggleable={toggleable}>
            {data}
        </Fieldset>
    )

}

/**
 * Componente `UtilsDivider` que renderiza un divisor con diferentes propiedades.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.type='solid'] - Tipo de divisor (por ejemplo, 'solid', 'dashed').
 * @param {string|undefined} [props.align=undefined] - Alineación del contenido del divisor.
 * @param {string|null|JSX.Element|JSX.Element[]} [props.content=null] - Contenido a mostrar dentro del divisor.
 * @param {string} [props.layout='horizontal'] - Disposición del divisor (por ejemplo, 'horizontal', 'vertical').
 *
 * @returns {JSX.Element} - Elemento JSX que representa el divisor.
 */
export const UtilsDivider=(
        {
            type='solid',align=undefined,content=null,layout='horizontal'
        }:
        {
            type:any,align:any,content:string|null|JSX.Element|JSX.Element[],
            layout:any
        }
    )=>{

    return (
        <Divider type={type} align={align} layout={layout}>
            {content}
        </Divider>
    )
}

/**
 * Componente `UtilsScrollPanel` que envuelve el contenido proporcionado dentro de un `ScrollPanel`.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string | null | JSX.Element | JSX.Element[]} props.content - Contenido a mostrar dentro del `ScrollPanel`.
 * @param {Object} props.style - Estilo CSS para el `ScrollPanel`. Por defecto, tiene un ancho del 100% y una altura de 150px.
 * @param {any} props.className - Clase CSS adicional para el `ScrollPanel`.
 *
 * @returns {JSX.Element} El componente `ScrollPanel` con el contenido proporcionado.
 */
export const UtilsScrollPanel=(
    {
        content='',style={width: '100%', height: '150px'},className=''
    }:
    {
        content:string|null|JSX.Element|JSX.Element[],
        style:{},className:any
    })=>{
    return (
        <ScrollPanel style={style} className={className}>
            {content}
        </ScrollPanel>
    )
}


/**
 * Componente `UtilsTabs` que renderiza una vista de pestañas.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.data - Arreglo de objetos que representan las pestañas.
 * @param {string | null | JSX.Element | JSX.Element[]} props.data[].header - Encabezado de la pestaña.
 * @param {string | null | JSX.Element | JSX.Element[]} props.data[].content - Contenido de la pestaña.
 * @param {boolean} [props.data[].disabled] - Indica si la pestaña está deshabilitada.
 * @param {any} [props.data[].leftIcon] - Icono a la izquierda del encabezado de la pestaña.
 * @param {any} [props.data[].rightIcon] - Icono a la derecha del encabezado de la pestaña.
 * @param {boolean} props.scrollable - Indica si las pestañas son desplazables.
 * @param {number} props.active - Índice de la pestaña activa.
 * @param {Function} props.onClick - Función que se ejecuta al hacer clic en una pestaña.
 * 
 * @returns {JSX.Element} - Retorna un componente `TabView` con las pestañas especificadas.
 */
export const UtilsTabs =(
    {
        data=[{header:'Demo Tab',content:'Demo Tab',disabled:false}],
        scrollable=false,active=0,onClick
    }:
    {
        data:[
            {
                header:string|null|JSX.Element|JSX.Element[],content:string|null|JSX.Element|JSX.Element[],
                disabled?:boolean,leftIcon?:any,rightIcon?:any
            }
        ],
        scrollable:boolean,active:number,onClick:()=>{}
    })=>{

    const [activeIndex, setActiveIndex] = useState<number>();

    useEffect(()=>{
        setActiveIndex(active);       
    },[active])

    return (
        <TabView scrollable={scrollable} activeIndex={activeIndex} onTabChange={onClick}>
             {data.map(({ header, content, disabled,leftIcon,rightIcon},index) => (
                    <TabPanel key={index} header={header} disabled={(disabled)?true:false} leftIcon={leftIcon} rightIcon={rightIcon} >                       
                       {content}
                    </TabPanel>
            ))}
        </TabView>
    )
}

/**
 * Componente `UtilsCard` que renderiza una tarjeta con título, subtítulo, pie de página, encabezado y contenido.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título de la tarjeta.
 * @param {string} props.subTitle - Subtítulo de la tarjeta.
 * @param {string | null | JSX.Element | JSX.Element[]} props.footer - Pie de página de la tarjeta, puede ser una cadena, nulo o un elemento JSX.
 * @param {string | null | JSX.Element | JSX.Element[]} props.header - Encabezado de la tarjeta, puede ser una cadena, nulo o un elemento JSX.
 * @param {string} props.className - Clase CSS para estilizar la tarjeta.
 * @param {string | null | JSX.Element | JSX.Element[]} props.content - Contenido de la tarjeta, puede ser una cadena, nulo o un elemento JSX.
 *
 * @returns {JSX.Element} - Retorna un componente `Card` con las propiedades especificadas.
 */
export const UtilsCard=(
    {
        title='',subTitle='',footer='',header='', className='md:w-25rem',content=''
    }:
    {
        title:string,subTitle:string,footer:string|null|JSX.Element|JSX.Element[],
        header:string|null|JSX.Element|JSX.Element[],className:string,
        content:string|null|JSX.Element|JSX.Element[]
    })=>{

    return (
        <Card title={title} subTitle={subTitle} footer={footer} header={header} className={className}>
            {content}
        </Card>
    )
}

/**
 * Componente `UtilsPanel` que renderiza un panel con opciones de encabezado, pie de página y contenido personalizables.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string | null | JSX.Element | JSX.Element[]} props.headerTemplate - Plantilla del encabezado del panel.
 * @param {string | null | JSX.Element | JSX.Element[]} props.footerTemplate - Plantilla del pie de página del panel.
 * @param {boolean} props.toggleable - Indica si el panel es colapsable.
 * @param {string | null | JSX.Element | JSX.Element[]} props.children - Contenido del panel.
 * @param {string | null | JSX.Element | JSX.Element[]} props.header - Encabezado del panel.
 * @param {string} props.className - Clase CSS adicional para el panel.
 *
 * @returns {JSX.Element} El componente `UtilsPanel` renderizado.
 */
export const UtilsPanel=(
    {
        headerTemplate='',
        footerTemplate='',
        toggleable=false,
        children='',
        header='', 
        className='',
       
    }:
    {
        headerTemplate:string|null|JSX.Element|JSX.Element[],
        footerTemplate:string|null|JSX.Element|JSX.Element[],
        toggleable:boolean
        children:string|null|JSX.Element|JSX.Element[],
        header:string|null|JSX.Element|JSX.Element[],
        className:string,
       
    })=>{

    return (
        <Panel header={header} headerTemplate={headerTemplate} footerTemplate={footerTemplate} toggleable={toggleable} className={className} 
                pt={{header:{className:'text-sm text-gray-600'}}}>
            {children}
        </Panel>
    )
}

/**
 * Componente de confirmación de utilidades.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Dispatch<any>} props.setVisible - Función para cambiar la visibilidad del diálogo.
 * @param {boolean} [props.visible=false] - Indica si el diálogo es visible.
 * @param {Function} props.accept - Función a ejecutar al aceptar.
 * @param {Function} props.reject - Función a ejecutar al rechazar.
 * @param {string} [props.message='Mensaje'] - Mensaje a mostrar en el diálogo.
 * @param {string} [props.header='Confirmación'] - Encabezado del diálogo.
 * @param {string} [props.icon='pi pi-exclamation-triangle'] - Icono a mostrar en el diálogo.
 * @param {number} [props.opt=1] - Opción para personalizar el diálogo.
 * 
 * @returns {JSX.Element} El componente de diálogo de confirmación.
 */
export const UtilsConfirm=(
    {
        setVisible,
        visible=false,
        accept,
        reject,
        message='Mensaje',
        header='Confirmación',
        icon='pi pi-exclamation-triangle',
        opt=1
    }:
    {
        setVisible:Dispatch<any>,
        visible:boolean,
        accept:()=>{},
        reject:()=>{},
        message:string,
        header?:string,
        icon?:string,
        opt?:number
    })=>{
              
    return (
        <ConfirmDialog 
            visible={visible} onHide={() => {(setVisible)?setVisible({status:false,opt:opt,mensaje:message,header:header}):''}}
            message={message} 
            header={header} 
            icon={(opt==1)?'pi pi-exclamation-triangle':'pi pi-info-circle'} 
            accept={accept} reject={reject}
            acceptLabel='Si'
            acceptClassName={(opt==1)?'p-button-label':'p-button-danger'}
            position='center'
        />
    )

}

/**
 * Componente `UtilsModal` que renderiza un modal utilizando el componente `Dialog`.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.setVisible - Función para cambiar la visibilidad del modal.
 * @param {boolean} [props.visible=false] - Indica si el modal es visible.
 * @param {string | null | JSX.Element | JSX.Element[]} [props.headerElement=''] - Elemento que se renderiza en el encabezado del modal.
 * @param {string | null | JSX.Element | JSX.Element[]} [props.footerContent=''] - Contenido que se renderiza en el pie del modal.
 * @param {string | null | JSX.Element | JSX.Element[] | any} [props.contenido=''] - Contenido principal del modal.
 * @param {boolean} [props.maximizable=false] - Indica si el modal puede maximizarse.
 * @param {boolean} [props.closable=true] - Indica si el modal puede cerrarse.
 * @param {boolean} [props.closeOnEscape=true] - Indica si el modal se cierra al presionar la tecla Escape.
 * @param {any} [props.position='center'] - Posición del modal en la pantalla.
 * @param {any} [props.width='50rem'] - Ancho del modal.
 * 
 * @returns {JSX.Element} El componente `Dialog` con las propiedades especificadas.
 */
export const UtilsModal=(
    {
        setVisible,
        visible=false,
        headerElement='',
        footerContent='',
        contenido='',
        maximizable=false,
        closable=true,
        closeOnEscape=true,
        position='center',
        width='50rem'
    }
    :{
        setVisible:any,
        visible:boolean,
        headerElement?:string|null|JSX.Element|JSX.Element[],
        footerContent?:string|null|JSX.Element|JSX.Element[],
        contenido?:string|null|JSX.Element|JSX.Element[]|any,
        maximizable?:boolean
        closable?:boolean
        closeOnEscape?:boolean
        position?:any,
        width?:any
    })=>{

    return (
        <Dialog maximizable={maximizable} visible={visible} modal header={headerElement}  closable={closable} position={position}
        footer={footerContent} style={{ width }} onHide={() => setVisible(false)} closeOnEscape={closeOnEscape}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
        >
            {contenido}
        </Dialog>
    )
}

/**
 * Componente `UtilsSpinner` que muestra un spinner de progreso cuando es visible.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} [props.visible=false] - Determina si el spinner debe ser visible.
 *
 * @returns {JSX.Element} Un elemento JSX que contiene el spinner de progreso si `visible` es `true`.
 */
export const UtilsSpinner=({visible=false}:{visible:boolean})=>{

    return (
        <>
        {(visible)?
            <div  className="flex bg-white-alpha-70 align-items-center justify-content-center p-dialog-mask p-dialog-top p-component-overlay p-component-overlay-enter p-dialog-draggable p-dialog-resizable" 
                    style={{position:"fixed", height:"100%", zIndex:99999999999999, width:"100%"}}>
                    <ProgressSpinner className="" style={{width: '150px', height: '150px'}} strokeWidth="5" fill="var(--surface-ground)" animationDuration="3s"  />
            </div>:''
        }
        </>
        
    )
}

/**
 * Componente `UtilsMessages` que muestra mensajes utilizando el componente `Messages`.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.data - Array de objetos que representan los mensajes a mostrar.
 * @param {boolean} [props.data[].sticky] - Indica si el mensaje es persistente.
 * @param {string} props.data[].severity - Nivel de severidad del mensaje (por ejemplo, 'success', 'error').
 * @param {string} props.data[].summary - Resumen del mensaje.
 * @param {string} props.data[].detail - Detalle del mensaje.
 * @param {boolean} [props.data[].closable] - Indica si el mensaje se puede cerrar.
 * 
 * @returns {JSX.Element} Componente `Messages` con los mensajes proporcionados.
 */
export const UtilsMessages=({
    data=[{sticky:true,severity:'success',summary:'Success',detail: 'Closable Message',closable:true}]    
    }:{
        data:[{sticky?:any,severity:any,summary:string,detail: string,closable?:boolean}]
    })=>{
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
        msgs.current?.clear();
        msgs.current?.show(
            data
        );
    })

    return (<Messages ref={msgs}  pt={{wrapper:{className:'p-2 text-sm'}}}/>)
}

/**
 * Componente `Utils404` que muestra una página de error 404.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.path - Ruta a la que se redirigirá al hacer clic en el botón.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la página de error 404.
 * 
 * Este componente muestra un mensaje de error 404 indicando que la página no fue encontrada.
 * Incluye un botón que redirige al usuario a la página principal.
 * 
 * @example
 * <Utils404 path="home" />
 */
export const Utils404=({path}:{path:string})=>{
    //Varaibles Generales
	const navigate = useNavigate();

    return(
        <div>
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div style={{background:'radial-gradient(50% 109138%, rgba(0, 0, 100, 0.1) 0%, rgba(254, 244, 247, 0) 100%)'}} className="text-center">
                    <span className="bg-white text-primary font-bold text-2xl inline-block px-3">404</span>
                </div>
                <div className="mt-8 mb-2 font-bold text-3xl text-600 text-center">Página no encontrada</div>
                <p className="text-500 text-lg mt-0 mb-6 text-center">Lo sentimos, no hemos podido encontrar la página.</p>
                <div className="text-center">
                  <UtilsButton type='button' link severity="secondary" outlined size={'small'} label='Volver a la pagina principal' icon={'pi pi-home' } onClick={()=>{navigate("/app/"+path);}}></UtilsButton>                  
                </div>
            </div>
        </div>
    )
}