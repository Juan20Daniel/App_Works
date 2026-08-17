import { calcDimension } from "@/presentation/helpers/calcDimension";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btn: {
        backgroundColor:'black',
        height: calcDimension({small: 40, medium:50, large: 60}),
        marginTop: 15,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: calcDimension({small: 15, medium:20}),
        boxShadow: '0px 4px 18px 4px rgba(0, 0, 0, 0.25)'
    }
})