import { calcDimension } from "@/presentation/helpers/calcDimension";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    outSpace: {
        marginTop: 15,
        paddingHorizontal: 10,
    },
    container: {
        width:'100%', 
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:calcDimension({small: 20, medium: 30, large: 40}),
    },
    boxInfo: {
        width: '60%', 
        gap: calcDimension({small: 5, medium: 10, large:10, extraLarge:15}),
        alignItems: 'flex-start',
        paddingLeft: calcDimension({small: 5, medium: 10, large: 15, extraLarge: 40}),
    }
});