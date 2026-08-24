import { StyleSheet, View } from 'react-native';
import { BtnEdith, AcountInformation } from './components';
import { useUserStore } from '@/presentation/store';
import { UserAvatar } from '../../user';

export const UserAccountInformation = () => {
    const user = useUserStore(state => state.user);
    console.log(user);
    return (
        <View style={styles.container}>
            <UserAvatar 
                imageUrl={user?.profile_image}
                userName={user?.firstname!}
                avatarColor={user?.avatarColor!}
            />
            <AcountInformation />
            <BtnEdith />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingHorizontal: 10,
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }
});