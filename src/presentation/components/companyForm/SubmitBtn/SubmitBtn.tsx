import { View } from 'react-native';
import { PrimaryBtn } from '../../ui/button';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    text: string;
    onPress: () => void;
}

export const SubmitBtn = ({text, onPress}:Props) => (
    <View style={{
        position: 'relative',
        alignItems:'center',
        height: calcDimension({small:80, medium:100})
    }}>
        <PrimaryBtn
            text={text}
            width={calcDimension({
                small: 280, 
                medium: 340, 
                large: 380
            })}
            onPress={onPress}
        />
    </View>
);
