import { Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    isRequire?: boolean;
    isFocused?: boolean;
    isInvalid?: boolean;
}

export const IsRequire = ({
    isRequire,
    isFocused=false,
    isInvalid=false,
}:Props) => {
    return (
        <Text style={{
            fontSize:calcDimension({
                small: 8,
                medium: 11
            }), 
            color: isFocused
                ? globalColors.azureBlue 
                : isInvalid 
                    ? globalColors.darkRed
                    : globalColors.gray
        }}>
            {isRequire 
                ? 'Requerido' 
                : 'Opcional'
            }
        </Text>
    );
}
