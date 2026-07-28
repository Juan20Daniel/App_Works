import { Text } from 'react-native';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    text: string;
}

export const Title = ({text}:Props) => {
    return (
        <Text style={{
            fontFamily:globalStyles.fontMonserratSemiBold,
            width: calcDimension({
                small: 150, 
                medium: 180, 
                large: 180, 
                extraLarge: 250
            }),
            fontSize: calcDimension({
                small: 12, 
                medium: 14, 
                large: 15
            }),
        }}>
            {text}
        </Text>
    );
}