import { Pressable, StyleSheet } from 'react-native';
import { Icon } from '../icon/Icon';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    show?: boolean;
    backTo: () => void; 
}
export const BtnClose = ({show=true, backTo}:Props) => {
    if(!show) return null;
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {opacity: pressed ? 0.5 : 1}
            ]} 
            onPressOut={() => backTo()}
        >
            <Icon name="Close" color={globalColors.white} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: 40,
        height: calcDimension({small:40, medium:50}),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }
});