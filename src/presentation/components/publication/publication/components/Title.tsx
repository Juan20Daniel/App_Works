import { StyleSheet, Text, View } from 'react-native'
import { calcResolutionDevice } from '@/presentation/helpers/calcResolutionDevice';
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
        fontSize: calcResolutionDevice({low: 16, medium: 18, high: 21}),
    }
})