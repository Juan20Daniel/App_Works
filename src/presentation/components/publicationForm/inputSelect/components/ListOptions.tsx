import { ScrollView, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import type { InputSelectOption } from '@/presentation/types/input-select-option';
import { Option } from './Option';

interface Props {
    opSelectedDefault:string;
    listOptions:InputSelectOption[];
    selectOption:(optionName:string) => void;
}

export const ListOptions = ({opSelectedDefault, listOptions, selectOption}:Props) => {
    
    return (
        <TouchableNativeFeedback accessible={false}>
            <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps='handled'
                >
                    {listOptions.map(option => (
                        <Option
                            key={option.id} 
                            opSelectedDefault={opSelectedDefault}
                            value={option.name}
                            selectOption={selectOption}
                        />
                    ))}
                </ScrollView>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '100%',
        marginTop: 10,
        backgroundColor: globalColors.white,
        borderWidth: 1,
        borderColor: globalColors.softGray,
        borderRadius: 20,
        zIndex: 1,
        width: '100%',
        maxHeight: 300,
    }
});