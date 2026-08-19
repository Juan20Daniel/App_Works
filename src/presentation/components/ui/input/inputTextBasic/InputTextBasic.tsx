import { KeyboardTypeOptions, TextInput } from "react-native";
import { Control, Controller, FieldPathByValue, FieldValues } from "react-hook-form";
import { InputLabel } from "../shared";

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: FieldPathByValue<T, string>;
    label: string;
    placeholder: string;
    isRequire?: boolean;
    keyboardType?: KeyboardTypeOptions;
}

export const InputController = <T extends FieldValues,> ({
    control,
    name,
    label,
    placeholder,
    isRequire,
    keyboardType
}:Props<T>) => {
    return (
        <>
            <InputLabel 
                text={label}
                isRequire={isRequire}
            />
            <Controller
                control={control}
                name={name}
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
                        keyboardType={keyboardType}
                        autoCorrect={false}
                        placeholder={placeholder}
                        style={[
                            // styles.input,
                            // errors.email && styles.inputError,
                        ]}
                    />
                )}
            />
        </>
    );
}