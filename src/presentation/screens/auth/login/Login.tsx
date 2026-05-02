import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { AuthHeader, AuthSwitchLink, SocialAuthButton } from '@/presentation/components/auth';
import { BtnBasic, InputTextAnimate } from '@/presentation/components/ui';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { login } from './login';

interface Props extends StackScreenProps<RootStackParamList, 'Login'>{}

export const Login = ({navigation}:Props) => {
    const {
        formState,
        showPass,
        setValue,
        setFocus,
        removeFocus,
        clearInput,
        setShowPass,
        submitForm
    } = login();

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            removeFocus();
        }}>
            <View style={{
                backgroundColor: globalColors.white, 
                justifyContent:'center',
                width:'100%',
                height:'100%',
            }}>
                <AuthHeader
                    navigation={navigation}
                    subTitle='Inicia sesión con tu cuenta o crea una'
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
                            action={() => submitForm()}
                        />
                        <AuthSwitchLink
                            textQuestion='¿Aún no tienes una cuenta?'
                            textLink='crea una aquí'
                            navigateTo={() => navigation.replace('Register', {animationType:'slide_from_right'})}
                        />
                        <View style={{width:'100%', height: calcDimension({small:20, medium:40, large:50})}} />
                        <SocialAuthButton
                            value='Iniciar con google'
                            image={require('../../../assets/auth/imgGoogle.png')}
                            action={() => {}}
                        />
                        <View style={{width:'100%', height: calcDimension({small:15, medium:20, large:30})}} />
                        <SocialAuthButton 
                            value='Iniciar con facebook'
                            image={require('../../../assets/auth/ImgFacebook.png')}
                            action={() => {}}
                        />
                    </View>
                </View>
             </View>
        </TouchableWithoutFeedback>
    );
}