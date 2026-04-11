import { Pressable, StyleSheet } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles'; 
import { Icon } from '../../ui';

interface Props {
    name:string;
    top?: number;
    right?: number;
    action:(name:string) => void;
}

export const BtnClearInput = ({name, top, right, action}:Props) => {
    return (
        <Pressable
            style={({pressed}) => [
                styles.btnClear,
                {
                    opacity: pressed ? 0.3 : 1,
                    top: top, 
                    right:right??20
                }
            ]} 
            onPress={() =>  action(name)}
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