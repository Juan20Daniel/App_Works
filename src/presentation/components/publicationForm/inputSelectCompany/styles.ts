import { StyleSheet } from "react-native";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";

export const styles = StyleSheet.create({
    containerBtn: {
        flex: 1,
        borderRadius: 20,
        minHeight: 65,
        borderWidth: 1,
        paddingRight: 50,
        paddingLeft: 23,
        justifyContent: 'center',
        borderColor: globalColors.softGray
    },
    placeholder: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15,
        color: globalColors.gray
    }
});