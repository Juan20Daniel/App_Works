import { Pressable, StyleSheet } from 'react-native';
import { Icon } from '../icon/Icon';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    top?: number;
    backTo: () => void; 
}
export const BtnClose = ({top, backTo}:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {opacity: pressed ? 0.5 : 1, top:top??'auto'}
            ]} 
            onPressOut={() => backTo()}
        >
            <Icon name="Close" color={globalColors.white} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        right: 0,
        bottom: 15,
        backgroundColor: 'black',
        width: 40,
        height: calcDimension({small:40, medium:50}),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        zIndex:7,
    }
})