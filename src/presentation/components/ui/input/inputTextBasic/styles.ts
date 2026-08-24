import { StyleSheet } from "react-native";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";

export const styles = StyleSheet.create({
    boxInputText: {
        position: 'relative',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: globalColors.softGray
    },
    inputText: {
        flex: 1,
        borderRadius: 20,
        minHeight: 65,
        paddingRight: 50,
        paddingLeft: 23,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15,
        color: globalColors.gray,
    },
    boderColorFocus: {
        borderColor:globalColors.azureBlue
    },
    boderColorError: {
        borderColor:globalColors.darkRed
    }
});