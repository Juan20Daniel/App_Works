import { DimensionValue, Pressable, Text } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { styles } from './styles';

interface Props {
    text: string;
    width?: DimensionValue;
    onPress: () => void;
}

export const PrimaryBtn = ({
    text,
    width='100%',
    onPress
}:Props) => {
    return (
        <Pressable
            onPress={onPress}
            style={({pressed}) => [{
                ...styles.btn,
                width: width,
                backgroundColor:globalColors.black,
                opacity:pressed ? 0.5 : 1,
            }]}
        >
            <Text style={{
                color:globalColors.white,
                fontFamily: globalStyles.fontMonserratMedium
            }}>
                {text}
            </Text>
        </Pressable>
    );
}