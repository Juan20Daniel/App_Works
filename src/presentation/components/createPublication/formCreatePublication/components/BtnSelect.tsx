import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';

import { InputStatus } from '@/presentation/types/input';
import { Icon } from '@/presentation/components/ui/icon/Icon';

interface Props {
    name:string;
    placeholder: string;
    isFocus:boolean;
    value: string;
    showIconRight?: boolean;
    iconName?: string;
    pressable?: boolean;
    statusError?: InputStatus;
    onPress:(field:string) => void;
}

export const BtnSelect = ({
    name, 
    placeholder, 
    isFocus, 
    value, 
    showIconRight=false, 
    iconName='help-outline', 
    pressable=false,
    statusError,
    onPress
}:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                {
                    ...styles.container,
                    borderColor:isFocus 
                        ? globalColors.azureBlue 
                        : (statusError !== null && statusError !== 'valid') 
                            ?   globalColors.darkRed
                            :   globalColors.softGray,
                },
                pressable 
                    ?   { backgroundColor:pressed ? globalColors.softGray : globalColors.white }
                    :   { backgroundColor: globalColors.white }
            ]}
            onPress={() => onPress(name)}
        >
            <Text style={styles.textBtn}>
                {value === '' 
                    ?   <Text style={{
                            color: (statusError !== null && statusError !== 'valid') 
                                ?   globalColors.darkRed
                                :   globalColors.gray,
                        }}>
                            {placeholder}
                        </Text> 
                    :   value
                }
            </Text>
            {showIconRight &&
                <View style={styles.boxIcon}>
                    <Icon name="Question" />
                </View>
            }
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 65,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 23,
        justifyContent: 'center',
    },
    textBtn: {
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
    },
    boxIcon: {
        position: 'absolute',
        right: 23,
    }
});