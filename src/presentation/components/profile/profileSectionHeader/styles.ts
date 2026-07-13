import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        gap: 10,
    },
    iconContainer: {
        backgroundColor: '#F4F4F4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: calcDimension({small: 8, medium:10, large: 12}),
        width: calcDimension({small: 30, medium:35, large: 40}),
        height: calcDimension({small: 30, medium:35, large: 40}),
    },
    titleContainer: {
        justifyContent: 'space-between'
    },
    title: {
        fontSize: calcDimension({small: 12, medium:14, large: 16}),
        fontFamily: globalStyles.fontMonserratSemiBold,
        color: globalColors.black
    },
    subTitle: {
        fontFamily: globalStyles.fontMonserratMedium,
        color: globalColors.gray,
        fontSize: calcDimension({small: 9, medium:11, large: 14}),
        width: calcDimension({small: 250, medium: 300, large: 350, extraLarge: 400})
    }
});