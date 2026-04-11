import { StyleSheet, Text, View } from 'react-native';
import { Point } from '@/presentation/components/ui';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcResolutionDevice } from '@/presentation/helpers/calcResolutionDevice';
import { InputStatus } from '@/presentation/types/input';

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
                    <Point 
                        size={3}
                        color={(statusError !== null && statusError !== 'valid')
                            ? globalColors.darkRed
                            : globalColors.gray
                        }
                    />
                    <Text style={{
                        fontSize:calcResolutionDevice({low:8, medium:11}), 
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
        fontSize: calcResolutionDevice({low:12, medium:16}),
        fontFamily: globalStyles.fontMonserratMedium
    }
});