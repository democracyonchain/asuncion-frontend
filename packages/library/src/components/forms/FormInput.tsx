import { FC, ReactNode,MouseEvent, KeyboardEvent, useState, useEffect, useRef } from 'react';
import { InputText } from "primereact/inputtext";
import { Controller } from "react-hook-form";
import { classNames } from 'primereact/utils';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import { InputMask } from "primereact/inputmask";
import { InputSwitch,InputSwitchChangeEvent } from 'primereact/inputswitch';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Password } from 'primereact/password';
import { Message } from 'primereact/message';

interface IReactHookFormTextProps {
    type?:string
    variant?:string |undefined 
    label:string   
    name: string
    size?:any
    success?:boolean
    color?:any
    icon?: ReactNode
    placeholder?:string
    disabled?:boolean
    actionBoton?:boolean
    value?:string
    isBoton?:boolean
    textoBoton?:string
    onClick?: (e: MouseEvent<HTMLButtonElement>)=>void
    onChange?:any
    onBlur?:(e: MouseEvent<HTMLButtonElement>)=>void
    onKeyDown?:(e: KeyboardEvent<HTMLInputElement>)=>void
    onChangeDate?:any
    onChangeNumeric?:any
    onIsAllowed?:any
    onValidNumeric?:any
    methods?:any,
    lblEtiqueta?:string
    metodoRestriccion?:any,
    opt?:any,
    hidden?:any,
    maxLength?:number,
    minLength?:number,
    mask?:any,
    alwaysShowMask?:boolean,
    readOnly?:boolean
    optInput?:string
    thousandSeparator?:boolean
    prefix?:string 
    allowLeadingZeros?:boolean
    decimalScale?:number 
    dateFormat?:string 
    showMonthYearPicker?:boolean
    allowNegative?:boolean
    minDate?:any
    maxDate?:any
    defaultFecha?:boolean
    defaultValue?:any
    defaultChecked?:boolean
    parteEntera?:number
    ischecked?:boolean
    minFractionDigits?:number
    maxFractionDigits?:number
    useGrouping?:boolean
    locales?:string
    mode?:any
    currency?:any
    suffix?:string
    showButtons?:boolean
    buttonLayout?:any
    rows?:number
    cols?:number
    autoResize?:boolean
    keyfilter?:any
    showTime?:boolean;
    timeOnly?:boolean;
    selectionMode?:any
    feedback?:boolean
    toggleMask?:boolean
    header?:string|null|JSX.Element|JSX.Element[]
    footer?:string|null|JSX.Element|JSX.Element[]
}
export const TextInput = ( 
    {   
        label,name, size,  placeholder, disabled,minFractionDigits,maxFractionDigits,
        onClick,methods,onChange,onBlur,onChangeDate,useGrouping=true,feedback=false,
        maxLength,minLength,readOnly=false,optInput,buttonLayout,toggleMask=true,
        defaultValue,prefix,dateFormat='yy-mm-dd',mask,ischecked=false,header='',footer='',
        minDate,maxDate,locales='en-US', mode=null , currency=null, suffix, showButtons=false,
        rows=4, cols=30, autoResize=false, keyfilter,showTime=false,timeOnly=false,selectionMode='single'
    }:
    IReactHookFormTextProps) => {

    const { register, formState: { errors },control} = methods;
    let input: string|JSX.Element|JSX.Element[]='';
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


    switch (optInput) {

        case 'N'://Number
            input = 
                <>
                    <Controller
                    name={name}
                    control={control}								
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-gray-700'}`}>{label}</label> 
                            <InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} 
                                onValueChange={(e) => field.onChange(e)}  useGrouping={useGrouping} min={minLength} max={maxLength}
                                minFractionDigits={minFractionDigits} maxFractionDigits={maxFractionDigits}  locale={locales}
                                mode={mode} currency={currency} prefix={prefix} suffix={suffix} showButtons={showButtons}
                                buttonLayout={buttonLayout} defaultValue={defaultValue} readOnly={readOnly} disabled={disabled}
                                inputClassName={' w-full p-input text-sm ' + classNames({ 'p-invalid': fieldState.error }) + {size} } />
                                
                            {(errors[field.name]?.message)&&
                               <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2 mt-1' pt={{
                                root: { className: 'bg-white' },
                                text: { className: 'text-xs' }
                                }}/>
                            }
                        </>
                    )}
                    />    
                </>

        break

        case 'A': //TextArea
            input = 
                <>
                    <Controller
                    name={name}
                    control={control}								
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-gray-700'}`}>{label}</label> 
                            <InputTextarea id={field.name}  value={field.value} onBlur={field.onBlur} autoResize={autoResize} keyfilter={keyfilter}
                             readOnly={readOnly} disabled={disabled} rows={rows} cols={cols} onChange={(e) => field.onChange(e.target.value)}
                              className={' w-full p-input text-sm '+ classNames({ 'p-invalid': fieldState.error }) + {size}} 
                              />
                                
                            {(errors[field.name]?.message)&&
                                <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2 mt-1' pt={{
                                    root: { className: 'bg-white' },
                                    text: { className: 'text-xs' }
                                }}/>
                            }
                        </>
                    )}
                    />
                </>
            break;
        case 'C': //Calendar
            input = 
                <>
                     <Controller
                        name={name}
                        control={control}								
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-gray-700'}`}>{label}</label>                            
                                <Calendar 
                                    id={field.name} value={field.value}  onChange={(e:any)=>{field.onChange(e.value);  (onChangeDate)?onChangeDate(e):null}} showIcon locale="es" dateFormat={dateFormat}  
                                    showTime={showTime} hourFormat="12" timeOnly={timeOnly}  disabled={disabled}                                  
                                    className={' w-full p-input text-sm '+ classNames({ 'p-invalid': fieldState.error }) + {size}}
                                    selectionMode={selectionMode}                                    
                                    pt={{
                                        table:{
                                            className: 'text-sm ' 
                                        },
                                        input: {
                                            root: { className: 'p-inputtext-sm text-sm text-gray-600' }
                                        },
                                    }}
				                />								
                            
                                {(errors[field.name]?.message)&&
                                   <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2 mt-1' pt={{
                                    root: { className: 'bg-white' },
                                    text: { className: 'text-xs' }
                                    }}/>
                                }
                            </>
                        )}
                    />    

                </>
        break
        case 'M': //Mascara
            input =
                <>
                     <Controller
                        name={name}
                        control={control}								
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-gray-700'}`}>{label}</label>                            
                                <InputMask
                                    id={field.name}
                                        value={field.value}
                                        className={' w-full p-input text-sm '+ classNames({ 'p-invalid': fieldState.error }) + {size}}
                                        onChange={(e) => field.onChange(e.target.value)}
                                        mask={mask}
                                        placeholder={placeholder}
                                        readOnly={readOnly} 
                                        disabled={disabled}
                                />						
                            
                                {(errors[field.name]?.message)&&
                                   <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2 mt-1' pt={{
                                    root: { className: 'bg-white' },
                                    text: { className: 'text-xs' }
                                    }}/>
                                }
                            </>
                        )}
                    />    
                </>
        break
        
        case 'S': //switch
            input =
                <>
                    <Controller
                        name={name}
                        control={control}								
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-gray-700 p-2'}`}>{label}</label>                            
                                
                                <InputSwitch inputId={field.name}  inputRef={field.ref} checked={field.value}
                                className={'text-sm '+ classNames({ 'p-invalid': fieldState.error }) + {size}}
                                readOnly={readOnly} 
                                disabled={disabled}
                                onChange={(e: InputSwitchChangeEvent) => {field.onChange(e.value); onChange(e.value)} } />
                                                            
                            
                                {(errors[field.name]?.message)&&
                                    <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2 mt-1' pt={{
                                        root: { className: 'bg-white' },
                                        text: { className: 'text-xs' }
                                    }}/>
                                }
                            </>
                        )}
                    />    
                </>
        break
        
        case 'P'://Password
            input =
                <>
                    <Controller
                        name={name}
                        control={control}								
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-gray-700'}`}>{label}</label>                            
                                <br></br>
                               <Password 
                               
                                    id={field.name} {...field} 
                                    inputRef={field.ref} 
                                    header={header}
                                    footer={footer}
                                    className={' w-full p-inputtext-sm text-sm ' + classNames({ 'p-invalid': fieldState.error })} 
                                    feedback={feedback} 
                                    toggleMask={toggleMask}
                                    pt={{input:{className:'w-full pr-5'},showIcon:{className:'relative inline-block -mx-4 mt-3'},hideIcon:{className:'relative -mx-4 mt-3'}}}
                                    
                                    />

                            
                                {(errors[field.name]?.message)&&
                                    <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2' pt={{
                                        root: { className: '' },
                                        text: { className: 'text-xs' }
                                        }}/>
                                }
                            </>
                        )}
                    />    
                </>                    
        break

        default :        
            input =        
                <>
                    <Controller
                        name={name}
                        control={control}								
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-gray-700'}`}>{label}</label>                            
                                <InputText id={field.name} value={field.value}  className={' w-full p-inputtext-sm  text-sm '+ classNames({ 'p-invalid': fieldState.error }) + {size}} 
                                onChange={(e) => field.onChange(e.target.value)} placeholder={placeholder} defaultValue={defaultValue} readOnly={readOnly} disabled={disabled}
                                maxLength={maxLength} minLength={minLength} keyfilter={keyfilter}
                                />										
                            
                                {(errors[field.name]?.message)&&
                                   <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2 border-round' pt={{
                                        root: { className: '' },
                                        text: { className: 'text-xs' }
                                    }}/>
                                }
                            </>
                        )}
                    />    
                </>
        
        break;       
    }


    return (
        <>
            {input}
        </>
    )
}

interface IReactHookFormSelectProps {
    label:string
    name: string
    isDisabled?:boolean   
    onChangeSelect?:(e: MouseEvent<HTMLButtonElement>)=>void
    methods?:any,
    placeholder?:string
    data:any,
    defaultValue?:any   
    isObject?:boolean
}


export const SelectInput: FC<IReactHookFormSelectProps> = (
    {
        name, label, data, methods, isDisabled, onChangeSelect, placeholder='--Seleccione--',defaultValue,
        isObject=false
    }:
        IReactHookFormSelectProps)=> {

        const { formState: { errors }, control} = methods;
        const [ dataSelect, setDataSelect ] = useState<{code:any,name:any}[]>([])
        
        useEffect(()=>{
            if(data){                              
                if(Array.isArray(data)){
                    setDataSelect(data)
                }else{
                    setDataSelect([{code:null,name:'--Seleccione--'}])
                }
            }else{
                setDataSelect([{code:null,name:'--Seleccione--'}])
            }
        },[data])

        return (
            <>
            
            <Controller
                name={name}
                control={control}								
                render={({ field, fieldState }) => (
                    <>
                        <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-bluegray-600'}`}>{label}</label> 
                        <br></br>                           
                        <Dropdown 
                            id={field.name}
                            value={(!isObject)?field.value:dataSelect?.find(c=>c.code ===field.value?.code)}                             
                            onChange={(e: DropdownChangeEvent) => {field.onChange(e.value);  (onChangeSelect)?onChangeSelect(e.value):null }}
                            options={dataSelect} 
                            optionLabel="name" 
                            showClear
                            editable 
                            placeholder={placeholder} 
                            className={' w-full p-inputtext-sm  text-sm '+ classNames({ 'p-invalid': fieldState.error })} 
                            filter
                            disabled={isDisabled} 
                            defaultValue={defaultValue} 
                            focusInputRef={field.ref}
                            pt={{
                               item: ({ context }:any) => ({
                                   className: context.selected ? 'bg-primary text-sm' : 'text-sm'
                               })
                           }}
   
                        />								
                    
                        {(errors[field.name]?.message)&&
                             <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-1 mt-1' pt={{
                                root: { className: '' },
                                text: { className: 'text-xs' }
                            }}/>
                        }
                    </>
                )}
            />    

            </>
        )
}

interface IReactHookEditorProps{
    readOnly:boolean;
    style:object;
    label:string;
    name: string;
    methods:any
}


export const EditorInput =({readOnly=false,style={ height: '320px' },methods,label,name}:IReactHookEditorProps)=>{
    
    const { formState: { errors }, control} = methods;
    return (
        <>
            <Controller
                name={name}
                control={control}								
                render={({ field, fieldState }) => (
                    <>
                        <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-bluegray-600'}`}>{label}</label>                            
                        <Editor value={field.value} onTextChange={(e: EditorTextChangeEvent) => field.onChange(e.textValue)} style={style} readOnly={readOnly}/>						
                    
                        {(errors[field.name]?.message)&&
                            <small color="red" className="p-error text-xs" id={field.name}>
                                {errors[field.name]?.message}
                            </small>
                        }
                    </>
                )}
            />    
        </>
    )
}

export const CheckBoxInput=({disabled=false,methods,label,name,value,onChangeCheck=()=>{}}:{
        disabled:boolean, methods:any, label:string,  name: string,value:any
        onChangeCheck?:(e: MouseEvent<HTMLButtonElement>)=>void
    
    })=>{

    const { formState: { errors }, control} = methods;
    
    return (
        <>
            <Controller
                name={name}
                control={control}								
                render={({ field, fieldState }) => (
                    <>
                        <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-bluegray-600'}`}>{label}</label>                            
                        <Checkbox disabled={disabled} 
                        inputId={field.name} 
                        checked={field.value} 
                        inputRef={field.ref} 
                        className={classNames({ 'p-invalid mr-1': fieldState.error })} 
                        onChange={(e:any) => {field.onChange(e.checked); (onChangeCheck)?onChangeCheck(e):null}}  
                        value={value}
                        />				
                    
                        {(errors[field.name]?.message)&&
                            <small color="red" className="p-error text-xs" id={field.name}>
                                {errors[field.name]?.message}
                            </small>
                        }
                    </>
                )}
            />    
        </>
    )
} 


export const InputGroup=(
        {methods, name,label, icon='pi pi-search',placeholder="Keyword",readOnly=false,onClick}:
        {methods:any,name: string,label:string, icon:string,placeholder:string,readOnly:boolean,onClick:any})=>{

    const { register, formState: { errors },control} = methods;
    const [loading, setLoading] = useState(false);

    return (
        <div className="p-inputgroup flex-2">
                <InputText {...register(name,{onchange, onblur})} placeholder={placeholder} className="p-inputtext-sm" readOnly={readOnly} />
                <Button type="button" icon={icon}  size="small" label={label} onClick={()=>{
                    onClick; setLoading(true);  setTimeout(() => {
                        setLoading(false);
                    }, 2000);}} loading={loading}/>
                            {(errors[name]?.message)&&
                    <small color="red" className="p-error text-xs" id={name}>
                        {errors[name]?.message}
                    </small>
                }
        </div>
    )
}

export const MultiSelectInput: FC<IReactHookFormSelectProps> = (
    {
        name, label, data, methods, isDisabled, onChangeSelect, placeholder,defaultValue
    }:
        IReactHookFormSelectProps)=> {

        const { formState: { errors }, control} = methods;
        const [ dataSelect, setDataSelect ] = useState<{code:any,name:any}[]>([])
        
     
        useEffect(()=>{
            if(data){
                if(Array.isArray(data)){
                    setDataSelect(data)
                }else{
                    setDataSelect([{code:null,name:'--Seleccione--'}])
                }
            }else{
                setDataSelect([{code:null,name:'--Seleccione--'}])
            }
        },[data])

        return (
            <>
            
            <Controller
                name={name}
                control={control}								
                render={({ field, fieldState }) => (
                    <>
                        <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-bluegray-600'}`}>{label}</label>                            
                        <br></br>			
                        <MultiSelect id={field.name} name={name} value={field.value} options={dataSelect} disabled={isDisabled}
                            onChange={(e: MultiSelectChangeEvent) => field.onChange(e.value)} optionLabel="name" placeholder={placeholder} 
                            maxSelectedLabels={3} className="w-full p-inputtext-sm text-sm" filter 
                            pt={{
					
                                item: ({ context }:any) => ({
                                    className: context.selected ? 'text-sm' : 'text-sm'
                                })
                            }}    
                        />

                        {(errors[field.name]?.message)&&
                             <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-1 mt-1' pt={{
                                root: { className: 'bg-white' },
                                text: { className: 'text-xs' }
                            }}/>
                        }
                    </>
                )}
            />    

            </>
        )
}