import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { publicationStyles } from '@/presentation/components/publication/itemPublication/styles';


export const Requirment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.point} />
            <Text style={styles.value}>Licencia de conducir</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {    
        gap: 10,
        ...publicationStyles.rowCenter
    },
    point: {
        width: 5, 
        height: 5,
        borderRadius: 10,
        backgroundColor: globalColors.black
    },
    value: {
        fontSize: calcDimension({small: 10, medium: 12})
    }
});