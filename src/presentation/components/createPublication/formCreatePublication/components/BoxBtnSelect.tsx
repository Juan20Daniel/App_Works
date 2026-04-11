import { DimensionValue, StyleSheet, Text, View } from 'react-native';
import { isTablet } from '@/presentation/helpers/isTablet';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { Label } from './Label';
import { InputStatus } from '@/presentation/types/input';

interface Props {
    label:string;
    children: React.ReactNode;
    showTextRequire?:boolean;
    isRequired?:boolean;
    width?:DimensionValue;
    statusError?: InputStatus;
    errorFieldEmpty?: string;
    errorFieldInvalid?: string;
}

export const BoxBtnSelect = ({
    label, 
    showTextRequire=false, 
    isRequired=true, 
    children, 
    width,
    statusError=null,
    errorFieldEmpty,
    errorFieldInvalid
}:Props) => {
    return (
        <View 
            style={{
                width: width
                    ?   width
                    :   isTablet ? '50%' : '100%', 
                position:'relative',
                paddingHorizontal:10
            }}
        >
            <View style={{flex:1}}>
                <Label
                    showTextRequire={showTextRequire}
                    isRequired={isRequired}
                    text={label}
                    isFocus={false}
                    statusError={statusError}
                />
                {children}
            </View>
            {(statusError !== null && statusError !== 'valid') &&
                <View style={styles.boxMessageError}>
                    <Text style={styles.messageError}>
                        {statusError === 'empty' ? errorFieldEmpty : errorFieldInvalid}
                    </Text>
                </View>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
    },
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