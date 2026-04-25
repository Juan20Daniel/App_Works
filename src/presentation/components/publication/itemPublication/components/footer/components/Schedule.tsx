import { StyleSheet, Text, View } from 'react-native';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { globalStyles } from '@/presentation/globalStyles/global.styles';

export const Schedule = () => {
    return (
        <View>
            <View style={styles.boxDays}>
                <Text style={styles.titleDays}>Horario:</Text>
                <Text style={styles.value}>Lunes a viernes</Text>
            </View>
            <Text style={styles.value}>4:00 a.m a 01:00 a.m</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxDays: {
        flexDirection: 'row',
        gap: 5
    },
    titleDays: {
        fontSize: calcDimension({small: 9, medium: 12}),
        fontFamily: globalStyles.fontMonserratSemiBold,
    },
    value: {
        fontSize: calcDimension({small: 9, medium: 12}),
        fontFamily: globalStyles.fontMonserratMedium,
    }
})