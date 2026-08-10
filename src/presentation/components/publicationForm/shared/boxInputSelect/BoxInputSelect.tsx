import { View } from 'react-native';
import { InputState } from '@/presentation/types';
import { isTablet } from '@/presentation/helpers/isTablet';
import { Label } from '../label';
import { BtnSelect } from '../btnSelect';
import { InputErrorMessage } from '../inputErrorMessage';

interface Props {
    label: string;
    state: InputState;
    placeholder: string;
    children?: React.ReactNode;
    onFocus: (field:string) => void;
}

export const BoxInputSelect = ({
    label, 
    placeholder,
    state,
    children,
    onFocus,
}:Props) => {
    return (
        <View style={{width: isTablet ? '50%' : '100%', paddingHorizontal:10}}>
            <View style={{position: 'relative', flex:1}}>
                <Label
                    state={state}
                    text={label}
                    showTextRequire
                />
                <BtnSelect
                    state={state}
                    placeholder={placeholder}
                    onPress={onFocus}
                    showIconRight
                    iconName='chevron-down-outline'
                />
                {children}
                <InputErrorMessage state={state} />
            </View>
        </View>
    );
}