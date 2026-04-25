import { Image, ImageSourcePropType, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";

interface Props {
    value:string;
    customStylesBox?: StyleProp<ViewStyle>;
    image: ImageSourcePropType;
    action:() => void;
}

export const SocialAuthButton = ({value, customStylesBox, image, action}:Props) => {
    return (
        <View style={[styles.container, customStylesBox]}>
            <Pressable 
                style={({pressed}) => [
                    styles.btn,
                    {opacity: pressed ? 0.7 : 1}
                ]} 
                onPress={() => action()}
            >
                <Image 
                    source={image}
                    style={{
                        width: calcDimension({small:20, medium:28}),
                        height: calcDimension({small:20, medium:28})
                    }}
                />
                <Text style={styles.textValue}>{value}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: calcDimension({small:45, medium:60}),
    },
    btn: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        alignItems: 'center',
        backgroundColor:globalColors.white,
        borderWidth: 1,
        borderColor: globalColors.softGray,
        borderRadius: 20,
    },
    textValue: {
        color: globalColors.gray,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: calcDimension({small:11, medium:16})
    }
});