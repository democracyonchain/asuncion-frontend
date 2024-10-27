import { useEffect,useState,useRef } from 'react'
import { setLabelTab } from '@presentation/actions';
import { FormCore,graphql,UtilsSpinner,SelectInput } from "@bsc/library";
import { formActa} from '@application/components/form'
import { 
        processResetForm,processSubmitForm,processProvinciaSelect,processCantonSelect,processParroquiaSelect,processZonaSelect,
        processJuntaSelect,processDignidadSelect } from "@application/services/actasService"
import { useDispatch,useSelector } from "react-redux";
import { RootState } from '@presentation/stores';
import QRCode from 'qrcode.react';

/**
 * Componente `FormActas` que representa un formulario para la gestión de actas.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.navigate - Función de navegación.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el formulario de actas.
 * 
 * @remarks
 * Este componente utiliza varios hooks de React y Redux para manejar el estado y las consultas GraphQL.
 * 
 * @example
 * ```tsx
 * <FormActas navigate={navigateFunction} />
 * ```
 * 
 * @hook
 * - `useSelector` para seleccionar el estado de Redux.
 * - `useDispatch` para despachar acciones de Redux.
 * - `useRef` para crear una referencia mutable.
 * - `useState` para manejar el estado local del componente.
 * - `useEffect` para ejecutar efectos secundarios.
 * 
 * @graphql
 * - `useDignidadDigtSelectLazyQuery` para obtener la lista de dignidades.
 * - `useDigtActaByJuntaListLazyQuery` para obtener la lista de actas por junta.
 * - `useProvinciaDigtSelectLazyQuery` para obtener la lista de provincias.
 * - `useCantonDigtSelectLazyQuery` para obtener la lista de cantones.
 * - `useParroquiaDigtSelectLazyQuery` para obtener la lista de parroquias.
 * - `useZonaDigtSelectLazyQuery` para obtener la lista de zonas.
 * - `useJuntaDigtSelectLazyQuery` para obtener la lista de juntas.
 * 
 * @componentes
 * - `UtilsSpinner` para mostrar un spinner de carga.
 * - `FormCore` para manejar el formulario principal.
 * - `SelectInput` para los campos de selección.
 * - `QRCode` para generar códigos QR.
 * 
 * @estado
 * - `labelQr` para manejar las etiquetas QR.
 * - `labelQrAux` para manejar las etiquetas QR auxiliares.
 * - `visible` para manejar la visibilidad de ciertos elementos.
 * - `labels` para manejar las etiquetas de los botones y otros elementos.
 * - `dataProvinciaSelect`, `dataCantonSelect`, `dataParroquiaSelect`, `dataZonaSelect`, `dataJuntaSelect`, `dataDignidadSelect` para manejar los datos de selección.
 * 
 * @metodos
 * - `processProvinciaSelect` para procesar la selección de provincias.
 * - `processDignidadSelect` para procesar la selección de dignidades.
 * - `processCantonSelect` para procesar la selección de cantones.
 * - `processParroquiaSelect` para procesar la selección de parroquias.
 * - `processZonaSelect` para procesar la selección de zonas.
 * - `processJuntaSelect` para procesar la selección de juntas.
 * - `processSubmitForm` para manejar el envío del formulario.
 * - `processResetForm` para manejar el reinicio del formulario.
 */
export const FormActas = ({navigate}:{navigate:any}) => {


	//Gestor estados Redux
	const { labelTab }:any= useSelector<RootState>( (state) => state.procesos);
	const dispatch = useDispatch();

	//hook UseRef
	const toast = useRef<any>(null);

	//Form Hook
	const methods = formActa();
	const { setValue, clearErrors,reset,getValues } = methods;

	//Hook State
	const [ labelQr, setLabelQr] = useState<string|null|any>(null)
    const [ labelQrAux, setLabelQrAux] = useState<string|null|any>(false)
	const [ visible,setVisible] =useState<{status:boolean,mensaje:string,accept?:any,reject?:any}>(
		{
			status:false,mensaje:'',accept:()=>{},reject:()=>{}
		}
	)  
	const [ labels, setLabels ] = useState<{ btn1?: string, btn3?: string, icon?: boolean, btnload?: boolean,opt?:string }>({ btn1: '', btn3: '', icon: true, btnload: false,opt:'N' })
    const [ dataProvinciaSelect,setDataProvinciaSelect ] = useState<any[]>();
    const [ dataCantonSelect,setDataCantonSelect ] = useState<any[]>();
    const [ dataParroquiaSelect,setDataParroquiaSelect ] = useState<any[]>();
    const [ dataZonaSelect,setDataZonaSelect ] = useState<any[]>();
    const [ dataJuntaSelect,setDataJuntaSelect ] = useState<any[]>();
    const [ dataDignidadSelect,setDataDignidadSelect ] = useState<any[]>();


    //Metodos Graphql
	const { useDignidadDigtSelectLazyQuery,useDigtActaByJuntaListLazyQuery,useProvinciaDigtSelectLazyQuery,useCantonDigtSelectLazyQuery,
            useParroquiaDigtSelectLazyQuery,useZonaDigtSelectLazyQuery,useJuntaDigtSelectLazyQuery } = graphql
  	const [ getDignidadLazyQuery,{loading:loadingDign} ] = useDignidadDigtSelectLazyQuery();
	const [ listActaLazyQuery,{loading:loadingActa} ] = useDigtActaByJuntaListLazyQuery();
	const [ getProvinciaSelectLazyQuery,{loading:loadingProv} ] = useProvinciaDigtSelectLazyQuery();
    const [ getCantonSelectLazyQuery,{loading:loadingCant} ] = useCantonDigtSelectLazyQuery();
    const [ getParroquiaSelectLazyQuery,{loading:loadingParr} ] = useParroquiaDigtSelectLazyQuery();
    const [ getZonaSelectLazyQuery,{loading:loadingZona} ] = useZonaDigtSelectLazyQuery();
    const [ getJuntaSelectLazyQuery,{loading:loadingJunta} ] = useJuntaDigtSelectLazyQuery();

    useEffect(()=>{
        processProvinciaSelect({getProvinciaSelectLazyQuery,setDataProvinciaSelect,dispatch,})
        processDignidadSelect({getDignidadLazyQuery,setDataDignidadSelect,dispatch})
        setLabels({ ...labels, btn3: 'Generar PDF',opt:'N'});
    },[])

    return (
        <>		
			<UtilsSpinner visible={loadingActa}/>
			<FormCore 
				labels={labels} 
				onSubmit={(data:any)=>{processSubmitForm({data,setVisible,toast,labels,navigate,dispatch,listActaLazyQuery,setLabelQr,setLabelQrAux})}} 
				onReset={()=>processResetForm({clearErrors,reset,dispatch,labelTab,setLabelTab,navigate})}
				methods={methods}
				visible={visible}
				setVisible={setVisible}
				toast={toast}
			>
			
			<div className="formgrid grid">
                <div className='field col-12 md:col-4 mb-4'>
                    <SelectInput 
                        data={dataProvinciaSelect} 
                        label={'Provincia *'} 
                        name='idProvincia_acta' 
                        methods={methods} 
                        isDisabled={false}     
                        placeholder='Seleccione una Provincia'  
                        isObject    
						loading={loadingProv}     
                        onChangeSelect={(e:any)=>{
                            processCantonSelect(
                                {
                                    getCantonSelectLazyQuery,setDataCantonSelect,setDataParroquiaSelect,setDataZonaSelect,setDataJuntaSelect,
                                    dispatch,id:e?.id,setValue
                                }
                            )
                        }}   
                    />
                </div>
                <div className='field col-12 md:col-4'>
                    <SelectInput 
                        data={dataCantonSelect} 
                        label={'Canton *'} 
                        name='idCanton_acta' 
                        methods={methods} 
                        isDisabled={false}     
                        placeholder='Seleccione un Canton'  
                        isObject    
						loading={loadingCant}  
                        onChangeSelect={(e:any)=>{
                            processParroquiaSelect(
                                {
                                    getParroquiaSelectLazyQuery,setDataParroquiaSelect,setDataZonaSelect,dispatch,id:e?.id,setDataJuntaSelect,setValue
                                }
                            )
                        }}      
                    />
                </div>  
				<div className='field col-12 md:col-4'>
                    <SelectInput 
                        data={dataParroquiaSelect} 
                        label={'Parroquia *'} 
                        name='idParroquia_acta' 
                        methods={methods} 
                        isDisabled={false}     
                        placeholder='Seleccione un Canton'  
                        isObject    
						loading={loadingParr}        
                        onChangeSelect={(e:any)=>{
                            processZonaSelect(
                                {
                                    getZonaSelectLazyQuery,setDataZonaSelect,dispatch,id:e?.id,setDataJuntaSelect,setValue
                                }
                            )
                        }}
                    />
				</div>              
            </div>
            <div className="formgrid grid mb-4">				
				<div className='field col-12 md:col-4'>
                    <SelectInput 
                        data={dataZonaSelect} 
                        label={'Zona *'} 
                        name='idZona_acta' 
                        methods={methods} 
                        isDisabled={false}     
                        placeholder='Seleccione una Zona'  
                        isObject    
						loading={loadingZona}   
                        onChangeSelect={(e:any)=>{processJuntaSelect(
                                {
                                    getJuntaSelectLazyQuery,setDataJuntaSelect,dispatch,idZona:e?.id,idParroquia:getValues('idParroquia_acta').id,
                                    idCanton:getValues('idCanton_acta').id,idProvincia:getValues('idProvincia_acta').id,setValue
                                }
                            )
                        }}     
                    />
				</div>
				<div className='field col-12 md:col-4'>
                    <SelectInput 
                        data={dataJuntaSelect} 
                        label={'Junta *'} 
                        name='idJunta_acta' 
                        methods={methods} 
                        isDisabled={false}     
                        placeholder='Seleccione una Junta'  
                        isObject    
						loading={loadingJunta}        
                    />
				</div>	
                <div className='field col-12 md:col-4'>
                    <SelectInput 
                        data={dataDignidadSelect} 
                        label={'Dignidad *'} 
                        name='idDignidad_acta' 
                        methods={methods} 
                        isDisabled={false}     
                        placeholder='Seleccione una Dignidad'  
                        isObject    
						loading={loadingDign}        
                    />
				</div>			
			</div>
            {labelQr?.map((items:any, key:any)=>{             
                           return <div key={key}>{labelQrAux ? <QRCode value={ items.pagina + JSON.stringify(labelQrAux[items.id])} id={items.id} className='hidden'  includeMargin />:''}  {items.id}</div>
                        })}
            
			</FormCore>
		</>
    )
}
