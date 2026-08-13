import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    heigth?: number;
    zIndex?: number;
    direction?: 'bottom' | 'top';
}

export const ScrollEdgeFade = ({
    heigth, 
    zIndex, 
    direction='bottom'
}:Props) => {
    return (
        <View 
            style={{
                position: 'absolute',
                width: '100%',
                height: heigth??50,
                top: direction === 'bottom' ? -50 : 'auto',
                bottom: direction === 'top' ? -50 : 'auto',
                zIndex: zIndex??1
            }}
        >
            <LinearGradient 
                colors={['#ffffff00', '#ffffff80', '#ffffff']}
                style={{
                    flex:1,
                    transform:[{
                        rotate:direction === 'top' ? '90deg' : '0deg'
                    }]
                }}
            />
        </View>
    )
}
