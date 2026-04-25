import { SetStateAction } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { Icon } from '@/presentation/components/ui';
import { BtnClearInput } from '@/presentation/components/shared';

interface Props {
    value:string;
    onChangeTaxt: React.Dispatch<SetStateAction<string>>;
}

export const InputFilter = ({value, onChangeTaxt}:Props) => {
    return (
        <View style={styles.container}>
            <View style={{...styles.boxInput, borderColor: false ? globalColors.azureBlue : globalColors.white }}>
                <Icon name='Search' color={globalColors.softGray} />
                <TextInput 
                    placeholder='Filtrar'
                    style={styles.input}
                    placeholderTextColor={globalColors.softGray}
                    value={value}
                    onChangeText={onChangeTaxt}
                />
                {(value !== '') &&
                    <BtnClearInput
                        name='firstname'
                        action={() => onChangeTaxt('')}
                    />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    boxInput: {
        position: 'relative',
        height: calcDimension({small: 40, medium: 55}),
        flexDirection: 'row',
        backgroundColor: globalColors.white,
        marginBottom: 20,
        borderRadius: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderWidth:1,
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)'
    },
    input: {
        position: 'absolute',
        width:'100%',
        height: '100%',
        paddingLeft: calcDimension({small: 45, medium:60}),
        paddingRight: 20,
        fontFamily: 'Montserrat-Medium',
        fontSize: calcDimension({small:14, medium: 16})
    }
})