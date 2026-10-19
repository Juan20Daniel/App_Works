import { useState } from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { AuthHeader, AuthSwitchLink, SocialAuthButton } from '@/presentation/components/auth';
import { InputTextAnimate } from '@/presentation/components/ui';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { useRegister } from './hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCheckSession, useContinueWithFacebook, useContinueWithGoogle } from '../shared';
import { PrimaryBtn } from '@/presentation/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormValue } from './type';
import { defaultValue } from './defaultValue';
import { regex } from '@/shared';

interface Props extends StackScreenProps<RootStackParamList, 'Register'>{}

const expretions = regex<RegisterFormValue>();

const Register = ({navigation}:Props) => {
    const [ showPass, setShowPass ] = useState(false);
    useCheckSession();
    const { top, bottom } = useSafeAreaInsets();
   
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

    const {control, handleSubmit, setFocus} = useForm<RegisterFormValue>({
        defaultValues: defaultValue,
        mode: 'onSubmit',
        shouldFocusError: false
    })

    const { register } = useRegister(
        () => navigation.replace("Home", {animationType:'fade'}),
    );

    const motarionRegister = useMutation({
        mutationFn:register
    });

    const onSubmit:SubmitHandler<RegisterFormValue> = (data) => {
        motarionRegister.mutate(data);
    }


    return (
        <View style={{paddingTop:top, backgroundColor: globalColors.white}}>
            <ScrollView 
                keyboardShouldPersistTaps='always' 
                showsVerticalScrollIndicator={false}
            >
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                    <View style={{
                        position:'relative',
                        width:'100%',
                        height:'100%'
                    }}>
                        <AuthHeader
                            subTitle='Crea una cuenta con tus datos personales'
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
                                    control={control}
                                    name='firstname'
                                    label='Nombre'
                                    placeholder='Ingresa tu nombre'
                                    type='default'
                                    regex={expretions.firstname!}
                                    isRequire
                                    errorRequireMessage='El nombre es requerido'
                                    errorInvalidInputMessage='El nombre no es válido'
                                    returnKeyType='next'
                                    marginBottom={10}
                                    onSubmitEditing={() => {
                                        setFocus('lastname');
                                    }}
                                />
                                <InputTextAnimate
                                    control={control}
                                    name='lastname'
                                    label='Apellido'
                                    placeholder='Ingresa tu apellido'
                                    type='default'
                                    regex={expretions.lastname!}
                                    isRequire
                                    errorRequireMessage='El apellido es requerido'
                                    errorInvalidInputMessage='El apellido no es válido'
                                    returnKeyType='next'
                                    marginBottom={10}
                                    onSubmitEditing={() => {
                                        setFocus('email');                                        
                                    }}
                                />
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
                                    returnKeyType='done'
                                    errorRequireMessage='La contraseña es requerida'
                                    errorInvalidInputMessage='LA contraseña no es válida'
                                    marginBottom={10}
                                    togglePasswordVisibility={() => setShowPass(!showPass)}
                                    onSubmitEditing={handleSubmit(onSubmit)}
                                />
                                <PrimaryBtn
                                    text='CREAR CUENTA'
                                    onPress={handleSubmit(onSubmit)}
                                />
                                <AuthSwitchLink 
                                    textQuestion='¿Ya tienes una cuenta?'
                                    textLink='inicia sesión'
                                    navigateTo={() => navigation.replace('Login', {animationType:'slide_from_left'})}
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
                                    value='Crear con google'
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
                                }}/>
                                <SocialAuthButton
                                    value='Crear con facebook'
                                    image={require('../../../assets/auth/ImgFacebook.png')}
                                    action={continueWithFacebook}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
}

export default Register;