import { KeyboardTypeOptions, TextInput, View } from "react-native";
import { Control, Controller, FieldPathByValue, FieldValues } from "react-hook-form";
import { InputContainer, InputLabel } from "../shared";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: FieldPathByValue<T, string>;
    label: string;
    placeholder: string;
    isRequire?: boolean;
    requireMessage?: string;
    keyboardType?: KeyboardTypeOptions;
    marginBottom?: number;
}

export const InputTextBasic = <T extends FieldValues,> ({
    control,
    name,
    label,
    placeholder,
    isRequire,
    requireMessage="El campo es requerido",
    keyboardType,
    marginBottom
}:Props<T>) => {

    return (
        <InputContainer marginBottom={marginBottom}>
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
                    <View
                        style={{
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: globalColors.softGray
                        }}
                    >
                        <TextInput
                            ref={ref}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            keyboardType={keyboardType}
                            autoCorrect={false}
                            placeholder={placeholder}
                            placeholderTextColor={globalColors.gray}
                            style={[
                                {
                                    flex: 1,
                                    borderRadius: 20,
                                    minHeight: 65,
                                    paddingRight: 50,
                                    paddingLeft: 23,
                                    fontFamily: globalStyles.fontMonserratMedium,
                                    fontSize: 15,
                                    color: globalColors.gray
                                }
                                // errors.email && styles.inputError,
                            ]}
                        />
                    </View>
                )}
            />
        </InputContainer>
    );
}