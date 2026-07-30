import { DimensionValue, KeyboardTypeOptions, StyleSheet, TextInput as Input, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { InputState } from '@/presentation/types/input';
import { isTablet } from '@/presentation/helpers/isTablet';
import { Label } from '../shared/label/Label';
import { BtnClearInput } from '@/presentation/components/shared';
import { BtnBasic } from '@/presentation/components/ui';
import { InputErrorMessage } from '../shared';
import { FormField } from '@/presentation/types/form';

interface Props {
    state: InputState;
    label: string;
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    inputType?: 'default' | 'input-area' | 'input-action'
    multiline?:boolean;
    containerWidth?: DimensionValue;
    disableBtnAction?: boolean;
    textBtnInputAction?:string;
    inputAction?: () => void;
    onChange:(field:FormField, value:string) => void;
    onFocus:(field:FormField) => void;
    clearInput:(field:FormField) => void;
}

export const InputText = ({
    state,
    label, 
    placeholder,
    keyboardType,
    inputType='default',
    multiline=false,
    disableBtnAction=true,
    containerWidth,
    textBtnInputAction='Agregar',
    inputAction,
    onChange,
    onFocus,
    clearInput
}:Props) => {
    const { name, value, isFocus, isRequired, status } = state;
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
                statusError={status}
            />
            <View style={{
                ...styles.boxInput, 
                flexDirection: inputType === 'input-action' ? 'row' : 'column',
                justifyContent: inputType === 'input-action' ? 'space-between' : 'center',
                alignItems: inputType === 'input-action' ? 'center' : 'flex-start',
                borderColor: isFocus 
                    ?   globalColors.azureBlue 
                    :   (status != null && status != 'valid')
                        ?   globalColors.darkRed
                        :   globalColors.softGray
            }}>
                <Input
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
                            customStylesBtn={{
                                height: 57, 
                                borderRadius:20
                            }}
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
            {(status !== null && status !== 'valid') &&
                <InputErrorMessage 
                    statusError={status}

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