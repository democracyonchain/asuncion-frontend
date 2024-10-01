import { FC, ReactNode,MouseEvent, KeyboardEvent, useState, useEffect } from 'react';
import { InputText } from "primereact/inputtext";
import { Controller } from "react-hook-form";
import { classNames } from 'primereact/utils';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { locale, addLocale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import { InputMask } from "primereact/inputmask";
import { InputSwitch,InputSwitchChangeEvent } from 'primereact/inputswitch';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Password } from 'primereact/password';
import { Message } from 'primereact/message';
import { RadioButton } from "primereact/radiobutton";
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
    value?:any
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
/**
 * TextInput component that renders different types of input fields based on the `optInput` prop.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} [props.size] - The size of the input field.
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 * @param {boolean} [props.disabled] - Whether the input field is disabled.
 * @param {number} [props.minFractionDigits] - Minimum number of fraction digits for number input.
 * @param {number} [props.maxFractionDigits] - Maximum number of fraction digits for number input.
 * @param {function} [props.onClick] - Click event handler.
 * @param {Object} props.methods - Methods provided by react-hook-form.
 * @param {function} [props.onChange] - Change event handler.
 * @param {function} [props.onBlur] - Blur event handler.
 * @param {function} [props.onChangeDate] - Change event handler for date input.
 * @param {boolean} [props.useGrouping=true] - Whether to use grouping for number input.
 * @param {boolean} [props.feedback=false] - Whether to show feedback for password input.
 * @param {number} [props.maxLength] - Maximum length for text input.
 * @param {number} [props.minLength] - Minimum length for text input.
 * @param {boolean} [props.readOnly=false] - Whether the input field is read-only.
 * @param {string} [props.optInput] - The type of input field to render.
 * @param {string} [props.buttonLayout] - Layout for buttons in number input.
 * @param {boolean} [props.toggleMask=true] - Whether to toggle mask for password input.
 * @param {any} [props.defaultValue] - Default value for the input field.
 * @param {string} [props.prefix] - Prefix for number input.
 * @param {string} [props.dateFormat='yy-mm-dd'] - Date format for calendar input.
 * @param {string} [props.mask] - Mask pattern for masked input.
 * @param {boolean} [props.ischecked=false] - Whether the switch is checked.
 * @param {string} [props.header=''] - Header for password input.
 * @param {string} [props.footer=''] - Footer for password input.
 * @param {Date} [props.minDate] - Minimum date for calendar input.
 * @param {Date} [props.maxDate] - Maximum date for calendar input.
 * @param {string} [props.locales='en-US'] - Locale for number input.
 * @param {string} [props.mode=undefined] - Mode for number input.
 * @param {string} [props.currency=undefined] - Currency for number input.
 * @param {string} [props.suffix] - Suffix for number input.
 * @param {boolean} [props.showButtons=false] - Whether to show buttons for number input.
 * @param {number} [props.rows=4] - Number of rows for textarea input.
 * @param {number} [props.cols=30] - Number of columns for textarea input.
 * @param {boolean} [props.autoResize=false] - Whether to auto-resize textarea input.
 * @param {string} [props.keyfilter] - Key filter for input.
 * @param {boolean} [props.showTime=false] - Whether to show time in calendar input.
 * @param {boolean} [props.timeOnly=false] - Whether to show only time in calendar input.
 * @param {string} [props.selectionMode='single'] - Selection mode for calendar input.
 * @param {number} [props.value=0] - Value for the input field.
 * 
 * @returns {JSX.Element} The rendered input field based on the `optInput` prop.
 */
export const TextInput = ( 
    {   
        label,name, size,  placeholder, disabled,minFractionDigits,maxFractionDigits,
        onClick,methods,onChange,onBlur,onChangeDate,useGrouping=true,feedback=false,
        maxLength,minLength,readOnly=false,optInput,buttonLayout,toggleMask=true,
        defaultValue,prefix,dateFormat='yy-mm-dd',mask,ischecked=false,header='',footer='',
        minDate,maxDate,locales='en-US', mode=undefined , currency=undefined, suffix, showButtons=false,
        rows=4, cols=30, autoResize=false, keyfilter,showTime=false,timeOnly=false,selectionMode='single',
        value=0
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
                <div>
                    <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}								
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-gray-700'}`}>{label}</label> 
                            <InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} 
                                onValueChange={(e) => field.onChange(e)}  useGrouping={useGrouping} min={minLength} max={maxLength}
                                minFractionDigits={minFractionDigits} maxFractionDigits={maxFractionDigits}  locale={locales}
                                mode={mode} currency={currency} prefix={prefix} suffix={suffix} showButtons={showButtons}
                                buttonLayout={buttonLayout} defaultValue={defaultValue} readOnly={readOnly} disabled={disabled}
                                inputClassName={' w-full p-input text-sm ' + classNames({ 'p-invalid': fieldState.error }) + {size} } 
                                invalid={(errors[field.name]?.message)?true:false}
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
                </div>

        break

        case 'A': //TextArea
            input = 
                <div>
                    <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}								
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-gray-700'}`}>{label}</label> 
                            <InputTextarea id={field.name}  value={field.value} onBlur={field.onBlur} autoResize={autoResize} keyfilter={keyfilter}
                                readOnly={readOnly} disabled={disabled} rows={rows} cols={cols} onChange={(e) => field.onChange(e.target.value)}
                                className={' w-full p-input text-sm '+ classNames({ 'p-invalid': fieldState.error }) + {size}} 
                                invalid={(errors[field.name]?.message)?true:false}
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
                </div>
            break;
        case 'C': //Calendar
            input = 
                <div>
                     <Controller
                        name={name}
                        control={control}			
                        defaultValue={defaultValue}					
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
                                    invalid={(errors[field.name]?.message)?true:false}
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

                </div>
        break
        case 'M': //Mascara
            input =
                <div>
                     <Controller
                        name={name}
                        control={control}
                        defaultValue={defaultValue}								
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
                                        invalid={(errors[field.name]?.message)?true:false}
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
                </div>
        break
        
        case 'S': //switch
            input =
                <div>
                    <Controller
                        name={name}
                        control={control}								
                        render={({ field, fieldState }) => (
                            <>
                                                           
                                
                                <InputSwitch inputId={field.name}  inputRef={field.ref} checked={field.value}
                                className={'text-sm '+ classNames({ 'p-invalid': fieldState.error }) + {size}}
                                readOnly={readOnly} defaultChecked={defaultValue}
                                disabled={disabled}
                                onChange={(e: InputSwitchChangeEvent) => {field.onChange(e.value); onChange(e.value)} } />
                                <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-600 font-semibold p-2'}`}>{label}</label> 
                            
                                {(errors[field.name]?.message)&&
                                    <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2 mt-1' pt={{
                                        root: { className: 'bg-white' },
                                        text: { className: 'text-xs' }
                                    }}/>
                                }
                            </>
                        )}
                    />    
                </div>
        break
        
        case 'P'://Password
            input =
                <div>
                    <Controller
                        name={name}
                        control={control}	
                        defaultValue={defaultValue}							
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-600 font-semibold'}`}>{label}</label>                            
                               
                               <Password 
                               
                                    id={field.name} {...field} 
                                    inputRef={field.ref} 
                                    header={header}
                                    footer={footer}
                                    className={' p-inputtext-sm inline ' + classNames({ 'p-invalid': fieldState.error })} 
                                    feedback={feedback} 
                                    toggleMask={toggleMask}
                                    pt={{input:{className:'w-full'}}}
                                    invalid={(errors[field.name]?.message)?true:false}
                                    />

                            
                                {(errors[field.name]?.message)&&
                                    <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2' pt={{
                                        root: { className: 'bg-white' },
                                        text: { className: 'text-xs' }
                                        }}/>
                                }
                            </>
                        )}
                    />    
                </div>                    
        break

        default :        
            input =        
                <div>
                    <Controller
                        name={name}
                        control={control}
                        defaultValue={defaultValue} 								
                        render={({ field, fieldState }) => (
                            <>                              
                                <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-600 font-semibold block mb-2' }`}>{label}</label>                            
                                <InputText id={field.name} value={field.value}  className={' w-full p-inputtext-sm  text-sm '+ classNames({ 'p-invalid': fieldState.error }) + {size}} 
                                onChange={(e:any) => {field.onChange(e.target.value); (onChange)?onChange(e.target.value):null}} placeholder={placeholder} defaultValue={defaultValue} readOnly={readOnly} disabled={disabled}
                                maxLength={maxLength} minLength={minLength} keyfilter={keyfilter}  invalid={(errors[field.name]?.message)?true:false}
                                />										
                            
                                {(errors[field.name]?.message)&&
                                   <Message severity="error" text={errors[field.name]?.message}  className='w-full justify-content-start p-2 border-round' pt={{
                                        root: { className: 'bg-white' },
                                        text: { className: 'text-xs' }
                                    }}/>
                                }
                            </>
                        )}
                    />    
                </div>
        
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
    loading?:boolean
}


/**
 * SelectInput component for rendering a dropdown input within a form.
 * 
 * @param {IReactHookFormSelectProps} props - The properties for the SelectInput component.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.label - The label for the input field.
 * @param {Array} props.data - The data to populate the dropdown options.
 * @param {object} props.methods - The methods provided by react-hook-form.
 * @param {boolean} [props.isDisabled] - Flag to disable the dropdown.
 * @param {function} [props.onChangeSelect] - Callback function to handle change events.
 * @param {string} [props.placeholder='--Seleccione--'] - Placeholder text for the dropdown.
 * @param {any} [props.defaultValue] - Default value for the dropdown.
 * @param {boolean} [props.isObject=false] - Flag to determine if the value is an object.
 * @param {boolean} [props.loading=false] - Flag to show loading state.
 * 
 * @returns {JSX.Element} The rendered SelectInput component.
 */
export const SelectInput: FC<IReactHookFormSelectProps> = (
    {
        name, label, data, methods, isDisabled, onChangeSelect, placeholder='--Seleccione--',defaultValue,
        isObject=false,loading=false
    }:
        IReactHookFormSelectProps)=> {

        const { formState: { errors }, control} = methods;
        const [ dataSelect, setDataSelect ] = useState<{id:any,nombre:any}[]>([])
        
        useEffect(()=>{
            if(data){                              
                if(Array.isArray(data)){
                    setDataSelect(data)
                }else{
                    setDataSelect([])
                }
            }else{
                setDataSelect([])
            }
        },[data])

        return (
            <div>
            
            <Controller
                name={name}
                control={control}								
                render={({ field, fieldState }) => (
                    <>
                        <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm font-semibold text-bluegray-600'}`}>{label}</label> 
                        <br></br>                           
                        <Dropdown 
                            id={field.name}
                            value={(!isObject)?field.value:dataSelect?.find((c:any)=>c.id ===field.value?.id)}                             
                            onChange={(e: DropdownChangeEvent) => {field.onChange(e.value);  (onChangeSelect)?onChangeSelect(e.value):null }}
                            options={dataSelect} 
                            optionLabel="nombre" 
                            showClear
                            editable 
                            placeholder={placeholder} 
                            className={' w-full p-inputtext-sm  text-sm '+ classNames({ 'p-invalid': fieldState.error })} 
                            filter
                            loading={loading}
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
                                root: { className: 'bg-white' },
                                text: { className: 'text-xs' }
                            }}/>
                        }
                    </>
                )}
            />    

            </div>
        )
}

interface IReactHookEditorProps{
    readOnly:boolean;
    style:object;
    label:string;
    name: string;
    methods:any
}


/**
 * EditorInput component renders a controlled text editor input field using React Hook Form's Controller.
 * 
 * @param {boolean} [readOnly=false] - Determines if the editor is read-only.
 * @param {object} [style={ height: '320px' }] - Custom styles for the editor component.
 * @param {object} methods - Methods provided by React Hook Form.
 * @param {string} label - Label for the editor input.
 * @param {string} name - Name of the field being controlled.
 * 
 * @returns {JSX.Element} The rendered EditorInput component.
 * 
 * @component
 * 
 * @example
 * const methods = useForm();
 * 
 * return (
 *   <EditorInput
 *     readOnly={false}
 *     style={{ height: '320px' }}
 *     methods={methods}
 *     label="Description"
 *     name="description"
 *   />
 * );
 */
export const EditorInput =({readOnly=false,style={ height: '320px' },methods,label,name}:IReactHookEditorProps)=>{
    
    const { formState: { errors }, control} = methods;
    return (
        <div>
            <Controller
                name={name}
                control={control}								
                render={({ field, fieldState }) => (
                    <>
                        <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-bluegray-600 font-semibold'}`}>{label}</label>                            
                        <Editor value={field.value} onTextChange={(e: EditorTextChangeEvent) => field.onChange(e.textValue)} style={style} readOnly={readOnly}/>						
                    
                        {(errors[field.name]?.message)&&
                            <small color="red" className="p-error text-xs" id={field.name}>
                                {errors[field.name]?.message}
                            </small>
                        }
                    </>
                )}
            />    
        </div>
    )
}

/**
 * CheckBoxInput component renders a checkbox input field with validation and error handling.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} [props.disabled=false] - Indicates if the checkbox is disabled.
 * @param {any} props.methods - Methods provided by react-hook-form for form handling.
 * @param {string} props.label - The label for the checkbox input.
 * @param {string} props.name - The name of the checkbox input field.
 * @param {any} props.value - The value of the checkbox input.
 * @param {function} [props.onChangeCheck=()=>{}] - Optional callback function to handle change events.
 *
 * @returns {JSX.Element} The rendered checkbox input component.
 */
export const CheckBoxInput=({disabled=false,methods,label,name,value,onChangeCheck=()=>{}}:{
        disabled:boolean, methods:any, label:string,  name: string,value:any
        onChangeCheck?:(e: MouseEvent<HTMLButtonElement>)=>void
    
    })=>{

    const { formState: { errors }, control} = methods;
    
    return (
        <div>
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
        </div>
    )
} 


/**
 * InputGroup component renders an input field with a button and error message.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.methods - The methods object containing form methods.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.label - The label for the button.
 * @param {string} [props.icon='pi pi-search'] - The icon for the button.
 * @param {string} [props.placeholder='Keyword'] - The placeholder text for the input field.
 * @param {boolean} [props.readOnly=false] - Whether the input field is read-only.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 *
 * @returns {JSX.Element} The rendered InputGroup component.
 */
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

/**
 * MultiSelectInput is a functional component that renders a multi-select input field
 * using React Hook Form's Controller for form state management.
 *
 * @param {IReactHookFormSelectProps} props - The properties for the MultiSelectInput component.
 * @param {string} props.name - The name of the form field.
 * @param {string} props.label - The label for the form field.
 * @param {Array<{id: any, nombre: any}> | undefined} props.data - The data options for the multi-select input.
 * @param {object} props.methods - The methods provided by React Hook Form.
 * @param {boolean} [props.isDisabled] - Flag to disable the multi-select input.
 * @param {function} [props.onChangeSelect] - Callback function to handle change events.
 * @param {string} [props.placeholder] - Placeholder text for the multi-select input.
 * @param {any} [props.defaultValue] - Default value for the multi-select input.
 * @param {boolean} [props.loading] - Flag to show loading state for the multi-select input.
 *
 * @returns {JSX.Element} The rendered multi-select input component.
 *
 * @example
 * <MultiSelectInput
 *   name="example"
 *   label="Example Label"
 *   data={[{ id: 1, nombre: 'Option 1' }, { id: 2, nombre: 'Option 2' }]}
 *   methods={methods}
 *   isDisabled={false}
 *   placeholder="Select options"
 *   loading={false}
 * />
 */
export const MultiSelectInput: FC<IReactHookFormSelectProps> = (
    {
        name, label, data, methods, isDisabled, onChangeSelect, placeholder,defaultValue,loading
    }:
        IReactHookFormSelectProps)=> {

        const { formState: { errors }, control} = methods;
        const [ dataSelect, setDataSelect ] = useState<{id:any,nombre:any}[]>([])
        
     
        useEffect(()=>{
            if(data){
                if(Array.isArray(data)){
                    setDataSelect(data)
                }else{
                    setDataSelect([{id:null,nombre:'--Seleccione--'}])
                }
            }else{
                setDataSelect([{id:null,nombre:'--Seleccione--'}])
            }
        },[data])

        return (
            <div>
            
            <Controller
                name={name}
                control={control}								
                render={({ field }) => (
                    <>
                        <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error':'text-sm text-bluegray-600 font-semibold'}`}>{label}</label>                                                    			
                        <MultiSelect id={field.name} name={name} value={field.value} options={dataSelect} disabled={isDisabled} optionValue='id'
                            onChange={(e: MultiSelectChangeEvent) => field.onChange(e.value)} optionLabel="nombre" placeholder={placeholder} 
                            maxSelectedLabels={3} className="w-full p-inputtext-sm text-sm" filter  loading={loading}
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

            </div>
        )
}


/**
 * RadioButtonInput component renders a radio button input field with validation and error handling.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.disabled - Indicates if the radio button should be disabled.
 * @param {any} props.methods - Methods provided by react-hook-form for form handling.
 * @param {string} props.label - The label text for the radio button.
 * @param {string} props.name - The name attribute for the radio button.
 * @param {any} props.value - The value of the radio button.
 * @param {string} [props.inputId=''] - The id attribute for the radio button input.
 * @param {any} [props.setValue] - Optional function to set the value of the radio button.
 *
 * @returns {JSX.Element} The rendered RadioButtonInput component.
 */
export const RadioButtonInput=({disabled=false,methods,label,name,value,inputId='',setValue}:{
    disabled:boolean, methods:any, label:string,  name: string,value:any, inputId:string,setValue?:any

})=>{

const { formState: { errors }, control } = methods;
const [valueRadio, setValueRadio] = useState<any>(setValue);

return (
    <div>
        <Controller
            name={name}
            control={control}		
            defaultValue={valueRadio}						
            render={({ field, fieldState }) => (
                <div>                                              
                    <RadioButton                                              
                        disabled={disabled} 
                        inputId={inputId} 
                        checked={value === field.value} 
                        inputRef={field.ref} 
                        {...field}
                        className={classNames({ 'p-invalid mr-1': fieldState.error })}                           
                        value={value}
                        name={field.name}
                        onChange={(e:any)=>{field.onChange(e.value);setValueRadio(e.value)}}                       
                    />		

                    <label htmlFor={field.name} className={`${errors[field.name]?.message?'text-sm p-error ml-2':'text-sm text-bluegray-600 ml-2 font-semibold hover:bg-gray-100 hover:text-primary p-2'}`}>{label} </label>  
                    
                    {(errors[field.name]?.message)&&
                        <small color="red" className="p-error text-xs" id={field.name}>
                            {errors[field.name]?.message}
                        </small>
                    }
                </div>
            )}
        />    
    </div>
)
} 