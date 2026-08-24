import { Text } from 'react-native'
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    text: string;
    isFocused?: boolean;
    isInvalid?: boolean;
}

export const TextLabel = ({
    text, 
    isFocused=false,
    isInvalid=false
}:Props) => {
    return (
        <Text style={{
            paddingLeft: 20,
            paddingHorizontal: 3,
            fontSize: calcDimension({
                small:12, 
                medium:16
            }),
            fontFamily: globalStyles.fontMonserratMedium,
            color: isFocused 
                ? globalColors.azureBlue 
                : isInvalid
                    ? globalColors.darkRed
                    : globalColors.black
        }}>
            {text}
        </Text>
    );
}