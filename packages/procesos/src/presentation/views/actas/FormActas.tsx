import { useEffect,useState,useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { setLabelTab } from '@presentation/actions';
import { FormCore,graphql,UtilsSpinner,SelectInput } from "@bsc/library";
import { formActa} from '@application/components/form'
import { 
        processResetForm,processSubmitForm,processProvinciaSelect,processCantonSelect,processParroquiaSelect,processZonaSelect,
        processJuntaSelect,processDignidadSelect,dataPdf as exporPDF } from "@application/services/actasService"
import { useDispatch,useSelector } from "react-redux";
import { RootState } from '@presentation/stores';
import QRCode from 'qrcode.react';

export const FormActas = ({navigate}:{navigate:any}) => {


	//Gestor estados Redux
	const { labelTab,cache }:any= useSelector<RootState>( (state) => state.procesos);
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
            {(labelQr)&&labelQr.map((items:any, key:any)=>{             
               return <div key={key}>{(labelQrAux !==null)? <QRCode value={ items.pagina + JSON.stringify(labelQrAux[items.id])} id={items.id} className='hidden'  includeMargin />:''}  {items.id}</div>
            })}
            
			</FormCore>
		</>
    )
}
