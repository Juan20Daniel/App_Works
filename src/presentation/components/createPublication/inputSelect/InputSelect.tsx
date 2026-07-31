import { View } from 'react-native';
import { InputSelectOption } from '@/presentation/types/input-select-option';
import { ListOptions } from './components/ListOptions';
import { BtnSelect } from '../shared/btnSelect/BtnSelect';
import { isTablet } from '@/presentation/helpers/isTablet';
import { Label } from '../shared/label/Label';
import { InputState } from '@/presentation/types/input';
import { InputErrorMessage } from '../shared/inputErrorMessage/InputErrorMessage';

interface Props {
    label:string;
    placeholder:string;
    listOptions:InputSelectOption[];
    state: InputState;
    handleChange:(field:string, value:string) => void;
    onFocus:(field:string) => void;
    closeFocus:() => void;
}

export const InputSelect = ({
    label, 
    placeholder, 
    state,
    listOptions, 
    onFocus, 
    handleChange,
    closeFocus
}:Props) => {
    const { name, value, isFocus, status } = state;
    const selectOption = (optionName:string) => {
        handleChange(name, optionName);
        closeFocus();
    }
    return (
        <View style={{width: isTablet ? '50%' : '100%', paddingHorizontal:10}}>
            <View style={{position: 'relative', flex:1}}>
                <Label
                    text={label}
                    state={state}
                    showTextRequire
                />
                <BtnSelect
                    state={state}
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
                <InputErrorMessage state={state} />
            </View>
        </View>
    );
}