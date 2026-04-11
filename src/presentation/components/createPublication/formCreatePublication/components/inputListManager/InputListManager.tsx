import { useRef, useState } from 'react';
import { View } from 'react-native';
import { ItemList } from '@/presentation/types/input-list-manager';
import { ListItems } from './components/ListItems';
import { InputTextForm } from '../InputTextForm';
import { isTablet } from '@/presentation/helpers/isTablet';
import { InputStatus } from '@/presentation/types/input';
import { expretions } from '@/shared/regex';

interface Props {
    name: string;
    title: string;
    placeholder: string;
    label: string;
    value: string;
    list: ItemList[];
    isFocus: boolean;
    isRequired?:boolean;
    errorFieldInvalid?: string;
    onFocus: (field:string) => void;
    onChange:(field:string, value:string) => void;
    clearInput:(field:string) => void;
    addToList: (field:string, item:ItemList) => void;
    removeItemFromList: (field:string, itemId:number) => void;
    updateListItem: (field:string, item:ItemList) => void;
}

export const InputListManager = ({
    name,
    title,
    placeholder,
    label,
    value,
    list,
    isFocus,
    isRequired=false,
    errorFieldInvalid,
    onFocus,
    onChange,
    clearInput,
    addToList,
    removeItemFromList,
    updateListItem
}:Props) => {
    const [ error, setError ] = useState<InputStatus>(null);
    const [ isAdding, setIsAdding ] = useState(true);
    const [ itemToEdith, setItemToEdit ] = useState<ItemList|null>(null)
    const counter = useRef(0);

    const validValue = () => {
        return expretions[name].test(value);
    }
    const addItem = () => {
        const resultValidation = validValue()
        setError(resultValidation ? 'valid' : 'invalid');
        if(!resultValidation) return;
        addToList(name, { id:counter.current, value:value });
        counter.current = counter.current+1;
    }
 
    const editItem = (item:ItemList) => {
        setItemToEdit(item);
        onChange(name, item.value);
        setIsAdding(false);
    }
    const saveEdition = () => {
        const resultValidation = validValue()
        setError(resultValidation ? 'valid' : 'invalid');
        if(!resultValidation) return;
        updateListItem(name, {id:itemToEdith!.id, value:value});
        setItemToEdit(null);
        setIsAdding(true);   
    }
    return (
        <View style={{width:isTablet ? '50%' : '100%'}}>
            {list.length > 0 &&
                <ListItems
                    title={title}
                    list={list}
                    removeItem={(id:number) => removeItemFromList(name, id)}
                    editItem={editItem}
                />
            }
            <InputTextForm
                label={label}
                placeholder={placeholder}
                value={value}
                keyboardType='default'
                isRequired={isRequired}
                name={name}
                inputType="input-action"                
                isFocus={isFocus}
                containerWidth="100%"
                textBtnInputAction={isAdding ? 'Agregar' : 'Modificar'}
                inputAction={isAdding ? addItem : saveEdition}
                disableBtnAction={value.length < 5}
                statusError={error}
                errorFieldInvalid={errorFieldInvalid}
                onChange={onChange}
                onFocus={onFocus}
                clearInput={() => {
                    clearInput(name);
                    setError(null);
                }}
            />
        </View>
    );
}