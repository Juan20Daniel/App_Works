import { useEffect, useState } from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { AuthHeader, AuthSwitchLink, SocialAuthButton } from '@/presentation/components/auth';
import { BtnBasic, InputTextAnimate, LoaderScreen } from '@/presentation/components/ui';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { useRegister } from './hooks';
import { formInitialState } from './formInitialState';
import { formErrorMessage } from './formErrorMessages';
import { useForm, useKeyboard } from '@/presentation/hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCheckSession, useContinueWithGoogle } from '../shared';

interface Props extends StackScreenProps<RootStackParamList, 'Register'>{}

export const Register = ({navigation}:Props) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ showPass, setShowPass ] = useState(false);
    useCheckSession();
    const { top, bottom } = useSafeAreaInsets();
    const {
        formState,
        setFocus,
        setValue,
        setError,
        clearInput,
        removeFocus,
        isFormValid,
    } = useForm(formInitialState, formErrorMessage);
    const { isLoading:isRegisteringWithEmail, register } = useRegister(
        formState,
        navigation,
        isFormValid,
        setError
    );
    const { keyboardVisible } = useKeyboard();

    const { isLoading:isContinuingWithGoogle, continueWithGoogle } = useContinueWithGoogle();

    useEffect(() => {
        if(isRegisteringWithEmail || isContinuingWithGoogle) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    },[isRegisteringWithEmail, isContinuingWithGoogle]);

    return (
        <View style={{paddingTop:top, backgroundColor: globalColors.white}}>
            <ScrollView keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                    removeFocus();
                }}>
                    <View style={{
                        position:'relative',
                        width:'100%',
                        height:'100%'
                    }}>
                        <AuthHeader
                            subTitle='Crea una cuenta en nuestra app con tus datos personales'
                            actionBtnBack={() => {
                                navigation.replace('Home', {animationType:'fade'})
                            }}
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
                                    action={register}
                                />
                                <AuthSwitchLink 
                                    textQuestion='¿Ya tienes una cuenta?'
                                    textLink='inicia sesión'
                                    navigateTo={() => navigation.replace('Login', {animationType:'slide_from_left'})}
                                />
                                <View style={{width:'100%', height: 40}} />
                                <SocialAuthButton
                                    value='Crear con google'
                                    image={require('../../../../assets/auth/imgGoogle.png')}
                                    action={continueWithGoogle}
                                />
                                <View style={{width:'100%', height: 30}} />
                                <SocialAuthButton 
                                    value='Crear con facebook'
                                    image={require('../../../../assets/auth/ImgFacebook.png')}
                                    action={() => {}}
                                />
                                {keyboardVisible &&
                                    <View style={{width:'100%', height: 100}} />
                                }
                            </View>
                        </View>
                        <LoaderScreen
                            isLoading={isLoading}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
}