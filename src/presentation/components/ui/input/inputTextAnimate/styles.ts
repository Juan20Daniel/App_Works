import { StyleSheet } from "react-native";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: calcDimension({small:50, medium: 65}),
        borderRadius: 20,
        justifyContent: 'center',
        borderWidth: 1,
        marginBottom: 0
    },
    boxLabel: {
        position: 'relative',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    label: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium
    },
    textInput: {
        position: 'absolute',
        width:'100%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: undefined,
        paddingLeft: 23,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15,
        zIndex:1
    },
    btnRight: {
        position: 'absolute',
        padding: 2,
        zIndex: 1,
    },
    btnShowPassword: {
        backgroundColor: globalColors.white,
    }
});