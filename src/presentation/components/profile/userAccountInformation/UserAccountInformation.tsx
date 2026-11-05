import { StyleSheet, View } from 'react-native';
import { BtnEdith, AcountInformation } from './components';

import { UserAvatar } from '../../user';
import { useSession } from '@/presentation/hooks';

export const UserAccountInformation = () => {
    const {user} = useSession();
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