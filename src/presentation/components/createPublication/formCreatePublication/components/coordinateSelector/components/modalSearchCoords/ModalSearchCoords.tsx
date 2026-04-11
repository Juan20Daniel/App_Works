import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { BtnClose } from '@/presentation/components/ui/btnClose/BtnClose';
import { InputSearch } from './components/InputSearch';

interface Props {
    visible:boolean;
    closeModal:() => void;
}

export const ModalSearchCoords = ({visible, closeModal}:Props) => {
    const [ valueToSearch, setValueToSearch ] = useState('');
    const {top} = useSafeAreaInsets();
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={{...styles.container, paddingTop: top+20}}>
                <InputSearch 
                    value={valueToSearch}
                    onChangeText={setValueToSearch}
                />
                <BtnClose 
                    backTo={() => closeModal()}
                    top={top+20}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: globalColors.white,
        paddingHorizontal: 10,
    }
});