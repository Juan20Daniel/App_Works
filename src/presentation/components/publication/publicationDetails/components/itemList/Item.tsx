import { StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';

interface Props {
    value: string;
}

export const Item = ({value}:Props) => (
    <View style={styles.container}>
        <View style={styles.point} />
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 5,
        marginBottom: 5
    },
    point: {
        width:5, 
        height: 5, 
        marginTop:6, 
        borderRadius: 5, 
        backgroundColor:globalColors.black
    },
    value: {
        marginTop: 8,
        fontSize:14,
        maxWidth: 500,
        fontFamily: globalStyles.fontMonserratMedium,
    }
});