import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        alignItems:'center',
        height: 65,
        backgroundColor: globalColors.white,
        paddingLeft: globalStyles.marginHorizontal,   
    },
    boxTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap:10,
    }
});