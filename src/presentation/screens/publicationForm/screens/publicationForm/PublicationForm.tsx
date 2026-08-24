import { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';
import {
    InputSelectCompany,
    NoteForm,
    PublishOnCompletionToggle,
    TitleForm
} from '@/presentation/components/publicationForm';
import { HeaderApp } from '@/presentation/components/ui';
import { InputSelectOption } from '@/presentation/types';
import { useKeyboard } from '@/presentation/hooks';
import { CreatePublicStackParamList } from '../../PublicationFormStack';
import {
    Controller,
    SubmitErrorHandler,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import { defaultValues } from './defaultValue';
import { PublicationFormValues } from './types';
import { PrimaryBtn } from '@/presentation/components/ui/button';

interface Props extends StackScreenProps<CreatePublicStackParamList, 'PublicationForm'>{}

const availableJobs:InputSelectOption[] = [
    {id:1, name:'Camionero', isSelected:false},
    {id:2, name:'Asistente', isSelected:false},
    {id:3, name:'Montacargas', isSelected:false},
    {id:4, name:'Mesero', isSelected:false},
    {id:5, name:'Cajero', isSelected:false},
    {id:6, name:'Repartidor', isSelected:false},
    {id:7, name:'Albañil', isSelected:false},
    {id:8, name:'Errero', isSelected:false},
    {id:9, name:'Conductor', isSelected:false},
    {id:10, name:'Bombero', isSelected:false},
    {id:11, name:'Doctor', isSelected:false},
]

export const PublicationForm = ({navigation}:Props) => {
    const [ publishPublication, setPublishPublication ] = useState(false);
    const { control, formState:{errors}, setValue, handleSubmit } = useForm<PublicationFormValues>({
        defaultValues: defaultValues,
        mode:'onSubmit'
    });
    const { top } = useSafeAreaInsets();
    const width = useWindowDimensions().width;
    console.log('errors');
    console.log(errors);
    
    const confirmedAction = () => {
        navigation.goBack();
    }

    const onSubmit:SubmitHandler<PublicationFormValues> = async (data) => {
        console.log('Datos del form')
        console.log(data);
    }
   
    return (
        <View style={{flex: 1, backgroundColor: globalColors.white}}>
            <ScrollView
                style={{flex: 1, backgroundColor: globalColors.white, marginTop: top}} 
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
                stickyHeaderHiddenOnScroll={true}
            >
                <HeaderApp
                    subText='Crear publicación'
                    actionBtnClose={() => confirmedAction()}
                    heigthScrollEdgeFade={30}
                />
                <TouchableWithoutFeedback accessible={false} onPress={() => {}}>
                    <View style={{width, backgroundColor:globalColors.white}}>
                        <TitleForm />
                        <NoteForm />
                        <InputSelectCompany 
                            control={control}
                            navigation={navigation}
                            setValue={setValue}
                        />
                        {/* <Row>
                            <InputSelectCompany 
                                state={}
                            />
                        </Row> */}
                        {/* <Row>
                            <UploadImage />
                        </Row> */}
                        {/* <Row>
                            <InputSelect
                                label="Tipo de trabajo" 
                                placeholder="Selecciona una opción" 
                                name='typeWork'
                                listOptions={availableJobs}
                                isFocus={formState.values.typeWork.isFocus}
                                value={formState.values.typeWork.value}
                                statusError={formState.errors.typeWork.status}
                                errorFieldInvalid="El tipo de trabajo no es válido"
                                handleChange={handleChange}
                                closeFocus={removeFocus}
                                onFocus={(field:string) => {
                                    Keyboard.dismiss();
                                    putFocus(field)}
                                }
                            />
                            <InputSelectSchedule
                                name='schedule'
                                value={formState.values.schedule.value}
                                isFocus={formState.values.schedule.isFocus}
                                statusError={formState.errors.schedule.status}
                                onFocus={putFocus}
                                handleChange={handleChange}
                                closeFocus={removeFocus}
                            />
                        </Row> */}
                        {/* <Row>
                            <InputText
                                state={formState.description!}
                                label="Descrición del empleo"
                                placeholder="Ingresa la descrición del empleo"
                                keyboardType="default"
                                multiline
                                inputType='input-area'
                                containerWidth='100%'
                                onChange={setValue}
                                onFocus={setFocus}
                                clearInput={clearInput}
                            />
                        </Row>
                        <Row>
                            <InputText
                                state={formState.maximumWage!}
                                label="Sueldo mínimo"
                                placeholder="Ingresa el sueldo"
                                keyboardType="numeric"
                                onChange={setValue}
                                onFocus={setFocus}
                                clearInput={clearInput}
                            />
                            <InputText
                                state={formState.maximumWage!}
                                label="Sueldo máximo"
                                placeholder="Ingresa el sueldo"
                                keyboardType="numeric"
                                onChange={setValue}
                                onFocus={setFocus}
                                clearInput={clearInput}
                            />
                        </Row> */}
                        {/* <Row>
                            <InputListManager
                                name="requirements"
                                title="Lista de requisitos"
                                label="Requisitos"
                                placeholder="Agrega un requisito"
                                value={formState.values.requirements.value}
                                list={formState.values.requirements.list??[]}
                                isFocus={formState.values.requirements.isFocus}
                                errorFieldInvalid="El requisito ingresado no es válido"
                                onFocus={putFocus}
                                onChange={handleChange}
                                clearInput={clearInput}
                                addToList={addToList}
                                removeItemFromList={removeItemFromList}
                                updateListItem={updateListItem}
                            />
                            <InputListManager
                                name="benefits"
                                title="Lista de lo que ofrecemos"
                                label="Lo que ofrecemos"
                                placeholder="Agrega un beneficio"
                                value={formState.values.benefits.value}
                                list={formState.values.benefits.list??[]}
                                errorFieldInvalid="El beneficio ingresado no es válido"
                                isFocus={formState.values.benefits.isFocus}
                                onFocus={putFocus}
                                onChange={handleChange}
                                clearInput={clearInput}
                                addToList={addToList}
                                removeItemFromList={removeItemFromList}
                                updateListItem={updateListItem}
                            />
                        </Row> */}
                        {/* <Row>
                            <CoordinateSelector 
                                name="coords"
                                isRequired={true}
                                value={formState.values.coords.value}
                                statusError={formState.errors.coords.status}
                                errorFieldEmpty="El campo ubicación no puede estar vacio"
                                errorFieldInvalid="La ubicación no es valida"
                                handleChange={handleChange}
                            />
                        </Row> */}
                        <PublishOnCompletionToggle 
                            value={publishPublication}
                            toggle={() => setPublishPublication(!publishPublication)}
                        />
                        <View style={{
                            marginTop: 20,
                            marginBottom: 50,
                            paddingHorizontal: 10
                        }}>
                            <PrimaryBtn
                                text="Crear"
                                onPress={handleSubmit(onSubmit)}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
}