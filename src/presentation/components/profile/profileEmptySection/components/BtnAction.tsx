import { Pressable, Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    text: string;
    onPress: () => void;
}

export const BtnAction = ({text, onPress}:Props) => {
    return (
        <Pressable
            style={({pressed}) => [{
                backgroundColor: globalColors.black, 
                paddingVertical: calcDimension({small: 8, medium: 10, large: 11}),
                borderRadius: calcDimension({small: 13, medium: 15, large: 16}),
                paddingHorizontal: calcDimension({small: 13, medium: 15, large: 16}),
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                opacity: pressed ? 0.5 : 1
            }]}
            onPress={onPress}
        >
            <Text style={{
                color: globalColors.white,
                fontSize: calcDimension({small: 10, medium: 12, large: 13}),
            }}>
                {text}
            </Text>
        </Pressable>
    );
}