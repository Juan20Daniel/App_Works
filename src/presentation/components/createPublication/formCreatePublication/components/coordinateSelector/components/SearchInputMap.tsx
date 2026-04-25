import { useState, useEffect, useRef } from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';

import { isTablet } from '@/presentation/helpers/isTablet';
import { formStyles } from '@/presentation/components/createPublication/formCreatePublication/styles';
import { BtnClearInput } from '@/presentation/components/shared';
import { Icon } from '@/presentation/components/ui/icon/Icon';


export const SearchInputMap = () => {
    const [ valueToSearch, setValueToSearch ] = useState('');
    const inputRef = useRef<TextInput>(null);
    useEffect(() => {
        const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
            if(!inputRef.current) return;
            inputRef.current.blur();
        });

        return () => {
            hideKeyboard.remove();
        }
    },[]);
    return (
        <View style={{paddingHorizontal: isTablet ? 30 : 10}}>
            <View style={styles.boxInput}>
                <View style={{...styles.boxIconSearch, width:isTablet ? 80 : 50,}}>
                    <Icon name="Question" size={30} color={globalColors.gray} />
                </View>
                <TextInput
                    ref={inputRef}
                    placeholder='Ingresa una dirección'
                    style={{...styles.inputText, paddingLeft: isTablet ? 80 : 50,}}
                    value={valueToSearch}
                    onChangeText={setValueToSearch}
                />
                {(valueToSearch !== '') &&
                    <BtnClearInput
                        name='firstname'
                        right={isTablet ? 110 : 85}
                        action={() => setValueToSearch('')}
                    />
                }
                <View style={{...styles.boxBtnSearch, width: isTablet ? 100 : 80,}}>
                    <Pressable 
                        style={({pressed}) => [
                            styles.btnSearch, 
                            {
                                width: isTablet ? 85 : 65,
                                opacity: (valueToSearch.length < 3) 
                                    ?   1
                                    :   pressed ? 0.5 : 1,
                                backgroundColor: (valueToSearch.length < 3) 
                                    ?   globalColors.softGray
                                    :   globalColors.azureBlue,
                            }
                        ]}>
                        <Text style={styles.textBtnSearch}>Buscar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boxInput: {
        position:'relative',
        justifyContent:'center'
    },
    boxIconSearch: {
        position:'absolute',
        height: 60,
        ...formStyles.center
    },
    inputText: {
        borderWidth: 1,
        borderColor: globalColors.softGray,
        height: 60,
        paddingRight: 120,
        borderRadius: 20,
        fontSize: 16,
        zIndex:1,
    },
    boxBtnSearch: {
        position:'absolute',
        right: 0,
        height: 60,
        zIndex: 2,
        ...formStyles.center,
    },
    btnSearch: {
        height: 45, 
        borderRadius: 13, 
        ...formStyles.center,
    },
    textBtnSearch: {
        color: globalColors.white
    }
});