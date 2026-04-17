import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { AuthHeader, AuthSwitchLink, InputTextAnimate, SocialAuthButton } from '@/presentation/components/auth';
import { BtnBasic } from '@/presentation/components/ui';
import { useForm } from '@/presentation/hooks';
import { isTablet } from '@/presentation/helpers/isTablet';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import type { FormErrorMessage, FormState } from '@/presentation/types/form';

interface Props extends StackScreenProps<RootStackParamList, 'Login'>{}

const formErrorMessage:FormErrorMessage = {
    'email': {
        empty:'El correo es obligatorio',
        invalid:'El correo no es válido'
    },
    'password': {
        empty:'La contraseña es obligatoria',
        invalid:'La contraseña no es válida'
    }
}

const formInitialState:FormState = { 
    email: { 
        name:'email',
        value:'', 
        isFocus:false, 
        isValid: null, 
        status: null, 
        isRequired: true 
    },
    password: { 
        name:'password', 
        value: '', 
        isFocus:false, 
        isValid: null, 
        status: null, 
        isRequired: true 
    }
}

export const Login = ({navigation}:Props) => {
    const [ showPass, setShowPass ] = useState(false);
    const { 
        formState, 
        setValue, 
        setFocus, 
        removeFocus, 
        clearInput, 
        validateForm 
    } = useForm(formInitialState, formErrorMessage);
    
    const submitForm = () => {
        validateForm();
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            removeFocus();
        }}>
            <View style={{
                backgroundColor: globalColors.white, 
                justifyContent:'center',
                width:'100%',
                height:'100%'
            }}>
                <AuthHeader
                    navigation={navigation}
                    subTitle='Inicia sesión con tu cuenta o crea una'
                />
                <View style={{width:'100%', paddingTop:40, maxWidth: 500, paddingHorizontal:isTablet ? 30:10}}>
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
                        action={() => submitForm()}
                    />
                    <AuthSwitchLink
                        textQuestion='¿Aún no tienes una cuenta?'
                        textLink='crea una aquí'
                        navigateTo={() => navigation.replace('Register', {animationType:'slide_from_right'})}
                    />
                    <View style={{width:'100%', height: 40}} />
                    <SocialAuthButton
                        value='Iniciar con google'
                        image={require('../../../assets/auth/imgGoogle.png')}
                        action={() => {}}
                    />
                    <View style={{width:'100%', height: 30}} />
                    <SocialAuthButton 
                        value='Iniciar con facebook'
                        image={require('../../../assets/auth/ImgFacebook.png')}
                        action={() => {}}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}