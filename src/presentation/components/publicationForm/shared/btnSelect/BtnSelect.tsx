import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { Icon } from '@/presentation/components/ui/icon/Icon';
import { InputState } from '@/presentation/types/input';

interface Props {
    state: InputState;
    placeholder: string;
    showIconRight?: boolean;
    iconName?: string;
    pressable?: boolean;
    onPress:(field:string) => void;
}

export const BtnSelect = ({
    state,
    placeholder,
    showIconRight=false,
    pressable=false,
    onPress
}:Props) => {
    const { name, value, isFocus, status } = state;
    return (
        <Pressable 
            style={({pressed}) => [
                {
                    ...styles.container,
                    borderColor:isFocus 
                        ? globalColors.azureBlue 
                        : (status !== null && status !== 'valid') 
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
                            color: (status !== null && status !== 'valid') 
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