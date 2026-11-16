import { calcDimension } from "@/presentation/helpers/calcDimension";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerLogo: {
        position: 'relative',
        width: calcDimension({small:100, medium: 120, large:150}),
        height: calcDimension({small:60, medium: 80, large:110}),
    },
    logo: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: calcDimension({small:5, medium: 20, large:15}),
        zIndex: 1,
    },
    loader: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex:  2
    },
    error: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex:  3
    }
});