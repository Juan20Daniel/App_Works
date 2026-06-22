import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";

interface Props {
    value:string;
    customStylesBox?: StyleProp<ViewStyle>;
    customStylesBtn?: StyleProp<ViewStyle>;
    backgroundColor?: string;
    fontColor?: string;
    action:() => void;
}

export const BtnBasic = ({
    value, 
    customStylesBox, 
    customStylesBtn,
    backgroundColor, 
    fontColor=globalColors.white,
    action
}:Props) => {
    return (
        <View style={[styles.container, customStylesBox]}>
            <Pressable 
                style={({pressed}) => [
                    styles.btn,
                    {
                        backgroundColor:backgroundColor??globalColors.azureBlue,
                        opacity: pressed ? 0.7 : 1,
                    },
                    customStylesBtn
                ]} 
                onPress={() => action()}
            >
                <Text style={{
                    ...styles.textValue, 
                    fontSize: calcDimension({small: 11, medium:15, large: 16}),
                    color:fontColor
                }}>
                        {value}
                    </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    textValue: {
        color: globalColors.white,
        fontFamily: globalStyles.fontMonserratMedium,
    }
});