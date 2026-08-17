import { useWindowDimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    heigth?: number;
    zIndex?: number;
    direction?: 'bottom' | 'top';
}

export const ScrollEdgeFade = ({
    heigth=50, 
    zIndex, 
    direction='bottom'
}:Props) => {
    const width = useWindowDimensions().width;
    return (
        <View 
            style={{
                position: 'absolute',
                width: width,
                height: heigth??50,
                top: direction === 'bottom' ? -heigth : undefined,
                bottom: direction === 'top' ? -heigth : undefined,
                zIndex: zIndex??1,
                transform:[{
                    rotate:direction === 'top' ? '180deg' : '0deg'
                }]
            }}
        >
            <LinearGradient 
                colors={['#ffffff00', '#ffffff80', '#ffffff']}
                style={{
                    flex:1
                }}
            />
        </View>
    );
}