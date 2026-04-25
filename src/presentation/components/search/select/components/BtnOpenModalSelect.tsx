import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { Icon } from '@/presentation/components/ui';
import { IconType } from '@/presentation/types/icons';

interface Props {
    value: string;
    iconName?: IconType;
    label?: string;
    action: () => void;
}

export const BtnOpenModalSelect = ({value, iconName="Question", label="label", action}:Props) => {
    return (
        <Pressable 
            onPress={() => action()} 
            style={({pressed}) => [
                styles.btn,
                {opacity: pressed ? 0.5 : 1}
            ]}
        >
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                <Icon name={iconName} size={30} color={globalColors.softGray} />
                {(value === '')
                    ? <Text style={styles.label}>{label}</Text>
                    : <Text style={styles.value}>{value}</Text>
                }
            </View>
            <Icon name="KeyboardArrowDown" size={40} color={globalColors.softGray} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        maxWidth: 500,
        height: 65,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: globalColors.white,
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
    },
    label: {
        fontSize: calcDimension({small: 10, medium: 14, large: 18}),
        color:globalColors.softGray,
        fontFamily: 'Montserrat-Medium'
    },
    value: {
        fontSize: calcDimension({small: 10, medium: 14, large: 18}),
        color:globalColors.black,
        fontFamily: 'Montserrat-Medium'
    }
});