import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.59)', 
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        zIndex: 10,
    },
    message: {
        fontFamily:globalStyles.fontMonserratMedium,
        fontSize: 20,
        color:globalColors.white
    },
    loader: {
        width: 300,
        height: 3,
        backgroundColor: 'transparent', 
        overflow: 'hidden',
        borderRadius: 2,
    },
    shimmer: {
        width: 200,
        height: '100%',
    },
})