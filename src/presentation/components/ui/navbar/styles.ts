import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyles.paddingHorizontal,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: globalColors.lightGray,
        backgroundColor: globalColors.white,
    },
    boxButtons: {
        flexDirection: 'row',
        gap: calcDimension({small: 20, medium:20, large:30})
    }
});