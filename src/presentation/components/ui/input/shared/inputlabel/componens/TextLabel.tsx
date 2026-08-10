import { Text } from 'react-native'
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    text: string;
}

export const TextLabel = ({text}:Props) => {
    return (
        <Text style={{
            paddingLeft: 20,
            paddingHorizontal: 3,
            fontSize: calcDimension({
                small:12, 
                medium:16
            }),
            fontFamily: globalStyles.fontMonserratMedium,
            color: globalColors.black
        }}>
            {text}
        </Text>
    );
}