import { Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';

export const TitleApp = () => (
    <Text style={{fontFamily:'Moul-Regular', fontSize: 30}}>
        <Text style={{color:globalColors.azureBlue}}>W</Text>orks
    </Text>
);