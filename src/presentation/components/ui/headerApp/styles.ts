import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        alignItems:'center',
        gap:10,
        backgroundColor: globalColors.white,
        paddingLeft: globalStyles.marginHorizontal,
        paddingBottom: 10,
    },
    subText: {
        fontSize: calcDimension({small:12, medium: 16, large: 20}), 
        color:globalColors.darkGray,
        fontFamily: globalStyles.fontMonserratSemiBold
    }
});