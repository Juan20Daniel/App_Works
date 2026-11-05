import { calcDimension } from "@/presentation/helpers/calcDimension";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems:'center',
        height: calcDimension({
            small:100,
            medium:120
        })
    }
});