import React from 'react';
import { View } from 'react-native';
import { BtnIcon } from '../../../button';

interface Props {
    show: boolean;
    onPress: () => void;
}

export const BtnRemoveImage = ({ show, onPress }:Props) => {
    if(!show) return null;
    return (
        <View
            style={{
                position:'absolute',
                width:'100%',
                alignItems:'flex-end',
                zIndex: 1,
            }}
        >
            <BtnIcon 
                iconName="Close"
                action={onPress}
            />
        </View>
    );
}
