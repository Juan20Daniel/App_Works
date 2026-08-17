import { Pressable, StyleSheet, Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { Icon } from '../icon/Icon';
import { IconType } from '@/presentation/types/ui/icons';

interface Props {
    iconName: IconType;
    iconColor?: string;
    marginRight?: number;
    action: () => void;
}

export const BtnIcon = ({iconName, iconColor, marginRight, action}:Props) => {
    return (
        <Pressable 
            onPress={action}
            style={({pressed}) => [
                styles.container,
                {
                    marginRight:marginRight??0,
                    borderColor: pressed 
                        ? globalColors.softGray 
                        : 'rgba(0,0,0,0.0)'
                }
            ]}
        >
            <Icon name={iconName} color={iconColor} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth:1,
    }
})