import { StyleProp, useWindowDimensions, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '@/presentation/globalStyles/global.styles';

interface Props {
    marginTop?: number;
    children: React.ReactNode;
    customStyles?: StyleProp<ViewStyle>;
}

export const Container = ({marginTop, children, customStyles}:Props) => {
    const height = useWindowDimensions().height;
    const width = useWindowDimensions().width;
    const { top } = useSafeAreaInsets();
    return (
        <View style={[
            {
                backgroundColor: globalColors.white,
                width:width, 
                height:height, 
                paddingTop: marginTop??top,
            },
            customStyles
        ]}>
            {children}
        </View>
    );
}