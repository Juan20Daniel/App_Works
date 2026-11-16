import { StyleSheet, View } from "react-native";
import { Skeletor } from "@/presentation/components/shared";
import { globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";

export const LoaderSkeletor = () => {
    return (
        <View style={styles.container}>
            <ItemSkeletor />
            <ItemSkeletor />
            <ItemSkeletor />
        </View>
    );
}

const ItemSkeletor = () => (
    <View style={styles.content}>
        <View style={styles.boxInfo}>
            <Skeletor
                width={calcDimension({small:130, medium: 200, large:250})}
                height={calcDimension({small:15, medium: 20, large:25})}
            />
            <Skeletor
                width={calcDimension({small:130, medium: 230, large:280})}
                height={calcDimension({small:20, medium: 25, large:30})}
            />
        </View>
        <Skeletor
            width={calcDimension({small:100, medium: 120, large:150})}
            height={calcDimension({small:60, medium: 80, large:110})}
            borderRadius={calcDimension({small:5, medium: 20, large:15})}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyles.paddingHorizontal,
        gap: 30,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxInfo: {
        gap: 10
    }
});