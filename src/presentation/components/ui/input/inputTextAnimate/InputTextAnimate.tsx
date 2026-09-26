import { useState } from 'react';
import { KeyboardTypeOptions, Pressable, ReturnKeyTypeOptions, Text, TextInput, View } from 'react-native';
import { Control, FieldPathByValue, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { Icon, InputErrorMessage } from '../../';
import { BtnClearInput } from '../../../shared';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { styles } from './styles';

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: FieldPathByValue<T, string>;
    label: string;
    placeholder: string;
    type: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    inputPassword?: boolean;
    isRequire?: boolean;
    regex: RegExp;
    errorRequireMessage?: string;
    errorInvalidInputMessage?: string;
    returnKeyType?: ReturnKeyTypeOptions;
    marginBottom?:number;
    togglePasswordVisibility?: () => void;
    onSubmitEditing?: () => void;
}

export const InputTextAnimate = <T extends FieldValues,> ({
    control,
    name,
    label, 
    placeholder, 
    type,
    isRequire,
    regex,
    errorRequireMessage='El campo es requerido',
    errorInvalidInputMessage='El campo no es válido',
    secureTextEntry=true,
    inputPassword=false,
    returnKeyType='default',
    marginBottom=0,
    togglePasswordVisibility,
    onSubmitEditing
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
        fieldState:{error, invalid}
    } = useController({control, name, rules});

    return (
        <>
            <View style={[
                styles.container, 
                invalid && globalStyles.boderColorError,
                isFocused && globalStyles.boderColorFocus
            ]}>
                <View style={{
                    ...styles.boxLabel, 
                    transform: [{translateY:(isFocused || value!=='')
                        ? calcDimension({small:-33, medium:-33}) 
                        : 0
                    }]}
                }>
                    <Text style={{
                        ...styles.label,
                        color:isFocused
                            ?   globalColors.azureBlue
                            :   invalid
                                ?   globalColors.darkRed
                                :   globalColors.gray
                    }}>
                        {(invalid || value !== '') ? label : placeholder}
                    </Text>
                </View>
                <TextInput
                    ref={ref}
                    style={{
                        ...styles.textInput, 
                        paddingRight:inputPassword ? 100 : 50
                    }}
                    keyboardType={type}
                    value={value}
                    secureTextEntry={!secureTextEntry}
                    autoCorrect={false}
                    returnKeyType={returnKeyType}
                    onChangeText={onChange}
                    onSubmitEditing={onSubmitEditing}
                    onFocus={() => {
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        onBlur();
                        setIsFocused(false);
                    }}
                />
                {inputPassword &&
                    <Pressable 
                        style={{
                            ...styles.btnRight,
                            ...styles.btnShowPassword, 
                            right:inputPassword
                                ?   value !== ''   
                                    ?   60
                                    :   15
                                :   15
                        }} 
                        onPress={() => {
                            togglePasswordVisibility && togglePasswordVisibility();
                        }}
                    >
                        <Icon name={ secureTextEntry ? "Visibility" : "Visibility_off" } />
                    </Pressable>
                }
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
            <View style={{marginBottom}} />
        </>
    );
}