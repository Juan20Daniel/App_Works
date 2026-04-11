import { SetStateAction, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle, FlatList, Keyboard, Platform } from 'react-native';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { BtnOpenModalSelect } from './components/BtnOpenModalSelect';
import { OptionsModal } from './components/OptionsModal';
import { SelectOption } from '@/presentation/types/select-option';
import { Option } from './components/Option';
import { InputFilter } from './components/InputFilter';
import { orderBy } from '@/presentation/helpers/orderBy';
import { NotResults } from './components/NotResults';

interface Props {
    value: string;
    label?:string;
    customStyles?:StyleProp<ViewStyle>;
    options:SelectOption[];
    onChangeText: React.Dispatch<SetStateAction<string>>;
}

export const Select = ({
    value,
    label,
    customStyles,
    options,
    onChangeText
}:Props) => {
    const [ optiosList, setOptionsList ] = useState<SelectOption[]>(options);
    const [ valueToFilter, setValueToFilter ] = useState('');
    const [ mountModalOptions, setMountModalOptions ] = useState(false);
    const [ showModalOption, setShowModalOption ] = useState(false);
    const [ heightKeyboard, setHeightKeyboard ] = useState(60);
    const initialOptions = useRef<SelectOption[]>(options);

    useEffect(() => {
        if(valueToFilter !== '') {
            filterOptions();
        } else {
            setOptionsList(orderOptions());
        }
    },[valueToFilter]);
   
    useEffect(() => {
        const showKeyboard = Keyboard.addListener('keyboardDidShow', (event) => {
            setHeightKeyboard(60+event.endCoordinates.height);
        });
        const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
            setHeightKeyboard(60);
        });
        return () => {
            showKeyboard.remove();
            hideKeyboard.remove();
        }
    },[]);

    const filterOptions = () => {
        const value = valueToFilter.toLowerCase();
        const result = initialOptions.current!.filter(option => {
            return option.name.toLowerCase().startsWith(value);
        });
        setOptionsList(result);
    }
    
    const orderOptions = (opSelected?:SelectOption) => {
        const optionsCopy = [...initialOptions.current];
        let orderedOptions: SelectOption[] =  orderBy<SelectOption>(optionsCopy, {field:'name', type:'string'});
        if(opSelected) {
            orderedOptions = [...orderedOptions].map(op => {
                if(op.id === opSelected.id) {
                    return {...op, selected:true} 
                }
                return {...op, selected:false}
            });
        }
        const result = orderBy<SelectOption>(orderedOptions, {field:'selected', type:'boolean'});
        initialOptions.current = result;
        return result;
    }
    const selectOption = (opSelected:SelectOption) => {
        onChangeText(opSelected.name);
        closeModal();
        const orderedOptions = orderOptions(opSelected);
        setOptionsList(orderedOptions);
    }
    const openModal = () => {
        setMountModalOptions(true);
        if(mountModalOptions) return setShowModalOption(true);
        setTimeout(() => {
            setShowModalOption(true);
        }, 100);
    }
    const closeModal = () => {
        setValueToFilter('');
        setShowModalOption(false);
    }
    return (
        <View style={[styles.container, customStyles]}>
            {label && <Text style={styles.title}>{label}</Text>}
            <BtnOpenModalSelect 
                value={value}
                iconName="Search"
                label={label}
                action={() => openModal()}
            />
            {mountModalOptions &&
                <OptionsModal  
                    visible={showModalOption}
                    subTitle={label??'sub text'}
                    close={() => closeModal()}
                >
                    <InputFilter 
                        value={valueToFilter}
                        onChangeTaxt={setValueToFilter}
                    />
                    <FlatList 
                        data={optiosList}
                        keyExtractor={(item) => item.id.toString()}
                        keyboardShouldPersistTaps='handled'
                        extraData={optiosList}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={
                            <NotResults />       
                        }
                        ListFooterComponent={
                            <View style={{
                                width: '100%', 
                                height:Platform.OS === 'ios' ? heightKeyboard : 60 
                            }} />
                        }
                        renderItem={({item}) => (
                            <Option 
                                option={item}
                                onPress={selectOption}
                            />
                        )}
                    />
                </OptionsModal>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        alignItems:'center',
        paddingHorizontal:10,
    },
    title: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 18,
        width: '100%',
        maxWidth: 500,
        paddingLeft: 20,
        paddingBottom: 10,
    }
});