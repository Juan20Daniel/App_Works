import { View } from 'react-native';
import { ScrollEdgeFade } from '../../shared';
import { PrimaryBtn } from '../../ui/button';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { styles } from './styles';

interface Props {
    text: string;
    onPress: () => void;
}

export const BtnGoToCompanyForm = ({
    text, 
    onPress
}:Props) => (
    <View style={styles.container}>
        <ScrollEdgeFade />
        <PrimaryBtn
            text={text}
            width={calcDimension({
                small: 280, 
                medium: 340, 
                large: 380
            })}
            onPress={onPress}
        />
    </View>
);