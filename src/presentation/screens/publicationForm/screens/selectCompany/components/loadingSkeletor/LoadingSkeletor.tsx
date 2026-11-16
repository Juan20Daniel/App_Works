import { StyleSheet, View } from "react-native";
import { globalStyles } from "@/presentation/globalStyles/global.styles";

import { ItemSkeletor } from "./components";

export const LoaderSkeletor = () => {
    return (
        <View style={styles.container}>
            <ItemSkeletor />
            <ItemSkeletor />
            <ItemSkeletor />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyles.paddingHorizontal,
        gap: 30,
    }
});