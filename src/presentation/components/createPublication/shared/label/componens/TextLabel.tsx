import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { InputState } from '@/presentation/types';
import { StyleSheet, Text } from 'react-native'

interface Props {
    state: InputState;
    text: string;
}

export const TextLabel = ({state, text}:Props) => {
    const { isFocus, status } = state;
    return (
        <Text style={{
            ...styles.label, 
            color:isFocus
                ?   globalColors.azureBlue 
                :   (status !== null && status !== 'valid') 
                    ?   globalColors.darkRed
                    :   globalColors.black
        }}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    label: {
        paddingLeft: 20,
        paddingHorizontal: 3,
        fontSize: calcDimension({small:12, medium:16}),
        fontFamily: globalStyles.fontMonserratMedium
    }
});