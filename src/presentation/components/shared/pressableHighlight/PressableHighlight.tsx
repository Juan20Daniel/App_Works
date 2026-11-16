import { useState } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { globalColors} from '@/presentation/globalStyles/global.styles';
import Animated from 'react-native-reanimated';

interface Props {
    onPress: () => void;
    styles?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const transition = { 
    transitionProperty: 'backgroundColor', 
    transitionDuration: '150ms' 
} as const;

export const PressableHighlight = ({children, styles, onPress}:Props) => {
    const [ isPressed, setIsPressed ] = useState(false);
    return (
        <AnimatedPressable
            onPress={onPress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            style={{
                ...styles,
                ...transition,
                backgroundColor:isPressed
                    ? globalColors.softGray
                    : globalColors.white
            }}
        >
            {children}
        </AnimatedPressable>
    );
}