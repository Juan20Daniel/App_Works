import { Image, ImageSourcePropType, View } from 'react-native';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    ilustration: ImageSourcePropType;
}

export const Ilustration = ({ilustration}:Props) => {
    return (
        <View style={{width: '40%', alignItems:'flex-end'}}>
            <Image
                source={ilustration}
                style={{
                    width: calcDimension({
                        small: 120, 
                        medium: 130, 
                        large: 150, 
                        extraLarge: 180
                    }),
                    height: calcDimension({
                        small: 120,
                        medium: 130, 
                        large: 150, 
                        extraLarge: 180
                    }),
                }}
            />
        </View>
    );
}