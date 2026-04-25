import { StyleSheet, Text, View } from 'react-native'
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { publicationStyles } from '../styles';
import { globalStyles } from '@/presentation/globalStyles/global.styles';

interface Props {
    value: string;
}

export const Title = ({value}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 5,
        ...publicationStyles.paddingHorizontal
    },
    value: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: calcDimension({small: 16, medium: 18, large: 21}),
    }
})