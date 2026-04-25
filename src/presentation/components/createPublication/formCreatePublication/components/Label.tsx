import { StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { InputStatus } from '@/presentation/types/input';
import { Icon } from '@/presentation/components/ui';

interface Props {
    text: string;
    isFocus: boolean;
    showTextRequire?:boolean;
    isRequired?:boolean;
    statusError?:InputStatus;
}
export const Label = ({
    text, 
    isFocus, 
    showTextRequire=false, 
    isRequired=true,
    statusError
}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={{
                ...styles.label, 
                color:isFocus
                    ?   globalColors.azureBlue 
                    :   (statusError !== null && statusError !== 'valid') 
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
                        color:(statusError !== null && statusError !== 'valid')
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