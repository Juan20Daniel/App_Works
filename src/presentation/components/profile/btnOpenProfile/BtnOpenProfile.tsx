import { Pressable } from 'react-native';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { useAuthStore, useUserStore } from '@/presentation/store';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { BtnOpenProfileSkeletor } from './BtnOpenProfileSkeletor';
import { ProfileImage, UserAvatar } from './components';
import { Icon } from '../../ui';

export const BtnOpenProfile = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const isAutenticating = useAuthStore(state => state.isLoading);
    const isAutenticated = useAuthStore(state => state.isAutenticated);
    const user = useUserStore(state => state.user);

    const goToProfile = async () => { 
        if(!isAutenticated) {
            return navigation.navigate('Login', {animationType:'fade'});
        };
        navigation.navigate('Profile');
    }

    if(isAutenticating) {
        return <BtnOpenProfileSkeletor />
    }

    return (
        <Pressable
            onPress={goToProfile}
            style={({pressed}) => [
                {opacity: pressed ? 0.2 : 1}
            ]}
        >
            {!isAutenticated 
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