import { Text } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    text: string;
}

export const Description = ({text}:Props) => {
    return (
        <Text style={{
            fontFamily:globalStyles.fontMonserratMedium,
            width: calcDimension({small: 150, medium: 200, large: 230, extraLarge: 250}),
            fontSize: calcDimension({small: 10, medium: 12, large: 13}),
            color: globalColors.gray
        }}>
            {text}
        </Text>
    )
}
