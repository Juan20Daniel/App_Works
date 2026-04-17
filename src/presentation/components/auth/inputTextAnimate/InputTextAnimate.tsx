import { KeyboardTypeOptions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { InputState } from '@/presentation/types/input';
import { FormField } from '@/presentation/types/form';
import { Icon } from '../../ui';
import { BtnClearInput } from '../../shared';

interface Props {
    state:InputState;
    label: string;
    placeholder: string;
    type: KeyboardTypeOptions;
    secureTextEntry?:boolean;
    inputPassword?:boolean;
    onChange:(field:FormField, value:string) => void;
    onFocus:(field:FormField) => void;
    clearInput:(field:FormField) => void;
    togglePasswordVisibility?: () => void;
    removeFocus:() => void;
}

export const InputTextAnimate = ({
    state,
    label, 
    placeholder, 
    type,
    secureTextEntry=true,
    inputPassword=false,
    onChange,
    onFocus,
    clearInput,
    togglePasswordVisibility,
    removeFocus
}:Props) => {
    const { status, isFocus, value, name } = state;
    return (
        <View style={{
            ...styles.container, 
            borderColor: isFocus
                ? globalColors.azureBlue 
                : (status !== null && status !== 'valid') 
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
                        :   (status !== null && status !== 'valid') 
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
                onChangeText={textValue => onChange(name, textValue)}
                secureTextEntry={!secureTextEntry}
                onFocus={() => {
                    onFocus(name);
                }}
                onBlur={removeFocus}
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
                    name={name}
                    action={() => clearInput(name)}
                />
            }
            {(status !== null && status !== 'valid') &&
                <View style={styles.boxMessageError}>
                    <Text style={styles.messageError}>
                        {state.errorMessage}
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