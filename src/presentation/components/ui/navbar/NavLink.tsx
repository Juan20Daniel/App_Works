import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { Icon } from '../icon/Icon';
import { IconType } from '@/presentation/types/icons';
import { globalColors } from '@/presentation/globalStyles/global.styles';

interface Props {
    iconName: IconType;
    iconSize?: number;
    redirect: 'Search'|'Profile'|'Notifications';
}

export const NavLink = ({iconName, iconSize, redirect}:Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <Pressable 
            onPress={() => navigation.navigate(redirect)}
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
}
