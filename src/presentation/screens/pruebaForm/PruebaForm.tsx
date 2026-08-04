import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import {
    Controller,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
} from 'react-hook-form';

interface Props extends StackScreenProps<RootStackParamList, 'PruebaForm'>{}


type SignInFormValues = {
    email: string;
    password: string;
};

export const PruebaForm = ({navigation}:Props) => {
    const { control, handleSubmit, formState: {errors, isSubmitting}} = useForm<SignInFormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<SignInFormValues> = async data => {
        console.log('Formulario válido:', data);
    };

    const onInvalid: SubmitErrorHandler<SignInFormValues> = errors => {
        console.log('Formulario inválido:', errors);
    };

    return (
        <View style={styles.container}>
            <Text>Correo electrónico</Text>

            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'El correo electrónico es obligatorio',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Ingresa un correo electrónico válido',
                    },
                }}
                render={({field: {value,onChange,onBlur,ref}}) => (
                    <TextInput
                        ref={ref}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="correo@ejemplo.com"
                        style={[
                            styles.input,
                            errors.email && styles.inputError,
                        ]}
                    />
                )}
            />

            {errors.email?.message && (
                <Text style={styles.error}>
                    {errors.email.message}
                </Text>
            )}

            <Text>Contraseña</Text>

            <Controller
                control={control}
                name="password"
                rules={{
                    required: 'La contraseña es obligatoria',
                    minLength: {
                        value: 8,
                        message: 'La contraseña debe tener al menos 8 caracteres',
                    },
                }}
                render={({field: {value,onChange,onBlur,ref}}) => (
                    <TextInput
                        ref={ref}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        placeholder="Contraseña"
                        style={[
                            styles.input,
                            errors.password && styles.inputError,
                        ]}
                    />
                )}
            />

            {errors.password?.message && (
                <Text style={styles.error}>
                    {errors.password.message}
                </Text>
            )}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Átras</Text>
            </TouchableOpacity>
            <Button
                title={isSubmitting
                    ? 'Iniciando sesión...'
                    : 'Iniciar sesión'
                }
                disabled={isSubmitting}
                onPress={handleSubmit(onSubmit, onInvalid)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 8,
        paddingTop:60,
        padding: 16,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    inputError: {
        borderColor: '#DC2626',
    },
    error: {
        color: '#DC2626',
        fontSize: 13,
    },
});