import { Text } from 'react-native';
import { isTablet } from '@/presentation/helpers/isTablet';

export const Title = () => {
    return (
        <Text style={{paddingBottom: 10, fontSize: isTablet ? 25 : 18}}>
            Apps de contacto
        </Text>
    );
}
