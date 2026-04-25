import { useEffect, useState } from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { AuthHeader, AuthSwitchLink, SocialAuthButton } from '@/presentation/components/auth';
import { BtnBasic, InputTextAnimate } from '@/presentation/components/ui';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { useForm } from '@/presentation/hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { FormState } from '@/presentation/types/form';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props extends StackScreenProps<RootStackParamList, 'Register'>{}

export const formInitialState:FormState = {
    'firstname': {
        name: 'firstname', 
        value: '', 
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false 
    },
    'lastname': {
        name: 'lastname', 
        value: '',
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false
    },
    'phone': {
        name: 'phone', 
        value: '',
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false
    },
    'email': {
        name: 'email', 
        value: '',
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false
    },
    'password': {
        name: 'password', 
        value: '',
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false
    }
}

export const Register = ({navigation}:Props) => {
    const [ keyboardVisible, setKeyboarVisible ] = useState(false);
    const [ showPass, setShowPass ] = useState(false);
    const { formState, setFocus, setValue, clearInput, removeFocus } = useForm(formInitialState, {});
    const { top, bottom } = useSafeAreaInsets();

    useEffect(() => {
        const showSubsciption = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboarVisible(true);
        })
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboarVisible(false);
        });
        return () => {
            showSubsciption.remove();
            hideSubscription.remove();
        }; 
    },[]);
   
    return (
        <View style={{paddingTop:top, backgroundColor: globalColors.white}}>
            <ScrollView keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                    removeFocus();
                }}>
                    <View style={{
                        width:'100%',
                        height:'100%'
                    }}>
                        <AuthHeader
                            navigation={navigation}
                            subTitle='Crea una cuenta en nuestra app con tus datos personales'
                        />
                        <View style={{
                            width:'100%',
                            alignItems: 'center',
                            paddingHorizontal:calcDimension({small: 10, medium:10, large: 30})
                        }}>
                            <View style={{
                                width:'100%', 
                                paddingTop:40, 
                                paddingBottom:bottom+50, 
                                maxWidth: 500, 
                            }}>
                                <InputTextAnimate
                                    state={formState.firstname!}
                                    label='Nombre'
                                    placeholder='Ingresa tu nombre'
                                    type='default'
                                    onChange={setValue}
                                    onFocus={setFocus}
                                    clearInput={clearInput}
                                    removeFocus={removeFocus}
                                />
                                <InputTextAnimate
                                    state={formState.lastname!}
                                    label='Apellido'
                                    placeholder='Ingresa tu apellido'
                                    type='default'
                                    onChange={setValue}
                                    onFocus={setFocus}
                                    clearInput={clearInput}
                                    removeFocus={removeFocus}
                                />
                                <InputTextAnimate
                                    state={formState.phone!}
                                    label='Teléfono'
                                    placeholder='Ingresa tu teléfono'
                                    type='decimal-pad'
                                    onChange={setValue}
                                    onFocus={setFocus}
                                    clearInput={clearInput}
                                    removeFocus={removeFocus}
                                />
                                <InputTextAnimate
                                    state={formState.email!}
                                    label='Correo electrónico'
                                    placeholder='Ingresa tu correo electrónico'
                                    type='email-address'  
                                    onChange={setValue}
                                    onFocus={setFocus}
                                    clearInput={clearInput}
                                    removeFocus={removeFocus}
                                />
                                <InputTextAnimate
                                    state={formState.password!}
                                    label='Contraseña'
                                    placeholder='Ingresa tu contraseña'
                                    type='default'
                                    secureTextEntry={showPass}
                                    inputPassword
                                    onChange={setValue}
                                    onFocus={setFocus}
                                    clearInput={clearInput}
                                    removeFocus={removeFocus}
                                    togglePasswordVisibility={() => setShowPass(!showPass)}
                                />
                                <BtnBasic
                                    value='CREAR CUENTA'
                                    action={() => {}}
                                />
                                <AuthSwitchLink 
                                    textQuestion='¿Ya tienes una cuenta?'
                                    textLink='inicia sesión'
                                    navigateTo={() => navigation.replace('Login', {animationType:'slide_from_left'})}
                                />
                                <View style={{width:'100%', height: 40}} />
                                <SocialAuthButton
                                    value='Crear con google'
                                    image={require('../../../assets/auth/imgGoogle.png')}
                                    action={() => {}}
                                />
                                <View style={{width:'100%', height: 30}} />
                                <SocialAuthButton 
                                    value='Crear con facebook'
                                    image={require('../../../assets/auth/ImgFacebook.png')}
                                    action={() => {}}
                                />
                                {keyboardVisible &&
                                    <View style={{width:'100%', height: 100}} />
                                }
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
}