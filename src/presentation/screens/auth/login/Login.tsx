import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import {
    AuthHeader,
    AuthSwitchLink,
    SocialAuthButton
} from '@/presentation/components/auth';
import { InputTextAnimate } from '@/presentation/components/ui';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { useLoginWithEmail } from './hooks';
import { 
    useCheckSession,
    useContinueWithGoogle, 
    useContinueWithFacebook
} from '../shared';
import { PrimaryBtn } from '@/presentation/components/ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormValue } from './types';
import { defaultValue } from './defaultValue';
import { useMutation } from '@tanstack/react-query';
import { expretions } from '@/shared';

interface Props extends StackScreenProps<RootStackParamList, 'Login'>{}

const Login = ({navigation}:Props) => {
    const [ showPass, setShowPass ] = useState(false);
    useCheckSession();
    const {
        continueWithGoogle 
    } = useContinueWithGoogle(
        () => navigation.replace("Home", {animationType:'fade'})
    );
    const {
        continueWithFacebook
    } = useContinueWithFacebook(
        () => navigation.replace("Home", {animationType:'fade'})
    );
    const { control, handleSubmit, setFocus } = useForm<LoginFormValue>({
        defaultValues: defaultValue,
        mode: 'onSubmit',
        shouldFocusError: false
    });
    
    const { loginWithEmail } = useLoginWithEmail(
        () => navigation.replace("Home", {animationType:'fade'})
    );

    const mutationLoginWithEmail = useMutation({
        mutationFn:loginWithEmail
    });

    const onSubmit:SubmitHandler<LoginFormValue> = (data) => {
        mutationLoginWithEmail.mutate(data);
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
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
                        navigation.replace('Home', {animationType:'fade'})
                    }}
                />
                <View style={{
                    paddingHorizontal: calcDimension({
                        small: 10,
                        medium: 10,
                        large: 30
                    }),
                    width:'100%',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width:'100%',
                        paddingTop: calcDimension({
                            small: 20,
                            medium: 30,
                            large: 40
                        }),
                        maxWidth: 500
                    }}>
                        <InputTextAnimate
                            control={control}
                            name='email'
                            label='Correo electrónico'
                            placeholder='Ingresa tu correo electrónico'
                            type='email-address'
                            regex={expretions.email!}
                            isRequire
                            errorRequireMessage='El correo es requerido'
                            errorInvalidInputMessage='El correo no es válido'
                            returnKeyType='next'
                            marginBottom={10}
                            onSubmitEditing={() => {
                                setFocus('password');
                            }}
                        />
                        <InputTextAnimate
                            control={control}
                            name='password'
                            label='Contraseña'
                            placeholder='Ingresa tu contraseña'
                            type='default'
                            secureTextEntry={showPass}
                            inputPassword
                            regex={expretions.password!}
                            isRequire
                            errorRequireMessage='La contraseña es requerida'
                            errorInvalidInputMessage='La contraseña no es válida'
                            returnKeyType='done'
                            marginBottom={10}
                            togglePasswordVisibility={() => setShowPass(!showPass)}
                            onSubmitEditing={handleSubmit(onSubmit)}
                        />
                        <PrimaryBtn
                            text='INICIAR SESIÓN'
                            onPress={handleSubmit(onSubmit)}
                        />
                        <AuthSwitchLink
                            textQuestion='¿Aún no tienes una cuenta?'
                            textLink='crea una aquí'
                            navigateTo={() => {
                                navigation.replace('Register', {animationType:'slide_from_right'})
                            }}
                        />
                        <View style={{
                            width:'100%',
                            height: calcDimension({
                                small: 20,
                                medium: 40,
                                large: 50
                            })
                        }}/>
                        <SocialAuthButton
                            value='Iniciar con google'
                            image={require('../../../assets/auth/imgGoogle.png')}
                            action={continueWithGoogle}
                        />
                        <View style={{
                            width:'100%', 
                            height: calcDimension({
                                small: 15,
                                medium: 20,
                                large: 30
                            })
                        }} />
                        <SocialAuthButton
                            value='Iniciar con facebook'
                            image={require('../../../assets/auth/ImgFacebook.png')}
                            action={continueWithFacebook}
                        />
                    </View>
                </View>
             </View>
        </TouchableWithoutFeedback>
    );
}

export default Login;