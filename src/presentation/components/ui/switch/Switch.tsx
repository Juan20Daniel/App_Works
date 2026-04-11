import { StyleSheet, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';

interface Props {
    state:boolean;
    size?: 'big'|'small'
}

export const Switch = ({state, size='big'}:Props) => {
    return (
        <View 
            style={{
                padding: 4,
                borderRadius: 50,
                ...styles[size === 'big' ? 'containerBig' : 'containerSmall'], 
                backgroundColor:state ? globalColors.limeGreen : globalColors.softGray, 
                alignItems:state? 'flex-end' : 'flex-start'
            }}
        >
            <View style={{
                borderRadius:15,
                backgroundColor: globalColors.white,
                ...styles[size === 'big' ? 'ballBig' : 'ballSmall']
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerBig: {
        width:50, 
        height:25,
    },
    ballBig: {
        width: 17,
        height: 17,
    },
    containerSmall: {
        width:40, 
        height:18,
    },
    ballSmall: {
        width: 10,
        height: 10,
    }
});