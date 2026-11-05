import { Pressable } from 'react-native';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { BtnOpenProfileSkeletor } from './BtnOpenProfileSkeletor';
import { ProfileImage, UserAvatar } from './components';
import { Icon } from '../../ui';
import { useSession } from '@/presentation/hooks';

export const BtnOpenProfile = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { user, authStatus } = useSession();

    const goToProfile = async () => { 
        if(authStatus !== 'authenticated') {
            return navigation.navigate('Login', {animationType:'fade'});
        };
        navigation.navigate('Profile', {});
    }

    if(authStatus === 'checking') {
        return <BtnOpenProfileSkeletor />
    }

    return (
        <Pressable
            onPress={goToProfile}
            style={({pressed}) => [
                {opacity: pressed ? 0.2 : 1}
            ]}
        >
            {authStatus === 'unauthenticated'
                ?   <Icon
                        name="AccountCircle"
                        size={30}
                        color={globalColors.darkGray}
                    />
                :   user?.profile_image
                        ?   <ProfileImage imageUrl={user?.profile_image} />
                        :   <UserAvatar />
            }
        </Pressable>
    );
}