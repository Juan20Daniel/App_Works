import { Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

export const TitleApp = () => (
    <Text style={{
        fontFamily:'Moul-Regular', 
        fontSize: calcDimension({small: 25, medium: 30})
    }}>
        <Text style={{color:globalColors.azureBlue}}>W</Text>orks
    </Text>
);