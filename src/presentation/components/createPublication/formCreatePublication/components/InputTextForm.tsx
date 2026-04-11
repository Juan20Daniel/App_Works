import { DimensionValue, KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { InputStatus } from '@/presentation/types/input';
import { isTablet } from '@/presentation/helpers/isTablet';
import { Label } from '@/presentation/components/createPublication/formCreatePublication/components/Label';
import { BtnClearInput } from '@/presentation/components/shared';
import { BtnBasic } from '@/presentation/components/ui';
import { InputErrorMessage } from './InputErrorMessage';

interface Props {
    label: string;
    placeholder: string;
    value: string;
    keyboardType: KeyboardTypeOptions;
    name: string;
    isFocus:boolean;
    inputType?: 'default' | 'input-area' | 'input-action'
    errorFieldEmpty?: string;
    errorFieldInvalid?: string;
    statusError?: InputStatus;
    multiline?:boolean;
    isRequired?: boolean;
    containerWidth?: DimensionValue;
    disableBtnAction?: boolean;
    textBtnInputAction?:string;
    inputAction?: () => void;
    onChange:(field:string, value:string) => void;
    onFocus:(field:string) => void;
    clearInput:(field:string) => void;
}

export const InputTextForm = ({
    label, 
    placeholder, 
    name, 
    keyboardType, 
    value,
    isFocus,
    inputType='default',
    errorFieldEmpty,
    errorFieldInvalid,
    statusError,
    multiline=false,
    isRequired=false,
    disableBtnAction=true,
    containerWidth,
    textBtnInputAction='Agregar',
    inputAction,
    onChange,
    onFocus,
    clearInput
}:Props) => {
    return (
        <View style={{
            ...styles.container,
            width:containerWidth 
                ?   containerWidth
                :   isTablet ? '50%' : '100%'
        }}>
            <Label
                text={label}
                isFocus={isFocus}
                showTextRequire
                isRequired={isRequired}
                statusError={statusError}
            />
            <View style={{
                ...styles.boxInput, 
                flexDirection: inputType === 'input-action' ? 'row' : 'column',
                justifyContent: inputType === 'input-action' ? 'space-between' : 'center',
                alignItems: inputType === 'input-action' ? 'center' : 'flex-start',
                borderColor: isFocus 
                    ?   globalColors.azureBlue 
                    :   (statusError != null && statusError != 'valid')
                        ?   globalColors.darkRed
                        :   globalColors.softGray
            }}>
                <TextInput
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={textValue => onChange(name, textValue)}
                    placeholder={placeholder}
                    multiline={multiline}
                    numberOfLines={10}
                    onFocus={() => onFocus(name)}
                    placeholderTextColor={isFocus ? globalColors.azureBlue : globalColors.gray}
                    style={{
                        ...styles.textInput,
                        paddingVertical: inputType === 'input-area' ? 23 : 0,
                        height: inputType === 'input-area' ? 120 : 65,
                    }}
                />
                {inputType === 'input-action' &&
                    <View style={{
                        width: 80, 
                        height: 57, 
                        right: 4,
                    }}>
                        <BtnBasic 
                            value={textBtnInputAction}
                            action={() => {
                                inputAction && inputAction();
                            }}
                            backgroundColor={globalColors.softGray}
                            disable={disableBtnAction}
                            customStylesBtn={{
                                height: 57, 
                                borderRadius:20
                            }}
                            fontSize={12}
                            fontColor={globalColors.gray}
                        />
                    </View>
                }
            </View>
            {value !== '' &&
                <BtnClearInput
                    name={name}
                    top={53}
                    right={inputType === 'input-action' ? 100 : 20}
                    action={(name) => clearInput(name)}
                />
            }
            {(statusError !== null && statusError !== 'valid') &&
                <InputErrorMessage 
                    statusError={statusError}
                    errorFieldEmpty={errorFieldEmpty}
                    errorFieldInvalid={errorFieldInvalid}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
    },
    boxInput: {
        borderRadius: 20,
        borderWidth: 1,
    },
    textInput: {
        flex: 1,
        borderRadius: 20,
        minHeight: 65,
        paddingRight: 50,
        paddingLeft: 23,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15,
    },
    btnShowPassword: {
        backgroundColor: globalColors.white,
    }
});