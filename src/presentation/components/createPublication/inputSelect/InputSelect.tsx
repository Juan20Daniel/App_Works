import { View } from 'react-native';
import { InputSelectOption } from '@/presentation/types/input-select-option';
import { ListOptions } from './components/ListOptions';
import { BtnSelect } from '../shared/btnSelect/BtnSelect';
import { isTablet } from '@/presentation/helpers/isTablet';
import { Label } from '../shared/label/Label';
import { InputStatus } from '@/presentation/types/input';
import { InputErrorMessage } from '../shared/inputErrorMessage/InputErrorMessage';

interface Props {
    label:string;
    placeholder:string;
    name:string;
    listOptions:InputSelectOption[];
    isFocus:boolean;
    value:string;
    isRequired?: boolean;
    statusError?: InputStatus;
    errorFieldEmpty?: string;
    errorFieldInvalid?: string;
    handleChange:(field:string, value:string) => void;
    onFocus:(field:string) => void;
    closeFocus:() => void;
}

export const InputSelect = ({
    label, 
    placeholder, 
    name, 
    listOptions, 
    isFocus, 
    value,
    isRequired=false,
    statusError,
    errorFieldEmpty,
    errorFieldInvalid,
    onFocus, 
    handleChange,
    closeFocus
}:Props) => {
    const selectOption = (optionName:string) => {
        handleChange(name, optionName);
        closeFocus();
    }
    return (
        <View style={{width: isTablet ? '50%' : '100%', paddingHorizontal:10}}>
            <View style={{position: 'relative', flex:1}}>
                <Label
                    text={label}
                    isFocus={isFocus}
                    showTextRequire
                    isRequired={isRequired}
                    statusError={statusError}
                />
                <BtnSelect
                    state={{name:'description', value:'', isFocus:false, status:null, isValid:false, isRequired:true}}
                    placeholder={placeholder}
                    onPress={onFocus}
                    showIconRight
                    iconName='chevron-down-outline'
                />
                {isFocus &&
                    <ListOptions
                        opSelectedDefault={value}
                        listOptions={listOptions}
                        selectOption={selectOption}
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
        </View>
    );
}