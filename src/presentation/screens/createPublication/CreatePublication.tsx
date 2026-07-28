import { useEffect, useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { CreatePublicationProvider, useCreatePublication } from '@/presentation/context/CreatePublicationContext';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { isTablet } from '@/presentation/helpers/isTablet';
import { FormCreatePublication, PublishOnCompletionToggle } from '@/presentation/components/createPublication';
import { BtnBasic, HeaderApp } from '@/presentation/components/ui';
import { AlertMessage } from '@/presentation/components/ui/alerts/alertMessage/AlertMessage';

interface Props extends StackScreenProps<RootStackParamList, 'CreatePublication'>{}

export const CreatePublication = (props:Props) => {
   return (
        <CreatePublicationProvider>
            <ScreenContent {...props} />
        </CreatePublicationProvider>
    );
}

export const ScreenContent = ({navigation}:Props) => {
    const [ keyboarIsShow, setKeyboardIsShow ] = useState(false);
   
    const { formState } = useCreatePublication();
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
                        <Text style={{...styles.title, fontSize: isTablet ? 30 : 20}}>
                            Nueva publicación
                        </Text>
                        <Text style={{...styles.description, fontSize: isTablet ? 16 : 14}}>      
                            Rellena los campos necesarios para crear una nueva publicación de alguna vacante.  
                        </Text>
                        <FormCreatePublication />
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
        maxWidth: 500,
        paddingTop: 10,
        paddingHorizontal: 10,
        fontFamily: globalStyles.fontMonserratMedium,
    }
});