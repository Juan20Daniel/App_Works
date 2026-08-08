import { TextInput } from "react-native";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
    control: Control<FieldValues, any, FieldValues>;
}

export const InputController = ({
    control
}:Props) => {
    return (
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
                        // styles.input,
                        // errors.email && styles.inputError,
                    ]}
                />
            )}
        />
    );
}