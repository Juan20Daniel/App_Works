import { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import {
    AuthHeader,
    AuthSwitchLink,
    SocialAuthButton
} from '@/presentation/components/auth';
import { BtnBasic, InputTextAnimate, LoaderScreen } from '@/presentation/components/ui';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { useLoginWithEmail } from './hooks';
import { formInitialState } from './formInitialState';
import { formErrorMessage } from './formErrorMessages';
import { useForm } from '@/presentation/hooks';
import { useCheckSession, useContinueWithGoogle } from '../shared';

interface Props extends StackScreenProps<RootStackParamList, 'Login'>{}

export const Login = ({navigation}:Props) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ showPass, setShowPass ] = useState(false);
    useCheckSession();
    const {
        formState,
        setValue,
        setFocus,
        removeFocus,
        clearInput,
        isFormValid
    } = useForm(formInitialState(), formErrorMessage);
    
    const { isLoading:isLoginWithEmail, loginWithEmail } = useLoginWithEmail(
        formState,
        () => navigation.replace("Home", {animationType:'fade'}),
        isFormValid
    );

    const { 
        isLoading:isContinuingWithGoogle, 
        continueWithGoogle 
    } = useContinueWithGoogle(
        () => navigation.replace("Home", {animationType:'fade'})
    );

    useEffect(() => {
        if(isLoginWithEmail || isContinuingWithGoogle) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    },[isLoginWithEmail, isContinuingWithGoogle]);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            removeFocus();
        }}>
            <View style={{
                position:'relative',
                backgroundColor: globalColors.white, 
                justifyContent:'center',
                width:'100%',
                height:'100%',
            }}>
                <AuthHeader
                    subTitle='Inicia sesión con tu cuenta o crea una'
                    actionBtnBack={() => {
                        if(isLoading) return;
                        navigation.replace('Home', {animationType:'fade'})
                    }}
                />
                <View style={{
                    paddingHorizontal: calcDimension({small: 10, medium: 10, large: 30}),
                    width:'100%',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width:'100%', 
                        paddingTop: calcDimension({small: 20, medium:30, large:40}), 
                        maxWidth: 500
                    }}>
                        <InputTextAnimate
                            state={formState.email!}
                            label='Correo electrónico'
                            placeholder='Ingresa tu correo electrónico'
                            type='email-address'
                            inputPassword={false}
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
                            togglePasswordVisibility={() => setShowPass(!showPass)}
                            removeFocus={removeFocus}
                        />
                        <BtnBasic
                            value='INICIAR SESIÓN'
                            action={loginWithEmail}
                        />
                        <AuthSwitchLink
                            textQuestion='¿Aún no tienes una cuenta?'
                            textLink='crea una aquí'
                            navigateTo={() => {
                                if(isLoading) return;
                                navigation.replace('Register', {animationType:'slide_from_right'})
                            }}
                        />
                        <View style={{width:'100%', height: calcDimension({small:20, medium:40, large:50})}} />
                        <SocialAuthButton
                            value='Iniciar con google'
                            image={require('../../../../assets/auth/imgGoogle.png')}
                            action={continueWithGoogle}
                        />
                        <View style={{width:'100%', height: calcDimension({small:15, medium:20, large:30})}} />
                        <SocialAuthButton 
                            value='Iniciar con facebook'
                            image={require('../../../../assets/auth/ImgFacebook.png')}
                            action={() => {}}
                        />
                    </View>
                </View>
                <LoaderScreen 
                    isLoading={isLoading}
                />
             </View>
        </TouchableWithoutFeedback>
    );
}