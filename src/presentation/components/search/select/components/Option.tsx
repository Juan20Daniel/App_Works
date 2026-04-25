import { Pressable, StyleSheet, Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { SelectOption } from '@/presentation/types/select-option';
import { Icon } from '@/presentation/components/ui';

interface Props {
    option:SelectOption;
    onPress: (option:SelectOption) => void;
}

export const Option = ({option, onPress}:Props) => {
    return (
        <Pressable 
            onPress={() => onPress(option)}
            style={({pressed}) => [
                styles.container, 
                {
                    backgroundColor: option.selected
                        ? globalColors.lightGray
                        : pressed 
                            ? globalColors.lightGray
                            : globalColors.white
                }
            ]}
        >
            <Icon name='Circle' size={6} color={globalColors.black} />
            <Text style={styles.label}>{option.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20, 
        flexDirection: 'row', 
        gap: 10, 
        height: 45, 
        alignItems: 'center',
    },
    label: {
        fontFamily: 'Montserrat-Medium',
        fontSize: calcDimension({small: 10, medium: 14, large: 17})
    }
});