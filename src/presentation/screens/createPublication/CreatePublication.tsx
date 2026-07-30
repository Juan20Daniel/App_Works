import { useEffect, useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { CreatePublicationProvider, useCreatePublication } from '@/presentation/context/CreatePublicationContext';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { isTablet } from '@/presentation/helpers/isTablet';
import { PublishOnCompletionToggle } from '@/presentation/components/createPublication';
import { BtnBasic, HeaderApp } from '@/presentation/components/ui';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { InputSelectOption } from '@/presentation/types';
import { InputText, Row, UploadImage } from '@/presentation/components/createPublication';

interface Props extends StackScreenProps<RootStackParamList, 'CreatePublication'>{}

export const CreatePublication = (props:Props) => {
   return (
        <CreatePublicationProvider>
            <ScreenContent {...props} />
        </CreatePublicationProvider>
    );
}

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


export const ScreenContent = ({navigation}:Props) => {
    const [ keyboarIsShow, setKeyboardIsShow ] = useState(false);
    const { formState, setFocus, setValue, clearInput } = useCreatePublication();
    const { top } = useSafeAreaInsets();
    const width = useWindowDimensions().width;
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsShow(true);
        });
        const hideSuscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsShow(false);
        })
        return () => {
            showSubscription.remove();
            hideSuscription.remove();
        }
    },[]);
    const closeAlertConfirm = () => {
        // setConfirmAlert({visible:false, title:'', message:''});
    }
    const confirmedAction = () => {
        closeAlertConfirm();
        navigation.replace('Profile', {animationType:'slide_from_left'});
    }
    // const isFormClean = () => {
    //     let isClear = true;
    //     const formCamps = formState.values;
    //     for(let camp in formCamps) {
    //         if(formCamps[camp].value !== '') {
    //             isClear = false;
    //             break;
    //         }
    //         if(formCamps[camp].list && formCamps[camp].list.length > 0) {
    //             isClear = false;
    //             break;
    //         }
    //     }
    //     if(isClear) return navigation.goBack();
    //     setConfirmAlert({
    //         visible:true, 
    //         title:'Si sales, se perdera la información agregada.', 
    //         message:'¿Seguro que quieres salir del formulario?'
    //     });
    // }
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
                    actionBox={() => {}}
                />
                <TouchableWithoutFeedback accessible={false} onPress={() => {}}>
                    <View style={{width, backgroundColor:globalColors.white}}>
                        <Text style={{
                            ...styles.title, 
                            fontSize: calcDimension({small: 15, medium: 20, large: 20, extraLarge: 30})
                        }}>
                            Nueva publicación
                        </Text>
                        <Text style={{
                            ...styles.description, 
                            fontSize:calcDimension({small: 12, medium: 15, large: 15, extraLarge: 17})
                        }}>      
                            Rellena los campos necesarios para crear una nueva publicación.  
                        </Text>
                        
                        <Row>
                            <InputText
                                state={formState.companyDesc!}
                                label="Acerca de la empresa"
                                placeholder="Descripción de la empresa"
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
                            <UploadImage />
                        </Row>
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
                        <Row>
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
                        </Row>
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
                        <PublishOnCompletionToggle />
                        <BtnBasic
                            value="Crear"
                            action={() => {}}
                            customStylesBox={{marginTop: 20, marginBottom: 50, paddingHorizontal:10}}
                        />
                        <View style={{
                            width: '100%', 
                            height:isTablet ? 50 : keyboarIsShow ? 350 : 30, 
                            backgroundColor:globalColors.white
                        }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
        paddingHorizontal: 10,
    },
    description: {
        width: calcDimension({small: 280, medium: 300, large: 300, extraLarge: 300}),
        paddingTop: 10,
        paddingHorizontal: 10,
        fontFamily: globalStyles.fontMonserratMedium,
    }
});