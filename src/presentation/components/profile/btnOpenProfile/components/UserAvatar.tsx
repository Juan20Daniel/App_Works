import { Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles'
import { useUserStore } from '@/presentation/store';

export const UserAvatar = () => {
    const user = useUserStore(state => state.user);
    return (
        <View
            style={{
                width:30, 
                height:30, 
                borderRadius: 15,
                backgroundColor: user?.avatarColor,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{
                color:globalColors.white,
                fontSize: 16
            }}>J</Text>
        </View>
    );
}
