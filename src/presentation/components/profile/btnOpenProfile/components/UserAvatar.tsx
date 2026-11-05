import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles'
import { useSession } from '@/presentation/hooks';

export const UserAvatar = () => {
    const {user} = useSession();
    return (
        <View style={{...styles.container, backgroundColor: user?.avatarColor,}}>
            <Text style={styles.text}>J</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:30, 
        height:30, 
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color:globalColors.white,
        fontSize: 16
    }
})