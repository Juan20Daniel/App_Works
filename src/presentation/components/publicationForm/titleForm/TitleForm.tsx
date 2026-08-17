import { StyleSheet, Text } from 'react-native';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

export const TitleForm = () => {
    return (
        <Text style={styles.title}>
            Nueva publicación
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
        paddingHorizontal: 10,
        marginTop: 15,
        fontSize: calcDimension({
            small: 15, 
            medium: 20, 
            large: 20, 
            extraLarge: 30
        })
    },
});