import { Pressable } from 'react-native';
import { Icon } from '../icon/Icon';
import { IconType } from '@/presentation/types/icons';
import { globalColors } from '@/presentation/globalStyles/global.styles';

interface Props {
    iconName: IconType;
    iconSize?: number;
    onPress:() => void;
}

export const NavLink = ({iconName, iconSize, onPress}:Props) => (
    <Pressable 
        onPress={onPress}
        style={({pressed}) => [
            {opacity: pressed ? 0.2 : 1, justifyContent:'center'}
        ]}
    >
        <Icon
            name={iconName}
            size={iconSize}
            color={globalColors.darkGray}
        />
    </Pressable>
);

