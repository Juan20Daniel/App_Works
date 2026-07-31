import { StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { InputState } from '@/presentation/types/input';
import { Icon } from '@/presentation/components/ui';

interface Props {
    text: string;
    state: InputState;
    showTextRequire?:boolean;
}
export const Label = ({
    text,
    state,
    showTextRequire=false, 
}:Props) => {
    const { isFocus, status, isRequired } = state;
    return (
        <View style={styles.container}>
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
            {showTextRequire &&
                <>
                    <Icon name="Circle" size={5} />
                    <Text style={{
                        fontSize:calcDimension({small:8, medium:11}), 
                        color:(status !== null && status !== 'valid')
                            ? globalColors.darkRed
                            : globalColors.gray
                    }}>
                        {isRequired ? 'Obligatorio' : 'Opcional'}
                    </Text>
                </>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        gap: 5
    },
    label: {
        paddingLeft: 20,
        paddingHorizontal: 3,
        fontSize: calcDimension({small:12, medium:16}),
        fontFamily: globalStyles.fontMonserratMedium
    }
});