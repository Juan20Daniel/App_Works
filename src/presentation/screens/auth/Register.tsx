import { useCallback, useEffect, useReducer, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { simpleFormReducer } from '../../reducers/simpleForm/formReducer';
import { AuthSwitchLink, InputTextAnimate, SocialAuthButton } from '@/presentation/components/auth';
import { BtnBasic } from '@/presentation/components/ui';
import type { SimpleForm } from '@/presentation/types/form';

interface Props extends StackScreenProps<RootStackParamList, 'Register'>{}

export const initialStateRegisterForm:SimpleForm = {
    values: {
        firstname: { value:'', isFocus:false },
        lastname: { value:'', isFocus:false },
        phone: { value:'', isFocus:false },
        email: { value:'', isFocus:false },
        password: { value: '', isFocus:false }
    },
    errors: {
        firstname: { status:null, valid:null },
        lastname: { status:null, valid:null },
        phone: { status:null, valid:null },
        email: { status:null, valid:null },
        password: { status:null, valid:null },
    }
}

export const Register = ({navigation}:Props) => {
    const [form, dispatch] = useReducer(simpleFormReducer, initialStateRegisterForm);
    const [ keyboardVisible, setKeyboarVisible ] = useState(false);
    const [ showPass, setShowPass ] = useState(false);
    useEffect(() => {
        const showSubsciption = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboarVisible(true);
        })
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboarVisible(false);
            handlePress();
        });
        return () => {
            showSubsciption.remove();
            hideSubscription.remove();
        }; 
    },[]);
    const handleChange = (field:string, value:string) => {
        dispatch({
            type:'CHANGE_INPUT',
            field:field,
            value:value
        });
    }
    const putFocusInput = (field:string) => {
        dispatch({
            type:'PUT_FOCUS_INPUT',
            field:field,
        });
    }
    const handlePress = useCallback(() => {
        dispatch({
            type:'REMOVE_FOCUS_INPUT'
        })
        Keyboard.dismiss();
    },[]);
     const inputClear = (field:string) => {
        dispatch({
            type:'CLEAR_INPUT',
            field
        });
    }
    const submitForm = () => {
        dispatch({
            type:'VALIDATE_FORM'
        });
    }
    return (
       <AuthLayout 
            navigation={navigation}
            subTitle='Crea una cuenta en nuestra app con tus datos personales'
        >
            <View style={{width:'100%', height: 40}} />
            <InputTextAnimate
                label='Nombre'
                placeholder='Ingresa tu nombre'
                name='firstname'
                type='default'
                value={form.values.firstname.value}
                isFocus={form.values.firstname.isFocus}
                inputPassword={false}
                errorFieldEmpty='El nombre es obligatorio'
                errorFieldInvalid='El nombre no es válido'
                statusError={form.errors.firstname.status}
                onChange={(value:string, field:string) => handleChange(field, value)}
                onFocus={(field:string) => putFocusInput(field)}
                clearInput={inputClear}
            />
            <InputTextAnimate
                label='Apellido'
                placeholder='Ingresa tu apellido'
                name='lastname'
                type='default'
                value={form.values.lastname.value}
                isFocus={form.values.lastname.isFocus}
                inputPassword={false}
                errorFieldEmpty='El apellido es obligatorio'
                errorFieldInvalid='El apellido no es válido'
                statusError={form.errors.lastname.status}
                onChange={(value:string, field:string) => handleChange(field, value)}
                onFocus={(field:string) => putFocusInput(field)}
                clearInput={inputClear}
            />
            <InputTextAnimate
                label='Teléfono'
                placeholder='Ingresa tu teléfono'
                name='phone'
                type='decimal-pad'
                value={form.values.phone.value}
                isFocus={form.values.phone.isFocus}
                inputPassword={false}
                errorFieldEmpty='El teléfono es obligatorio'
                errorFieldInvalid='El teléfono no es válido'
                statusError={form.errors.phone.status}
                onChange={(value:string, field:string) => handleChange(field, value)}
                onFocus={(field:string) => putFocusInput(field)}
                clearInput={inputClear}
            />
            <InputTextAnimate
                label='Correo electrónico'
                placeholder='Ingresa tu correo electrónico'
                name='email'
                type='email-address'
                value={form.values.email.value}
                isFocus={form.values.email.isFocus}
                inputPassword={false}
                errorFieldEmpty='El correo es obligatorio'
                errorFieldInvalid='El correo no es válido'
                statusError={form.errors.email.status}
                onChange={(value:string, field:string) => handleChange(field, value)}
                onFocus={(field:string) => putFocusInput(field)}
                clearInput={inputClear}
            />
            <InputTextAnimate
                label='Contraseña'
                placeholder='Ingresa tu contraseña'
                name='password'
                type='default'
                value={form.values.password.value}
                isFocus={form.values.password.isFocus}
                secureTextEntry={showPass}
                inputPassword
                errorFieldEmpty='La contraseña obligatoria'
                errorFieldInvalid='La contraseña no es válida'
                statusError={form.errors.password.status}
                onChange={(value:string, field:string) => handleChange(field, value)}
                onFocus={(field:string) => putFocusInput(field)}
                clearInput={inputClear}
                togglePasswordVisibility={() => setShowPass(!showPass)}
            />
            <BtnBasic
                value='CREAR CUENTA'
                action={() => submitForm()}
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
        </AuthLayout>
    );
}