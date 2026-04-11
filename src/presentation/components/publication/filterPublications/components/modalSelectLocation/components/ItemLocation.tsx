import { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View, Pressable } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { Icon } from '@/presentation/components/ui';

interface Props {
    id: number;
    state: string;
    city: string;
}

export const ItemLocation = ({state, city}:Props) => {
    const [ isSelected, setIsSelected ] = useState(false);
    const width = useWindowDimensions().width;
    const isTable = width > 500; 
    return (
        <View style={{
            ...styles.container, 
            height: isTable ? 60 : 45, 
            backgroundColor: isSelected ? globalColors.lightGray : ''
        }}>
            <View style={styles.boxLoaction}>
                <Icon name="LocationOn" />
                <Text style={{fontSize: isTable ? 20 : 15}}>
                    <Text style={{color:globalColors.darkGray}}>{state} - </Text> 
                    <Text style={{fontWeight:'bold'}}>{city}</Text>
                </Text>
            </View>
            <Pressable 
                onPress={() => setIsSelected(!isSelected)}
                style={({pressed}) => [
                    styles.boxBtnSelectUbication,
                    {
                        opacity:pressed ? 0.5 : 1,
                        backgroundColor: isSelected 
                            ? globalColors.darkGray 
                            : globalColors.lightGray,
                    }
                ]}
            >
                <Text style={{color:isSelected ? 'white' : 'black', fontSize:isTable ? 15 : 10}}>
                    { isSelected ? 'Deseleccionar' : 'Seleccionar'}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: globalStyles.marginHorizontal,
        marginBottom: 5
    },
    boxLoaction: {
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 15
    },
    boxBtnSelectUbication: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    }
});