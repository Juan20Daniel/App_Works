import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { useUserStore } from '@/presentation/store';
import { calcDimension } from '@/presentation/helpers/calcDimension';

export const AcountInformation = () => {
    const user = useUserStore(state => state.user);
    
    return (
        <View style={styles.container}>
            <Text 
                style={styles.username} 
                numberOfLines={2}
            >
                {user?.firstname} {user?.lastname.split(' ')[0]}
            </Text>
            <Text 
                style={styles.email} 
                numberOfLines={1}
            >
               {user?.email}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column', 
        gap: 5,
        flex: 1
    },
    username: {
        fontSize: calcDimension({small: 15, medium: 20, large: 25}),
        color: globalColors.black,
        maxWidth:350
    },
    email: {
        color: globalColors.gray,
        fontSize:calcDimension({small: 10, medium: 12, large: 15}),
        maxWidth:350
    }
});