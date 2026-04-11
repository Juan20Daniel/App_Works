import { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { BtnIcon, Switch } from '@/presentation/components/ui';

export const ActiveAlert = () => {
    const [ switchState, setSwitchState ] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Pressable onPress={() => setSwitchState(!switchState)}>
                    <Switch state={switchState} size='small' />
                </Pressable>
                <Text style={styles.text}>Notificarme de este tipo de empleos</Text>
            </View>
            <BtnIcon iconName="Close" iconColor='white' action={() => {}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom:-40,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: globalStyles.marginHorizontal,
        zIndex: 1,
    },
    content: {
        flexDirection: 'row',
        gap: 10  
    },
    text: {
        color: globalColors.white,
        fontSize: 14
    }
});