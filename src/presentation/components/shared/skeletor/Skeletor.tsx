import { useInfiniteHorizontalScroll } from '@/presentation/hooks';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import { styles } from './styles';

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

interface Props {
    width: number;
    height: number;
    borderRadius?: number;
    marginRight?: 15;
}

export const Skeletor = ({
    width, 
    height, 
    borderRadius,
    marginRight,
}:Props) => {
    const { animationTranslateX } = useInfiniteHorizontalScroll(width);
    
    return (
        <View style={{
            width: width,
            height: height, 
            borderRadius: borderRadius??0,
            marginRight:marginRight,
            ...styles.container
        }}>
            <AnimatedGradient
                colors={['#E5E7EB', '#F3F4F6', '#F3F4F6', '#E5E7EB']}
                locations={[0, 0.4, 0.6, 1]}
                start={{ x: 0, y: 0.3 }}
                end={{ x: 1, y: 0.7 }}
                style={[
                    styles.shimmer,
                    animationTranslateX
                ]}
            />
        </View>
    );
}
