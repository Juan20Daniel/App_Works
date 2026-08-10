import { Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    isRequire?: boolean;
}

export const IsRequire = ({isRequire}:Props) => {
    return (
        <Text style={{
            fontSize:calcDimension({
                small:8, 
                medium:11
            }), 
            color: globalColors.gray
        }}>
            {isRequire 
                ? 'Requerido' 
                : 'Opcional'
            }
        </Text>
    );
}
