import { StyleSheet, Text } from 'react-native';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

export const NoteForm = () => {
    return (
        <Text style={styles.text}>      
            Rellena los campos necesarios para crear una nueva publicación.  
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        width: calcDimension({
            small: 280, 
            medium: 300, 
            large: 300, 
            extraLarge: 300
        }),
        paddingTop: 10,
        marginBottom: calcDimension({
            small: 20, 
            medium: 40, 
            large: 40, 
            extraLarge: 60
        }),
        paddingHorizontal: 10,
        fontFamily: globalStyles.fontMonserratMedium,
    }
});