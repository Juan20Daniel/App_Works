import { useState } from "react";
import { KeyboardTypeOptions, ReturnKeyTypeOptions, TextInput, View } from "react-native";
import { Control, FieldPathByValue, FieldValues, RegisterOptions, useController } from "react-hook-form";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { InputContainer, InputErrorMessage, InputLabel } from "../shared";
import { BtnClearInput } from "@/presentation/components/shared";
import { styles } from "./styles";

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: FieldPathByValue<T, string>;
    label: string;
    placeholder: string;
    isRequire?: boolean;
    keyboardType?: KeyboardTypeOptions;
    marginBottom?: number;
    returnKeyType?: ReturnKeyTypeOptions;
    regex: RegExp;
    errorRequireMessage?: string;
    errorInvalidInputMessage?: string;
    onSubmitEditing?: () => void;
}

export const InputTextBasic = <T extends FieldValues,> ({
    control,
    name,
    label,
    placeholder,
    isRequire,
    keyboardType,
    marginBottom,
    returnKeyType='default',
    regex,
    errorRequireMessage="El campo es requerido",
    errorInvalidInputMessage="El campo no es válido",
    onSubmitEditing,
}:Props<T>) => {
    const [ isFocused, setIsFocused ] = useState(false);

    const rules:Omit<RegisterOptions<T, FieldPathByValue<T, string>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined = {
        pattern: {
            value: regex,
            message: errorInvalidInputMessage,
        }
    }
    
    if(isRequire) {
        rules.required=errorRequireMessage
    }

    const {
        field: {value, onChange, onBlur, ref},
        fieldState: {error, invalid}
    } = useController({control, name, rules});
   
    return (
        <InputContainer marginBottom={marginBottom}>
            <InputLabel
                text={label}
                isRequire={isRequire}
                isFocused={isFocused}
                isInvalid={invalid}
            />
            <View style={[
                styles.boxInputText,
                invalid && globalStyles.boderColorError,
                isFocused && globalStyles.boderColorFocus
            ]}>
                <TextInput
                    ref={ref}
                    value={value}
                    onChangeText={onChange}
                    returnKeyType={returnKeyType}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        onBlur();
                        setIsFocused(false);
                    }}
                    keyboardType={keyboardType}
                    onSubmitEditing={onSubmitEditing}
                    autoCorrect={false}
                    placeholder={placeholder}
                    placeholderTextColor={isFocused 
                        ? globalColors.azureBlue 
                        : invalid 
                            ? globalColors.darkRed
                            : globalColors.gray
                    }
                    style={styles.inputText}
                />
                {value !== '' &&
                    <BtnClearInput
                        top={53}
                        right={20}
                        onPress={() => onChange('')}
                    />
                }
            </View>  
            <InputErrorMessage
                show={invalid}
                message={error?.message}
            />
        </InputContainer>
    );
}