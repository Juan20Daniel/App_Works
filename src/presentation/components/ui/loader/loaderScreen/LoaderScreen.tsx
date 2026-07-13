import { globalColors } from "@/presentation/globalStyles/global.styles";
import { useLoaderScreenStore } from "@/presentation/store";
import { Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Animated from "react-native-reanimated";
import { styles } from "./styles";
import { useInfiniteHorizontalScroll } from "@/presentation/hooks";

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

export const LoaderScreen = () => {
    const visible = useLoaderScreenStore(state => state.visible);

    if(!visible) return null;

    return <Content />
}
const Content = () => {
    const message = useLoaderScreenStore(state => state.message);
    const { animationTranslateX } = useInfiniteHorizontalScroll(200);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                {message??'Cargando...'}
            </Text>
            <View style={styles.loader}>
                <AnimatedGradient
                    colors={['#ffffff00', '#f2f2f2', globalColors.white]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.shimmer, animationTranslateX]}
                />
            </View>
        </View>
    );
}