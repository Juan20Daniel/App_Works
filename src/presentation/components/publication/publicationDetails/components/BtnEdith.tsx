import { Pressable, StyleSheet, Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';

export const BtnEdith = () => {
    return (
        <Pressable style={styles.btnEdit}>
            <Text>Modificar</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnEdit: {
        width: 90,
        height: 35,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: globalColors.softGray,
        borderRadius: 10,
    }
});