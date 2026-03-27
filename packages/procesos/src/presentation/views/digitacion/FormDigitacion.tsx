import { useEffect, useState, useRef } from 'react'
import { setLabelTab } from '@presentation/actions';
import { FormCore, graphql, UtilsSpinner, SelectInput, UtilsButton, UtilsPanel, TextInput } from "@bsc/library";
import { formActaDigita } from '@application/components/form'
import { processResetForm, processActaDignidad, processDignidadSelect, processSaveDigita } from "@application/services/actasService"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@presentation/stores';
import Icon from '@mui/material/Icon';
import { Divider } from 'primereact/divider';
import { Image } from 'primereact/image';
import { useFieldArray } from "react-hook-form";

/**
 * Componente FormDigitacion
 * 
 * Este componente es responsable de manejar la digitación de actas en el proceso electoral.
 * Utiliza Redux para gestionar el estado global y react-hook-form para manejar el formulario.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.navigate - Función de navegación.
 * 
 * @returns {JSX.Element} - Retorna el componente de digitación de actas.
 * 
 * @example
 * <FormDigitacion navigate={navigateFunction} />
 * 
 * @remarks
 * - Utiliza `useSelector` para obtener el estado `labelTab` del store de Redux.
 * - Utiliza `useDispatch` para despachar acciones a Redux.
 * - Utiliza `useRef` para crear una referencia mutable para el componente `toast`.
 * - Utiliza `formActaDigita` para manejar el formulario con react-hook-form.
 * - Utiliza `useFieldArray` para manejar arreglos de campos en el formulario.
 * - Utiliza `useState` para manejar varios estados locales como `visible`, `labels`, `dataDignidadSelect`, `statusLoading` y `dataDigita`.
 */
export const FormDigitacion = ({ navigate }: { navigate: any }) => {
    //Gestor estados Redux
    const { labelTab }: any = useSelector<RootState>((state) => state.procesos);
    const dispatch = useDispatch();

    //hook UseRef
    const toast = useRef<any>(null);

    //Form Hook
    const methods = formActaDigita();
    const { clearErrors, reset, handleSubmit, control } = methods;
    useFieldArray({ control, name: `atributoRecorte` });
    useFieldArray({ control, name: `dataGeneral` });

    //Hook State
    const [visible, setVisible] = useState<{ status: boolean, mensaje: string, accept?: any, reject?: any }>(
        {
            status: false, mensaje: '', accept: () => { }, reject: () => { }
        }
    )
    const [labels, setLabels] = useState<{ btn1?: string, btn2?: string, icon?: boolean, btnload?: boolean, opt?: string }>({ btn1: '', btn2: '', icon: true, btnload: false, opt: 'N' })
    const [dataDignidadSelect, setDataDignidadSelect] = useState<any[]>();
    const [statusLoading, setStatusLoading] = useState<boolean>(false)

    const [dataDigita, setDataDigita] = useState<any>(
    )

    //Metodos Graphql
    const { useDignidadDigtSelectLazyQuery, useDigtActaByDignidadListLazyQuery, useDigtVotosUpdateMutation, useDigtActaEstadoUpdateMutation} = graphql
    const [getDignidadLazyQuery, { loading: loadingDign }] = useDignidadDigtSelectLazyQuery();
    const [listActaDigitaLazyQuery] = useDigtActaByDignidadListLazyQuery();
    const [digtVotosUpdateMutation] = useDigtVotosUpdateMutation();
    const [digtActaEstadoUpdateMutation] = useDigtActaEstadoUpdateMutation();


    useEffect(() => {
        processDignidadSelect({ getDignidadLazyQuery, setDataDignidadSelect, dispatch })
        setLabels({ ...labels, btn1: 'Cancelar', btn2: 'Guardar', opt: 'N' });
    }, [])

    return (
        <>
            <UtilsSpinner visible={statusLoading} />
            <FormCore
                labels={labels}
                onSubmit={(data: any) => {
                    console.log('ANTES DE ENVIAR LA DIGITACIÓN', data);
                    processSaveDigita({ data, setVisible, toast, digtVotosUpdateMutation,digtActaEstadoUpdateMutation ,dispatch, navigate, setStatusLoading })
                }}
                onReset={() => processResetForm({ clearErrors, reset, dispatch, labelTab, setLabelTab, navigate })}
                methods={methods}
                visible={visible}
                setVisible={setVisible}
                toast={toast}
            >

                <div className="formgrid grid">

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
                    <div className='field col-12 md:col-4 mt-4'>
                        <UtilsButton label=' Procesar Acta' size='small' className="text-sm gap-2" rounded icon={<Icon>cached</Icon>}
                            onClick={handleSubmit((data: any) => { processActaDignidad({ data, toast, listActaDigitaLazyQuery, setDataDigita, setStatusLoading }) })} />
                    </div>
                </div>


                {(dataDigita) &&
                    <>
                        <UtilsPanel header={'Votos'} toggleable={false}>
                            <span className='hidden' >
                                <TextInput
                                    disabled={false}
                                    label='&nbsp;'
                                    name={`actaId`}
                                    methods={methods}
                                    defaultValue={dataDigita?.id}
                                />
                                 <TextInput
                                    disabled={false}
                                    label='&nbsp;'
                                    name={`provincia`}
                                    methods={methods}
                                    defaultValue={dataDigita?.junta?.provincia?.nombre}
                                />
                                <TextInput
                                    disabled={false}
                                    label='&nbsp;'
                                    name={`canton`}
                                    methods={methods}
                                    defaultValue={dataDigita?.junta?.canton?.nombre}
                                />
                                <TextInput
                                    disabled={false}
                                    label='&nbsp;'
                                    name={`parroquia`}
                                    methods={methods}
                                    defaultValue={dataDigita?.junta?.parroquia.nombre}
                                />
                                <TextInput
                                    disabled={false}
                                    label='&nbsp;'
                                    name={`zona`}
                                    methods={methods}
                                    defaultValue={dataDigita?.junta?.zona?.nombre}
                                />
                                <TextInput
                                    disabled={false}
                                    label='&nbsp;'
                                    name={`junta`}
                                    methods={methods}
                                    defaultValue={dataDigita?.junta?.junta}
                                />
                                <TextInput
                                    disabled={false}
                                    label='&nbsp;'
                                    name={`sexo`}
                                    methods={methods}
                                    defaultValue={dataDigita?.junta?.sexo}
                                />
                            </span>
                            


                            {dataDigita?.votos?.filter((element: any) => element.imagensegmento?.imagen != null).map((data: any, key: any) => {
                                return (
                                    <div key={key} className='formgrid grid'>


                                        {/* Descomentar cuando funcione el h1 */}
                                        <div className='field col-12 md:col-9'>
                                            <span className={`text-sm ml-4 font-semibold text-blue-400`}>
                                                <Image
                                                    src={`data:image/gif;base64,${data.imagensegmento?.imagen}`}
                                                    alt="Image"
                                                    width="580"
                                                    height="98"
                                                    preview
                                                />
                                            </span>
                                        </div>

                                        <div className='field col-12 md:col-3'>
                                            <div className="text-sm ml-4 font-semibold text-blue-400 p-0 flex items-center h-[80px]">
                                                <TextInput
                                                    label='&nbsp;'
                                                    name={`atributoRecorte.${key}`}
                                                    methods={methods}
                                                    optInput='N'
                                                    minLength={0}
                                                    maxLength={350}
                                                    defaultValue='0'
                                                    style={{ height: '150px' }}
                                                    onChange={(e: any) => console.log(e)}
                                                />
                                                <span className='hidden'>
                                                    <TextInput
                                                        disabled={false}
                                                        label='&nbsp;'
                                                        name={`dataGeneral.candidatoId.${key}`}
                                                        methods={methods}
                                                        defaultValue={data.imagensegmento?.candidato_id}
                                                    />
                                                </span>
                                              <span className='hidden'>
                                                <TextInput
                                                        disabled={false}
                                                        label='&nbsp;'
                                                        name={`dataGeneral.candidatoNombre.${key}`}
                                                        methods={methods}
                                                        defaultValue={data.candidato?.nombre}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </UtilsPanel>
                    </>
                }
            </FormCore>
        </>
    )
}
