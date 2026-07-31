import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { InputState } from '@/presentation/types/input';

interface Props {
    state: InputState;
}

export const InputErrorMessage = ({state}:Props) => {
    const { status, errorMessage } = state;
    return (
        <View style={styles.boxMessageError}>
            <Text style={styles.messageError}>
                {(status !== null && status !== 'valid') && errorMessage}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    boxMessageError: {
        position: 'absolute',
        bottom: -20,
        left: 20,
    },
    messageError: {
        color: globalColors.darkRed,
        fontSize: 11,
    }
});