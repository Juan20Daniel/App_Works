import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

interface Props {
    username:string;
    email:string;
}

export const AcountInformation = ({username, email}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={{...styles.username, fontSize:isTablet ? 20 : 15}} numberOfLines={2}>
                {username}
            </Text>
            <Text style={{...styles.email, fontSize:isTablet ? 18 : 14}} numberOfLines={1}>
                {email}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column', 
        flex:1
    },
    username: {
        color: globalColors.black,
        maxWidth:350
    },
    email: {
        color: globalColors.gray,
        maxWidth:350
    }
});