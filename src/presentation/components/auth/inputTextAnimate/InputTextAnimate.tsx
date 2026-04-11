import { KeyboardTypeOptions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { InputStatus } from '@/presentation/types/input';
import { BtnClearInput, Ionicons } from '../../ui';

interface Props {
    label: string;
    placeholder: string;
    value: string;
    type: KeyboardTypeOptions;
    name: string;
    isFocus:boolean;
    secureTextEntry?:boolean;
    inputPassword?:boolean;
    errorFieldEmpty?: string;
    errorFieldInvalid?: string;
    statusError?: InputStatus;
    onChange:(value:string, field:string) => void;
    onFocus:(field:string) => void;
    clearInput:(field:string) => void;
    togglePasswordVisibility?: () => void;
}

export const InputTextAnimate = ({
    label, 
    placeholder, 
    name, 
    type, 
    value,
    isFocus, 
    secureTextEntry=false,
    inputPassword=false,
    errorFieldEmpty,
    errorFieldInvalid,
    statusError,
    onChange,
    onFocus,
    clearInput,
    togglePasswordVisibility
}:Props) => {
    return (
        <View style={{
            ...styles.container, 
            borderColor: isFocus 
                ? globalColors.azureBlue 
                : (statusError !== null && statusError !== 'valid') 
                    ?   globalColors.darkRed
                    :   globalColors.softGray,
        }}>
            <View style={{
                ...styles.boxLabel, 
                transform: [{translateY:(isFocus || value!=='')? -33 : 0}]}
            }>
                <Text style={{
                    ...styles.label, 
                    color:isFocus 
                        ?   globalColors.azureBlue 
                        :   (statusError !== null && statusError !== 'valid') 
                            ?   globalColors.darkRed
                            :   globalColors.gray
                }}>
                    {(isFocus || value!=='') ? label : placeholder}
                </Text>
            </View>
            <TextInput
                style={{...styles.textInput, paddingRight:inputPassword ? 100 : 50}}
                keyboardType={type}
                value={value}
                onChangeText={textValue => onChange(textValue, name)}
                secureTextEntry={!secureTextEntry}
                onFocus={() => {
                    onFocus(name);
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
                    <Ionicons
                        name={secureTextEntry? 'eye-off-outline' : 'eye-outline'} 
                        color={globalColors.gray} 
                        size={26}
                    />
                </Pressable>
            }
            {value !== '' &&
                <BtnClearInput
                    name={name}
                    action={(name) => clearInput(name)}
                />
            }
            {(statusError !== null && statusError !== 'valid') &&
                <View style={styles.boxMessageError}>
                    <Text style={styles.messageError}>
                        {statusError === 'empty' ? errorFieldEmpty : errorFieldInvalid}
                    </Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 65,
        borderRadius: 20,
        justifyContent: 'center',
        borderWidth: 1,
        marginBottom: 30
    },
    boxLabel: {
        position: 'relative',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    label: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium
    },
    textInput: {
        position: 'absolute',
        width:'100%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: undefined,
        paddingLeft: 23,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15,
        zIndex:1
    },
    btnRight: {
        position: 'absolute',
        padding: 2,
        zIndex: 1,
    },
    btnShowPassword: {
        backgroundColor: globalColors.white,
    },
    boxMessageError: {
        position: 'absolute',
        bottom: -20,
        left: 20,
    },
    messageError: {
        color: globalColors.darkRed,
        fontSize: 11,
    }
});