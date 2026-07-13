import { IconType } from '@/presentation/types';
import { Text, View } from 'react-native';
import { Icon } from '../../ui';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { styles } from './styles';

interface Props {
    iconName: IconType;
    title: string;
    subTitle: string;
    marginTop?: number;
}

export const ProfileSectionHeader = ({
    iconName, 
    title, 
    subTitle,
    marginTop=0
}:Props) => {
    return (
        <View style={{...styles.container, marginTop}}>
            <View style={styles.iconContainer}>
                <Icon 
                    name={iconName}
                    size={calcDimension({small: 20, medium: 24, large: 28})} 
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}