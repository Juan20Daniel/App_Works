import { StyleSheet, View } from 'react-native';
import { BtnEdith } from './components/BtnEdith';
import { AcountInformation } from './components/AcountInformation';
import { UserAvatar } from '../userAvatar/UserAvatar';

interface Props {
    username: string;
    email: string;
}

export const UserAccountInformation = ({username, email}:Props) => (
    <View style={styles.container}>
        <UserAvatar username={username} />
        <AcountInformation 
            username={username}
            email={email}
        />
        <BtnEdith />
    </View>
);

const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingHorizontal: 10,
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }
});