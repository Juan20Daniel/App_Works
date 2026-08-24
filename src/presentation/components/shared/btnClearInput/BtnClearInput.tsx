import { Pressable, StyleSheet } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles'; 
import { Icon } from '../../ui';

interface Props {
    top?: number;
    right?: number;
    onPress:() => void;
}

export const BtnClearInput = ({top, right, onPress}:Props) => {
    return (
        <Pressable
            style={({pressed}) => [
                styles.btnClear,
                {
                    opacity: pressed ? 0.3 : 1,
                    // top: top, 
                    // right:right??20
                }
            ]} 
            onPress={onPress}
        >
            <Icon name='Close' color={globalColors.gray}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnClear: {
        position: 'absolute',
        padding: 2,
        zIndex: 2,
        backgroundColor: globalColors.lightGray,
        borderRadius: 15,
        right: 20,
    },
})