import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { InputStatus } from '@/presentation/types/input';

interface Props {
    statusError?: InputStatus;
    errorFieldEmpty?: string;
    errorFieldInvalid?: string;
}

export const InputErrorMessage = ({statusError, errorFieldEmpty, errorFieldInvalid}:Props) => {
    return (
        <View style={styles.boxMessageError}>
            <Text style={styles.messageError}>
                {statusError === 'empty' ? errorFieldEmpty : errorFieldInvalid}
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