import { useEffect } from "react";
import { 
    Easing, 
    useAnimatedStyle, 
    useSharedValue, 
    withRepeat, 
    withTiming 
} from "react-native-reanimated";

export const useInfiniteHorizontalScroll = (width: number) => {
    const translateX = useSharedValue(-width);

    useEffect(() => {
        translateX.value = withRepeat(
            withTiming(width,{
                duration: 1000,
                easing: Easing.linear
            }),
            -1,
            false
        );
    },[]);

    const animationTranslateX = useAnimatedStyle(() => ({
        transform: [{translateX: translateX.value}]
    }));
    
    return {
        animationTranslateX
    }
}